import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Manatee from '../components/Manatee/Manatee'
import Narwhal from '../components/Narwhal/Narwhal'
import Whale from '../components/Whale/Whale'

function App() {
  return (
    <div className="wrapper">
      <h1>Mamíferos Marinhos</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Peixe-Boi</Link>
            </li>
            <li>
              <Link to="/narwhal">Narval</Link>
            </li>
            <li>
              <Link to="/whale">Baleia</Link>
            </li>
            <li>
              <Link to="/whale/beluga">Baleia Beluga</Link>
            </li>
            <li>
              <Link to="/whale/blue">Baleia Azul</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />}></Route>
          <Route path="/narwhal" element={<Narwhal />}></Route>
          <Route exact path="/whale" element={<Whale />}></Route>
          <Route path="/whale/:type" element={<Whale />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
