import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './mainPage.scss';
import knives from '../../../assets/img/main/knives.png';

export const MainPage = () => {


return (
    <section className="main">
            {/* <!-- TABS=============================================================== --> */}
            <div className="main__tab tab-main">
                <div className="tab-main__btns btns-tab-main">
                    <div className="container">
                        <ul className="btns-tab-main__list">
                            <li data-tab="knives" className="btns-tab-main__item ">Каталог ножей</li>
                            <div data-tab="knives" className="contents-tab-main__content content-tab-main">
                                <div className="content-tab-main__wrapper">
                                    <ul className="content-tab-main__list">
                                        <li className="content-tab-main__item item-content-main">
                                            Категория ножей
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Производство ножей
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Ножи по маркам стали
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Заточка и полировка ножей
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Ножевая мастерская
                                        </li>
                                    </ul>
                                    <ul className="content-tab-main__catalog catalog-tab-main">
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Разделочные ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Туристические ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи охотничьи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Булатные ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из дамаска</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Тактического назначения</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Метательные ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Мачете и кукри</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи кухонные</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Ножи АИР</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи ЗИК</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи ЗЗОСС</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи РОСоружие</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи Оружейник</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Булат Сергея Баранова</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Булат Андрея Умерова</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи Златко</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи Стиль-М</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Оружейная компания</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 40х102С2М</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 95х18</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 100х13м</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 110х18м-ШД</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали ЭИ-107 ТЦ</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 50х14МФ</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали AUS-8</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали К340</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали M390</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали ЭП-766</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Паста ГОИ</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Алмазная паста</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Бруски и камни для заточки</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Заточные системы</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link">Ножевые клинки</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Заготовки для ножей</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Литье для ножей</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Материалы для рукоятей</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Уход за рукоятиями ножей</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="content-tab-main__all all-content">
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                </ul>
                            </div>
                            <li data-tab="blade" className="btns-tab-main__item">Клинковое оружие</li>
                            <div data-tab="blade" className="contents-tab-main__content content-tab-main">Content-2</div>
                            <li data-tab="souvenir" className="btns-tab-main__item">Сувенирные изделия</li>
                            <div data-tab="souvenir" className="contents-tab-main__content content-tab-main">Content-3</div>
                            <li data-tab="armytek" className="btns-tab-main__item">Фонари ARMYTEK</li>
                            <div data-tab="armytek" className="contents-tab-main__content content-tab-main">Content-4</div>
                            <li data-tab="related" className="btns-tab-main__item">Сопуствующие товары</li>
                            <div data-tab="related" className="contents-tab-main__content content-tab-main">Content-5</div>
                        </ul>
                    </div>
                </div>
                <div className="tab-main__contents contents-tab-main">
                    <div className="container">
                        {/* <div className="contents-tab-main__wrapper">
                            <div data-tab="knives" className="contents-tab-main__content content-tab-main">
                                <div className="content-tab-main__wrapper">
                                    <ul className="content-tab-main__list">
                                        <li className="content-tab-main__item item-content-main">
                                            Категория ножей
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Производство ножей
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Ножи по маркам стали
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Заточка и полировка ножей
                                        </li>
                                        <li className="content-tab-main__item item-content-main">
                                            Ножевая мастерская
                                        </li>
                                    </ul>
                                    <ul className="content-tab-main__catalog catalog-tab-main">
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Разделочные ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Туристические ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи охотничьи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Булатные ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из дамаска</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Тактического назначения</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Метательные ножи</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Мачете и кукри</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи кухонные</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Ножи АИР</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи ЗИК</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи ЗЗОСС</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи РОСоружие</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи Оружейник</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Булат Сергея Баранова</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Булат Андрея Умерова</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи Златко</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи Стиль-М</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Оружейная компания</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 40х102С2М</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 95х18</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 100х13м</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 110х18м-ШД</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали ЭИ-107 ТЦ</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали 50х14МФ</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали AUS-8</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали К340</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали M390</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Ножи из стали ЭП-766</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link"> Паста ГОИ</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Алмазная паста</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Бруски и камни для заточки</a></li>
                                                <li><a href="category.html" className="item-catalog__link"> Заточные системы</a></li>
                                            </ul>
                                        </li>
                                        <li className="catalog-tab-main__item item-catalog">
                                            <ul className="item-catalog__list">
                                                <li><a href="category.html" className="item-catalog__link">Ножевые клинки</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Заготовки для ножей</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Литье для ножей</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Материалы для рукоятей</a></li>
                                                <li><a href="category.html" className="item-catalog__link">Уход за рукоятиями ножей</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="content-tab-main__all all-content">
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                    <li><a href="#" className="all-content__link">Смотреть все</a></li>
                                </ul>
                            </div>
                            <div data-tab="blade" className="contents-tab-main__content content-tab-main">Content-2</div>
                            <div data-tab="souvenir" className="contents-tab-main__content content-tab-main">Content-3</div>
                            <div data-tab="armytek" className="contents-tab-main__content content-tab-main">Content-4</div>
                            <div data-tab="related" className="contents-tab-main__content content-tab-main">Content-5</div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- /TABS=============================================================== --> */}

            {/* <!-- SLIDER============================================================= --> */}
            <div className="main__container container-main">
                    <div className="container">
                        <div className="main__wrapper">
                            <div className="main__container-inner">
                                <div className="main__carousel carousel-common swiper">
                                    <Swiper 
                                        navigation
                                        modules={[Pagination, Navigation]}
                                        pagination={{ clickable: true }}
                                        slidesPerView={1}
                                        onSwiper={(swiper) => {
                                            const sliderLength = swiper.slides.length;
                                            const activeFraction = document.querySelector('.carousel-main__current');
                                            const allFraction = document.querySelector('.carousel-main__total');
                                            const fractionWrapper = document.querySelector('.carousel-main__fraction');

                                            sliderLength < 10 ? activeFraction.innerHTML = `0`+ (swiper.activeIndex + 1) : activeFraction.innerHTML = swiper.activeIndex;
                                            allFraction.innerHTML = sliderLength;
                                            fractionWrapper.style.left = `${sliderLength * 40}px`;
                                        }}
                                        onSlideChange={(swiper) => {
                                            const sliderLength = swiper.slides.length;
                                            const activeFraction = document.querySelector('.carousel-main__current');
                                            sliderLength < 10 ? activeFraction.innerHTML = `0`+ (swiper.activeIndex + 1) : activeFraction.innerHTML = swiper.activeIndex;
                                        }}  
                                        className="carousel-main__wrapper swiper-wrapper wrapper-common">
                                        <SwiperSlide className="carousel-main__slide carousel-main__slide_active slide-main swiper-slide">
                                            <h2 className="carousel-main__title">Интернет магазин сертифицированных</h2>
                                            <h3 className="carousel-main__subtitle">златоустовских ножей</h3>
                                            <p className="carousel-main__text text-tab">
                                                Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине 
                                                представлен наиболее широкий выбор Златоустовских ножей от Златоустовских 
                                                Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
                                            </p>
                                            <div className="slide-main__wrapper wrapper-slide">
                                                <a href="/hgf" className="btn btn_sm carousel-main__btn">Подробнее</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="carousel-main__slide slide-main swiper-slide">
                                            <h2 className="carousel-main__title">Title-2</h2>
                                            <h3 className="carousel-main__subtitle">Subtitle-2</h3>
                                            <p className="carousel-main__text">
                                                Text-2
                                            </p>
                                            <div className="slide-main__wrapper">
                                                <a href="#" className="btn btn_sm carousel-main__btn">Подробнее</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="carousel-main__slide slide-main swiper-slide">
                                            <h2 className="carousel-main__title">Title-3</h2>
                                            <h3 className="carousel-main__subtitle">Subtitle-3</h3>
                                            <p className="carousel-main__text">
                                                Text-3
                                            </p>
                                            <div className="slide-main__wrapper">
                                                <a href="#" className="btn btn_sm carousel-main__btn">Подробнее</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="carousel-main__slide slide-main swiper-slide">
                                            <h2 className="carousel-main__title">Title-4</h2>
                                            <h3 className="carousel-main__subtitle">Subtitle-4</h3>
                                            <p className="carousel-main__text">
                                                Text-4
                                            </p>
                                            <div className="slide-main__wrapper">
                                                <a href="/gdfd" className="btn btn_sm carousel-main__btn">Подробнее</a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    </Swiper>
                                    <div className="carousel-main__pagination  pagination-slider-common">

                                    </div>
                                    <div className="carousel-main__fraction">
                                        <span className="carousel-main__current"></span>
                                          / 
                                        <span className="carousel-main__total"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-main__img">
                                <img src={ knives } alt="knives" />
                                <div className="container-main__tipps tipps-container-main">
                                    <div className="tipps-container-main__item tipps-container-main__item_1"><span>+</span></div>
                                    <div className="tipps-container-main__item tipps-container-main__item_2"><span>+</span></div>
                                    <div className="tipps-container-main__item tipps-container-main__item_3"><span>+</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="main__benefits benefits-main">
                            <ul className="benefits-main__list">
                                <li className="benefits-main__item benefits-main__item_garanty">Гарантия 100% возврата 
                                    денежных средств</li>
                                <li className="benefits-main__item benefits-main__item_delivery">Доставка по России, 
                                    Казахстану и Белоруссии</li>
                                <li className="benefits-main__item benefits-main__item_order">Возможность оформление 
                                    заказа без регистрации.</li>
                                <li className="benefits-main__item benefits-main__item_discount">Скидки постоянным 
                                    покупателям. </li>
                            </ul>
                        </div>
                    </div>
                
            </div>
            {/* <!-- /SLIDER============================================================= --> */}
    </section>
)
}
