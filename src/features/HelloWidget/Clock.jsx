import React, { Component } from "react";
import "./HelloWidget.scss"

export class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount(){
        var interval = setInterval(
            () => {
                this.setState({date: new Date()})
            }, 
            1000
        );
    }

    time(){
        if(this.state.date.getMinutes() < 10){
            return `${this.state.date.getHours()}:0${this.state.date.getMinutes()}`;
        }
        return `${this.state.date.getHours()}:${this.state.date.getMinutes()}`;
    }

    render(){
        return (
            <div className="hello-widget__clock">
                {this.state.date.getHours() + ":" + this.state.date.getMinutes()}
            </div>
        );
    }
}