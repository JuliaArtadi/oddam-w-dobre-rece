import React, {useEffect, useState} from "react";
import {InstitutionsService} from "../service/InstitutionsService";
import {InstitutionsList} from "./InstitutionsList";
import Decoration from '../assets/Decoration.svg'

export const Help = () => {
    const [institutions, setInstitutions] = useState(null);
    const [category, setCategory] = useState('foundations');
    const [description, setDescription] = useState('');
    const [currList, setCurrList] = useState([]);
    const institutionsList = new InstitutionsService();

    const handleChangeInst = e => {
        setCategory(e.target.name);
    }

    useEffect(() => {
        institutionsList.getInstitutions(
            data => {
                setInstitutions(data);
                setCurrList(data.foundations);
            },
            err => console.log(err))
    }, [])

    useEffect(() => {
        if (institutions !== null) {
            if (category === 'foundations') {
                setDescription('W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czymsię zajmują, komu pomagają i czego potrzebują.');
                setCurrList(institutions.foundations);
            } else if (category === 'organisations') {
                setDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.');
                setCurrList(institutions.organisations);
            } else if (category === 'collections') {
                setDescription('Lorem collections dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.');
                setCurrList(institutions.collections);
            }
        }
    }, [category, institutions])

    return (
        <section className={'help'} name={'institutions'}>
            <h1 className={'title'}>Komu pomagamy?</h1>
            <img src={Decoration} className={'decoration'} alt={'Dekoracja'}/>
            <div className={'help__menu'}>
                <button className={`help__option ${category === 'foundations' ? 'help__option-active' : ''}`}
                        name={'foundations'}
                        onClick={e => handleChangeInst(e)}>
                    Fundacjom
                </button>
                <button className={`help__option ${category === 'organisations' ? 'help__option-active' : ''}`}
                        name={'organisations'}
                        onClick={e => handleChangeInst(e)}>
                    Organizacjom pozarządowym
                </button>
                <button className={`help__option ${category === 'collections' ? 'help__option-active' : ''}`}
                        name={'collections'}
                        onClick={e => handleChangeInst(e)}>
                    Lokalnym zbiórkom
                </button>
            </div>
            <p className={'help__description'}>
                {description}
            </p>
            <InstitutionsList list={currList}/>
        </section>
    )
}