import { CardType } from "../types";

export default function Card({ allCountriesData }:CardType) {
    return (
        <div className="card-container" >
            { allCountriesData.map((singleData, index) =>
                <div key={ index } className="card" >
                    <h2>{ singleData.Country }</h2>
                    <p>新規感染者： <span> { singleData.NewConfirmed.toLocaleString() } </span></p>
                    <p>感染者数： <span>{ singleData.TotalConfirmed.toLocaleString() } </span></p>

                </div>
            ) }
        </div>
    );
}
