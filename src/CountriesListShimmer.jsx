import './CountriesListShimmer.css'

const CountriesListShimmer = () => {
     const mapped = Array.from({length: 10}).map((el,idx)=>{
        return <div key={idx} className='country-card shimmer-card'></div>
    })
    return (
        <div className="countries-container">
           {
            mapped
           }
            </div>
    );
};

export default CountriesListShimmer;