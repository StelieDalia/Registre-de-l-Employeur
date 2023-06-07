import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
              <Link to='/TableauEmployeur' style={{ textDecoration: 'none' }}>
                <Card.Body>
                  <div className='info'><h4> Information sur l'Entreprise</h4></div>
                  <h3><span className="light-text">
                    FICHE ENTREPRISE
                    </span></h3>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div className='warning'>
            <Card border="warning" style={{ width: '18rem' }}>
              <Card.Body>
                <div className='info'><h4>Observations corps de contrôle</h4></div>
                <h3><span className="light-text">
                  VISAS CORPS DE CONTRÔLE
                  </span></h3>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='card2'>
          <Card border="dark" className='dark'>
            <div className='info'><h4>Information sur l'ensemble des travailleurs</h4></div>
            <Card.Body className='body'>
              <h3><span className="light-text">FICHE IDENTITE DES TRAVAILLEURS</span></h3>
              <h3><span className="light-text">FICHE NOMINATIVE INDIVIDUELLE DES TRAVAILLEURS</span></h3>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='btn'><Button >Quitter</Button></div>
    </>
  );
}

export default BorderExample;
