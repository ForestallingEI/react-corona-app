import { ResultsType } from '../types';
import Loading from './Loading';

export default function Results({ countryData, loading }:ResultsType) {
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
  return (
    <div className="results-container">
      { loading ? <Loading /> :
        <div>
          <p>DATE: <span> { date.slice(0, 10) }</span> </p>
          <p>NEW CONFIRMED: <span>{ newConfirmed.toLocaleString() }</span></p>
          <p>TOTAL CONFIRMED: <span>{ totalConfirmed.toLocaleString() }</span></p>
          <p>NEW RECOVERED: <span>{ newRecovered.toLocaleString() }</span></p>
          <p>TOTAL RECOVERED: <span>{ totalRecovered.toLocaleString() }</span></p>
        </div>
      }
    </div>
  );
}
