import React from "react";
import UserLayout from "../template/UserLayout/UserLayout";
import { useRoutes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import ListRoomLocation from "../components/ListRoomByLocation/ListRoomLocation";
import RoomDetail from "../components/RoomDetail/RoomDetail";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Register/SignUp";
import UserProfile from "../components/Profile/UserProfile";
import { path } from "../common/path";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import ManagerUser from "../components/ManagerUser/ManagerUser";
import PageNotFound from "../components/PageNotFound/PageNotFound";

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
                    element: <UserProfile />,
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
        {
            path: path.admin,
            element: <AdminTemplate />,
            children: [
                {
                    index: true,
                    element: <ManagerUser />,
                },
            ],
        },
        {
            path: path.pageNotFound,
            element: <PageNotFound />,
        },
    ]);

    return routes;
};

export default UseRouteCustom;
