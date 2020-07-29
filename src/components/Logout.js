import React from "react";
import {MenuLogin} from "./MenuLogin";
import {MenuMain} from "./MenuMain";
import Decoration from '../assets/Decoration.svg'
import {Link} from "react-router-dom";


export const Logout = () => {
    return (
        <>
            <MenuLogin/>
            <MenuMain/>
            <section className={'account'}>
                <h1 className={'title'}>Wylogowanie nastąpiło <br></br>pomyślnie!</h1>
                <img src={Decoration} alt={''} className={'decoration decoration-margin-bottom'}/>
                <Link to={'/'}
                      className={'account__button account__button-frame'}>
                    Strona główna
                </Link>
            </section>
        </>
    )
}