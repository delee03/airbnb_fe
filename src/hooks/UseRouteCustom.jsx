import React from "react";
import UserLayout from "../template/UserLayout/UserLayout";
import { useRoutes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";

const UseRouteCustom = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <UserLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
            ],
        },
        // { path: "team", element: <AboutPage /> },
    ]);
    return routes;
};

export default UseRouteCustom;
