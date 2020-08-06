import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

export const MenuMainHash = () => {
    return (
        <nav className={'menu__main'}>
            <Link className={'menu__elem'}
                  to={'/#start'}
                  scroll={el => el.scrollIntoView(true)}>
                Start
            </Link>
            <Link className={'menu__elem'}
                  to={'/#info'}
                  scroll={el => el.scrollIntoView(true)}>
                O co chodzi?
            </Link>
            <Link className={'menu__elem'}
                  to={'/#about'}
                  scroll={el => el.scrollIntoView(true)}>
                O nas
            </Link>
            <Link className={'menu__elem'}
                  to={'/#institutions'}
                  scroll={el => el.scrollIntoView(true)}>
                Fundacja i organizacje
            </Link>
            <Link className={'menu__elem'}
                  to={'/#contact'}
                  scroll={el => el.scrollIntoView(true)}>
                Kontakt
            </Link>
        </nav>
    )
}
