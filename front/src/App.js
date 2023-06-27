import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componentes/Home/Home"
import Contacto from './componentes/Contacto/Contacto';
import Cabaña from "./componentes/Cabañas/cabañas";
import Galeria from "./componentes/imagenes/Galeria";
import Footer from "./componentes/Footer/Footer"



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home/>

        </Route>
        <Route exact path="/contacto">
          <Contacto />

        </Route>
        <Route exact path="/Cabaña">
          <Cabaña />

        </Route>
        <Route exact path="/Galeria">
          <Galeria/>

        </Route>
        
      </Switch >
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
