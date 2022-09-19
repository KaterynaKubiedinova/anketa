import React from 'react';
import './style.css';

export default class TextArea extends React.Component {
	render() {
		const placeholder = this.props.placeholder;
		
		return (
			<div className='multi-line'>
				<label>{placeholder}</label>
				<textarea 
					rows='7' 
					maxLength={600} 
					placeholder={placeholder}>
				</textarea>
			</div>
		);
	}
}
