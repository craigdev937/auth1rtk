import express from "express";
import bcrypt from "bcryptjs";
import { dBase } from "../db/Data";
import { signToken } from "../middleware/Auth";
import { RSchema, LSchema } from "../validation/Schema";
import { IReg, AU } from "../models/Interfaces";

class UserClass {
    Register: express.Handler = async (req, res, next) => {
        try {
            const R = RSchema.parse(req.body);
            const eQRY = "SELECT * FROM users WHERE email=$1";
            const userExists = await dBase.query(eQRY, [R.email]);
            if (userExists.rows.length > 0) {
                return res
                    .status(400)
                    .json({msg: "User already exists"})
            };
            const bPASS = await bcrypt.hash(R.password, 10);
            const QRY = `INSERT INTO users 
                (name, email, password)
                VALUES ($1, $2, $3) RETURNING *`;
            const values = [R.name, R.email, bPASS];
            const newUser = await dBase.query<IReg>(QRY, values);
            const newToken = signToken(newUser.rows[0].id);
            res.cookie("token", newToken, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 1000 * 60 * 60 * 24 * 30  // 30-Days.
            });
            return res
                .status(201)
                .json({
                    success: true,
                    message: "User has Registered!",
                    data: {
                        user: newUser.rows[0],
                        token: newToken
                    }
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error Registering the User!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            const QRY = "SELECT * FROM users ORDER BY id ASC";
            const users = await dBase.query<IReg[]>(QRY);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "All Registered Users!",
                    count: users.rows.length,
                    data: users.rows
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error fetching all the Users.",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    Login: express.Handler = async (req, res, next) => {
        try {
            const L = LSchema.parse(req.body);
            const QRY = "SELECT * FROM users WHERE email = $1";
            const user = await dBase.query<IReg>(QRY, [L.email]);
            if (user.rows.length === 0) {
                return res
                    .status(400)
                    .json({msg: "Invalid Credentials"})
            };

            const uData = user.rows[0];
            const isMatch = await bcrypt.compare(
                L.password, uData.password);
            if (!isMatch) {
                return res
                    .status(400)
                    .json({msg: "Invalid Credentials"})
            };
            
            const logToken = signToken(uData.id);
            res.cookie("token", logToken, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 1000 * 60 * 60 * 24 * 30  // 30-Days.
            });

            res.json({
                success: true,
                message: "User logged in",
                data: {
                    id: uData.id,
                    name: uData.name,
                    email: uData.email
                }
            });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error logging in the User.",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    Me: express.Handler = async (req: AU, res, next) => {
        try {
            res.json({
                success: true,
                message: "User Info!",
                data: req.user
            });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error finding User Info",
                    error: error instanceof Error ? 
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    Logout: express.Handler = async (req, res, next) => {
        try {
            res.cookie("token", "", {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 1
            });
            res.status(201)
            .json({
                success: true,
                message: "The User has Logged Out!"
            });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error logging out",
                    error: error instanceof Error ? 
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };
};

export const USER: UserClass = new UserClass();




