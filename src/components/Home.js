import React from 'react';
import {Footer} from './Footer';
import {ContactForm} from './ContactForm';
import {Organizations} from './Organizations';
import {About} from './About';
import {ButtonDonate} from './ButtonDonate';
import {Steps} from './Steps';
import {Statistics} from './Statistics';
import {Banner} from './Banner';

export const Home = () => {
    return (
        <>
            <Banner/>
            <Statistics/>
            <Steps/>
            <ButtonDonate/>
            <About/>
            <Organizations/>
            <ContactForm/>
            <Footer/>
        </>
    )
}