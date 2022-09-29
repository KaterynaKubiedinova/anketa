import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessge/ErrorMessage';
import Input from '../Input/Input';
import PhoneInput from '../PhoneInput/PhoneInput';
import TextArea from '../TextArea/TextArea';
import './style.css';


export default class Form extends Component {
  render() {
    const state = this.props.state;
    const user = this.props.state.user;

    return (
      <form className='form'>
        <h1>Сreating a form</h1>
        <Input
          placeholder='Name'
          typeData='text'
          value={user.name}
          inputName='name'
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.name && state.validName ? (
            <ErrorMessage />
          ) : null}
          {!state.validName && state.clickedSave && user.name ? (
            <span>Not valid name. The first letter must be capitalized.</span>
          ) : null}
        </div>
        <Input
          placeholder='Surname'
          typeData='text'
          value={user.surname}
          inputName='surname'
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.surname ? <ErrorMessage /> : null}
          {!state.validSurname && state.clickedSave && user.surname ? (
            <span>
              Not valid surname. The first letter must be capitalized.
            </span>
          ) : null}
        </div>
        <Input
          placeholder='Date of birth'
          typeData='date'
          value={user.birthday}
          inputName='birthday'
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.birthday ? <ErrorMessage /> : null}
          {!state.validBirthday && state.clickedSave && user.birthday ? (
            <span>
              Not valid date of birth. The birthday cannot be in the future.
            </span>
          ) : null}
        </div>
        <PhoneInput
          placeholder='Phone number'
          value={user.phone}
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.phone ? <ErrorMessage /> : null}
          {!state.validPhone && state.clickedSave && user.phone ? (
            <span>Not valid phone. The phone cannot contained letter</span>
          ) : null}
        </div>
        <Input
          placeholder='Website'
          typeData='text'
          value={user.website}
          inputName='website'
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.website ? <ErrorMessage /> : null}
          {!state.validWebsite && state.clickedSave && user.website ? (
            <span>
              Not valid website. The website must start from 'https://'.
            </span>
          ) : null}
        </div>
        <TextArea
          placeholder='About yourself'
          typeData='text'
          value={user.aboutYourself}
          inputName='aboutYourself'
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.aboutYourself ? <ErrorMessage /> : null}
        </div>
        <TextArea
          typeData='text'
          placeholder='Technology stack'
          value={user.technology}
          inputName='technology'
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.technology ? (
            <span>This field must be filled.</span>
          ) : null}
        </div>
        <TextArea
          typeData='text'
          placeholder='Description of the latest project'
          value={user.lastProject}
          inputName='lastProject'
          onChange={this.props.onChange}
        />
        <div className='errors'>
          {state.isEmptyField && !user.lastProject ? <ErrorMessage /> : null}
        </div>
        <button onClick={this.props.onCancel}>Cancel</button>
        <button onClick={this.props.onSave}>Save</button>
      </form>
    );
  }
}

