import {useState} from "react";
import './ResetPasswordPage.css'
import BottomWatermark from "../../../components/BottomWatermark/BottomWatermark.jsx";
import EmailPasswordResetSuccessPopUp from "../../../components/EmailPasswordResetSuccessPopUp/EmailPasswordResetSuccessPopUp.jsx";
import {ResetPasswordFetch} from "../../../services/api.jsx";
import { MdOutlineEmail } from "react-icons/md";

const ResetPasswordPage = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        setLoading(true);

        await ResetPasswordFetch({email}, setError, setSuccess);

        setLoading(false);

    }

    return (
        <div className="reset-password-page">

            <div className="reset-pass-window">
                <h1 className="reset-pass-title"> Zmena hesla </h1>
                <p className="reset-pass-text">
                    Zadajte váš školský email, na ktorý vám odošleme link pre resetovanie hesla.
                </p>
                <form className="reset-pass-form" onSubmit={handleSubmit}>

                    <div className="reset-pass-input-container">
                        <MdOutlineEmail className="icon" size={25} />
                        <input className="reset-pass-input"
                               name="email"
                               autoComplete="email"
                               type={email}
                               placeholder="Zadajte školský email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required
                        />
                    </div>

                    <button className="reset-pass-submit-button">
                        Odoslať
                    </button>

                    {error && <p className="error">{error}</p>}
                    {loading && <p className="loading">Loading..</p>}

                </form>

            </div>

            {<BottomWatermark />}

            {success && <EmailPasswordResetSuccessPopUp />}

        </div>
    )

}

export default ResetPasswordPage;
