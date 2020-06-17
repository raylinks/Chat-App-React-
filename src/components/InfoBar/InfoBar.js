import React from 'react';
import './InfoBar.css';

const InfoBar = ({room}) => (
    <div className="InfoBar">
    <div className="leftInnerContainer">
    {/* <img className="onlineIcon" src={onlineIcon} alt="online image" /> */}
     <img className="onlineIcon"  alt="online " /> 
    <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
    {/* <a href="/"><img src={closeIcon}  alt="close image"  /> </a> */}
      <a href="/"><img   alt="close"  /> </a> 
    </div>
    </div>
)

export default InfoBar;