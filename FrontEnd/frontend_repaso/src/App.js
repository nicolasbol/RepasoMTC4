import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import CrearCuenta from './componentes/CrearCuenta';
import CrearCategoria from './componentes/CrearCategoria';
import Admin from './componentes/Admin';
import Home from './componentes/Home';

function App() {
  return(
  
    <Router>
      <Routes>
        <Route path="/" exact element = { <Home/> }/>
        <Route path="/admin" exact element = { <Admin/> }/>
        <Route path="/login" exact element = { <Login/> }/>
        <Route path="/crear-cuenta" exact element = { <CrearCuenta/> }/>
        <Route path="/crear-categoria" exact element = { <CrearCategoria/> }/>
      </Routes>
    </Router>

  );
}

export default App;