import React from 'react';
import './style.css';

export default class MoreLineFiled extends React.Component {

	render() {
		const value = this.props.value;
		
		return (
			<div className='more-line'>
				<label for={value}>{value}</label>
				<textarea id={value} rows='7' maxLength={420} placeholder={value}></textarea>
			</div>
		);
	}
}
