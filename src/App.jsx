import { useEffect } from "react";
import handleExpiredToken from "./utils/handleExpiredToken.jsx";
import { RouterProvider } from "react-router-dom";
import AppRouter from './routes.jsx'


export default function App() {

    // pokus o refreshnutie tokena pri nacitani stranky
    useEffect(() => {

        const tryRefreshToken = async () => {
            const accessToken = localStorage.getItem("token");

            if (!accessToken) return;

            await handleExpiredToken();
        };

        tryRefreshToken();

    }, []);


    // Priradenie Routeru z routes.jsx pre Routovanie URL adres
    return <RouterProvider router={AppRouter()} />;



}
