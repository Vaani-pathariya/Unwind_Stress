import "./pages.css"
import { Link } from "react-router-dom"
const Settings=()=>{
    const urlParams= new URLSearchParams(window.location.search)
    const time=urlParams.get('time')    

    return (
        <div className="settings">
            <div className="wrapper-settings">
            <h1>Your attention span is {time} seconds</h1>
            <Link to="/recording"><button><h2>Wanna check your attention<br></br> time again ?</h2></button></Link>
            </div>
        </div>
    )
}
export default Settings