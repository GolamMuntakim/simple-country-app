
import { useState } from 'react'
import './App.css'

import Header from './Header'

import { Outlet } from 'react-router-dom'


function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <>
      <Header theme={[isDark, setIsDark]}></Header>
      <Outlet context={[isDark, setIsDark]}></Outlet>
 

    </>
  )
}

export default App
