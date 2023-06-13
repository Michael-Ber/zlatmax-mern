import React, { useState } from 'react';

import "./sendMail.scss";

export const SendMail = () => {

    //STATES

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    //HANDLERS

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const resp = await fetch("http://localhost:3005/send_mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + window.localStorage.getItem('token'),
            },
            body: JSON.stringify({name, email, text})
        })
        const respJSON = await resp.json();
        console.log(respJSON);
        setName('');
        setEmail('');
        setText('');
        return respJSON
    }

    return (
        <div className="container">
            <div className='sendMail'>
                <form onSubmit={e => handleSubmit(e)} className="sendMail__form">
                    <h1 className="sendMail__title">Отправьте нам сообщение</h1>
                    <label className='sendMail__label'>
                        Ваше имя: 
                        <input 
                            onChange={e => setName(e.target.value)}
                            type="text" 
                            name="name" 
                            id="name" 
                            className="sendMail__input" />
                    </label>
                    <label className='sendMail__label'>
                        Ваш email:
                        <input 
                            onChange={e => setEmail(e.target.value)}
                            type="text" 
                            name="email" 
                            id="email" 
                            className="sendMail__input" />
                    </label>
                    <label className='sendMail__label'>
                        Ваше сообщение:
                        <textarea 
                            onChange={e => setText(e.target.value)}
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10" 
                            className='sendMail__text'></textarea>
                    </label>
                    <div className="sendMail__btns">
                        <button type='submit' className="sendMail__submit">Отправить</button>
                        <button className="sendMail__cancel">Отмена</button>
                    </div>
                </form>
            </div>  
        </div>
        
    )
}