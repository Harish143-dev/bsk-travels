import React from 'react'
import Bsk from './pages/Bsk'
import { Route, Routes } from 'react-router-dom'
import  Login  from './pages/Login/Login'
import './App.css'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/bsk-travels' element={<Bsk />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
