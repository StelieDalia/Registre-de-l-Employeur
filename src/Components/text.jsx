import React from 'react';
import { Link } from 'react-router-dom';

function Inscription() {
    const handleRedirect = (inscription) => {
        window.open(inscription, '_blank');
      };
  return (
    <div>
      <p>Pas de compte?</p>
      <Link to="/Signup" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => handleRedirect('inscription')}>Cliquez ici</Link>
    </div>
  );
}

export default Inscription;