import React from "react";
import './topbar.css'
import logo2 from './logo2.jpg'

const Topbar = () => {
    

    return ( 
        <div className="topbar">
            <img src={logo2} alt="logo2" className="logo2" style={{width: 100}} /> 
            <div className='accueil'><h2>Accueil</h2></div>
        </div>
     );
}
 
export default Topbar;