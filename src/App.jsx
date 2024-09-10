
import { useState } from 'react'
import './App.css'
import CountriesContainer from './CountriesContainer'
import Header from './Header'
import SearchBar from './SearchBar'
import SelectMenue from './SelectMenue'

function App() {
  const [query, setQuery] = useState('')

  return (
    <>
     <div>
      <Header></Header>
 <main>
 <div className="search-filter-container">
  <SearchBar setQuery={setQuery}></SearchBar>
  <SelectMenue></SelectMenue>
  </div>
  <CountriesContainer query={query}></CountriesContainer>
 </main>
     </div>
    </>
  )
}

export default App
