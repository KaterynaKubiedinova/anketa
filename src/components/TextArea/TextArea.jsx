import React from 'react';
import './style.css';

export default class TextArea extends React.Component {
	constructor() {
		super();
		this.state = {
			fieldLength: 0
		}
	}

	textChange = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;

		this.props.onChange(name, value);
		this.setState({
			fieldLength: value.trim().length
		})
	}

	render() {
		const placeholder = this.props.placeholder;
		const value = this.props.value;
		const inputName = this.props.inputName;
		const type = this.props.typeData;
		
		return (
			<div className='multi-line'>
				<label htmlFor={inputName}>{placeholder}</label>
				<textarea 
					name={inputName}
					type={type}
					value={value}
					onChange={this.textChange}
					rows='7' 
					placeholder={placeholder}>
				</textarea>
				{
					this.state.fieldLength <= 600 ? 
					<span>Remains {600 - this.state.fieldLength}/600 symbols</span> :
					<span style={{color: 'red', background: 'rgb(255, 215, 215)'}}>The character limit in the field has been exceeded.</span>
				}
				
			</div>
		);
	}
}