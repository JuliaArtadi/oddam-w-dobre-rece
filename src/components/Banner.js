import React from "react";
import {MenuLogin} from './MenuLogin';
import {MenuMain} from './MenuMain';
import Decoration from '../assets/Decoration.svg'
import {Link} from 'react-router-dom';

export const Banner = () => {
    return (
        <main name={'start'} id={'start'}>
            <MenuLogin/>
            <MenuMain/>
            <div className={'banner__container'}>
                <div className={'banner__img'}></div>
                <div className={'banner__content'}>
                    <h1 className={'title'}>
                        Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <img src={Decoration} className={'decoration'} alt={'pudełko z rzeczami do oddania'}/>
                    <div className={'banner__buttons'}>
                        <Link to={'/logowanie'} className={'main__button'}>
                            Oddaj <br></br>rzeczy
                        </Link>
                        <Link to={'/logowanie'}
                              className={'main__button main__button-second'}>
                            Zorganizuj <br></br> zbiórkę
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}