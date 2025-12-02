import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const RootPage = () => {

    const navigate = useNavigate();

    useEffect(() => {

        navigate("/login");

    }, [navigate]);

    return (
        <div className="RootPage">
            <h1>Loading...</h1>
        </div>
    )

}

export default RootPage;
