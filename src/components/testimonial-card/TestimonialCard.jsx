import React from 'react'
import './TestimonialCard.css'
import { Star } from 'lucide-react'

const TestimonialCard = ({user}) => {
  return (
    <div className='testimonial-card flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
      <div className='flex gap-1 mb-4'>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#F4CE14" color="#F4CE14" />
        ))}
      </div>
      
      <div className='flex items-center gap-4 mb-4'>
        <img src={user.image} alt={user.name} className='w-12 h-12 rounded-full object-cover' />
        <h3 className='font-bold text-lg'>{user.name}</h3>
      </div>

      <p className='text-neutral-600 font-karla text-sm italic leading-relaxed'>
        "The atmosphere was incredible and the food was even better. Truly a Mediterranean gem in Chicago!"
      </p>
    </div>
  )
}

export default TestimonialCard