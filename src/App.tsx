import './App.css';
import TopPage from './pages/TopPage';
import { useEffect, useState } from 'react';
import countriesJson from "./countries.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WorldPage from './pages/WorldPage';
import { AllCountryDataType, CountryDataType } from './types';



function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("japan");
  const [countryData, setCountryData] = useState<CountryDataType>({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0,
  });
  const [allCountriesData, setAllCountriesData] = useState<AllCountryDataType>([{
    Country: "",
    NewConfirmed: 0,
    TotalConfirmed: 0,
  }]);


  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`).then(res => res.json()).then(data => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered
        });
        setLoading(false);
      }
      ).catch(err => alert("An error occurred. Please refresh the page."));
    };
    getCountryData();
  }, [country]);

  useEffect(() => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/summary`).then(res => res.json()).then(data => setAllCountriesData(data.Countries))
      .catch(err => alert("An error occurred.Please refresh the page."));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage setCountry={setCountry} countriesJson={countriesJson} countryData={countryData} loading={loading} />
        } />
        <Route path='/world' element={<WorldPage allCountriesData={allCountriesData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
