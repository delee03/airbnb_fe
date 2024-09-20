import React from "react";
import { LogoMain } from "../../Icon/IconStorage";
import Header from "../../components/UserHeader/Header";
import Footer from "../../components/UserFooter/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

export default UserLayout;
