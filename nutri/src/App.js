import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

function App() {
  return (
  <Routes>
    <Route exact path="/" component={ Home }/>
  </Routes>
  );
}

export default App;
