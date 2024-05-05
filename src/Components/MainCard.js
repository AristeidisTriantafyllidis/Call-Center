import React from "react";
import ReactDOM from "react-dom";

export default function MainCard(props){
   

return(
    <div className="mainCard">
<p>{props.direction} {props.status}</p>
<p>{props.from}</p>
<p>{props.to}</p>
<p>{props.date}</p>
<p>{props.hour}</p>
<p>{props.duration>0? `${props.duration}s`:""}</p>
<button>Archive</button>

    </div>
    
)

}
