import {useState} from "react";
import './ChangePasswordPage.css'
import BottomWatermark from "../../components/BottomWatermark/BottomWatermark.jsx";
import PasswordChangeSuccessPopUp from "../../components/PasswordChangeSuccesPopUp/PasswordChangeSuccessPopUp.jsx";
import {ChangePasswordFetch} from "../../services/api.jsx";
import {FiEye, FiEyeOff} from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

const ChangePasswordPage = () => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        setLoading(true);

        await ChangePasswordFetch({oldPassword, newPassword}, setError, setSuccess);

        setLoading(false);

    }

    return (
        <div className="change-password-page">

            <div className="window">
                <h1 className="title"> Zmena hesla </h1>
                <form className="form" onSubmit={handleSubmit}>

                    <div className="input-container">
                        <RiLockPasswordLine className="icon" size={25} />
                        <input className="input"
                               type={showPassword1 ? "text" : "password"}
                               placeholder="Zadajte súčasné heslo"
                               value={oldPassword}
                               onChange={(e) => setOldPassword(e.target.value)}
                               required
                        />
                        <span className="show-password" onClick={() => setShowPassword1(!showPassword1)}>
                                    {showPassword1 ? <FiEye/> : <FiEyeOff/>}
                                </span>
                    </div>

                    <div className="input-container">
                        <RiLockPasswordLine className="icon" size={25} />
                        <input className="input"
                               type={showPassword2 ? "text" : "password"}
                               placeholder="Zadajte nové heslo"
                               value={newPassword}
                               onChange={(e) => setNewPassword(e.target.value)}
                               required
                        />
                        <span className="show-password" onClick={() => setShowPassword2(!showPassword2)}>
                                    {showPassword2 ? <FiEye/> : <FiEyeOff/>}
                                </span>
                    </div>

                    <button className="submit-button">
                        Zmeniť heslo
                    </button>

                    {error && <p className="error">{error}</p>}
                    {loading && <p className="loading">Loading..</p>}

                </form>

            </div>

            {<BottomWatermark />}

            {success && <PasswordChangeSuccessPopUp />}

        </div>
    )

}

export default ChangePasswordPage;
