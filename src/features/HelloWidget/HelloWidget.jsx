import React from "react";
import { Clock } from "./Clock";
import { Greeting } from "./Greeting";

import "./HelloWidget.scss"

export function HelloWidget(name = "%USER%") {

    return (
        <div className="hello-widget">
            <Clock/>
            <div>
                {Greeting(name)}
            </div>
        </div>
        
    );
}
