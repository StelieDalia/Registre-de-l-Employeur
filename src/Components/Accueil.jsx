import * as React from 'react';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import './Accueil.css'
import Topbar from './topbar'


function BorderExample() {
  const myText = 'Veuillez vous connecter pour commencer';

  return (
    <>
      <Topbar />
      <br />
      <p className='text'>{myText}</p>
      <div className='box'>
        <div className='card'>
          <div className='danger'>
            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Body>
                  <div className='info'><h4> Information sur l'Entreprise</h4></div>
                  <Link to='/Entreprise' style={{ textDecoration: 'none', color:'black' }}>
                    <h3>
                      <span className="light-text">
                        FICHE ENTREPRISE
                      </span>
                    </h3>
                  </Link>
                </Card.Body>
            </Card>
          </div>
        </div>
        <div className='card2'>
          <Card border="dark" className='dark'>
            <div className='info'><h4>Fiche d'identité des travailleurs</h4></div>
            <Card.Body className='body'>
            <Link to='/FicheEmployé' style={{ textDecoration: 'none', color:'black' }}>
              <h3>
                <span className="light-text">
                  FICHE IDENTITE DES TRAVAILLEURS
                </span>
              </h3>
            </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      
    </>
  );
}

export default BorderExample;
