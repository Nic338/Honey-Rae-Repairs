import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"




export const EmployeeDetails = () => {
    // employeeId is the state we are getting from the Route in EmployeeViews
    //useParams grabs the employeeId out of the URL so you can use it in the fetch call to get the rest of the Details for the employee of which you clicked on
    const {employeeId} = useParams()
    const [employee, updateEmployee] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`)
            .then(response => response.json())
            .then((data) => {
                const singleEmployee = data[0]
                updateEmployee(singleEmployee)
            })
        },
        [employeeId]
    )
// updated JSX to render all the properties you grabbed from the fetch call with the useParams()
    return <section className="employee">
    <header className="employee__header">{employee?.user?.fullName}</header>
    <div>Email:{employee?.user?.email}</div>
    <div>Specialty:{employee?.specialty}</div>
    <div>Rate:{employee?.rate}</div>
    <footer className="employee__footer">Currently working on {employee?.employeeTickets?.length} tickets</footer>
</section>
}