import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';
import Header from '../components/Header';
import { TopPageType } from '../types';

export default function TopPage({ setCountry, countriesJson, countryData, loading }:TopPageType) {
    return (
        <div>
            <div className='top-page-container' >
                <Header />
                <Title />
                <Selector setCountry={setCountry} countriesJson={countriesJson} />
                <Results countryData={countryData} loading={loading} />
            </div>

        </div>
    );
}
