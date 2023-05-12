import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import './header.scss';

import logo from "../../assets/icons/main/logo.svg";
import arrowBottom from "../../assets/icons/main/arrow-bottom.svg";
import favorites from "../../assets/icons/main/favorites.svg";
import cort from "../../assets/icons/main/cort.svg";

export const Header = () => {


const [showLogout, setShowLogout] = useState(false);
const dispatch = useDispatch();

const token  = useSelector(state => state.authSlice.token);
const username  = useSelector(state => state.authSlice.user?.username);

const logoutHandler = () => {
    dispatch(logout());
    setShowLogout(false);
}

const user = !token ? 
        <Link to={"/register"} className="header__login">
            <span>Личный кабинет</span>
        </Link> :  
        <div onClick={() => {setShowLogout(state => !state)}} className='header__logout'>
            { username }
        </div>

const logoutBtn = showLogout ? 
                        <div onClick={logoutHandler} className='header__logout-link'>
                            Выйти
                        </div> : 
                        null;

return (
    <header className="header">
        <div className="header__wrapper">
            <div className="header__up up-header">
                <div className="container">
                    <div className="up-header__wrapper">
                        <div className="header__main">
                            <nav className="header__nav nav-header">
                                <ul className="nav-header__list">
                                    <li className="nav-header__item">
                                        <a href="#" className="nav-header__link">О нас</a>
                                    </li>
                                    <li className="nav-header__item">
                                        <a href="#" className="nav-header__link">Оплата и доставка</a>
                                    </li>
                                    <li className="nav-header__item">
                                        <a href="#" className="nav-header__link">Новости</a>
                                    </li>
                                    <li className="nav-header__item">
                                        <a href="#" className="nav-header__link">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                            { user }
                            { logoutBtn }
                            <a href="tel:81234567890" className="header__tel-sm">
                                <svg width="100%" height="100%" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.614 11.68L12.75 9.71a1.271 1.271 0 00-1.865 0l-.848.895a.963.963 0 01-1.412 0L4.95 6.724a1.096 1.096 0 010-1.491l.847-.895c.512-.54.52-1.42 0-1.969L3.933.407A1.271 1.271 0 002.07.406l-.68.71c-1.853 1.958-1.853 5.143 0 7.1l5.822 6.148c1.858 1.962 4.866 1.962 6.724 0l.678-.716a1.449 1.449 0 000-1.968zM2.69 1.063c.172-.18.45-.18.622 0l1.865 1.963a.482.482 0 010 .656l-.311.328L2.38 1.387l.31-.324zm5.143 12.645l-5.82-6.149C.577 6.045.498 3.668 1.77 2.054l2.477 2.615A2.061 2.061 0 004.33 7.38l3.674 3.882c.705.744 1.83.775 2.568.086l2.478 2.616c-1.524 1.34-3.771 1.269-5.216-.256zm6.16-.716l-.311.328-2.486-2.625.31-.328c.172-.18.45-.18.622 0l1.865 1.969a.483.483 0 010 .656z" fill="#fff"/></svg>
                            </a>
                            <a href="#" className="header__favorites-sm favorites">
                                <svg width="28" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1 0A7.917 7.917 0 0014 2.872 7.917 7.917 0 007.9 0C3.544 0 0 3.525 0 7.857c0 3.392 2.034 7.316 6.045 11.663 3.087 3.345 6.445 5.934 7.4 6.649l.555.414.554-.414c.956-.715 4.314-3.304 7.4-6.649C25.967 15.174 28 11.25 28 7.857 28 3.525 24.456 0 20.1 0zm.495 18.278c-2.54 2.751-5.27 4.975-6.595 6-1.325-1.025-4.056-3.249-6.595-6-3.637-3.94-5.559-7.544-5.559-10.42 0-3.32 2.716-6.022 6.054-6.022a6.063 6.063 0 015.293 3.108L14 6.392l.807-1.448A6.063 6.063 0 0120.1 1.836c3.338 0 6.054 2.701 6.054 6.021 0 2.877-1.922 6.48-5.56 10.421z" fill="#fff"/></svg>
                            </a>
                            <a href="#" className="header__cort-sm cort-sm-header">
                                <svg width="32" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.13 7.769h22.582a1 1 0 01.969 1.248l-1.9 7.434a3 3 0 01-2.907 2.256H9.025M0 1.5h4.652a2 2 0 011.975 1.685l3.02 18.971a2 2 0 001.975 1.686h16.581m-12.434 6.424c0 1.302-1.01 2.31-2.2 2.31-1.188 0-2.199-1.008-2.199-2.31 0-1.303 1.01-2.31 2.2-2.31 1.188 0 2.199 1.007 2.199 2.31zm12.977 0c0 1.302-1.01 2.31-2.2 2.31-1.188 0-2.199-1.008-2.199-2.31 0-1.303 1.01-2.31 2.2-2.31 1.188 0 2.199 1.007 2.199 2.31z" stroke="#fff" strokeWidth="1.5"/></svg>
                                <span className="cort-sm-header__total total">0</span>
                            </a>
                        </div>

                        {/* Burger */}
                        <div className="header__burger burger-header">
                            <span className="burger-header__line"></span>
                            <span className="burger-header__line"></span>
                            <span className="burger-header__line"></span>
                        </div>
                        <div className="header__burger-menu burger-menu-header">
                            <div className="burger-menu-header__wrapper">
                                <nav className="burger-menu-header__nav nav-burger">
                                    <span className="nav-burger__close close-nav">&#10006;</span>
                                    <ul className="nav-burger__list burger-list">
                                        <li className="nav-burger__item item-nav">
                                            <a href="#" className="nav-burger__link link-nav">Личный кабинет</a>
                                        </li>
                                        <li className="nav-burger__item nav-burger__item_next item-nav">
                                            <a href="#" className="nav-burger__link link-nav link-nav_next  next">Каталог товаров</a>
                                            <div className="burger-menu-header__nextlists nextlists-menu">
                                                <div className="nextlists-menu__up">
                                                    <span className="nextlists-menu__back back-nav">Назад</span>
                                                    <span className="nextlists-menu__close close-nav">&#10006;</span>
                                                </div>
                                                <ul className="nextlists-menu__list burger-list">
                                                    <li className="nextlists-menu__item nextlists-menu__item_next item-nav item-nav_next">
                                                        <a href="#" className="nav-burger__link next">Каталог ножей</a> 
                                                        <div className="burger-menu-header__nextlists nextlists-menu">
                                                            <div className="nextlists-menu__up">
                                                                <span className="nextlists-menu__back back-nav">Назад</span>
                                                                <span className="nextlists-menu__close close-nav">&#10006;</span>
                                                            </div>
                                                            <ul className="nextlists-menu__list burger-list">
                                                                <li className="nextlists-menu__item item-nav item-nav_next"><a href="#" className="nav-burger__link">Разделочные ножи</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Туристические ножи</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Ножи охотничьи</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Булатные ножи</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Ножи из дамаска</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Тактического назначения</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Метательные ножи</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Мачете и кукри</a></li>
                                                                <li className="nextlists-menu__item item-nav"><a href="#" className="nav-burger__link">Ножи кухонные</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nextlists-menu__item nextlists-menu__item_next item-nav">
                                                        <a href="#" className="nav-burger__link next">Клинковое оружие</a>
                                                        <div className="burger-menu-header__nextlists nextlists-menu">
                                                            <div className="nextlists-menu__up">
                                                                <span className="nextlists-menu__back back-nav">Назад</span>
                                                                <span className="nextlists-menu__close close-nav">&#10006;</span>
                                                            </div>
                                                            <ul className="nextlists-menu__list burger-list">
                                                                <li className="nextlists-menu__item item-nav item-nav_next"><a href="#" className="nav-burger__link">Item-2</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nextlists-menu__item nextlists-menu__item_next item-nav">
                                                        <a href="#" className="nav-burger__link next">Сувенирные изделия</a>
                                                        <div className="burger-menu-header__nextlists nextlists-menu">
                                                            <div className="nextlists-menu__up">
                                                                <span className="nextlists-menu__back back-nav">Назад</span>
                                                                <span className="nextlists-menu__close close-nav">&#10006;</span>
                                                            </div>
                                                            <ul className="nextlists-menu__list burger-list">
                                                                <li className="nextlists-menu__item item-nav item-nav_next"><a href="#" className="nav-burger__link">Item-3</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nextlists-menu__item nextlists-menu__item_next item-nav">
                                                        <a href="#" className="nav-burger__link next">Фонари ARMYTEK</a>
                                                        <div className="burger-menu-header__nextlists nextlists-menu">
                                                            <div className="nextlists-menu__up">
                                                                <span className="nextlists-menu__back back-nav">Назад</span>
                                                                <span className="nextlists-menu__close close-nav">&#10006;</span>
                                                            </div>
                                                            <ul className="nextlists-menu__list burger-list">
                                                                <li className="nextlists-menu__item item-nav item-nav_next"><a href="#" className="nav-burger__link">Item-4</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nextlists-menu__item nextlists-menu__item_next item-nav">
                                                        <a href="#" className="nav-burger__link next">Сопуствующие товары
                                                        </a>
                                                        <div className="burger-menu-header__nextlists nextlists-menu">
                                                            <div className="nextlists-menu__up">
                                                                <span className="nextlists-menu__back back-nav">Назад</span>
                                                                <span className="nextlists-menu__close close-nav">&#10006;</span>
                                                            </div>
                                                            <ul className="nextlists-menu__list burger-list">
                                                                <li className="nextlists-menu__item item-nav item-nav_next"><a href="#" className="nav-burger__link">Item-5</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nextlists-menu__item nextlists-menu__item_next item-nav">
                                                        <a href="#" className="nav-burger__link next">Топоры
                                                        </a>
                                                        <div className="burger-menu-header__nextlists nextlists-menu">
                                                            <div className="nextlists-menu__up">
                                                                <span className="nextlists-menu__back back-nav">Назад</span>
                                                                <span className="nextlists-menu__close close-nav">&#10006;</span>
                                                            </div>
                                                            <ul className="nextlists-menu__list burger-list">
                                                                <li className="nextlists-menu__item item-nav item-nav_next"><a href="#" className="nav-burger__link">Item-6</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-burger__item item-nav">
                                            <a href="#" className="nav-burger__link link-nav">Контакты</a>
                                        </li>
                                        <li className="nav-burger__item item-nav">
                                            <a href="#" className="nav-burger__link link-nav">Новости</a>
                                        </li>
                                        <li className="nav-burger__item item-nav">
                                            <a href="#" className="nav-burger__link link-nav">Оплата и доставка</a>
                                        </li>
                                        <li className="nav-burger__item item-nav">
                                            <a href="#" className="nav-burger__link link-nav">О нас</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* /Burger */}
                    </div>
                </div>
                
            </div>
            <div className="header__bottom">
                <div className="container">
                    <div className="header__submain">
                        <a href="#" className="header__logo">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="header__search search-header">
                            <label htmlFor="search" className="search-header__label">
                                Поиск
                            </label>
                            <input type="text" className="search-header__input" id="search" />
                            
                        </div>
                        <div className="header__location">
                            Москва
                        </div>
                        <div className="header__recall recall-header">
                            <span className="recall-header__tel">8-800-777-49-67</span>
                            <a href="tel:88007774967" className="recall-header__link">Заказать звонок</a>
                            <img src={arrowBottom} alt="open list of telephone numbers" className="recall-header__arrow" />
                        </div>
                        <div className="header__favorites favorites">
                            <img src={favorites} alt="favorites" />
                        </div>
                        <div className="header__cort cort-header">
                            <div className="cort-header__img cort">
                                <img src={cort} alt="cort" />
                                <span className="cort-header__total total">0</span>
                            </div>
                            <div className="cort-header__order">
                                <p className="cort-header__sum">0 р.</p>
                                <a href="#" className="cort-header__link">Оформить заказ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </header>
)
}
