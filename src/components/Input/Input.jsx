import React from 'react';
import './style.css';

export default function Input({
  placeholder,
  value,
  inputName,
  typeData,
  onChange,
}) {
  function inputChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value.trim();

    onChange(name, value);
  }

  return (
    <div className='single-line'>
      <label htmlFor={inputName}>{placeholder}</label>
      <input
        placeholder={placeholder}
        type={typeData}
        name={inputName}
        value={value}
        onChange={inputChange}
      />
    </div>
  );
}
