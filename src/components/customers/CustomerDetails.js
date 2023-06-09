import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerDetails } from "../ApiManager";


// needs to create a component that displays the full name, email, phone#, and address of the customer when the customer's name is clicked in the list

export const CustomerDetails = () => {
    const [customer, updateCustomer] = useState()
    const {customerId} = useParams()

    useEffect(() => {
        getCustomerDetails(customerId)
        .then(data => {
            const singleCustomer = data[0]
            updateCustomer(singleCustomer)
        })},
        [customerId]
        )

    return (
        <div className="customer">
            <header className="customer__header">{customer?.user?.fullName}</header>
            <p> Email:{customer?.user?.email}</p>
            <p> Phone:{customer?.phoneNumber}</p>
            <footer className="customer__footer"> Address:{customer?.address}</footer>
        </div>
    )
}