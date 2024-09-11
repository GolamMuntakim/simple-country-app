import  { useState } from 'react';
import SearchBar from './SearchBar';
import SelectMenue from './SelectMenue';
import CountriesContainer from './CountriesContainer';

const Home = () => {
    const [query, setQuery] = useState('')
    return (
        <div>
              <main>
        
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}></SearchBar>
          <SelectMenue></SelectMenue>
        </div>
        <CountriesContainer query={query}></CountriesContainer>
      </main>
        </div>
    );
};

export default Home;