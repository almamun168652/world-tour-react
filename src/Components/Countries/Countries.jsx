import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([]);
    const [visitedFlags , setVisitedFlags] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    const handleVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = flag => {
        const newVisitedFlags = [...visitedFlags , flag];
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => {
                            return (
                                <li key={country.cca3}>{country.name.common}</li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="flag-container">
                
                {
                    visitedFlags.map((flag , index) => <img key={index} src={flag}></img>)
                }

            </div>

            <div className="countries">
                
            {
                countries.map(item => {
                    return (
                        <Country key={item.cca3} handleVisitedFlag={handleVisitedFlag} handleVisitedCountry={handleVisitedCountry} country={item}></Country>
                    )
                })
            }
            </div>

        </div>
    );
};

export default Countries;