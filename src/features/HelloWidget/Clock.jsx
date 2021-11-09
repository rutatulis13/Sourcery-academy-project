import React, { Component } from "react";
import './Clock.scss'

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