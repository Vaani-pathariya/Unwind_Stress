import { Link } from "react-router-dom";
import "./main.css"
const Main=()=>{
    return (
        <div className="wrapper-main">
            <div className="signup">
                <h1>New here ?<br></br>lets Signup first</h1><br></br>
                <Link to="/recording"><button><h2>Signup</h2></button></Link>
            </div>
            <div className="signin">
                <h1>Here to chill again</h1><br></br>
                <button><h2>Signin</h2></button>
            </div>
        </div>
    )
}
export default Main;