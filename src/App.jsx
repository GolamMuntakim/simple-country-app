
import './App.css'

import Header from './Header'

import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContaxt'



function App() {
  return (
    <>
    
      <ThemeProvider>
      <Header></Header>
      <Outlet></Outlet>
      </ThemeProvider>
     
   
    </>
  )
}

export default App
