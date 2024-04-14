import './Fotter.css'
import React from 'react'
import {Link} from "react-router-dom"
 const Footer = () => {
  return (
    <div className='footer'>
      <div className='f-2'>
      <h2 className='h1f'>Get In Touch</h2>
      <a href="mailto:mhdnabeel1021@gmail.com">mhdnabeel1021@gmail.com</a>
      </div> 
      <ul className='nav-link'>
        <li><Link to="/" className='rounded-button'>Home</Link></li>
        <li><Link to="/about" className='rounded-button'>About</Link></li>
        <li ><Link to="/exercises" className='rounded-button'>Exercise</Link></li>
     </ul>
      <p className='pf'>Copyright © 2024 Mohammad Nabeel. All Rights Reserved.</p>
      
    </div>
  )
}


export default Footer;