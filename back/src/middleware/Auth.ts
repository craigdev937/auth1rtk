import express from "express";
import jwt from "jsonwebtoken";
import { dBase } from "../db/Data.ts";
import type { AU, JwtPayload, IReg } from "../models/Interfaces.ts";
const JWT = process.env.JWT_SECRET ?? "";

export const PRO: express.Handler = async (req: AU, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res
            .status(401)
            .json({msg: "Not Auth, No Token!"})
    };
    try {
        const decoded = jwt.verify(token, JWT) as JwtPayload;
        const QRY = "SELECT id, name, email FROM users WHERE id = $1";
        const user = await dBase.query<IReg>(QRY, [decoded.id]);
        req.user = user.rows[0];
        next();
    } catch (error) {
        throw new Error("Invalid!")
    }
};

export const signToken = (id: number) => {
    return jwt.sign(
        { id }, JWT, { expiresIn: "30d" }
    );
};


