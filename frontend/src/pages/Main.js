import { Link } from "react-router-dom";
import "./main.css"
import logo from "../logo1.png"

const Main=()=>{
    return (
        <div className="profess">
        <img src={logo}></img>
        <div className="wrapper-main">
            <div className="signup">
                <h1>Lets have some fun</h1><br></br>
                <Link to="/recording"><button><h2>Yup</h2></button></Link>
            </div>
        </div>
        </div>
    )
}
export default Main;