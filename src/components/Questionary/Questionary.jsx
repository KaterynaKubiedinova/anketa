import React from 'react';
import './style.css';
import SavedForm from '../SavedField/SavedForm';
import Form from '../Form/Form';

export default class Questionary extends React.Component {
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
        lastProject: '',
      },
      clickedSave: false,
      isEmptyField: false,
      validName: true,
      validSurname: true,
      validPhone: true,
      validWebsite: true,
      validBirthday: true,
      validAboutYourself: true,
      validTechnology: true,
      validProject: true,
    };

    this.onSave = this.onSave.bind(this);
    this.validation = this.validation.bind(this);
  }

  onChange = (property, value) => {
    this.setState((state) => ({
      ...state,
      user: {
        ...state.user,
        [property]: value.trimStart(),
      },
    }));
  };

  onCancel = (e) => {
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
        lastProject: '',
      },
      clickedSave: false,
      isEmptyField: false,
      validName: true,
      validSurname: true,
      validPhone: true,
      validWebsite: true,
      validBirthday: true,
      validAboutYourself: true,
      validTechnology: true,
      validProject: true,
    });
  };

  validation = async function () {
    const user = this.state.user;

    if (user.name) {
      const firstLetter = user.name[0];
      const nameValidation = firstLetter === firstLetter.toUpperCase();

      if (nameValidation) {
        await this.setState({
          validName: true,
        });
      } else {
        await this.setState({
          validName: false,
        });
      }
    }

    if (user.surname) {
      const firstLetter = user.surname[0];
      const surnameValidation = firstLetter === firstLetter.toUpperCase();

      if (surnameValidation) {
        await this.setState({
          validSurname: true,
        });
      } else {
        await this.setState({
          validSurname: false,
        });
      }
    }

    if (user.website) {
      const isWebsite = user.website.slice(0, 8);
      const websiteValidation = isWebsite === 'https://';

      if (websiteValidation) {
        await this.setState({
          validWebsite: true,
        });
      } else {
        await this.setState({
          validWebsite: false,
        });
      }
    }

    if (user.birthday) {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const birthdayValidation = new Date(user.birthday) < today;

      if (birthdayValidation) {
        await this.setState({
          validBirthday: true,
        });
      } else {
        await this.setState({
          validBirthday: false,
        });
      }
    }

    if (user.phone) {
      const reg = /\d-\d{4}-\d{2}-\d{2}/g;
      const phoneValidation = reg.test(user.phone);

      if (phoneValidation) {
        await this.setState({
          validPhone: true,
        });
      } else {
        await this.setState({
          validPhone: false,
        });
      }
    }

    if (user.aboutYourself) {
      const aboutYourselfValidation = user.aboutYourself.trim().length <= 600;

      if (aboutYourselfValidation) {
        await this.setState({
          validAboutYourself: true,
        });
      } else {
        await this.setState((state) => ({
          ...state,
          validAboutYourself: false,
        }));
      }
    }

    if (user.technology) {
      const technologyValidation = user.technology.trim().length <= 600;

      if (technologyValidation) {
        await this.setState({
          validTechnology: true,
        });
      } else {
        await this.setState({
          validTechnology: false,
        });
      }
    }

    if (user.lastProject) {
      const lastProjectValidation = user.lastProject.trim().length <= 600;

      if (lastProjectValidation) {
        await this.setState({
          validProject: true,
        });
      } else {
        await this.setState({
          validProject: false,
        });
      }
    }
  };

  onSave = async function (e) {
    e.preventDefault();

    const user = this.state.user;

    await this.setState({
      clickedSave: true,
    });
    await this.validation();

    const emptyCondition = !(
      user.name &&
      user.surname &&
      user.birthday &&
      user.phone &&
      user.website &&
      user.aboutYourself &&
      user.technology &&
      user.lastProject
    );

    if (emptyCondition) {
      await this.setState({
        saved: false,
        isEmptyField: true,
      });
    } else {
      const stateValidation =
        this.state.validBirthday &&
        this.state.validName &&
        this.state.validSurname &&
        this.state.validWebsite &&
        this.state.validAboutYourself &&
        this.state.validTechnology &&
        this.state.validProject;

      if (stateValidation) {
        await this.setState({
          saved: true,
          clickedSave: false,
          isEmptyField: false,
        });
      } else {
        await this.setState({
          saved: false,
          isEmptyField: false,
        });
      }
    }
  };

  render() {
    return (
      <>
        {!this.state.saved ? (
          <Form
            state={this.state}
            onChange={this.onChange}
            onCancel={this.onCancel}
            onSave={this.onSave}
          />
        ) : (
          <SavedForm user={this.state.user} />
        )}
      </>
    );
  }
}
