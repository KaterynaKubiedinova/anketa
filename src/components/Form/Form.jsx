import React from 'react';
import Input from '../Input/Input';
import './style.css';
import TextArea from '../TextArea/TextArea';

export default class Form extends React.Component {
	render() {
		return (
			<form className='form'>
				<h1>Сreating a questionnaire</h1>
				<Input placeholder='Name'/>
				<Input placeholder='Surname'/>
				<Input placeholder='Date of birth'/>
				<Input placeholder='Phone number'/>
				<Input placeholder='Website'/>
				<TextArea placeholder='About yourself'/>
				<TextArea placeholder='Technology stack'/>
				<TextArea placeholder='Description of the latest project'/>
				<button>Cancel</button>
				<button>Save</button>
			</form> 
		);
	}
}
