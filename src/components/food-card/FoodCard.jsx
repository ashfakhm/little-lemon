import React from 'react'
import './FoodCard.css'
import { Bike } from 'lucide-react'

const FoodCard = ({food}) => {
  const {name, price, image, description} = food;
  return (
    <div className='food-card flex flex-col h-full bg-neutral-100 rounded-2xl overflow-hidden'>
      <div className='w-full h-48 overflow-hidden'>
        <img src={image} alt={name} className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
      </div>
      <div className='p-6 flex flex-col flex-grow'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-xl font-bold'>{name}</h3>
          <span className='price-tag'>{price}</span>
        </div>
        <p className='text-neutral-600 font-karla text-sm mb-6 flex-grow leading-relaxed'>{description}</p>
        <button className='delivery-btn flex items-center gap-2 font-bold hover:text-secondary transition-colors'>
          Order a delivery <Bike size={18} />
        </button>
      </div>
    </div>
  )
}

export default FoodCard