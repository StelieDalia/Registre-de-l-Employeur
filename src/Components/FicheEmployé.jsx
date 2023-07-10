import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Accueil.css'



function BorderExample() {
  const myText = 'FICHE D IDENTITÉ DES TRAVAILLEURS';

  return (
    <>
    
      <br />
      <p className='text txt'>{myText}</p>
      <div className='box'>
        <div className='card'>
          <div className='danger'>
            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Body>
                  
                  <Link to='/checkout' style={{ textDecoration: 'none',color:'black' }}>
                  <div className='info'><h4>Ajouter un Employé</h4></div>
                  </Link>
                </Card.Body>
            </Card>
          </div>
        </div>
        <div className='card2'>
          <Card border="dark" className='dark'>
          <Link to='/Liste' style={{ textDecoration: 'none',color:'black' }}>
            <div className='info'><h4>Liste des employés</h4></div>
          </Link>
          </Card>
        </div>
      </div>
      
    </>
  );
}

export default BorderExample;
