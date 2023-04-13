import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
    
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    // created two higher order components to seperate the employee views from the customer views
    if(honeyUserObject.staff) {
        //return employeeviews
        return <EmployeeViews />
    }
    else {
        //return customerviews
        return <CustomerViews />
    }
}