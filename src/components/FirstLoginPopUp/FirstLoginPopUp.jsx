import './FirstLoginPopUp.css'
import { useNavigate } from "react-router-dom";

export default function FirstLoginPopUp() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/change-password");
    }

    return (
        <div className="popup-window">
            <h1 className="title">
                Upozornenie!
            </h1>
            <h2 className="subtitle">
                Toto je vaše prvé prihlásenie, zmeňte si heslo!
            </h2>
            <p className="text">
                Detekovali sme, že ste si ešte nezmenili heslo,
            </p>
            <p className="text">
                musíte si automaticky vygenerované heslo zmeniť na vaše vlastné.
            </p>
            <button className="redirect-button" onClick={handleRedirect}>
                Zmeniť heslo
            </button>
        </div>
    )

}
