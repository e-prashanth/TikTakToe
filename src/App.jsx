import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage.jsx';
import GamePage from './Pages/GamePage.jsx';
import GamePageAi from './Pages/GamePageAi.jsx';
function App() {
  return (
    <Routes>
      <Route path='/TikTakToe/' element={<MainPage/>}/>
      <Route path='/TikTakToe/game/' element={<GamePage/>}/>
      <Route path='/TikTakToe/gamewithcomputer' element={<GamePageAi/>}></Route>
    </Routes>
  )
}

export default App;