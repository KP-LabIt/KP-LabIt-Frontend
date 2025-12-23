import './UnauthorizedPage.css'
import { useNavigate } from 'react-router-dom';
import BottomWatermark from "../../../components/BottomWatermark/BottomWatermark.jsx";

const UnauthorizedPage = () => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/");
    }

    return (
        <div className="unauthorized-page">
            <h1>Unauthorized</h1>
            <p>Nemáte oprávnenie k prístupu na túto stránku!</p>
            <button onClick={handleRedirect}>
                Späť
            </button>

            {<BottomWatermark />}
        </div>
    )

}

export default UnauthorizedPage;
