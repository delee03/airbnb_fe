import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../utils/localStorage";
import * as jwt_decode from "jwt-decode";
import { SvgGoogle } from "./IconSignUp";

const SignInGoogle = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = (response) => {
        // Giải mã token để lấy thông tin người dùng
        const userData = jwt_decode(response.credential);
        console.log("User Data:", userData);

        // Lấy email từ thông tin người dùng
        const userEmail = userData.email;

        // Lưu thông tin người dùng trong localStorage
        setLocalStorage("userEmail", userEmail);

        // Chuyển hướng đến trang chủ
        navigate("/");
    };

    const handleLoginFailure = (error) => {
        console.log("Login Failed:", error);
    };

    return (
        <div className="flex justify-between items-center gap-10">
            {/* <h2>Sign in with Google</h2> */}
            {/* <SvgGoogle /> */}
            <SvgGoogle />
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
            />
        </div>
    );
};

export default SignInGoogle;
