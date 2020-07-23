import React from "react";
import Decoration from '../assets/Decoration.svg'
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';
import {Link} from "react-router-dom";

export const Steps = () => {
    return (
        <section className={'steps'}>
            <h1 className={'title'}>Wystarczą 4 proste kroki</h1>
            <img src={Decoration} className={'decoration'}/>
            <div className={'steps__container'}>
                <div className={'steps__elem'}>
                    <img src={icon1} className={'steps__icon'}/>
                    <p className={'steps__title'}>Wybierz rzeczy</p>
                    <svg height="2" width="70">
                        <line x1="0" y1="0" x2="70" y2="0"/>
                    </svg>
                    <p className={'steps__text'}>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className={'steps__elem'}>
                    <img src={icon2}/>
                    <p className={'steps__title'}>Spakuj je</p>
                    <svg height="2" width="70">
                        <line x1="0" y1="0" x2="70" y2="0"/>
                    </svg>
                    <p className={'steps__text'}>skorzystaj z worków na śmieci</p>
                </div>
                <div className={'steps__elem'}>
                    <img src={icon3}/>
                    <p className={'steps__title'}>Zdecyduj komu chcesz pomóc</p>
                    <svg height="2" width="70">
                        <line x1="0" y1="0" x2="70" y2="0"/>
                    </svg>
                    <p className={'steps__text'}>wybierz zaufane miejsce</p>
                </div>
                <div className={'steps__elem'}>
                    <img src={icon4}/>
                    <p className={'steps__title'}>Zamów kuriera</p>
                    <svg height="2" width="70">
                        <line x1="0" y1="0" x2="70" y2="0"/>
                    </svg>
                    <p className={'steps__text'}>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to={'/logowanie'} className={'main__button'}>Oddaj <br></br>rzeczy</Link>
        </section>
    )
}