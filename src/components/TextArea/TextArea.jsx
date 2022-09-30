import React, { useState } from 'react';
import './style.css';

export default function TextArea({
  onChange,
  placeholder,
  value,
  inputName,
  typeData,
}) {
  const [fieldLength, setFieldLength] = useState(0);

  function textChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    onChange(name, value);
    setFieldLength(value.trim().length);
  }

  return (
    <div className='multi-line'>
      <label htmlFor={inputName}>{placeholder}</label>
      <textarea
        name={inputName}
        type={typeData}
        value={value}
        onChange={textChange}
        rows='7'
        placeholder={placeholder}
      ></textarea>
      {fieldLength <= 600 ? (
        <span>Remains {600 - fieldLength}/600 symbols</span>
      ) : (
        <span className='multi-line-error'>
          The character limit in the field has been exceeded.
        </span>
      )}
    </div>
  );
}
