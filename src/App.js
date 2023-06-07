import './App.css';
import Home from './Components/accueilConnexion'
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/signup';
import Accueil from './Components/Accueil';
import Liste from './Components/Liste'
import Checkout from './Components/stepform/checkout'

function App() {
  
  return (

      <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Text />} /> */}
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

    
