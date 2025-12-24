import './StudentActivityPage.css'
import Navbar from "../../../components/Navbar/Navbar.jsx";
import BottomWatermark from "../../../components/BottomWatermark/BottomWatermark.jsx";

const StudentActivityPage = () => {

    return (
        <div className="student-activity-page">
            {<Navbar/>}

            <h1>Student Activity Page</h1>

            {<BottomWatermark />}
        </div>
    )

}

export default StudentActivityPage;
