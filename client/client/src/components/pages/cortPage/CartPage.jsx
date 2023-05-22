import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControlledCard } from '../../input/ControlledCard';
import { changeTotalSum } from '../../../redux/auth/authSlice';


import './cartPage.scss';

export const CartPage = () => {

const [sumPrice, setSumPrice] = useState({});

const [ formStyles, setFormStyles ] = useState({opacity: 1});
const dispatch = useDispatch();

const cart = useSelector(state => state.authSlice.user.cort);
const goods = useSelector(state => state.goodsSlice.goods);

useEffect(() => {
  window.addEventListener('scroll', handleResize);
  return () => window.removeEventListener('scroll', handleResize)
}, [])

useEffect(() => {
  dispatch(changeTotalSum(calcSum(Object.values(sumPrice))))
}, [sumPrice])

const handleResize = () => {
  const cartHeight = document.querySelector('.cart').clientHeight;
  if( window.scrollY > ( cartHeight - window.innerHeight ) ) {
    setFormStyles({opacity: 0})
  }else {
    setFormStyles({opacity: 1})
  }
}

const cartSingle = cart && new Set(cart);

const filterGoods = (arrId, arrGoods) => {
  const arr = [];
  arrId.forEach(id => {
    arrGoods.forEach(item => {
      if(id === item._id) {
        arr.push(item);
      }
    })
  })
  return arr;
}

const calcSum = (arr) => {
  return arr.reduce((sum, item) => sum + item, 0)
}

const renderListItems = (cart, goods) => {
  
  if(cart && goods) {
    return filterGoods(cart, goods).map(item => {
      const stars = [...Array(item.rating)].map((elem, i) => {
        return <div key={i} className="star-item" data-item-val={i+1}>★</div>
      })
      return ( 
        <ControlledCard setSumPrice={ setSumPrice } key={item._id} item={ item } stars={ stars } />
      )
    })
  }else {
    return <span>Нет товаров</span>
  }
  
}

return (
  <div className='cart'>
    <h1 className="cart__title">Корзина</h1>
    <div className="cart__content">
      <ul className="cart__list">
        { renderListItems(cartSingle, goods) }
      </ul>
      <form style={formStyles} className="cart__form">
        <p className="cart__sum">
          Итого: <span>{ calcSum(Object.values(sumPrice)) } р.</span>
        </p>
        <button className="cart__submit">Оформить заказ</button>
      </form>
    </div>
  </div>
)
}
