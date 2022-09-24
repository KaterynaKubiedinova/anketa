import React from 'react';
import './style.css';

export default function SavedField({descriptor, value}) {
	return ( 
			<div className='saved-field'>
				<h4>{descriptor}</h4>
				<span>{value}</span>
			</div>
	);
}
