import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import React from "react";

export const Footer = () => {
    return (
        <footer className={'footer'}>
            <p className={'copyright'}>Copyright by Coders Lab</p>
            <div className={'social-media'}>
                <img className={'footer__icon'} src={Instagram} alt={'Instagram'}/>
                <img className={'footer__icon'} src={Facebook} alt={'Facebook'}/>
            </div>
        </footer>
    )
}