import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControlledCard } from '../../input/ControlledCard';
import { changeTotalSum } from '../../../redux/auth/authSlice';
import { makeOrder, sendOrder } from '../../../redux/goods/goodsSlice';


import './cartPage.scss';

export const CartPage = () => {

  const cart = useSelector(state => state.authSlice.user?.cort);
  const { order } = useSelector(state => state.goodsSlice);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(makeOrder(cart))
  }, [dispatch, cart])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const totalSum = order && order.reduce((sum, item) => sum + Number(item.price.replace(/\D/ig, '')) * (item.amount ? item.amount: 1), 0);

  useEffect(() => {
    dispatch(changeTotalSum(totalSum));
  }, [totalSum, dispatch])

  //HANDLERS
  const handleOrder = (e) => {
    e.preventDefault();
    console.log({order});
    dispatch(sendOrder({order}))
  }

  //RENDERS

  const renderListItems = (cart && cart.length > 0) ? cart.map(item => {
    const stars = [...Array(item.rating)].map((elem, i) => {
        return <div key={i} className="star-item" data-item-val={i+1}>★</div>
      })
    return (
      <ControlledCard key={item._id} item={item} stars={stars}/>
    )
  }): <span>Нет товаров</span>

  const renderSubListItems = (order && order.length > 0) ? order.map(item => {
    return (
      <li key={ item._id } className='cart__sublist-item sublist-item-cart'>
          <p className="sublist-item-cart__name">{ item.name }</p>
          <p className="sublist-item-cart__size">{ item.size }</p>
          <p className="sublist-item-cart__amount">{ item.amount ? item.amount : 1 }</p>
         </li>
    )
  }): <span>Нет товаров</span>

  return (
    <div className='cart'>
      <h1 className="cart__title">Корзина</h1>
      <div className="cart__content">
        <ul className="cart__list">
          { renderListItems }
        </ul>
        <form onSubmit={e => handleOrder(e)} className="cart__form">
          <p className="cart__sum">
            Итого: <span>{ totalSum } р.</span>
          </p>
          <ul className="cart__sublist">
            { renderSubListItems }
          </ul>
          <button 
            type='submit'
            disabled={ (order && order.length > 0) ? false: true }
            className="cart__submit btn">Оформить заказ</button>
        </form>
      </div>
    </div>
  )
}
