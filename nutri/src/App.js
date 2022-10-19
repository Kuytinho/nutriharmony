import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Agendamento from './routes/Agendamento';
import Blog from './routes/Blog';
import Consultorias from './routes/Consultorias';
import Programas from './routes/Programas';
import Galeria from './routes/Galeria';

function App() {
  return (
  <Routes>
    <Route exact path="/" element={ <Home /> }/>
    <Route exact path="/agendamento" element={ <Agendamento /> }/>
    <Route exact path="/blog" element={ <Blog /> }/>
    <Route exact path="/consultorias" element={ <Consultorias /> }/>
    <Route exact path="/programas" element={ <Programas /> }/>
    <Route exact path="/galeria" element={ <Galeria /> }/>
  </Routes>
  );
}

export default App;
