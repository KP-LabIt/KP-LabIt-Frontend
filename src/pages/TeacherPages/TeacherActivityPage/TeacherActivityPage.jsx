import './TeacherActivityPage.css'
import BottomWatermark from "../../../components/BottomWatermark/BottomWatermark.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";

const TeacherActivityPage = () => {

    return (
        <div className="teacher-activity-page">
            {<Navbar/>}

            <h1>Teacher Activity Page</h1>

            {<BottomWatermark />}
        </div>
    )

}

export default TeacherActivityPage;
