import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import BottomWatermark from "../../../components/BottomWatermark/BottomWatermark.jsx";

const RootPage = () => {

    const navigate = useNavigate();

    useEffect(() => {

        navigate("/login");

    }, [navigate]);

    return (
        <div className="RootPage">
            <h1>Loading...</h1>

            {<BottomWatermark />}
        </div>
    )

}

export default RootPage;
