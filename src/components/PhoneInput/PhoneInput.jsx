import React from 'react';
import './style.css';

export default class PhoneInput extends React.Component {
	phoneChange = (e) => {
		e.preventDefault();
		const name = e.target.name;
		let value = e.target.value.trim();
		
		if (value.length <= 12) {
			this.props.onChange(name, value);
		}
	}

	render() {
		const placeholder = this.props.placeholder;
		const value = this.props.value;

		return (
			<div className='single-line'>
				<label htmlFor='phone'>{placeholder}</label>
				<input 
					placeholder={placeholder}
					type='tel'
					name='phone'
					value={value}
					pattern='/\d-\d{4}-\d{2}-\d{2}/g'
					onChange={this.phoneChange}/>
			</div>
		);
	}
}
