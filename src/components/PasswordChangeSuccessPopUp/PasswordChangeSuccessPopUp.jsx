import './PasswordChangeSuccessPopUp.css'
import {useNavigate} from "react-router-dom";

export default function PasswordChangeSuccessPopUp() {

    const navigate = useNavigate();

    const handleRedirect = () => {

        const userRole = localStorage.getItem("userRole");

        if (userRole) {

            const roleRedirect = {
                student: "/student/home",
                teacher: "/teacher/home",
                admin: "/admin/home"
            }

            return navigate(roleRedirect[userRole]);
        }
        else {
            return navigate("/");
        }
    }

    return (

        <div className="pass-change-success-popup-page">

            <div className="pass-change-success-popup-window">
                <h1 className="pass-change-success-popup-title">
                    Heslo bolo zmenené!
                </h1>
                <p className="pass-change-success-popup-subtitle">
                    Vaše heslo bolo úspešne zmenené.
                </p>
                <button className="pass-change-success-popup-redirect-button" onClick={handleRedirect}>
                    Dokončiť
                </button>
            </div>

        </div>

    )

}
