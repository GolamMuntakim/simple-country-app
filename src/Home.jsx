import { useContext, useState } from 'react';
import SearchBar from './SearchBar';
import SelectMenue from './SelectMenue';
import CountriesContainer from './CountriesContainer';
import { ThemeContext } from './Context/ThemeContaxt';


const Home = () => {
  const [query, setQuery] = useState('')
  const  [isDark] = useContext(ThemeContext)

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