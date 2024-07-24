import { Component, useState } from "react";

/* export default class Greeter extends Component {

    constructor(){
        super();
        // this.name="Unknown";
        this.state={
            name:"Unknown"
        }
        this.keyHandler = this.keyHandler.bind(this);  
        this.changeHandler = this.changeHandler.bind(this); 
    }

    keyHandler(e){
        console.log("Key Pressed",e.key);
    }

    changeHandler(e){
        //this will trigger render method (UI will update)
        this.setState({
            name:e.target.value.toUpperCase()
        })
    }

    render(){
        return (<div>
            <h1>Greeter</h1>
            <input type="text" value={this.state.name} 
                // onKeyUp={this.keyHandler} 
                onChange={this.changeHandler}
                placeholder="Enter Name" />
            <p>Hello, {this.state.name}</p>
        </div>)
    }
} */

export default function Greeter(){

    const[name,setName] = useState("Unknowm");
    const changeHandler = (e) => {
        setName(e.target.value.toUpperCase());
    }

    return ( 
        <div>
            <h1> Greeter</h1>
            <input type="text" value={name} onChange={changeHandler} placeholder="Enter Name" />
            <p> Helloooo, {name} </p>
        </div>
    )
}