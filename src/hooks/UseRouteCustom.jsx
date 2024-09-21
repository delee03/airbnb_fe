import React from "react";
import UserLayout from "../template/UserLayout/UserLayout";
import { useRoutes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import ListRoomLocation from "../components/ListRoomByLocation/ListRoomLocation";
import RoomDetail from "../components/RoomDetail/RoomDetail";

const UseRouteCustom = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <UserLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <div className="homepage">
                            <HomePage />
                        </div>
                    ),
                },
                {
                    path: "/list-room-by-location",
                    element: <ListRoomLocation />,
                },
                {
                    path: "/room-detail/:id",
                    element: <RoomDetail />,
                },
            ],
        },
    ]);
    // { path: "team", element: <AboutPage /> },

    return routes;
};

export default UseRouteCustom;
