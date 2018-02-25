import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import FormField from './components/FormField/FormField';
import RadioButton from './components/radioButton/RadioButton';
import Button from './components/button/Button';

import './index.scss';


ReactDOM.render(
    <div>
    <header className="form__header">
        <h2 className="form__heading">Давайте начнем! </h2>
    </header>
    <FormField
        label = 'Имя'
        type = 'text'
        name = 'firstName'
        placeholder = 'Чендлер'
    />
    <FormField
        label = 'Фамилия'
        type = 'text'
        name = 'secondName'
        placeholder = 'Бинг'
    />
    <div>
    <label className='form__label'>Ваш пол</label>
    <RadioButton
        label = 'Женский'
        name = 'sex'
        value = 'female'
        checked
    />
    <RadioButton
        label = 'Мужской'
        name = 'sex'
        value = 'male'
    />
    </div>
    <FormField
        label = 'Введите электронный адрес'
        type = 'text'
        name = 'email'
        placeholder = 'email@gmail.com'
    />
    <FormField
        label = 'Придумайте пароль'
        type = 'password'
        name = 'pass'
    />
    <FormField
        type='checkbox'
        name='checkbox'
    />
    <div className='checkForm_text'>
        Я принимаю условия <a href='#' className='checkForm_href'>Пользовательского соглашения</a> и даю свое согласие на обработку моих персональных данных на условиях, определенных <a href='#' className='checkForm_href'>Политикой конфиденциальности</a>
    </div>
    
    <Button classes = 'button' type = 'submit' value = 'Зарегистрироваться' />
    </div>, document.getElementById('form')
);