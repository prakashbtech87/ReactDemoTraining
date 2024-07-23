export default function ListView(){


// create list of employees

let employees = [
    { id: 1, name: "Sonu", salary: 10000, department: "IT" },
    { id: 2, name: "Ravi", salary: 20000, department: "HR" },
    { id: 3, name: "Arun", salary: 30000, department: "Finance" },
    { id: 4, name: "Rahul", salary: 40000, department: "IT" },
    { id: 5, name: "Ajay", salary: 50000, department: "HR" }
];
// Create JSX to disply num of emp as table 

return (
    <div>
        <h1>Employees List</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp, index) => {
                        return (
                            <tr key={index}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.department}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
)


}
