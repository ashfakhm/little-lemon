import React from 'react'
import greek from '../../img/greek salad.jpg'
import bruchetta from '../../img/bruchetta.svg'
import lemon_dessert from '../../img/lemon dessert.jpg'
import FoodCard from '../../components/food-card/FoodCard'

const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greek
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemon_dessert
    },
  ]

  return (
    <section id='menu' className='py-16 px-6 md:px-12 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-12 gap-6'>
            <h2>This weeks specials!</h2>
            <button className='btn-primary'>Online Menu</button>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {specials.map((food, index) => {
              return <FoodCard key={index} food={food} />
            })}
          </div>
        </div>
    </section>
  )
}

export default Specials