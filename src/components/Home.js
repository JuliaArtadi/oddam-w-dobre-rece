import React from 'react';
import {ContactForm} from './ContactForm';
import {Help} from './Help';
import {About} from './About';
import {Steps} from './Steps';
import {Statistics} from './Statistics';
import {Banner} from './Banner';

export const Home = () => {
    return (
        <>
            <Banner/>
            <Statistics/>
            <Steps/>
            <About/>
            <Help/>
            <ContactForm/>
        </>
    )
}