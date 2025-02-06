import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
    return api.get("/all?fields=name,population,languages,capital,flags,currencies,translations,region,subregion,religions");
};


export const getIndiCountryData = (name) => {
    return api.get(`/name/${name}?fields=name,population,languages,capital,flags,currencies,translations,region,subregion,religions,tld,borders`);
};