import './FirstLoginPopUp.css'
import {useNavigate} from "react-router-dom";

export default function FirstLoginPopUp() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/change-password");
    }

    return (

        <div className="first-login-popup-page">

            <div className="login-popup-window">

                <h1 className="login-popup-title">
                    Upozornenie!
                </h1>
                <h2 className="login-popup-subtitle">
                    Zistili sme, že stále používate prednastavené heslo.
                </h2>
                <p className="login-popup-text">
                    Používate predgenerované heslo, ktoré sme vám zaslali.
                    Pre bezpečnosť účtu si ho prosím zmeňte kliknutím na tlačidlo nižšie.
                </p>

                <button onClick={handleRedirect}>
                    Zmeniť heslo
                </button>

            </div>

        </div>
    )

}
