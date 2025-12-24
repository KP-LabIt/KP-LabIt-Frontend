import './AdminPage.css'
import BottomWatermark from "../../../components/BottomWatermark/BottomWatermark.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";

const AdminPage = () => {

    return (
        <div className="admin-page">
            {<Navbar/>}

            <h1>Admin Page</h1>

            {<BottomWatermark />}
        </div>
    )

}

export default AdminPage;
