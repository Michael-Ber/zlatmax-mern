import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button/Button';
import { Modal } from '../../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/authSlice';
import './registerPage.scss';


export const RegisterPage = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [showModal, setShowModal] = useState(false);

  const { message } = useSelector(state => state.authSlice);

  const dispatch = useDispatch();



  const submitHandler = (e) => {
    e.preventDefault();
    const data = {username: name, password};
    dispatch(register(data));
    setName('');
    setPassword('');
    setShowModal(true);
  }

  return (
    <div className='register'>
        <h1 className="register__title">Регистрация</h1>
        <div className="register__login">
          <h3>Уже есть аккаунт? </h3>
          <Link to="/login" className='register__link'>Войти</Link>
        </div>
        <form onSubmit={(e) => submitHandler(e)} className="register__form">
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder='Введите имя'
                name='username'
                className="register__input" />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder='Введите пароль'
                name='password'
                className="register__input" />
            <Button style={{marginTop: "50px"}} btnText={'Зарегистрироваться'} />
        </form>
        <Modal message={message} showModal={showModal} setShowModal = {setShowModal}/>
    </div>
  )
}
