import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Home from './components/Home';
import ListView from './components/ListView';
import SalaryList from './components/SalaryList';
import Calculator from './components/Calculator';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component{
//   render(){
//     return(
//       <>
//       <div className="App">
//         <h1> Hello World</h1>
//         <h1> hi</h1>
//       </div>
//       </>
//     );
//   }
// }


export default class App extends Component{


  constructor() {
    super();
    // create list of employees
    this.employees = [
      { id: 1, name: "Sonu", salary: 10000, department: "IT" },
      { id: 2, name: "Ravi", salary: 20000, department: "HR" },
      { id: 3, name: "Arun", salary: 30000, department: "Finance" },
      { id: 4, name: "Rahul", salary: 40000, department: "IT" },
      { id: 5, name: "Ajay", salary: 50000, department: "HR" }
  ];
  
  this.title="Employee List";
  }

  render(){
    return(
      <>
      <Home />
      <Calculator/>
      {/* <ListView employees={this.employees} message={this.title}/>
      <SalaryList data={this.employees} /> */}
      </>
    )
  }
}


