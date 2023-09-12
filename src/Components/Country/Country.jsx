
import { useState } from 'react';
import './Country.css';

const Country = ({country , handleVisitedCountry , handleVisitedFlag}) => {
    
    const {name , flags , population , area , cca3} = country;

    const [visited , setVisited] = useState(false);

    const visitedHandler = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h4 style={{color: visited ? 'blue' : 'white'}}>Name: {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={visitedHandler}>{visited ? 'visited' : 'going'}</button>
            {visited ? ' i have visited this county' : ' i want visit'}
        </div>
    );
};

export default Country;