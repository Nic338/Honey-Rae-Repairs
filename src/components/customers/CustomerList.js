import { useState, useEffect } from "react"
import { Customer } from "./Customer"
import "./customers.css"


//needs to contain a component function that fetches all customers and iterates the array in the JSX to display the name of each customer by passing each object to the Customer component as a prop

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=false`)
            .then(response => response.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },[]
    )

    return <article className="customers">
        {
            customers.map(customer => <Customer key={`customer--${customer.id}`} 
            id={customer.id}
            fullName={customer.fullName}
            address={customer.address}
            phoneNumber={customer.phoneNumber} />)
        }       
        
    
    </article>
}
