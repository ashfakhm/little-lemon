import React from 'react'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import person1 from '../../img/person1.png'
import person2 from '../../img/person2.png'
import person3 from '../../img/person3.png'
import person4 from '../../img/person4.png'
import './Testimonials.css'

const Testimonials = () => {
  const users = [
    {
      name : 'John',
      image: person1
    },
    {
      name : 'Mary',
      image: person2
    },
    {
      name : 'Joanne',
      image: person3
    },
    {
      name : 'Kim',
      image: person4
    },
  ]


  return (
    <section className='testimonials py-20 px-6 md:px-12 bg-secondary'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center text-white mb-12'>Testimonials</h2>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
          {users.map((user, index) => {
            return <TestimonialCard key={index} user={user} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials