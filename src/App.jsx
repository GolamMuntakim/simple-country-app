
import './App.css'
import CountriesContainer from './CountriesContainer'
import Header from './Header'
import SearchBar from './SearchBar'
import SelectMenue from './SelectMenue'

function App() {


  return (
    <>
     <div>
      <Header></Header>
 <main>
 <div className="search-filter-container">
  <SearchBar></SearchBar>
  <SelectMenue></SelectMenue>
  </div>
  <CountriesContainer></CountriesContainer>
 </main>
     </div>
    </>
  )
}

export default App
