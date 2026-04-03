import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Login } from "../pages/login/Login";
import { Dash } from "../pages/dash/Dash";
import { Users } from "../pages/user/Users";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/dash",
                element: <Dash />
            },
            {
                path: "/users",
                element: <Users />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};



