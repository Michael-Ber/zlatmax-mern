import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControlledCard } from '../../input/ControlledCard';
import { changeTotalSum } from '../../../redux/auth/authSlice';
import { makeOrder } from '../../../redux/goods/goodsSlice';


import './cartPage.scss';

export const CartPage = () => {

  const [sumPrice, setSumPrice] = useState({});

  const dispatch = useDispatch();

  const cart = useSelector(state => state.authSlice.user.cort);
  const goods = useSelector(state => state.goodsSlice.goods);
  const order = useSelector(state => state.goodsSlice.order);


  useEffect(() => {
    dispatch(changeTotalSum(calcSum(Object.values(sumPrice))));
  }, [sumPrice, dispatch])


  const cartSingle = cart && new Set(cart);

  const filterGoods = (arrId, arrGoods) => {
    const arr = [];
    if( arrId && arrGoods ) {
      arrId.forEach(id => {
        arrGoods.forEach(item => {
          if(id === item._id) {
            arr.push(item);
          }
        })
      })
    }
    return arr;
  }

  useEffect(() => {
    dispatch(makeOrder(filterGoods(cart, goods.map(item => ({...item, amount: 1})))));//добавил в каждый объект массива goods amount=1, менять amount в ControlledCard
  }, [cart, goods, dispatch])

  const calcSum = (arr) => {
    return arr.reduce((sum, item) => sum + item, 0)
  }

  const renderListItems = (cart, goods) => {
    if(cart && goods && cart.size > 0) {
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

  const renderSublistItems = (order) => {
    if(order && order.length > 0) {
      return order.map(item => {
        return <li key={ item._id } className='cart__sublist-item sublist-item-cart'>
          <p className="sublist-item-cart__name">{ item.name }</p>
          <p className="sublist-item-cart__size">{ item.size }</p>
          <p className="sublist-item-cart__amount">{ item.amount }</p>
        </li>
      })
    }else {

      return <li>Нет товаров</li>
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
            Итого: <span>{ calcSum(Object.values(sumPrice)) } р.</span>
          </p>
          <ul className="cart__sublist">
            { renderSublistItems(order) } 
          </ul>
          <button className="cart__submit">Оформить заказ</button>
        </form>
      </div>
    </div>
  )
}
