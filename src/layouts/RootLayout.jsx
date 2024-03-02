import { NavLink,Outlet } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
const RootLayout = () => {
  return (
    <div className="root-layout">
    <header>
    <nav>
      <h1>Jobathon</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='help'>Help</NavLink>
      <NavLink to='careers'>Career</NavLink>
    </nav>
    <BreadCrumb/>
   </header>
   <main>
    <Outlet/>
   </main>
    </div>
  )
  }
export default RootLayout;