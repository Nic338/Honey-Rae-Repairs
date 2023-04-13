import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    // created two higher order components to seperate the employee views from the customer views
    if(honeyUserObject.staff) {
        //return employeenav
        return <EmployeeNav />
    }
    else {
        //return customernav
        return <CustomerNav />
    }
}


