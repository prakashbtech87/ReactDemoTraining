export default function ListView(props){





// Create JSX to disply num of emp as table 

return (
    <div>
        <h1>{props.message}</h1>
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
                    props.employees.map((emp, index) => {
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
