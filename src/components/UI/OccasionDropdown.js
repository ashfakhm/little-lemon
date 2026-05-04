import React, { useState } from 'react';
import { ChevronDown, Cake, Heart, Star, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './OccasionDropdown.css';

const occasions = [
  { id: 'birthday', label: 'Birthday', icon: <Cake size={20} /> },
  { id: 'engagement', label: 'Engagement', icon: <Heart size={20} /> },
  { id: 'anniversary', label: 'Anniversary', icon: <Star size={20} /> },
  { id: 'other', label: 'Other Special Occasion', icon: <PartyPopper size={20} /> }
];

const OccasionDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOccasion = occasions.find(o => o.id === value);
  const isSelected = !!selectedOccasion;

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (id) => {
    onChange(id);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="occasion-dropdown-container">
      <button 
        type="button"
        className={`dropdown-header ${isSelected ? 'selected' : ''}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Occasion"
      >
        <div className="header-content">
          {isSelected ? selectedOccasion.icon : <PartyPopper size={20} />}
          <span>{isSelected ? selectedOccasion.label : 'Select Occasion'}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            className="dropdown-list"
            role="listbox"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {occasions.map((occasion) => (
              <li 
                key={occasion.id} 
                role="option" 
                aria-selected={value === occasion.id}
              >
                <button 
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleSelect(occasion.id)}
                >
                  <span className="item-icon">{occasion.icon}</span>
                  <span className="item-label">{occasion.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OccasionDropdown;
