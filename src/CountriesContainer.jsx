
import dataFile from '../public/all.json'
import CountryCard from './CountryCard';
const CountriesContainer = () => {
const array = dataFile.map((country,idx)=>{
    console.log(country)
     return <CountryCard key={idx} name={country?.name?.common} flag={country?.flags?.png} 
     population={country?.population} region={country?.region} capital={country?.capital}></CountryCard>
})

    return (
        <div> 
    
            <div className="countries-container">
             {
                array
             }
            </div>
        </div>
    );
};

export default CountriesContainer;