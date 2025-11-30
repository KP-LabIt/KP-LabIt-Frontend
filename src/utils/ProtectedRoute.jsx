// Funkcia pre zabezpečenie UX podľa rolí (každa rola uvidí len to čo má)

import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({ children, allowedRoles }) {

    const userRole = localStorage.getItem("userRole");

    if (!userRole) return <Navigate to="/login" />;

    if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" />;

    return children;

}
