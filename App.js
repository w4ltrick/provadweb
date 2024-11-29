import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Ola from './Pages/Ola';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Ola" element={<Ola />} />
        </Routes>
        <Footer>Desenvolvido por Vitor Waltrick</Footer>
      </div>
    </Router>
  );
}

export default App;