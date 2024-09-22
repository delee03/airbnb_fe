import React from "react";
import UserLayout from "../template/UserLayout/UserLayout";
import { useRoutes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import ListRoomLocation from "../components/ListRoomByLocation/ListRoomLocation";
import RoomDetail from "../components/RoomDetail/RoomDetail";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Register/SignUp";
import UserInformation from "../components/Profile/UserInformation";
import { path } from "../common/path";

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
                {
                    path: "/profile",
                    element: <UserInformation />,
                },
            ],
        },
        {
            path: path.signin,
            element: <SignIn />,
        },
        {
            path: path.signup,
            element: <SignUp />,
        },
    ]);
    // { path: "team", element: <AboutPage /> },

    return routes;
};

export default UseRouteCustom;
