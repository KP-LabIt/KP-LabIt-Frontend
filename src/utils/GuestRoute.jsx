// funkcia pre zabezpečenie UI pre neprihlásených users

import { Navigate } from "react-router-dom";

export default function GuestRoute({ element }) {

    const userRole = localStorage.getItem("userRole");

    if (userRole) {

        const roleRedirect = {
            student: "/student/home",
            teacher: "/teacher/home",
            admin: "/admin/home"
        }

        return <Navigate to={roleRedirect[userRole]} />;
    }

    else {
        return element;
    }

}
