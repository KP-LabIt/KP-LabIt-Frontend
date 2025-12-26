import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaHome, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/kp-logo-description.png";
import logoMobile from "../../assets/kp-logo-white.png";


export default function Navbar() {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <div className="navbar-component">

            <nav className="navbar">
                {/* Lava strana */}
                <div className="navbar-left">
                    <img
                        src={/** @type {string} */ (logo)}
                        alt="Logo"
                        className="navbar-logo"
                        onClick={() => navigate(routes.home)}
                    />

                    <img
                        src={/** @type {string} */ (logoMobile)}
                        alt="Logo"
                        className="navbar-logo-mobile"
                        onClick={() => navigate(routes.home)}
                    />

                    <div className="navbar-user" onClick={() => navigate(routes.profile)}>
                    <span className="navbar-user-icon">
                        {userRole === "admin" ? <RiPoliceBadgeLine /> : <FaUser />}
                    </span>
                        <span>{userName}</span>
                    </div>

                    <div className="navbar-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <RxHamburgerMenu />
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

            {/* BACKDROP – zatvorí menu ked vedla neho */}
            {isMenuOpen && (
                <div
                    className="mobile-menu-backdrop"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* mobilne menu */}
            <div className={'mobile-menu ' + (isMenuOpen ? 'open' : '')}>
                <div onClick={() => {navigate(routes.home); setIsMenuOpen(false);}}>
                    <FaHome/> Home
                </div>
                <span className="menu-divider" />
                <div onClick={() => navigate(routes.calendar)}>
                    <FaCalendarAlt/> Calendar
                </div>
                <span className="menu-divider" />
                <div onClick={() => navigate(routes.messages)}>
                    <FaEnvelope/> Messages
                </div>
                <span className="menu-divider" />
                <div onClick={() => navigate(routes.profile)}>
                    {userRole === "admin" ? <RiPoliceBadgeLine /> : <FaUser />} {userName}
                </div>
            </div>

        </div>

    );
}
