import React from "react";
import "./Status.css";

const Status = ({target, time, clicks})=>{
    return <div className="Status">
        <div className="Status-text">Target: {target} clicks</div>
        <div className="Status-text">Time used: {time} seconds</div>
        <div className="Status-text">Have clicked: {clicks} times</div>
    </div>
}

export default Status;
