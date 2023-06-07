import '../App.css';
import Connexion from './connexion'
import logo2 from './logo2.jpg'
import React from 'react';





function Home() {
  
  return (
    <div className="App flex-container"  >
      <div className='log'>
        <Connexion/>
      </div>
      <div className='log1'><img src={logo2} alt="logo2" className="logo2" style={{width: 360}} />
    </div>  
</div>

  );
}

export default Home;
