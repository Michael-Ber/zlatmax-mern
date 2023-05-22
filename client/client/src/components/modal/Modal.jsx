import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/auth/authSlice';
import './modal.scss';

export const Modal = memo(() => {

  const { showModal } = useSelector(state => state.authSlice);
  const { message } = useSelector(state => state.authSlice)
  const dispatch = useDispatch();
  
  const styles = showModal ? 
                  { visibility: 'visible', top: '50%', transform: 'translate(-50%, -50%)' } : 
                  { visibility: 'hidden', top: '0', transform: 'translate(-50%, -100%)' };

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000)
    return () => clearTimeout(timer);
  }, [showModal])

  const closeModal = () => {
    dispatch(setShowModal(false));
  }

  return (
    <div style = { styles } className='modal'>
        <p className="modal__message">{message}</p>
        <div onClick = {closeModal} className="modal__close">x</div>
    </div>
  )
})
