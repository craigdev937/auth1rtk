import express from "express";

export interface JwtPayload {
    id: number,
    email: string
};

export interface AU extends express.Request {
    user?: JwtPayload
};

export interface IReg {
    id: number,
    name: string,
    email: string,
    password: string,
    created_at?: string,
    updated_at?: string
};

export interface ILog {
    id: number,
    email: string,
    password: string
};


