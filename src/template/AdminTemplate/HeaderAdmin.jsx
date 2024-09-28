import React from "react";
import { useSelector } from "react-redux";

const HeaderAdmin = () => {
    const { user } = useSelector((state) => state.authSlice.infoUser);
    console.log(user);
    return (
        <header className="flex items-center justify-center rounded-lg z-50   px-5 ">
            <div className="mr-4">
                <img
                    src="https://picsum.photos/200"
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <div>
                <p className="font-semibold ">
                    {user?.name} ({user?.role})
                </p>
            </div>
        </header>
    );
};

export default HeaderAdmin;
