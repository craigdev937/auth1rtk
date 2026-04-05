import express from "express";
import { USER } from "../controllers/UserCTR";
import { PRO } from "../middleware/Auth";

// ROUTES =>  localhost:9000/api/users
export const userRt: express.Router = express.Router();
    userRt.post("/users/register", USER.Register);
    userRt.post("/users/login", USER.Login);
    userRt.post("/users/logout", USER.Logout);
    userRt.get("/users/me", PRO, USER.Me);
    userRt.get("/users", USER.FetchAll);
    userRt.get("/users/:id", USER.GetOne);
    userRt.put("/users/:id", USER.Update);
    userRt.delete("/users/:id", USER.Delete);
    


    