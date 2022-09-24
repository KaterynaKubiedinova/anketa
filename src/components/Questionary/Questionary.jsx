import React, { useEffect } from 'react';
import './style.css';
import SavedForm from '../SavedField/SavedForm';
import Form from '../Form/Form';
import { useState } from 'react';
import ChangeThemeBtn from '../ChangeThemeBtn/changeTheme';

export default function Questionary() {
	const [user, setUser] = useState({
		name: '',
		surname: '',
		birthday: '',
		phone: '',
		website: '',
		aboutYourself: '',
		technology: '',
		lastProject: ''
	});
	const [saved, setSaved] = useState(false);
	const [clickedSave, setClickedSave] = useState(false);
	const [isEmptyField, setIsEmptyField] = useState(false);
	const [validName, setValidName] = useState(true);
	const [validSurname, setValidSurname] = useState(true);
	const [validPhone, setValidPhone] = useState(true);
	const [validWebsite, setValidWebsite] = useState(true);
	const [validBirthday, setValidBirthday] = useState(true);
	const [validAboutYourself, setValidAboutYourself] = useState(true);
	const [validTechnology, setValidTechnology] = useState(true);
	const [validProject, setValidProject] = useState(true);

	useEffect(() => {
		if (clickedSave === true) {
			const emptyCondition = !(user.name && user.surname && user.birthday && user.phone && user.website && user.aboutYourself && user.technology && user.lastProject);

			if (emptyCondition) {
				setSaved(false);
				setIsEmptyField(true);
			} else {
				const stateValidation = validBirthday && validName && validSurname && validWebsite && validAboutYourself && validTechnology && validProject;

				if (stateValidation) {
					setSaved(true);
					setIsEmptyField(false);
					setClickedSave(false);
				} else {
					setSaved(false);
					setIsEmptyField(false);
				}
			}
			
		}
	},[clickedSave, validation])

	function onChange(property, value) {
		setUser((prevUser) => ({
			...prevUser,
			[property]: value.trimStart()
		}))
	}

	function onCancel(e) {
		e.preventDefault();
		setSaved(false);
		setUser({
			name: '',
			surname: '',
			birthday: '',
			phone: '',
			website: '',
			aboutYourself: '',
			technology: '',
			lastProject: ''
		});
		setClickedSave(false);
		setIsEmptyField(false);
		validName(true);
		setValidSurname(true);
		setValidPhone (true);
		setValidWebsite (true);
		setValidBirthday (true);
		setValidAboutYourself (true);
		setValidTechnology (true);
		setValidProject (true);
	}

	function validation() {
		if (user.name) {
			const firstLetter = user.name[0];
			const nameValidation = firstLetter === firstLetter.toUpperCase();

			if (nameValidation) {
				setValidName(true);
			}else {
				setValidName(false);
			}
		}
		
		if (user.surname) {
			const firstLetter = user.surname[0];
			const surnameValidation = firstLetter === firstLetter.toUpperCase();

			if (surnameValidation) {
				setValidSurname(true);
			}else {
				setValidSurname(false);
			} 
		}

		if (user.website) {
			const isWebsite = user.website.slice(0,8);
			const websiteValidation = isWebsite === 'https://';

			if (websiteValidation) {
				setValidWebsite(true);
			}else {
				setValidWebsite(false);
			} 
		}

		if (user.birthday) {
			const now = new Date();
			const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
			const birthdayValidation = new Date(user.birthday) < today;

			if (birthdayValidation) {
				setValidBirthday(true);
			}else {
				setValidBirthday(false);
			} 
		}
		
		if (user.phone) {
			const reg = /\d-\d{4}-\d{2}-\d{2}/g;
			const phoneValidation = reg.test(user.phone);
			
			if (phoneValidation) {
				setValidPhone(true);
			}else {
				setValidPhone(false);
			} 
		}

		if (user.aboutYourself) {
			const aboutYourselfValidation = user.aboutYourself.trim().length <= 600;

			if (aboutYourselfValidation) {
				setValidAboutYourself(true);
			}else {
				setValidAboutYourself(false);
			}
		}

		if (user.technology) {
			const technologyValidation = user.technology.trim().length <= 600;

			if (technologyValidation) {
				setValidTechnology(true);
			}else {
				setValidTechnology(false);
			}
		}

		if (user.lastProject) {
			const lastProjectValidation = user.lastProject.trim().length <= 600;

			if (lastProjectValidation) {
				setValidProject(true);
			}else {
				setValidProject(false);
			}
		}
	}

	function onSave(e) {
		e.preventDefault();
		validation();
		setClickedSave(true);
	}

	return (
		<>
			<ChangeThemeBtn/>
			{
			!saved ? 
			<Form 
				user={user} 
				saved={saved}
				isEmptyField={isEmptyField}
				clickedSave={clickedSave}
				validName={validName}
				validSurname={validSurname}
				validBirthday={validBirthday}
				validPhone={validPhone}
				validWebsite={validWebsite}
				onChange={onChange} 
				onCancel={onCancel}
				onSave={onSave}/> : 
			<SavedForm user={user}/>
			}
		</> 
	);
}
