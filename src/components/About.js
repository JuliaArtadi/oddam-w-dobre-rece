import React from "react";
import Decoration from '../assets/Decoration.svg'
import Signature from '../assets/Signature.svg'
import People from '../assets/People.jpg'

export const About = () => {
    return (
        <section className={'about'} name={'about'} id={'about'}>
            <div className={'about__col'}>
                <div className={'about__container'}>
                    <h1 className={'title'}>
                        O nas
                    </h1>
                    <img src={Decoration} className={'decoration'} alt={'Dekoracja'}/>
                    <p className={'about__text'}>
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <img src={Signature} className={'signature'} alt={'Podpis'}/>
                </div>
            </div>
            <img src={People} className={'about__img'} alt={'Członkowie zespołu'}/>
        </section>
    )
}