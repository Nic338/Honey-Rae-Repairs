import { useState } from "react"
import { TicketSearch } from "./TicketSearch"
import { TicketList } from "./TicketList"
//TicketContainer is the parent component so TicketSearch and TicketList can interact with one another
export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
// two siblings cannot interact with each other without a parent component
//TicketList is passed the state component
//TicketSearch is passed the setter function
//these are PROPS like object keys and values
    return <>
     <TicketSearch setterFunction={setSearchTerms}/>
    <TicketList searchTermState={searchTerms}/>

    
    </>
}