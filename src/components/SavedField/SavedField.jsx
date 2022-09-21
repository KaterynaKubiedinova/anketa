import React, { Component } from 'react';
import './style.css';

class SavedField extends Component {
	render() {
		const descriptor = this.props.descriptor;
		const value= this.props.value;

		return ( 
				<div className='saved-field'>
					<h4>{descriptor}</h4>
					<span>{value}</span>
				</div>
		);
	}
}

export default SavedField;
