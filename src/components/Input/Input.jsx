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
		const {placeholder, value, inputName, typeData} = this.props;

		return (
			<div className='single-line'>
				<label htmlFor={inputName}>{placeholder}</label>
				<input 
					placeholder={placeholder}
					type={typeData}
					name={inputName}
					value={value}
					onChange={this.inputChange}/>
			</div>
		);
	}
}
