import React from 'react';
import Button from '../UI/Button';
import './Specials.css';

const specials = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/greek-salad.jpg'
  },
  {
    id: 2,
    title: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/bruschetta.svg'
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: '/lemon-dessert.jpg'
  }
];

const Specials = () => {
  return (
    <section id="menu" className="specials container">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        <Button variant="primary">Online Menu</Button>
      </div>
      <div className="specials-grid">
        {specials.map(dish => (
          <article key={dish.id} className="dish-card">
            <div className="dish-image" style={{backgroundImage: `url(${dish.image})`}}></div>
            <div className="dish-content">
              <div className="dish-title-row">
                <h3>{dish.title}</h3>
                <span className="dish-price">{dish.price}</span>
              </div>
              <p>{dish.description}</p>
              <button className="order-link">
                Order a delivery 
                <img src="/basket.svg" alt="basket" className="delivery-icon" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
