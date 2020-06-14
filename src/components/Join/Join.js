import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css'
const Join = () => {
    
        const [name, setName] = useState('');
        const [room, setRoom] = useState('');
        return ( 
        <div className="joinOuterContainer" >
        <div className="joinInnerContainer">
        <h1 className="heading" >Join</h1>
        <div><input placeholer="Name"  className="joinInput" type="text"  onChnage={(event) => setName(event.target.value)} /></div>
         <div><input placeholer="Room"  className="joinInput mt-20" type="text"   onChnage={(event) => setRoom(event.target.value)}  /></div>

         <Link to="{`/chat?name=${name}&room=${room}`}">
         <button  className="button mt-20" type="submit"> Sign IN </button>
         </Link>
         </div>
         </div>
    )
};

export default Join;


