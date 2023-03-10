import { Route,Routes } from "react-router-dom";
import Main from "./pages/Main";
import Loading from "./pages/Loading";
import { useState,useEffect } from "react";
import "./app.css"
import React from "react";
import Recording from "./pages/Recording";

import Dashboard from "./pages/Dashboard";
import Work from "./pages/Work";
import Yoga from "./pages/Yoga";
import Music from "./pages/Music";
import Settings from "./pages/Settings";
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
         <Route path="/dashboard" element={<Dashboard/>}>
          <Route exact path="" element={<Settings/>}></Route>
          <Route path="work" element={<Work/>}></Route>
          <Route path="yoga" element={<Yoga/>}></Route>
          <Route path="music" element={<Music/>}></Route>
         </Route>
        </Routes>
      }
    </div>
  );
}

export default App;
