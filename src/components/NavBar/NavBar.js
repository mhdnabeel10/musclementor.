import React from 'react'
import "./NavBar.css"
import {Link,useLocation } from "react-router-dom"


function Navbar() {
  const loction=useLocation();
  const isHomepage = loction.pathname === '/';
  return (
  
  <div className='nav-bar'> 
  <div className='logo'>MuscleMentor</div>
    <ul className='nav-links'>
      {isHomepage ? null :<li >
        <Link to="/" className='rounded-button'>Home</Link>
        </li>}
      <li><Link to="/about" className='rounded-button'>About</Link></li>
      <li ><Link to="/exercises" className='rounded-button'>Exercise</Link></li>
    </ul>
    
</div>
  )
}

export default Navbar