import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Sarah J.',
    rating: 5,
    text: 'The best Greek salad I have ever had! The atmosphere is so cozy and the service is impeccable.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Michael R.',
    rating: 5,
    text: 'Authentic flavors that remind me of my trip to the Mediterranean. A hidden gem in Chicago!',
    image: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 3,
    name: 'Emily L.',
    rating: 4,
    text: 'Great experience! The lemon dessert is to die for. Definitely coming back next week.',
    image: 'https://i.pravatar.cc/150?u=emily'
  },
  {
    id: 4,
    name: 'David W.',
    rating: 5,
    text: 'Reservation was easy and the table was ready exactly on time. Perfect for a business dinner.',
    image: 'https://i.pravatar.cc/150?u=david'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h1>Testimonials</h1>
        <div className="testimonials-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card glass">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                ))}
              </div>
              <div className="review-profile">
                <img src={review.image} alt={review.name} className="profile-img" />
                <h3>{review.name}</h3>
              </div>
              <p>"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
