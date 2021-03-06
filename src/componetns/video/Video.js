import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/RuMjnkx6y44/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDigw1ZKE9TOVPMGbJScxwXD6iWVA" alt="video" />
        <span>05:43</span>
      </div>

      <div className="video__title">Create app in 5 minutes #made by avi</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views • 
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/ytc/AKedOLS7nZFj_mAAHiJdpvEDZ_tXyDSWGZ5HIVmQZTIL=s68-c-k-c0x00ffffff-no-rj" alt="channel logo" />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
}

export default Video;
