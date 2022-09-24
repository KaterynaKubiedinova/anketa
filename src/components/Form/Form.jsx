import React from 'react';
import ErrorMessage from '../ErrorMessge/ErrorMessage';
import Input from '../Input/Input';
import PhoneInput from '../PhoneInput/PhoneInput';
import TextArea from '../TextArea/TextArea';
import './style.css'

export default function Form({validWebsite, validPhone, validBirthday, validSurname, validName, isEmptyField, clickedSave, user, onChange, onCancel, onSave}) {
	return (
		<form className='form'>
			<h1>Сreating a form</h1>
			<Input 
				placeholder='Name'
				typeData='text' 
				value={user.name}
				inputName='name'
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.name && validName  ? 
					<ErrorMessage/> : 
					<></>
				}
				{
					!validName && clickedSave && user.name ? 
					<span>Not valid name. The first letter must be capitalized.</span> : 
					<></>
				}
			</div>
			<Input 
				placeholder='Surname'
				typeData='text'
				value={user.surname}
				inputName='surname'
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.surname ? 
					<ErrorMessage/> : 
					<></>
				}
				{
					!validSurname && clickedSave  && user.surname ? 
					<span>Not valid surname. The first letter must be capitalized.</span> : 
					<></>
				}
			</div>	
			<Input 
				placeholder='Date of birth'
				typeData='date'
				value={user.birthday} 
				inputName='birthday'
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.birthday ? 
					<ErrorMessage/> : 
					<></>
				}
				{
					!validBirthday && clickedSave  && user.birthday ? 
					<span>Not valid date of birth. The birthday cannot be in the future.</span> : 
					<></>
				}
			</div>
			<PhoneInput
				placeholder='Phone number'
				value={user.phone}
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.phone ? 
					<ErrorMessage/> : 
					<></>
				}
				{
					!validPhone && clickedSave && user.phone ? 
					<span>Not valid phone. The phone cannot contained letter and must be 'x-xxxx-xx-xx'</span> : 
					<></>
				}
			</div>
			<Input 
				placeholder='Website' 
				typeData='text'
				value={user.website}
				inputName='website'
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.website ? 
					<ErrorMessage/> : 
					<></>
				}
				{
					!validWebsite && clickedSave && user.website ? 
					<span>Not valid website. The website must start from 'https://'.</span> : 
					<></>
				}
			</div>
			<TextArea
				placeholder='About yourself' 
				typeData='text'
				value={user.aboutYourself} 
				inputName='aboutYourself'
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.aboutYourself ? 
					<ErrorMessage/> : 
					<></>
				}
			</div>
			<TextArea
				typeData='text'
				placeholder='Technology stack' 
				value={user.technology} 
				inputName='technology'
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.technology ? 
					<span>This field must be filled.</span> : 
					<></>
				}
			</div>
			<TextArea 
				typeData='text'
				placeholder='Description of the latest project' 
				value={user.lastProject}
				inputName='lastProject'
				onChange={onChange}/>
			<div className='errors'>
				{
					isEmptyField && !user.lastProject ? 
					<ErrorMessage/> : 
					<></>
				}
			</div>
			<button onClick={onCancel}>Cancel</button>
			<button onClick={onSave}>Save</button>
		</form>
	);
}
