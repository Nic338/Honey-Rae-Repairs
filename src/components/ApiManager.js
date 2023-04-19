export const getAllCustomerUsers = () => {
return  fetch(`http://localhost:8088/users?isStaff=false`)
        .then(response => response.json())
}
export const getCustomerDetails = (customerId) => {
    return      fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
        .then(response => response.json())
}
export const getEmployeeTicketDetails = (employeeId) => {
    return     fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`)
        .then(response => response.json())
}
export const getAllEmployeeUsers = () => {
    return     fetch(`http://localhost:8088/users?isStaff=true`)
        .then(response => response.json())
}
export const getLoggedInCustomer = (honeyUserObject) => {
    return     fetch(`http://localhost:8088/customers?userId=${honeyUserObject.id}`)
        .then(response => response.json())
}
export const updateSpecificCustomer = (profile) => {
    return     fetch(`http://localhost:8088/customers/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
        .then(response => response.json())
}
export const getLoggedInEmployee = (honeyUserObject) => {
    return     fetch(`http://localhost:8088/employees?userId=${honeyUserObject.id}`)
        .then(response => response.json())
}
export const updateSpecificEmployee = (profile) => {
    return      fetch(`http://localhost:8088/employees/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
        .then(response => response.json())
}
export const deleteSpecificTicket = (ticketObject) => {
    return     fetch(`http://localhost:8088/serviceTickets/${ticketObject.id}`, {
                method: "DELETE"
            })
}
export const updateTicketWithDateComplete = (ticketObject, copy) => {
    return     fetch(`http://localhost:8088/serviceTickets/${ticketObject.id}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(copy)
    })
        .then(response => response.json())
}
export const claimTicket = (userEmployee, ticketObject) => {
    return     fetch(`http://localhost:8088/employeeTickets`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    employeeId: userEmployee.id,
                    serviceTicketId: ticketObject.id
                })
            })
        .then(response => response.json())
}
export const getSpecificTicket = (ticketId) => {
    return     fetch(`http://localhost:8088/serviceTickets/${ticketId}`)
        .then(response => response.json())
}
export const editTicket = (ticket) => {
    return     fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })
        .then(response => response.json())
}
export const createNewTicket = (ticketToSendToAPI) => {
    return     fetch(`http://localhost:8088/serviceTickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketToSendToAPI)
    })
        .then(response => response.json())
}
export const getAllTicketsWithEmployeeAssignments = (setTickets) => {
    return    fetch(`http://localhost:8088/serviceTickets?_embed=employeeTickets`)
       .then(response => response.json())
       .then((ticketArray) => {
        setTickets(ticketArray)
       })
}
export const getAllEmployeesDetails = () => {
    return    fetch(`http://localhost:8088/employees?_expand=user`)
        .then(response => response.json())
}