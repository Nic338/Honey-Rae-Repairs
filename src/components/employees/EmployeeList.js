import { useState, useEffect } from "react"
import { Employee } from "./Employee"
import "./Employees.css"
import { getAllEmployeeUsers } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
        getAllEmployeeUsers()
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
    },[]
    )
    return <article className="employees">
        {
            //the key needs to be where you are rendering multiple components
            //the props are what im pulling out of the employeeArray
            employees.map(employee => <Employee key={`employee--${employee.id}`}
                id={employee.id} 
                fullName={employee.fullName} 
                email={employee.email}/>)
        }
    
    </article>
}