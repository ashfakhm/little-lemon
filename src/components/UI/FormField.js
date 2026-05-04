import React from 'react';
import './FormField.css';

const FormField = ({ label, id, error, children, ...props }) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">{label}</label>
      <div className="form-control-wrapper">
        {children || <input id={id} className={`form-input ${error ? 'error' : ''}`} {...props} />}
      </div>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default FormField;
