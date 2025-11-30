// Stránka pre prihlasovanie

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine, RiMicrosoftFill } from "react-icons/ri";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logoDescription from '../../assets/kp-logo-description.png'
import { LoginFetch } from "../../services/api.jsx";
import getPayloadFromToken from "../../utils/tokenExtractor.jsx";


const LoginPage = () => {

    const navigate = useNavigate();

    // state variables
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    // logika prihlásenia (odosle request na backend, ulozi token do localStorage,
    // ulozi udaje o user do localStorage z tokenu, redirectne usera na korespondujúcu url)
    const handleLogin = async (e) => {
        e.preventDefault();

        await LoginFetch({email, password}, setError);

        const payload = await getPayloadFromToken()

        const userName = (payload.firstName + " " + payload.lastName);
        const userRole = payload.role;

        localStorage.setItem("userName", userName);
        localStorage.setItem("userRole", userRole);

        const roleRedirect = {
            student: "/student/home",
            teacher: "/teacher/home",
            admin: "/admin/home"
        }

        navigate(roleRedirect[userRole]);

    }


    // prihlasovanie pomocou Microsoftu
    const handleMicrosoftAuth = () => {

        setError("To be added.")

    }


    // prihlasovanie pomocou Outlooku
    const handleOutlookAuth = () => {

        setError("To be added.")

    }


    // obsah stránky
    return (
        <div className="login-page">

            <div className="login-page-logo">
                <div className="login-container">

                    {/* Ľavá strana */}
                    <div className="container-left">
                        <h2 className="sub-title upper">
                            Katkin Park
                        </h2>
                        <h1 className="title">
                            GearHub
                        </h1>
                        <h2 className="sub-title lower">
                            Školský Rezervačný Systém
                        </h2>
                    </div>

                    {/* Pravá strana */}
                    <div className="container-right">
                        <h2 className="form-title">
                            Prihlásenie
                        </h2>
                        <form className="form" onSubmit={handleLogin}>

                            <div className="input-container">
                                <MdOutlineEmail className="icon" size={25} />
                                <input className="input"
                                       type="email"
                                       placeholder="Školský email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                />
                            </div>

                            <div className="input-container">
                                <RiLockPasswordLine className="icon" size={25} />
                                <input className="input"
                                       type={showPassword ? "text" : "password"}
                                       placeholder="Heslo"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       required
                                />
                                <span className="show-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FiEye/> : <FiEyeOff/>}
                                </span>
                            </div>

                            <a className="login-problem" href="/login-problem">
                                Máte problém s prihlásením?
                            </a>

                            <button className="button">
                                Prihlásiť
                            </button>

                            { error && <p className="error">{error}</p>}

                            <p className="or-text">
                                <span className="or-line" />
                                <span className="or-label"> Alebo </span>
                                <span className="or-line" />
                            </p>

                            <div className="alternatives">
                                <span className="alternative" >
                                    <button className="alt-button"> <RiMicrosoftFill size={45} onClick={handleMicrosoftAuth}/> </button>
                                </span>
                                <span className="alternative-line" />
                                <span className="alternative" >
                                    <button className="alt-button"> <PiMicrosoftOutlookLogoFill size={45} onClick={handleOutlookAuth}/> </button>
                                </span>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <img className="logo-description" src={/** @type {string} */ (logoDescription)} alt="logo" />

        </div>
    )
}


export default LoginPage;