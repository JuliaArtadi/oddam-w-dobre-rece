import React from "react";
import Decoration from '../assets/Decoration.svg'
import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'

export const ContactForm = () => {
    return (
        <section className={'contact'} name={'contact'}>
            <form className={'contact__form'}>
                <h1 className={'title'}>
                    Skontaktuj się z nami
                </h1>
                <img src={Decoration} alt={'Dekoracja'} className={'Decoration'}/>
                <div className={'contact__container'}>
                    <label className={'contact__label'}>
                        Wpisz swoje imię
                        <input className={'contact__input'} name={'name'} placeholder={'Krzysztof'}/>
                    </label>
                    <label className={'contact__label'}>
                        Wpisz swój email
                        <input className={'contact__input'} name={'email'} placeholder={'abc@xyz.pl'}/>
                    </label>
                </div>
                <label className={'contact__label'}>
                    Wpisz swoją wiadomość
                    <textarea className={'contact__input contact__input-textarea'}
                              placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                              'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
                              'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                </label>
                <button className={'contact__submit'}>
                    Wyślij
                </button>
            </form>
            <footer className={'footer'}>
                <p className={'copyright'}>
                    Copyright by Coders Lab
                </p>
                <div className={'social-media'}>
                    <img className={'footer__icon'} src={Instagram} alt={'Instagram'}/>
                    <img className={'footer__icon'} src={Facebook} alt={'Facebook'}/>
                </div>
            </footer>
        </section>
    )
}