import React from "react";

export function Greeting(name = "%USER%") {
    
    let date = new Date();

    const greeting = () => {
        if(date.getHours() >= 5 && date.getHours() < 12){
            return "Good morning, " + name + "!";
        }else if(date.getHours() >= 12 && date.getHours() < 18){
            return "Good afternoon, " + name + "!";
        }else{
            return "Good evening, " + name + "!";
        }
    }

    return (
        <div className="hello-widget__greeting">
            {greeting()}
        </div>
    );
}
