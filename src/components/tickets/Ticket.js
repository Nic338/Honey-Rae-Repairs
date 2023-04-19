import { Link } from "react-router-dom"
import { claimTicket, deleteSpecificTicket, getAllTicketsWithEmployeeAssignments, updateTicketWithDateComplete } from "../ApiManager"

export const Ticket = ({ ticketObject, currentUser, employees, getAllTickets }) => {

//find the assigned employee for the current ticket
let assignedEmployee = null

if(ticketObject.employeeTickets.length > 0) {
    const ticketEmployeeRelationship = ticketObject.employeeTickets[0]
    assignedEmployee = employees.find(employee => employee.id === ticketEmployeeRelationship.employeeId)
}

//find the employee profile object for the current user
const userEmployee = employees.find( employee => employee.userId === currentUser.id)


// Fuction that determines if the current user can close the ticket
const canClose = () => {
    if (userEmployee?.id === assignedEmployee?.id && ticketObject.dateCompleted === "") {
        return <button onClick={closeTicket} className="ticket__finish">Finish</button>
    }
    else {
        return ""
    }
}

const deleteButton = () => {
    if (!currentUser.staff) {
        return <button onClick={() => {
            deleteSpecificTicket(ticketObject)
            .then(() => {
                getAllTicketsWithEmployeeAssignments()
            })
        }} className="ticket__delete">Delete</button>
    }
    else {
        return ""
    }
}

//Fuction that updates the ticket with a new date completed
const closeTicket = () => {
    const copy = {
       userId: ticketObject.userId,
       description: ticketObject.description,
       emergency: ticketObject.emergency,
       dateCompleted: new Date() 
    }

    return updateTicketWithDateComplete(ticketObject, copy)
        .then(getAllTickets)
        

}


const buttonOrNoButton = () => {
    if (currentUser.staff) {
        return <button 
        onClick={() => {
            claimTicket(userEmployee, ticketObject)
            .then(() => {
                //get state from the API again
                getAllTicketsWithEmployeeAssignments()
             })
        }}
        > Claim </button>
    }
    else {
        return ""
    }
}

    return <section className="ticket" key={`ticket--${ticketObject.id}`}>
    <header className="ticket__header">
        {
            currentUser.staff
            ? `Ticket ${ticketObject.id}`
            : <Link to={`/tickets/${ticketObject.id}/edit`}>Ticket {ticketObject.id}</Link>          
        }
    </header>
    <section>{ticketObject.description}</section>
    <section>Emergency: {ticketObject.emergency ? "🧨" : "No"}</section>
    <footer className="ticket__footer">
        {
            ticketObject.employeeTickets.length
                ? `Currently being worked on by ${assignedEmployee !== null ? assignedEmployee?.user?.fullName : ""}`
                : buttonOrNoButton()
        }
        {
            canClose()
        }
        {
            deleteButton()
        }
    </footer>

</section>
}