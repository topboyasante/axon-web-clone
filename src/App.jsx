import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/general/Navbar'
import Homepage from './pages/Homepage'

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </main>
  )
}

export default App