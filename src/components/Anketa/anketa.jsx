import React from 'react';
import MoreLineFiled from '../MoreLineField/moreLineFiled';
import SingleLineFiled from '../SingleLineField/singleLineFiled';
import './style.css';

export default class Anketa extends React.Component {
	render() {
		return (
			<form className='anketa'>
				<h1>Создание анкеты</h1>
				<SingleLineFiled value='Имя'/>
				<SingleLineFiled value='Фамилия'/>
				<SingleLineFiled value='Дата рождения'/>
				<SingleLineFiled value='Телефон'/>
				<SingleLineFiled value='Сайт'/>
				<MoreLineFiled value='О себе'/>
				<MoreLineFiled value='Стек технологий'/>
				<MoreLineFiled value='Описание последнего проекта'/>
				<button>Отмена</button>
				<button>Сохранить</button>
			</form>
		);
	}
}
