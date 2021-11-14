import React, { useState } from "react";

import "./HelloWidget.scss";


export const Clock = () => {
    const [date, setDate] = useState(new Date());
    
    const timer = setInterval(() => {setDate(new Date());}, 1000);

    let getTimeString = () => {

        if(date.getMinutes() < 10){
            return `${date.getHours()}:0${date.getMinutes()}`;
        }
        return `${date.getHours()}:${date.getMinutes()}`;

    }
    

    return(
        <div className="hello-widget__clock">
            {getTimeString()}
        </div>
    );
    
}
