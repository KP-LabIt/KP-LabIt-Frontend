import './ResetPasswordConfirmPage.css'
import { useSearchParams} from "react-router-dom";
import {useState} from "react";
import {ResetPasswordFetchConfirm} from "../../../services/api.jsx";
import { RiLockPasswordLine } from "react-icons/ri";
import BottomWatermark from "../../../components/BottomWatermark/BottomWatermark.jsx";
import PasswordResetSuccessPopUp from "../../../components/PasswordResetSuccessPopUp/PasswordResetSuccessPopUp.jsx";
import {FiEye, FiEyeOff} from "react-icons/fi";


const ResetPasswordConfirmPage = () => {

    const [searchParams] = useSearchParams();
    const uid = searchParams.get("uid");
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);


    const handleReset = async (e) => {
        e.preventDefault();

        setLoading(true);

        await ResetPasswordFetchConfirm({uid, token, newPassword, reNewPassword}, setError, setSuccess);

        setLoading(false);

    }


    return (
        <div className="reset-password-confirm-page">

            <div className="reset-pass-confirm-window">
                <h1 className="reset-pass-confirm-title"> Zmena hesla </h1>
                <p className="reset-pass-confirm-text">
                    Zadajte váše nové heslo.
                </p>
                <form className="reset-pass-confirm-form" onSubmit={handleReset}>

                    <div className="reset-pass-confirm-input-container">
                        <RiLockPasswordLine className="icon" size={25} />
                        <input className="reset-pass-confirm-input"
                               type={showPassword1 ? "text" : "password"}
                               placeholder="Zadajte nové heslo"
                               value={newPassword}
                               onChange={(e) => setNewPassword(e.target.value)}
                               required
                        />
                        <span className="show-password" onClick={() => setShowPassword1(!showPassword1)}>
                                {showPassword1 ? <FiEye/> : <FiEyeOff/>}
                        </span>
                    </div>

                    <div className="reset-pass-confirm-input-container">
                        <RiLockPasswordLine className="icon" size={25} />
                        <input className="reset-pass-confirm-input"
                               type={showPassword2 ? "text" : "password"}
                               placeholder="Zadajte nové heslo znova"
                               value={reNewPassword}
                               onChange={(e) => setReNewPassword(e.target.value)}
                               required
                        />
                        <span className="show-password" onClick={() => setShowPassword2(!showPassword2)}>
                                {showPassword2 ? <FiEye/> : <FiEyeOff/>}
                        </span>
                    </div>

                    <button className="reset-pass-confirm-submit-button">
                        Zmeniť heslo
                    </button>

                    {error && <p className="error">{error}</p>}
                    {loading && <p className="loading">Loading..</p>}

                </form>

            </div>

            {<BottomWatermark />}

            {success && <PasswordResetSuccessPopUp />}

        </div>
    )

}

export default ResetPasswordConfirmPage;
