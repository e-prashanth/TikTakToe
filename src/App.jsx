import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage.jsx';
import GamePage from './Pages/GamePage.jsx';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/game' element={<GamePage/>}/>
    </Routes>
  )
}

export default App