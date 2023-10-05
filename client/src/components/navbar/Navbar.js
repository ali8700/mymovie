import React from 'react'
import './Navbar.css'
const Navbar = ({auth,logout}) => {
  return (
    <div><nav className="navMenu">
    <a href="#">{auth.name}</a>
    {
      auth.role === "admin" ?
       (<><a href="#">view users</a>
      <a href="#">work admin</a></>) :
      (<><a href="/contacts">view contacts</a>
      <a href="/addContact">ajout contact</a></>) 
    }
  
    <a href="#"    onClick={()=>logout()}>logout</a>
    <div className="dot" />
  </nav>
  </div>
  )
}

export default Navbar