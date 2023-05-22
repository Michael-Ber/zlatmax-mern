import React from 'react';
import { useSelector } from 'react-redux';
import './bestsellers.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Slide } from '../../../slide/Slide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Bestsellers = () => {
const { goods } = useSelector(state => state.goodsSlice);

const goodsToRender = goods.slice(0, 7).map(item => {
    const stars = [...Array(item.rating)].map((elem, i) => {
        return <div key={i} className="star-item" data-item-val={i+1}>★</div>
    })
    return (
        <SwiperSlide key={item._id} className="slide-bestsellers__card card card_height">
            <Slide item={item} stars={stars}/>
        </SwiperSlide>

    )
})

return (
    <section className="bestsellers common">
        <div className="container">
            <div className="bestsellers__header common__header">
                <h2 className="bestsellers__title section-title">Хиты продаж</h2>
                <a href="#" className="bestsellers__link link-more">Перейти в каталог</a>
            </div>
        </div>
        <div className="bestsellers__container common__container">
            { goods.length > 0 ? <div className="bestsellers__slider slider-bestsellers common-slider">
                <Swiper 
                    navigation
                    slideClass='slide-bestsellers__card'
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    slidesPerView={4}
                    spaceBetween={30}
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1609: {
                                slidesPerView: 4,
                            },
                        }
                    }
                    className="slider-bestsellers__wrapper common-slider__wrapper">
                    { goodsToRender }
                    <div className="pagination-slider-common slider-bestsellers__pagination  slider-pagination"></div>
                </Swiper>
            </div> : <p className='no-goods'>Нет товаров</p> }
            
            <a href="#" className="bestsellers__link bestsellers__link_bottom link-more common__link common__link_bottom">Перейти в каталог</a>
        </div>
    </section>
)
}
