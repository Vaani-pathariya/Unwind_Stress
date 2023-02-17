import React, { useEffect, useState } from "react";
import work from "../work.png"
import ReactLoading from "react-loading"
import "./loading.css"
export default function Loading(){
    return (
        <div className="loading">
        <img src={work} className="Loading_img"></img>
        <h3>Loading</h3>
        <ReactLoading type={"bubbles"} color={"#5A7AD6"} height={'20%'} width={'10%'} className="loading_bubbles"/>
        </div>
    )
}