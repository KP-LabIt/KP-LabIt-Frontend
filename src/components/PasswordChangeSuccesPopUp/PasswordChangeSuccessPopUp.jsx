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
        <div className="popup-window">
            <h1 className="title">
                Heslo bolo zmenené!
            </h1>
            <h2 className="subtitle">
                Vaše heslo bolo úspešne zmenené.
            </h2>
            <button className="redirect-button" onClick={handleRedirect}>
                Pokračovať
            </button>
        </div>
    )

}
