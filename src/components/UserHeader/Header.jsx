import React, { useEffect, useState } from "react";
import { LogoMain } from "../../Icon/IconStorage";
import "./Header.scss";
import RightHeader from "./RightHeader";
import BoxSearch from "./BoxSearch";
import BarSearch from "./BarSearch";
import NavBar from "./NavBar";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation(); // Lấy thông tin về URL hiện tại
    // State để kiểm tra xem có cần hiển thị thanh search không
    const [showSearchBar, setShowSearchBar] = useState(false);
    // Xác định có phải là trang chủ không
    const isHomePage = location.pathname === "/";
    //console.log(isHomePage);

    // Sử dụng useEffect để gắn sự kiện scroll khi component mount
    useEffect(() => {
        if (isHomePage) {
            //hàm sử lý sự kiện scroll
            const handleScroll = () => {
                if (window.scrollY > 100) {
                    setShowSearchBar(true);
                } else {
                    setShowSearchBar(false);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            // Nếu không phải trang chủ, luôn hiển thị thanh tìm kiếm mặc định
            setShowSearchBar(true);
        }
    }, [isHomePage]);

    return (
        <>
            <header
                className={`${
                    !showSearchBar
                        ? "min-height-box-search"
                        : "min-height-bar-search"
                } main-header text-center `}
            >
                <div className="flex justify-between ml-4 mr-4">
                    <div className="mt-3 text-red-500">
                        <Link to="/">
                            <LogoMain />
                        </Link>
                    </div>
                    <RightHeader />
                </div>
                {!showSearchBar && <BoxSearch />}

                {/* Thanh search sẽ được hiển thị khi state showSearchBar = true */}
                {showSearchBar && <BarSearch show={showSearchBar} />}

                <div className="my-4 container">
                    <NavBar />
                </div>
            </header>
        </>
    );
};

export default Header;
