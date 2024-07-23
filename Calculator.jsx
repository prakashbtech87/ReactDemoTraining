import { useRef } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";

export default function Calculator() {


    let textBox1=useRef(0);
    let textBox2=useRef(0);

const buttonHandler = ()=>{
    let num1= parseInt(textBox1.current.value);
    let num2= parseInt(textBox2.current.value);
   alert("Sum is :"+(num1+num2));
}

    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" ref={textBox1} placeholder="Enter Number 1" /><br/>
            <input type="text" ref={textBox2} placeholder="Enter Number 2" /><br/>
            <button onClick={buttonHandler}>Add</button>
        </div>
    )
}