import React from "react";

export const Statistics = () => {
    return (
        <section name={'info'} id={'info'} className={'stats'}>
            <div className={'stats__col'}>
                <h2 className={'stats__number'}>10</h2>
                <p className={'stats__title'}>Oddanych worków</p>
                <p className={'stats__text'}>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.
                </p>
            </div>
            <div className={'stats__col'}>
                <h2 className={'stats__number'}>5</h2>
                <p className={'stats__title'}>Wspartych organizacji</p>
                <p className={'stats__text'}>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.
                </p>
            </div>
            <div className={'stats__col'}>
                <h2 className={'stats__number'}>7</h2>
                <p className={'stats__title'}>Zorganizowanych zbiórek</p>
                <p className={'stats__text'}>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.
                </p>
            </div>
        </section>

    )
}
