import { Component } from "react";

export default class Greeter extends Component {

    constructor(){
        super();
        this.name="Unknown";
    }

    render(){
        return (<div>
            <h1>Greeter</h1>
            <input type="text" value={this.name} placeholder="Enter Name" />
            <p>Hello, {this.name}</p>
        </div>)
    }
}