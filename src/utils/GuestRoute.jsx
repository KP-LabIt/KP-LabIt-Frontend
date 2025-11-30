// funkcia pre zabezpečenie UI pre neprihlásených users

import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function GuestRoute({ element }) {

    const userRole = localStorage.getItem("userRole");

    const [target, setTarget] = useState("");

    if (userRole) {

        if (userRole === "student") {
            setTarget("/student/home")
        }

        if (userRole === "teacher") {
            setTarget("/teacher/home")
        }

        if (userRole === "admin") {
            setTarget("/admin/home")
        }

        else {
            setTarget("/")
        }

        return <Navigate to={target} replace />;
    }

    return element;
}
