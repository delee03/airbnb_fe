import React from "react";
import { LogoMain } from "../../Icon/IconStorage";
import Header from "../../components/UserHeader/Header";
import Footer from "../../components/UserFooter/Footer";
import { Outlet, useLocation } from "react-router-dom";

const UserLayout = () => {
    const location = useLocation(); // Lấy thông tin về URL hiện tại
    const isHomePage = location.pathname === "/";
    const marginTop = isHomePage ? "mt-72" : "mt-56";
    return (
        <>
            <Header />
            <div className={`pb-12 ${marginTop}`}>
                <Outlet />
            </div>

            <Footer />
        </>
    );
};

export default UserLayout;
