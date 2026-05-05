import React from 'react'
import food from '../../img/restaurantfood.jpg'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='home' className='hero-section px-6 md:px-12 py-12'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
        
        <div className='flex-1 text-left'>
          <h1 className='mb-1'>Little Lemon</h1>
          <h2 className='text-white mb-6'>Chicago</h2>
          <p className='text-white text-xl md:text-2xl font-karla max-w-md mb-8 leading-relaxed'>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to='/booking'>
            <button className='btn-primary' aria-label="Reserve a table">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className='flex-1 flex justify-center md:justify-end'>
          <div className='hero-img-container'>
            <img src={food} alt="Little Lemon Restaurant Food" className='hero-img' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero