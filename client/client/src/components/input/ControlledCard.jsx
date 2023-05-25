import React, { useState, useEffect} from 'react';
import { removeItemFromCart, changeItemAmount } from '../../redux/goods/goodsSlice';
import { me, changeTotalSum } from '../../redux/auth/authSlice';
import { useDispatch } from 'react-redux';

import remove from '../../assets/icons/catalog/trash.png';

export const ControlledCard = ({ item, stars, setSumPrice }) => {

const [amount, setAmount] = useState(1);
const dispatch = useDispatch();


useEffect(() => {
    setSumPrice(state => ({...state, ...{[item._id]: Number(item.price.replace(/\D/ig, ''))}}));
}, [])


const handleOnChangePlus = () => {
    setAmount(state => state + 1);
    dispatch(changeItemAmount( { id: item._id, amount: amount + 1 } ));
    setSumPrice(state => ({...state, [item._id]: Number(item.price.replace(/\D/ig, '') * (amount+1))}))
}
const handleOnChangeMinus = () => {
    setAmount(state => state > 1 ? state - 1: state);
    dispatch(changeItemAmount( { id: item._id, amount: amount > 1 ? amount - 1 : amount } ));
    amount > 1 && setSumPrice(state => ({...state, [item._id]: Number(item.price.replace(/\D/ig, '') * (amount-1))}))
}

const deleteHandler = async() => {
    try {
        dispatch(removeItemFromCart({goodId: item._id})).then(() => dispatch(me()));
        setSumPrice(state => {
            const { [item._id]: price, ...newState } = state;
            return newState
        })
    } catch (error) {
        console.log(error);
    }
}

    
return (
    <li className="cart__item item-cart">
        <div className="item-cart__wrapper">
            <div className="item-cart__img">
            <img src={item.imgUrl} alt={item.name} />
            </div>
            <div className="item-cart__descr">
            <h1 className="item-cart__name">{ item.name }</h1>
            <div className="item-cart__info">
                <span>{ item.size }</span>
                <span>{ item.color }</span>
            </div>
            <div className="item-cart__rate">
                <div className="item-cart__stars stars-wrapper" data-total-val={item.rating}>
                {stars}
                </div>
                <div className="item-cart__recall">12 отзывов</div>
            </div>
            <div className="item-cart__price">
                <span className="item-cart__cost">Цена: { item.price.replace(/\D/ig, '') * amount } р.</span> 
                <div className="item-cart__amount-wrapper">
                    <span>Кол-во</span>
                    <div className="item-cart__amount-subwrapper">
                        <div 
                        onClick={handleOnChangeMinus} 
                        className="item-cart__minus">
                            <span></span>
                        </div>
                        <div 
                            onClick={handleOnChangePlus} 
                            className="item-cart__plus">
                                <span></span>
                        </div>
                        <input 
                            type='number'
                            disabled
                            className="item-cart__amount" 
                            value = { amount } />
                    </div>
                </div>      
                <div 
                    onClick={deleteHandler}
                    className="item-cart__delete">
                <img src={ remove } alt="delete" />
                </div>
            </div>
            </div>
        </div>
    </li>
    )
}
