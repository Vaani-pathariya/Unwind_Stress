import React, { useEffect, useState } from "react";
import work from "../work.png"
import ReactLoading from "react-loading"
import "./loading.css"
export default function Loading(){
    return (
        <div className="loading">
        <img src={work} className="Loading_img"></img>
        <h2>Loading</h2>
        <ReactLoading type={"bubbles"} color={"white"} height={'20%'} width={'10%'} className="loading_bubbles"/>
        </div>
    )
}