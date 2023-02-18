import "./dashboard.css"
import work from "../work2.png"
import yoga from "../yoga.png"
import music from "../music.png"
import setting from "../settings.png"
import { Outlet } from "react-router-dom"
const Dashboard=()=>{
    const urlParams= new URLSearchParams(window.location.search)
    const time=urlParams.get('time')
    return(
        <div className="dashboard">
            <nav>
                <div className="wrapper-dashboard">
                    <img src={work}></img>
                    <img src={yoga}></img>
                    <img src={music}></img>
                </div>
                <img src={setting}></img>
            </nav>
            <div className="yup">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Dashboard; 