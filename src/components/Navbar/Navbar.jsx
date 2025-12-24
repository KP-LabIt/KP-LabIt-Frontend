import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaHome, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/kp-logo-description.png";


export default function Navbar() {
    const navigate = useNavigate();

    const userRole = localStorage.getItem("userRole");   // student | teacher | admin
    const userName = localStorage.getItem("userName");

    // routes podla rolí
    const routes = {
        home: `/${userRole}/home`,
        calendar: `/${userRole}/calendar`,
        messages: `/${userRole}/messages`,
        profile: "/profile"
    };

    return (
        <nav className="navbar">
            {/* Lava strana */}
            <div className="navbar-left">
                <img
                    src={/** @type {string} */ (logo)}
                    alt="Logo"
                    className="navbar-logo"
                    onClick={() => navigate(routes.home)}
                />

                <div className="navbar-user" onClick={() => navigate(routes.profile)}>
                    <span className="navbar-user-icon">
                        <FaUser />
                    </span>
                    <span>{userName}</span>
                </div>
            </div>

            {/* prava strana */}
            <div className="navbar-right">
                <FaHome onClick={() => navigate(routes.home)} />

                <div className="navbar-divider" />

                <FaCalendarAlt onClick={() => navigate(routes.calendar)} />

                <div className="navbar-divider" />

                <FaEnvelope onClick={() => navigate(routes.messages)} />
            </div>
        </nav>
    );
}
