import React from 'react';
import {Link} from 'react-scroll';

export const MenuMain = () => {
    return (
        <nav className={'menu__main'}>
            <Link className={'menu__elem'}
                  activeClass={'active'}
                  to={'start'}
                  spy={true}
                  smooth={true}
                  duration={500}>Start</Link>
            <Link className={'menu__elem'}
                  to={'info'}
                  spy={true}
                  smooth={true}
                  duration={500}>O co chodzi?</Link>
            <Link className={'menu__elem'}
                  to={'about'}
                  spy={true}
                  smooth={true}
                  duration={500}>O nas</Link>
            <Link className={'menu__elem'}
                  to={'organizations'}
                  spy={true}
                  smooth={true}
                  duration={500}>Fundacja i organizacje</Link>
            <Link className={'menu__elem'}
                  to={'contact'}
                  spy={true}
                  smooth={true}
                  duration={500}>Kontakt</Link>
        </nav>
    )
}