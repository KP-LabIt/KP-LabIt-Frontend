import './FirstLoginPopUp.css'
import { useNavigate } from "react-router-dom";

export default function FirstLoginPopUp() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/reset-password");
    }

    return (
        <div className="login-popup-window">
            <h1 className="login-popup-title">
                Upozornenie!
            </h1>
            <h2 className="login-popup-subtitle">
                Toto je vaše prvé prihlásenie, zmeňte si heslo!
            </h2>
            <p className="login-popup-text">
                Detekovali sme, že ste si ešte nezmenili heslo,
                musíte si automaticky vygenerované heslo zmeniť na vaše vlastné.
            </p>
            <button className="login-popup-redirect-button" onClick={handleRedirect}>
                Zmeniť heslo
            </button>
        </div>
    )

}
