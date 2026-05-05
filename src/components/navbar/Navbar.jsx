import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='header-list md:inline hidden'>
        <ul className='flex items-center gap-8'>
          <li><Link to='/#home' className='nav-link'>Home</Link></li>
          <li><Link to='/#about' className='nav-link'>About</Link></li>
          <li><Link to='/#menu' className='nav-link'>Menu</Link></li>
          <li><Link to='/booking' className='nav-link'>Reservations</Link></li>
          <li><Link to='/#menu' className='nav-link'>Order Online</Link></li>
          <li><Link to='/' className='nav-link'>Login</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar