import React from 'react';
import './style.css';

export default function PhoneInput({placeholder, value, onChange}) {
	function phoneChange(e) {
		e.preventDefault();
		const name = e.target.name;
		let value = e.target.value.trim();
		
		if (value.length <= 12) {
			onChange(name, value);
		}
	}

	return (
		<div className='single-line'>
			<label htmlFor='phone'>{placeholder}</label>
			<input 
				placeholder={placeholder}
				type='tel'
				name='phone'
				value={value}
				pattern='/\d-\d{4}-\d{2}-\d{2}/g'
				onChange={phoneChange}/>
		</div>
	);
}
