import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import HomePages from '../pages/HomePages' 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}> 
          {/* TO'G'RI USUL: Element nomi <Route> bo'ladi va ichiga index yoziladi */}
          <Route index element={<HomePages />} /> 
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App