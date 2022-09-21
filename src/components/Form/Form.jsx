import React from 'react';
import Input from '../Input/Input';
import './style.css';
import TextArea from '../TextArea/TextArea';
import SavedField from '../SavedField/SavedField';
import PhoneInput from '../PhoneInput/PhoneInput';
import ErrorMessage from '../ErrorMessge/ErrorMessage';

export default class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			saved: false,
			user: {
				name: '',
				surname: '',
				birthday: '',
				phone: '',
				website: '',
				aboutYourself: '',
				technology: '',
				lastProject: ''
			},
			clickedSave: false,
			isEmptyField: false,
			validName: false,
			validSurname: false,
			validPhone: false,
			validWebsite: false, 
			validBirthday: false,
			validAboutYourself: false,
			validTechnology: false,
			validProject: false
		};
		
		this.onSave = this.onSave.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.dataChange = this.dataChange.bind(this);
		this.validation = this.validation.bind(this);
	}

	dataChange(property, value) {
		if (this.setState.clickedSave) {
			this.validation();
		}
		this.setState((state) => ({
			...state,
			user: {
				...state.user,
				[property]: value.trimStart()
			}
		}));
	}

	onCancel(e) {
		e.preventDefault();
		this.setState({
			saved: false,
			user: {
				name: '',
				surname: '',
				birthday: '',
				phone: '',
				website: '',
				aboutYourself: '',
				technology: '',
				lastProject: ''
			},
			clickedSave: false,
			isEmptyField: false,
			validName: false,
			validSurname: false,
			validPhone: false,
			validWebsite: false, 
			validBirthday: false,
			validAboutYourself: false,
			validTechnology: false,
			validProject: false
		});
	}

	validation() {
		const user = this.state.user;
		if (user.name) {
			const firstLetter = user.name[0];
			const nameValidation = firstLetter === firstLetter.toUpperCase();

			if (nameValidation) {
				this.setState({
					validName: true
				});
			}else {
				this.setState({
					validName: false
				});
			}
		}
		
		if (user.surname) {
			const firstLetter = user.surname[0];
			const surnameValidation = firstLetter === firstLetter.toUpperCase();

			if (surnameValidation) {
				this.setState({
					validSurname: true
				});
			}else {
				this.setState({
					validSurname: false
				});
			} 
		}

		if (user.website) {
			const isWebsite = user.website.slice(0,8);
			const websiteValidation = isWebsite === 'https://';

			if (websiteValidation) {
				this.setState({
					validWebsite: true
				});
			}else {
				this.setState({
					validWebsite: false
				});
			} 
		}

		if (user.birthday) {
			const now = new Date();
			const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
			console.log(today, user.birthday)
			const birthdayValidation = new Date(user.birthday) < today;
			console.log(birthdayValidation)

			if (birthdayValidation) {
				this.setState({
					validBirthday: true
				});
			}else {
				this.setState({
					validBirthday: false
				});
			} 
		}
		
		if (user.phone) {
			const reg = /\d-\d{4}-\d{2}-\d{2}/g;
			const phoneValidation = reg.test(user.phone);
			
			if (phoneValidation) {
				this.setState({
					validPhone: true
				});
			}else {
				this.setState({
					validPhone: false
				});
			} 
		}

		if (user.aboutYourself) {
			const aboutYourselfValidation = user.aboutYourself.trim().length <= 600;

			if (aboutYourselfValidation) {
				this.setState({
					validAboutYourself: true
				});
			}else {
				this.setState((state) => ({
					...state,
					validAboutYourself: false
				}));
			}
		}

		if (user.technology) {
			const technologyValidation = user.technology.trim().length <= 600;

			if (technologyValidation) {
				this.setState({
					validTechnology: true
				});
			}else {
				this.setState({
					validTechnology: false
				});
			}
		}

		if (user.lastProject) {
			const lastProjectValidation = user.lastProject.trim().length <= 600;

			if (lastProjectValidation) {
				this.setState({
					validProject: true
				});
			}else {
				this.setState({
					validProject: false
				});
			}
		}
	}

	onSave(e) {
		const user = this.state.user;
		e.preventDefault();
		this.setState({
			clickedSave: true
		});
		this.validation();

		const emptyCondition = !(user.name && user.surname && user.birthday && user.phone && user.website && user.aboutYourself && user.technology && user.lastProject);

		if (emptyCondition) {
			this.setState({
				saved: false,
				isEmptyField: true
			});
		} else {
			const stateValidation = this.state.validBirthday && this.state.validName && this.state.validSurname && this.state.validWebsite && this.state.validAboutYourself && this.state.validTechnology && this.state.validProject;

			if (stateValidation) {
				this.setState({
					saved: true,
					clickedSave: false,
					isEmptyField: false,
				});
			} else {
				this.setState({
					saved: false,
					isEmptyField: false
				});
			}
		}
	}
	componentDidUpdate() {
		console.log(this.state.user, this.state.validAboutYourself, this.state.validBirthday, this.state.validName);
	}

	render() {
		const user = this.state.user;

		return (
			<>
				{
				!this.state.saved ? 
				<form className='form'>
					<h1>Сreating a form</h1>
					<Input 
						placeholder='Name'
						typeData='text' 
						value={user.name}
						inputName='name'
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.name ? 
							<ErrorMessage/> : 
							<></>
						}
						{
							!this.state.validName && this.state.clickedSave && user.name ? 
							<span>Not valid name. The first letter must be capitalized.</span> : 
							<></>
						}
					</div>
					<Input 
						placeholder='Surname'
						typeData='text'
						value={user.surname}
						inputName='surname'
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.surname ? 
							<ErrorMessage/> : 
							<></>
						}
						{
							!this.state.validSurname && this.state.clickedSave  && user.surname ? 
							<span>Not valid surname. The first letter must be capitalized.</span> : 
							<></>
						}
					</div>	
					<Input 
						placeholder='Date of birth'
						typeData='date'
						value={user.birthday} 
						inputName='birthday'
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.birthday ? 
							<ErrorMessage/> : 
							<></>
						}
						{
							!this.state.validBirthday && this.state.clickedSave  && user.birthday ? 
							<span>Not valid date of birth. The birthday cannot be in the future.</span> : 
							<></>
						}
					</div>
					<PhoneInput
						placeholder='Phone number'
						value={user.phone}
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.phone ? 
							<ErrorMessage/> : 
							<></>
						}
						{
							!this.state.validPhone && this.state.clickedSave && user.phone ? 
							<span>Not valid phone. The phone must be 'x-xxxx-xx-xx'</span> : 
							<></>
						}
					</div>
					<Input 
						placeholder='Website' 
						typeData='text'
						value={user.website}
						inputName='website'
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.website ? 
							<ErrorMessage/> : 
							<></>
						}
						{
							!this.state.validWebsite && this.state.clickedSave && user.website ? 
							<span>Not valid website. The website must start from 'https://'.</span> : 
							<></>
						}
					</div>
					<TextArea 
						placeholder='About yourself' 
						typeData='text'
						value={user.aboutYourself} 
						inputName='aboutYourself'
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.aboutYourself ? 
							<ErrorMessage/> : 
							<></>
						}
					</div>
					<TextArea 
						typeData='text'
						placeholder='Technology stack' 
						value={user.technology} 
						inputName='technology'
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.technology ? 
							<span>This field must be filled.</span> : 
							<></>
						}
					</div>
					<TextArea 
						typeData='text'
						placeholder='Description of the latest project' 
						value={user.lastProject}
						inputName='lastProject'
						dataChange={this.dataChange}/>
					<div className='errors'>
						{
							this.state.isEmptyField && !user.lastProject ? 
							<ErrorMessage/> : 
							<></>
						}
					</div>
					<button onClick={this.onCancel}>Cancel</button>
					<button onClick={this.onSave}>Save</button>
				</form> : 
				<div className='saved-form'> 
					<h2>{user.name} {user.surname}</h2>
					<SavedField descriptor='Name:'  value={user.name}/>
					<SavedField descriptor='Surname:'  value={user.surname}/>
					<SavedField descriptor='Date of birth:'  value={user.birthday}/>
					<SavedField descriptor='Phone number:'  value={user.phone}/>
					<SavedField descriptor='Website:'  value={user.website}/>
					<SavedField descriptor='About yourself:'  value={user.aboutYourself}/>
					<SavedField descriptor='Technology stack:'  value={user.technology}/>
					<SavedField descriptor='Description of the latest project:'  value={user.lastProject}/>
				</div>
				}
			</> 
		);
	}
}
