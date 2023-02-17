
import React, { useState } from "react";
import "./Signup.css"
const Signup=()=>{
    const urlParams= new URLSearchParams(window.location.search)
    const time=urlParams.get('time')
    const [first,setFirst]=useState("")
    const [last,setLast]=useState("")
    const [email,setEmail]=useState("")
    const [Company,setCompany]=useState("")
    const [password,setPassword]=useState("")
    const [confirm,setConfirm]=useState("")
    const [phone,setPhone]=useState(0);
    return(
        <div className="signup-main">
            <div className="wrapper-signup">
            <h1>Signup</h1>
            <input className="entry" type="text" placeholder="First Name">
            </input>
            <input className="entry" type="text" placeholder="Last Name">
            </input>
            <input className="entry" type="email" placeholder="Email">
            </input>
            <input className="entry" type="number" placeholder="Phone Number">
            </input>
            <input className="entry" type="text" placeholder="Company ( Optional )">
            </input>
            <input className="entry" type="password" placeholder="Password"></input>
            <input className="entry" type="password" placeholder="Confirm Password"></input><br></br>
            <button className="signup-final-button">Lets go</button>
            </div>
        </div>
    
    )
}
export default Signup;