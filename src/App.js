import './App.css';
import Home from './Components/accueilConnexion'
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/signup';
import Accueil from './Components/Accueil';
import Liste from './Components/Liste'
import Checkout from './Components/stepform/checkout'
import FicheEmployé from './Components/FicheEmployé'
import Entreprise from './Components/Entreprise'
import ListeResponsable from './Components/ListeResponsable'

function App() {
  
  return (

      <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Text />} /> */}
        <Route exact path="/ListeResponsable" element={<ListeResponsable/>} />
        <Route exact path="/Entreprise" element={<Entreprise/>} />
        <Route exact path="/FicheEmployé" element={<FicheEmployé/>} />
        <Route exact path="/Accueil" element={<Accueil />} />
        <Route exact path="/Inscription" element={<Signup />} />
        <Route exact path="/Liste" element={<Liste />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/" element={< Home />} />
        
      </Routes> 
    </BrowserRouter>


  );
}

export default App;

    
