import { Route,Routes } from "react-router-dom";
import Main from "./pages/Main";
import Loading from "./pages/Loading";
import { useState,useEffect } from "react";
import "./app.css"
import React from "react";
import Recording from "./pages/Recording";
function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },6000)
  },[])
  return (
    <div className="App">
      {
        loading ?
        <Loading/>
        :
        <Routes>
         <Route exact path="/" element={<Main/>}></Route>
         <Route path="/recording" element={<Recording/>}></Route>
        </Routes>
      }
    </div>
  );
}

export default App;
