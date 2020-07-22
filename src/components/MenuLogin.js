import React from 'react';
import {Link} from 'react-router-dom';

export const MenuLogin = () => {
    return (
        <nav className={'menu__login'}>
                <Link to={'/logowanie'} className={'logIn'}>Zaloguj</Link>
                <Link to={'/rejestracja'} className={'signIn'}>Załóż konto</Link>
        </nav>
    )
}