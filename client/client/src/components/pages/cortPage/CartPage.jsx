import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ControlledCard } from '../../input/ControlledCard';



import './cartPage.scss';

export const CartPage = () => {

const [sumPrice, setSumPrice] = useState([]);

const cart = useSelector(state => state.authSlice.user.cort);
const goods = useSelector(state => state.goodsSlice.goods);


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



const calcSum = (cartSingle, goods) => {
  return filterGoods(cartSingle, goods).reduce((sum, current) => sum + Number(current.price.replace(/\D/ig, '')), 0);
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
      <form className="cart__form">
        <p className="cart__sum">
          Итого1: <span>{ (cartSingle && goods) && calcSum(cartSingle, goods) } р.</span>
          Итого2: <span>{ sumPrice } р.</span>
        </p>
        <button className="cart__submit">Оформить заказ</button>
      </form>
    </div>
  </div>
)
}
