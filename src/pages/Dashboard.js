import "./dashboard.css"
import work from "../work2.png"
import yoga from "../yoga.png"
import music from "../music.png"
import setting from "../settings.png"
import { Outlet ,Link} from "react-router-dom"
import { useEffect } from "react"
const Dashboard=()=>{
        const urlParams= new URLSearchParams(window.location.search)
        const time=urlParams.get('time')    

    return(
        <div className="dashboard">
            <nav>
                <div className="wrapper-dashboard">
                    <Link to={`/dashboard/work/?time=${time}`}><img src={work}></img></Link>
                    <Link to="/dashboard/yoga"><img src={yoga}></img></Link>
                    <Link to="/dashboard/music"><img src={music}></img></Link>
                </div>
                <Link to={`/dashboard/?time=${time}`}><img src={setting}></img></Link>
            </nav>
            <div className="yup">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Dashboard; 