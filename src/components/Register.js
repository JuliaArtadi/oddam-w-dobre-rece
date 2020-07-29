import React, {useState} from 'react';
import {MenuLogin} from "./MenuLogin";
import {MenuMain} from "./MenuMain";
import Decoration from '../assets/Decoration.svg'
import {Link} from "react-router-dom";


export const Register = () => {
    const [registrationData, setRegistrationData] = useState({email: '', password: '', repeatPassword: ''});
    const [validation, setValidation] = useState({});

    const handleRegistration = e => {
        const errors = {};
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        if (!re.test(registrationData.email)) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }
        if (registrationData.password.length < 6) {
            errors.password = 'Podane hasło jest za krótkie!';
        }
        if (registrationData.password !== registrationData.repeatPassword) {
            errors.repeatPassword = 'Hasła nie są takie same!';
            console.log("ppppp");
        }
        if (!errors.email && !errors.password && !errors.repeatPassword) {
            setRegistrationData({email: '', password: '', repeatPassword: ''});
            setValidation({formValid: true});
        } else {
            setValidation(errors);
        }
    }

    const handleChangeForm = e => {
        let {name, value} = e.target;
        setRegistrationData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <MenuLogin/>
            <MenuMain/>
            <div className={'account'}>
                <h1 className="title">Załóż konto</h1>
                <img alt={''} src={Decoration} className={'decoration'}/>
                <form className={'account__form'}>
                    <label>Email
                        <input
                            className={`account__input ${validation.email && 'account__input-error'}`}
                            name={'email'}
                            value={registrationData.email}
                            onChange={handleChangeForm}/>
                        {validation.email && <div className="account__error-message">{validation.email}</div>}
                    </label>
                    <label>Hasło
                        <input
                            type={'password'}
                            className={`account__input ${validation.password && 'account__input-error'}`}
                            name={'password'}
                            value={registrationData.password}
                            onChange={handleChangeForm}/>
                        {validation.password && <div className="account__error-message">{validation.password}</div>}
                    </label>
                    <label>Powtórz hasło
                        <input
                            type={'password'}
                            className={`account__input ${validation.repeatPassword && 'account__input-error'}`}
                            name={'repeatPassword'}
                            value={registrationData.repeatPassword}
                            onChange={handleChangeForm}/>
                        {validation.repeatPassword &&
                        <div className="account__error-message">{validation.repeatPassword}</div>}
                    </label>
                </form>
                <div className="account__btn-container">
                    <Link to={'/logowanie'}
                          className={'account__button'}>
                        Zaloguj się
                    </Link>
                    <Link to={'/'}
                          className={'account__button account__button-frame'}
                          onClick={handleRegistration}>
                        Zaloguj się
                    </Link>
                </div>
            </div>
        </>
    )
}
