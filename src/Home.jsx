import { useState } from 'react';
import SearchBar from './SearchBar';
import SelectMenue from './SelectMenue';
import CountriesContainer from './CountriesContainer';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('')
  const [isDark] = useOutletContext()
  console.log(isDark)
  return (

    <main className={`${isDark ? 'dark' : '' }`}>

      <div className="search-filter-container">
        <SearchBar setQuery={setQuery}></SearchBar>
        <SelectMenue></SelectMenue>
      </div>
      {query === 'unmount' ? '' : <CountriesContainer query={query}></CountriesContainer>}
    </main>

  );
};

export default Home;