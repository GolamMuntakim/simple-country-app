// import dataFile from '../public/all.json'
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
const CountriesContainer = ({query}) => {
    const [countriesData, setCountriesData] = useState([])
 useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
     setCountriesData(data)
     console.log(countriesData)
    })
 },[])
 console.log(countriesData)
    return (
        <div> 
            <div className="countries-container">
             {
                countriesData.filter((country)=>(country?.name?.common.toLowerCase().includes(query))).map((country,idx)=>{
                    return <CountryCard key={idx} name={country?.name?.common} flag={country?.flags?.png} 
                    population={country?.population} region={country?.region} capital={country?.capital}></CountryCard>
               })
             }
            </div>
        </div>
    );
};

export default CountriesContainer;