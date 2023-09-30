import React from 'react';
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';
import Header from '../components/Header';

export default function TopPage({ setCountry, countriesJson, getCountryData, countryData, loading }) {
    return (
        <div>
            <div className='top-page-container' >
                <Header/>
                <Title />
                <Selector setCountry={ setCountry } countriesJson={ countriesJson } getCountryData={ getCountryData } />
                <Results countryData={ countryData } loading={loading} />
            </div>

        </div>
    );
}
