import { RouterProvider } from "react-router-dom";
import AppRouter from './routes.jsx'


export default function App() {

    // Priradenie Routeru z routes.jsx pre Routovanie URL adres
    return <RouterProvider router={AppRouter()} />;

}
