import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import FormField from './UI/FormField';
import Button from './UI/Button';
import OccasionDropdown from './UI/OccasionDropdown';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'None',
    seating: 'Indoor',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="success-screen glass"
      >
        <div className="success-icon">✨</div>
        <h2>Reservation Confirmed!</h2>
        <p>A confirmation email has been sent to your inbox.</p>
        <div className="reservation-summary">
          <div><strong>Date:</strong> {formData.date}</div>
          <div><strong>Time:</strong> {formData.time}</div>
          <div><strong>Guests:</strong> {formData.guests}</div>
          <div><strong>Occasion:</strong> {formData.occasion}</div>
          <div><strong>Seating:</strong> {formData.seating}</div>
        </div>
        <Button onClick={() => setSubmitted(false)}>Make Another Reservation</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form glass">
      <div className="form-header">
        <h1>Reserve a Table</h1>
        <p>Secure your spot at Little Lemon today.</p>
      </div>

      <div className="form-grid">
        <FormField label="Date" id="date">
          <div className="input-with-icon">
            <Calendar size={18} />
            <input 
              type="date" 
              name="date" 
              id="date" 
              required 
              className="form-input" 
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </FormField>

        <FormField label="Time" id="time">
          <div className="input-with-icon">
            <Clock size={18} />
            <select 
              name="time" 
              id="time" 
              required 
              className="form-input"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">Select Time</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>
        </FormField>

        <FormField label="Number of Diners" id="guests">
          <div className="input-with-icon">
            <Users size={18} />
            <input 
              type="number" 
              name="guests" 
              id="guests" 
              min="1" 
              max="10" 
              required 
              className="form-input"
              value={formData.guests}
              onChange={handleChange}
            />
          </div>
        </FormField>

        <FormField label="Occasion" id="occasion">
          <OccasionDropdown 
            value={formData.occasion} 
            onChange={(val) => setFormData(prev => ({ ...prev, occasion: val }))} 
          />
        </FormField>

        <FormField label="Seating Options" id="seating">
          <div className="input-with-icon">
            <MapPin size={18} />
            <select 
              name="seating" 
              id="seating" 
              className="form-input"
              value={formData.seating}
              onChange={handleChange}
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Window">Window Seat</option>
            </select>
          </div>
        </FormField>
      </div>

      <FormField label="Additional Comments" id="comments">
        <div className="input-with-icon top">
          <MessageSquare size={18} />
          <textarea 
            name="comments" 
            id="comments" 
            className="form-textarea" 
            placeholder="Special requests, allergies, etc."
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
      </FormField>

      <div className="form-actions">
        <Button type="submit" disabled={loading}>
          {loading ? 'Confirming...' : 'Reserve Table'}
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
