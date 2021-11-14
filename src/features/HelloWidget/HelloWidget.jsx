import React from "react";

import { Clock } from "./Clock";
import { Greeting } from "./Greeting";

import "./HelloWidget.scss"

export const HelloWidget = (username = "%USER%") => {

    return (
        <div className="hello-widget">
            <Clock/>
            <Greeting name = {username}/>
        </div>
        
    );
}
