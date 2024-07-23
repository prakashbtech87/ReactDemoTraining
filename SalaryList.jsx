import { Component } from "react";

export default class SalaryList extends Component{
    render(){
        return(
            <div>
                <h1>Salary List</h1>
                {
                    this.props.data.map((emp,index)=>{
                        return(
                            <div key={index}>
                                <h3>{emp.name}</h3>
                                <p>Salary: {emp.salary}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}