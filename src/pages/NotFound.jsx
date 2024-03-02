import { NavLink } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>The page youre looking for is not found</h1>
      <p>Get back to  <NavLink path="/">Home </NavLink> Nigga</p>
    </div>
  )
}

export default NotFound
