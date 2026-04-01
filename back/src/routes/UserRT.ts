import express from "express";
import { USER } from "../controllers/UserCTR";
import { PRO } from "../middleware/Auth";

// ROUTES =>  localhost:9000/api/users
export const userRt: express.Router = express.Router();
    userRt.post("/users/register", USER.Register);
    userRt.get("/users", USER.FetchAll);
    userRt.post("/users/login", USER.Login);
    userRt.get("/users/me", PRO, USER.Me);
    userRt.post("/users/logout", USER.Logout);

    

