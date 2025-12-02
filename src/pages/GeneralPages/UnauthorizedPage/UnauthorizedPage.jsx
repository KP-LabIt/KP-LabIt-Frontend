import './UnauthorizedPage.css'
import { useNavigate } from 'react-router-dom';

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
        </div>
    )

}

export default UnauthorizedPage;
