import React from 'react';
import './style.css';

export default class Input extends React.Component {
	inputChange = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value.trim();

		this.props.onChange(name, value);
	}

	render() {
		const placeholder = this.props.placeholder;
		const value = this.props.value;
		const inputName = this.props.inputName;
		const type = this.props.typeData;

		return (
			<div className='single-line'>
				<label htmlFor={inputName}>{placeholder}</label>
				<input 
					placeholder={placeholder}
					type={type}
					name={inputName}
					value={value}
					onChange={this.inputChange}/>
			</div>
		);
	}
}