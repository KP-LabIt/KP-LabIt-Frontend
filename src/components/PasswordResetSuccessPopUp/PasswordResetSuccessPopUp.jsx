import './PasswordResetSuccessPopUp.css'
import {useNavigate} from "react-router-dom";

export default function PasswordResetSuccessPopUp() {

    const navigate = useNavigate();

    const handleRedirect = () => {

        return navigate("/login");

    }

    return (
        <div className="pass-success-confirm-popup-window">
            <h1 className="pass-success-confirm-title">
                Vaše heslo bolo úspešne zmenené!
            </h1>
            <p className="pass-success-confirm-subtitle">
                Teraz sa môžete prihlásiť, s vaším novým heslom.
            </p>
            <button className="pass-success-confirm-redirect-button" onClick={handleRedirect}>
                Dokončiť
            </button>
        </div>
    )

}
