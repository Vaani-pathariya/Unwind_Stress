
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
    const [phone,setPhone]=useState("");
    const handle_first=(event)=>{
        setFirst(event.target.value);
    }
    const handle_second=(event)=>{
        setLast(event.target.value);
    }
    const handle_email=(event)=>{
        setEmail(event.target.value);
    }
    const handle_company=(event)=>{
        setCompany(event.target.value);
    }
    const handle_pass=(event)=>{
        setPassword(event.target.value);
    }
    const handle_confirm=(event)=>{
        setConfirm(event.target.value);
    }
    const handle_phone=(event)=>{
        setPhone(event.target.value);
    }
    const handle_click=(event)=>{
        event.preventDefault();
    };
    return(
        <div className="signup-main">
            <div className="wrapper-signup">
            <h1>Signup</h1>
            <input className="entry" type="text" placeholder="First Name" onChange={handle_first} value={first}>
            </input>
            <input className="entry" type="text" placeholder="Last Name" onChange={handle_second} value={last}>
            </input>
            <input className="entry" type="email" placeholder="Email" onChange={handle_email} value={email}>
            </input>
            <input className="entry" type="text" placeholder="Phone Number" onChange={handle_phone} value={phone}>
            </input>
            <input className="entry" type="text" placeholder="Company ( Optional )" onChange={handle_company} value={Company}>
            </input>
            <input className="entry" type="password" placeholder="Password" onChange={handle_pass} value={password}></input>
            <input className="entry" type="password" placeholder="Confirm Password" onChange={handle_confirm} value={confirm}></input><br></br>
            <button className="signup-final-button" onClick={handle_click}>Lets go</button>
            </div>
        </div>
    
    )
}
export default Signup;