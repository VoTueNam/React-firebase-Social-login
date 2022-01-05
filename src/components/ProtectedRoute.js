import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

//chuyển hướng - kiểm tra xem user có login chưa, nếu chưa thì quay lại home, ngược lại thì cho vào xem thông tin user
const ProtectedRoute = ({ children }) => {
    const { user } = useUserAuth();

    console.log("Check user in Private: ", user);
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectedRoute;
