// import { useRef } from "react"; // import useRef hook from react library
import { Component, createRef } from "react";


// export default function Calculator() {

//     let textBox1 = useRef();
//     let textBox2 = useRef();

//     const buttonHandler = () => {
//         let num1 = parseInt(textBox1.current.value);
//         let num2 = parseInt(textBox2.current.value);
//         alert( "Sum is " + (num1 + num2) ); 
//     }   

//     return (
//         <div>
//             <h1>Calculator</h1>
//             <input type="text" ref={textBox1} placeholder="Enter Number 1" />
//             <input type="text" ref={textBox2} placeholder="Enter Number 2" />
//             <button onClick={buttonHandler}>Add</button>
//         </div>
//     )
// }

export default class Calculator extends Component {

    constructor() {
        super();
        
        this.buttonHandler = this.buttonHandler.bind(this);
        this.textBox1 = createRef();
        this.textBox2 = createRef();
    }

    buttonHandler() {    
        let num1 = parseInt(this.textBox1.current.value);
        let num2 = parseInt(this.textBox2.current.value);  
        alert( "Sum is " + (num1 + num2));
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <input type="text" ref={this.textBox1} placeholder="Enter Number 1" />
                <input type="text" ref={this.textBox2} placeholder="Enter Number 2" />
                <button onClick={this.buttonHandler}>Add</button>
            </div>
        )
    }
}