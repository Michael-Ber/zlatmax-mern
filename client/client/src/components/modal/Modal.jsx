import React, { useEffect } from 'react';
import './modal.scss';

export const Modal = ({ message, showModal, setShowModal }) => {
  
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
    setShowModal(false);
  }

  return (
    <div style = { styles } className='modal'>
        <p className="modal__message">{message}</p>
        <div onClick = {closeModal} className="modal__close">x</div>
    </div>
  )
}
