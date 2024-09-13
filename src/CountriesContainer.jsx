// import dataFile from '../public/all.json'
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmer';
const CountriesContainer = ({query}) => {
    const [countriesData, setCountriesData] = useState([])
 useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
     setCountriesData(data)

    })
 },[])

    return (
        <div> 
           
        {!countriesData.length ?  (<CountriesListShimmer></CountriesListShimmer>):
           ( <div className="countries-container">
            {
            countriesData.filter((country)=>(country?.name?.common.toLowerCase().includes(query)  ||  country?.region.toLowerCase().includes(query)
        )).map((country,idx)=>{
                return <CountryCard key={idx} name={country?.name?.common} flag={country?.flags?.png} 
                population={country?.population} region={country?.region} capital={country?.capital} 
                data={country}></CountryCard>
            })
            }
        </div>)
        }
        </div>
    );
};

export default CountriesContainer;