import React from 'react';
import './style.css';

export default class Input extends React.Component {
	render() {
		const placeholder = this.props.placeholder;

		return (
			<div className='single-line'>
				<label>{placeholder}</label>
				<input placeholder={placeholder}/>
			</div>
		);
	}
}
