import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';
import Header from '../components/Header';
import { WorldPageType } from '../types';

export default function WorldPage({ allCountriesData }: WorldPageType) {
    return (
        <div className='world-page-container' >
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    );
}
