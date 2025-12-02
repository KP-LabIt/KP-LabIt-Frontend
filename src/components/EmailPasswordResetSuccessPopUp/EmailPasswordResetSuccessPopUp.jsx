import './EmailPasswordResetSuccessPopUp.css'
import {useNavigate} from "react-router-dom";

export default function EmailPasswordResetSuccessPopUp() {

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
        <div className="pass-success-popup-window">
            <h1 className="pass-success-title">
                Email bol odoslaný!
            </h1>
            <p className="pass-success-subtitle">
                Skontrolujte si váš email, a postupujte podľa pokynov.
            </p>
            <button className="pass-success-redirect-button" onClick={handleRedirect}>
                Hotovo
            </button>
        </div>
    )

}
