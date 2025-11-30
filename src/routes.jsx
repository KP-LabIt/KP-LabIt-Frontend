// Definícia url routes

import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';


export default function AppRouter() {
    return createBrowserRouter([

        {
            path: '/',
            element: <LoginPage/>
        }

    ]);
}
