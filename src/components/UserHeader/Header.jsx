import React, { useEffect, useState } from "react";
import { LogoMain } from "../../Icon/IconStorage";
import "./Header.scss";
import RightHeader from "./RightHeader";
import BoxSearch from "./BoxSearch";
import BarSearch from "./BarSearch";
import NavBar from "./NavBar";

const Header = () => {
    // State để kiểm tra xem có cần hiển thị thanh search không
    const [showSearchBar, setShowSearchBar] = useState(false);

    // Hàm lắng nghe sự kiện scroll
    const handleScroll = () => {
        //đơn vị px
        if (window.scrollY > 100) {
            setShowSearchBar(true);
        } else {
            setShowSearchBar(false);
        }
    };

    // Sử dụng useEffect để gắn sự kiện scroll khi component mount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Dọn dẹp sự kiện khi component bị unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
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
                        <LogoMain />
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
