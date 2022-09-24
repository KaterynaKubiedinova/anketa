import React from 'react';
import SavedField from './SavedField';

export default function SavedForm({user}) {
	return (
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
	);
}