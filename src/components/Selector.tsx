import { SelectorType } from "../types";

export default function Selector({ setCountry, countriesJson }: SelectorType) {
    return (
        <div className="selector-container" >
            <select onChange={(e) => setCountry(e.target.value)} >
                {countriesJson.map((country, index) =>
                    <option key={index} value={country.Slug}>{country.Country}</option>)}

            </select>
        </div>
    );
}
