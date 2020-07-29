import React, {useState} from 'react';
import {MenuLogin} from "./MenuLogin";
import {MenuMain} from "./MenuMain";
import Decoration from '../assets/Decoration.svg'
import {Link} from "react-router-dom";


export const Login = () => {
    const [loginData, setLoginData] = useState({email: '', password: ''});
    const [validation, setValidation] = useState({});

    const handleLogin = e => {
        const errors = {};
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        if (!re.test(loginData.email)) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }
        if (loginData.password.length < 6) {
            errors.password = 'Podane hasło jest za krótkie!';
        }
        if (!errors.email && !errors.password) {
            setLoginData({email: '', password: ''});
            setValidation({formValid: true});
        } else {
            setValidation(errors);
        }
    }

    const handleChangeForm = e => {
        let {name, value} = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <MenuLogin/>
            <MenuMain/>
            <div className={'account'}>
                <h1 className="title">Zaloguj się</h1>
                <img alt={''} src={Decoration} className={'decoration'}/>
                <form className={'account__form'}>
                    <label>Email
                        <input
                            className={`account__input ${validation.email && 'account__input-error'}`}
                            name={'email'}
                            value={loginData.email}
                            onChange={handleChangeForm}/>
                        {validation.email && <div className="account__error-message">{validation.email}</div>}
                    </label>
                    <label>Hasło
                        <input
                            type={'password'}
                            className={`account__input ${validation.password && 'account__input-error'}`}
                            name={'password'}
                            value={loginData.password}
                            onChange={handleChangeForm}/>
                        {validation.password && <div className="account__error-message">{validation.password}</div>}
                    </label>
                </form>
                <div className="account__btn-container">
                    <Link to={'/rejestracja'}
                          className={'account__button'}>
                        Załóż konto
                    </Link>
                    <Link to={'/'}
                          className={'account__button account__button-frame'}
                          onClick={handleLogin}>
                        Zaloguj się
                    </Link>
                </div>
            </div>
        </>
    )
}
