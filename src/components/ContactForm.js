import React, {useState} from "react";
import Decoration from '../assets/Decoration.svg'
import {Footer} from "./Footer";

export const ContactForm = () => {
    const [message, setMessage] = useState({name: '', email: '', message: ''});
    const [validation, setValidation] = useState({});

    const handleSubmit = e => {
        const errors = {};
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        if (message.name.trim().search(' ') > 0 || message.name === '') {
            errors.name = 'Podane imię jest nieprawidłowe!';
        }
        if (!re.test(message.email)) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }
        if (message.message.length < 120) {
            errors.message = 'Wiadomość musi mieć co najmniej 120 znaków!';
        }
        if (!errors.name && !errors.email && !errors.message) {
            sendForm(message);
        } else {
            setValidation(errors);
        }
    }

    const sendForm = (form) => {
        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(() => {
                setMessage({name: '', email: '', message: ''});
                setValidation({formValid: true});
            })
            .catch(err => console.log(err));
    }

    const handleChangeForm = e => {
        let {name, value} = e.target;
        setMessage(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <section className={'contact'} name={'contact'}>
            <form className={'contact__form'}>
                <h1 className={'title'}>Skontaktuj się z nami</h1>
                <img src={Decoration} alt={''} className={'decoration'}/>
                {validation.formValid &&
                <div className="contact__success-message">Wiadomość została wysłana! <br></br> Wkrótce się
                    skontaktujemy.</div>}
                <div className={'contact__container'}>
                    <label className={'contact__label'}>Wpisz swoje imię
                        <input
                            className={`contact__input ${validation.name ? 'contact__input-error' : ''}`}
                            name={'name'}
                            placeholder={'Krzysztof'}
                            onChange={handleChangeForm}
                            value={message.name}/>
                        {validation.name && <div className="contact__error-message">{validation.name}</div>}
                    </label>
                    <label className={'contact__label'}>Wpisz swój email
                        <input className={`contact__input ${validation.email ? 'contact__input-error' : ''}`}
                               name={'email'}
                               placeholder={'abc@xyz.pl'}
                               value={message.email}
                               onChange={handleChangeForm}/>
                        {validation.email && <div className="contact__error-message">{validation.email}</div>}

                    </label>
                </div>
                <label className={'contact__label'}>Wpisz swoją wiadomość
                    <textarea
                        className={`contact__input contact__input-textarea ${validation.message ? 'contact__input-error' : ''}`}
                        name={'message'}
                        value={message.message}
                        placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
                        'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                        onChange={handleChangeForm}/>
                    {validation.message && <div className="contact__error-message">{validation.message}</div>}
                </label>
                <button className={'contact__submit'} onClick={handleSubmit}>Wyślij</button>
            </form>
            <Footer/>
        </section>
    )
}