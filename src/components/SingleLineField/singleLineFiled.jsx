import React from 'react';
import './style.css';

export default class SingleLineFiled extends React.Component {
	render() {
		const value = this.props.value;

		return (
			<div className='single-line'>
				<label for={value}>{value}</label>
				<input id={value} type='text' placeholder={value}/>
			</div>
		);
	}
}
