type CountriesJsonType = {
  Country: string;
  Slug: string;
}[];

type AllCountriesDataType = {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}[];

export type CountryDataType = {
  date: string;
  newConfirmed: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecovered: number;
};
export type AllCountryDataType = {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}[];
export type TopPageType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  countriesJson: CountriesJsonType;
  countryData: CountryDataType;
};
export type SelectorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countriesJson: CountriesJsonType;
};
export type ResultsType = {
  loading: boolean;
  countryData: CountryDataType;
};
export type WorldPageType = {
  allCountriesData: AllCountriesDataType;
};
export type CardType = {
  allCountriesData: AllCountryDataType;
};
