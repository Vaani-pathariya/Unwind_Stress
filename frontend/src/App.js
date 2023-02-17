import { Route,Routes } from "react-router-dom";
import Main from "./pages/Main";
import Loading from "./pages/Loading";
import { useState } from "react";
import "./app.css"
function App() {
  
  return (
    <div className="App">
      <Loading/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
