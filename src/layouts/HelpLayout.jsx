import { NavLink, Outlet } from "react-router-dom"

function HelpLayout() {
  return (
    <div className="help-layout">
      <h1>Welcome to Help section</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sequi.</p>
      <nav className="help-nav">
      <NavLink to="faq">View the FAQ</NavLink>
      <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HelpLayout
