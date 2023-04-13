

//this is where im using what im pullingout of EmployeeList's employeeArray

import { Link } from "react-router-dom"

export const Employee = ({id, fullName, email}) => {
    //this is built by the EmployeeList component
    //changed the name to a react router link, reroute the browser to employees/"the employee id"
    return <section className="employee">
    <div>
        <Link to={`/employees/${id}`}>Name: {fullName} </Link>
    </div>
    <div>Email: {email}</div>
</section>
}