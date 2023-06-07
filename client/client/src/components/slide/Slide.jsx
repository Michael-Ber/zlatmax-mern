import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { me, changeTotalSum } from '../../redux/auth/authSlice';
import { addToCort, addToFavorites, removeItemFromFavorites } from '../../redux/goods/goodsSlice';

import '../pages/mainPage/bestsellers/bestsellers.scss';

export const Slide = ({item}) => {

    const cort = useSelector(state => {
        if(state.authSlice.user) {
            return state.authSlice.user.cort
        }
        return null
    });


    const ref = useRef(null);

    const favorites = useSelector(state => {
        if(state.authSlice.user) {
            return state.authSlice.user.favorites
        }
        return null
    });


    const dispatch = useDispatch();

    useEffect(() => {

        if(favorites) {
            favorites.forEach(id => {
                if(id === item._id) {
                    ref.current.classList.add('footer-slide__btn_active')
                }
            })
        }
    }, [])

    const handleClickCart = async(e) => {
        const btn = e.target.tagName === 'SPAN' ? e.target.parentNode : e.target;
        const sum = cort.reduce((sum, elem) => sum + (Number(elem.price.replace(/\D/ig, '')))*elem.amount, 0) + Number(item.price.replace(/\D/ig, '')); //item.amount did not used because item haven't got this property yet
        if(!btn.disabled && window.localStorage.getItem('token')) {
            await dispatch(addToCort({goodId: item._id}));
            await dispatch(me());
            await dispatch(changeTotalSum(sum))
        }
    }

    const handleClickFavorites = async(e) => {
        if(window.localStorage.getItem('token')) {
            if(ref.current.classList.contains('footer-slide__btn_active')) {
                ref.current.classList.remove('footer-slide__btn_active');
                await dispatch(removeItemFromFavorites({goodId: item._id}));
                await dispatch(me());
            }else {
                ref.current.classList.add('footer-slide__btn_active');
                await dispatch(addToFavorites({goodId: item._id}));
                await dispatch(me());
            }
        }  
    }


    const stars = [...Array(item.rating)].map((elem, i) => {
        return <div key={i} className="star-item" data-item-val={i+1}>★</div>
    })

    const defineDeclesion = (num, word) => {
        switch(num) {
            case 0: return word + 'ов';
            case 1: return word;
            case 2: return word + 'а';
            case 3: return word + 'а';
            case 4: return word + 'а';
            default: return word + 'ов'
        }
    }


    return (
    <>
        <Link to={`/card_detail/${item._id}`} className="card__img-link">
            <img src={item.imgUrl} alt="Card" />
        </Link>
        <Link to={`/card_detail/${item._id}`} className="card__name">{ item.name }</Link>
        <div className="card__info">
            <div className="card__descr">
                <span className="card__size">{ item.size }</span>
                <span className="card__material">{ item.color }</span>
            </div>
            <div className="card__rating">
                <div className="stars-wrapper" data-total-val={ item.rating }>
                    { stars }
                </div>
                <div className="card__comments">
                    <span>{item.comments.length}</span> {defineDeclesion(item.comments.length, 'отзыв')}  
                </div>
            </div>
            <div className="card__footer footer-slide">
                <span className="card__cost">2 719 р.</span>
                <div className="footer-slide__links">
                    {/* <a href="#" className="footer-slide__link">
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.9558 12.5275L25.9337 12.5386L22.2036 3.25484H23.9056C24.2108 3.25484 24.4582 3.00741 24.4582 2.70223C24.4582 2.39706 24.2108 2.14963 23.9056 2.14963H13.5056V0.552604C13.5056 0.247428 13.2582 0 12.953 0C12.6479 0 12.4004 0.247428 12.4004 0.552604V2.1441H2.00595C1.70078 2.1441 1.45335 2.39153 1.45335 2.69671C1.45335 3.00188 1.70078 3.24931 2.00595 3.24931H3.77981L0.0442083 12.5275C0.0165781 12.5922 0.00158874 12.6617 0 12.732C0 15.2697 2.0572 17.3269 4.5949 17.3269C7.13259 17.3269 9.1898 15.2697 9.1898 12.732C9.18821 12.6617 9.17322 12.5922 9.14559 12.5275L5.41552 3.24378H12.4004V20.3303C9.76451 20.5292 7.70329 22.1318 7.70329 24.0714C7.70329 24.3766 7.95072 24.624 8.2559 24.624H17.6502C17.9553 24.624 18.2028 24.3766 18.2028 24.0714C18.2028 22.1318 16.1416 20.5292 13.5056 20.3303V3.24378H20.5624L16.8544 12.5275C16.8268 12.5922 16.8118 12.6617 16.8102 12.732C16.8102 15.2697 18.8674 17.3269 21.4051 17.3269C23.9428 17.3269 26 15.2697 26 12.732C25.9984 12.6617 25.9834 12.5922 25.9558 12.5275ZM4.59214 16.23C2.88058 16.2276 1.42295 14.9852 1.14942 13.2956H8.01275C7.74059 14.977 6.29533 16.2168 4.59214 16.23ZM7.81382 12.1904H1.38151L4.60319 4.17216L7.81382 12.1904ZM16.9981 23.5188H8.90244C9.31137 22.3307 10.9968 21.4134 12.9475 21.4134C14.8982 21.4134 16.5892 22.3307 16.9981 23.5188ZM21.3802 4.17768L24.5909 12.1904H18.1586L21.3802 4.17768ZM21.3802 16.23V16.2355C19.6752 16.2219 18.2294 14.9792 17.9596 13.2956H24.823C24.5494 14.9852 23.0918 16.2276 21.3802 16.23Z" fill="black"/>
                        </svg>
                    </a> */}
                    <button 
                        ref={ref} 
                        onClick={e => handleClickFavorites(e)}
                        className="footer-slide__btn">
                        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1004 0C17.7169 0 15.4856 1.07339 14 2.87184C12.5144 1.07333 10.2832 0 7.89957 0C3.54375 0 0 3.52462 0 7.85705C0 11.2495 2.03385 15.1734 6.04492 19.5198C9.13175 22.8646 12.4897 25.4544 13.4454 26.1685L13.9998 26.5828L14.5543 26.1686C15.5099 25.4545 18.868 22.8647 21.9549 19.52C25.9661 15.1736 28 11.2496 28 7.85705C28 3.52462 24.4562 0 20.1004 0ZM20.5948 18.2782C18.0558 21.0293 15.3242 23.2533 13.9998 24.2783C12.6755 23.2533 9.944 21.0293 7.40498 18.2781C3.76837 14.3375 1.84615 10.734 1.84615 7.85705C1.84615 4.53717 4.56172 1.83622 7.89957 1.83622C10.0961 1.83622 12.1243 3.02694 13.1927 4.94377L14 6.3923L14.8073 4.94377C15.8756 3.027 17.9038 1.83622 20.1004 1.83622C23.4383 1.83622 26.1538 4.53711 26.1538 7.85705C26.1538 10.7341 24.2316 14.3377 20.5948 18.2782Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            <button
                onClick={e => handleClickCart(e)}
                disabled = { (cort && cort.filter(elem => elem._id === item._id).length > 0) ? true : false } 
                className="card__btn btn"><span>В корзину</span>
            </button>
        </div>
    </>
    )
}
