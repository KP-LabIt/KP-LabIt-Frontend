import './BottomWatermark.css'
import logoDescription from "../../assets/kp-logo-description.png";

export default function BottomWatermark() {

    return (
        <img className="logo-description" src={/** @type {string} */ (logoDescription)} alt="logo" />
    )

}
