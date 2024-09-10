import dataFile from '../public/all.json'
import CountryCard from './CountryCard';
const CountriesContainer = ({query}) => {
    return (
        <div> 
            <div className="countries-container">
             {
                dataFile.filter((country)=>(country?.name?.common.toLowerCase().includes(query))).map((country,idx)=>{
                    return <CountryCard key={idx} name={country?.name?.common} flag={country?.flags?.png} 
                    population={country?.population} region={country?.region} capital={country?.capital}></CountryCard>
               })
             }
            </div>
        </div>
    );
};

export default CountriesContainer;