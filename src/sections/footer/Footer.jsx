import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../img/Logo.svg'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container py-16 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12'>
        <div className='flex justify-center md:justify-start items-start'>
          <img src={logo} alt="Little Lemon Logo" className='w-40' />
        </div>
        
        <div className='footer-nav'>
          <h6 className='mb-6'>Navigation</h6>
          <ul className='flex flex-col gap-3'>
            <li><Link to='/#home'>Home</Link></li>
            <li><Link to='/#about'>About</Link></li>
            <li><Link to='/#menu'>Menu</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            <li><Link to='/#menu'>Order Online</Link></li>
            <li><Link to='/'>Login</Link></li>
          </ul>
        </div>
        
        <div className='footer-contact'>
          <h6 className='mb-6'>Contacts</h6>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>Baker Street, 221b</li>
            <li>555-5555</li>
            <li>littlelemon@email.com</li>
          </ul>
        </div>
        
        <div className='footer-social flex flex-col'>
          <h6 className='mb-6'>Social Media</h6>
          <ul className='social-icons flex gap-6'>
            <li><BsFacebook size={28} aria-label="Facebook" /></li>
            <li><BsInstagram size={28} aria-label="Instagram" /></li>
            <li><BsTwitter size={28} aria-label="Twitter" /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer