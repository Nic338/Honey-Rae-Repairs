import { Link } from "react-router-dom"
// needs to contain a component function that accepts a single customer object as a prop, needs to display name, address, phone number
export const Customer = ( {id, fullName } ) => {
  
  return <section className="customer">
    <div>
        <Link to={`/customers/${id}`}>Name: {fullName} </Link>
    </div>
</section>
}
