import "./recording.css"
import start from "../start.png"
import stop from "../stop.png"
import reset from "../reset.png"
import { useEffect, useState,useRef } from "react"
const Recording=()=>{
    const [time,setTime]=useState(0);
    useEffect(()=>{
        return()=>clearInterval(id.current);
    },[]);
    let id=useRef();
    function handleTime(){
        id.current=setInterval(()=>{
            setTime((prev)=>prev+1);
        },1000);
    }
    return(
        <div className="recording">
            <div className="recording-heading">
            <h2>Let's measure your attention span first</h2>
            <h1>{
                Math.floor(time/3600)
            }:{
                Math.floor(time/60)-Math.floor(time/3600)*60
            }:{time-Math.floor(time/60)*60-Math.floor(time/3600)*3600}</h1>
            <div className="start-stop">
                <img src={start} onClick={()=>handleTime()}></img>
                <img src={reset} onClick={()=>{
                    clearInterval(id.current);
                    setTime(0);
                }}></img>
                <img src={stop} onClick={()=>clearInterval(id.current)} ></img>
                
            </div>
            <button className="forward_signup"><h3>Ready to move forward</h3></button>
            </div>
        </div>
    )
}
export default Recording;