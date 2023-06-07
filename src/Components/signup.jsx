import '../App.css';

import logo2 from './logo2.jpg'
import React from 'react';
import Inscription from './inscription';




function Signup() {
  return (
    <div className="App flex-container"  >
      <div className='log'>
      <Inscription/>
      </div>
      
      <div className='log1'><img src={logo2} alt="logo2" className="logo2" style={{width: 360}} />
    </div>  
</div>

  );
}

export default Signup;
