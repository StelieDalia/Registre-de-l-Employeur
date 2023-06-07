import React, { useState } from 'react';
import './information.css'

const EmployeeRegistrationForm = () => {
  const [DateEntrée, setDateEntrée] = useState('');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationalité, setNationalité] = useState('');
  const [gender, setGender] = useState('');
  const [filiation, setFiliation] = useState('');
  const [situationFamille, setSituationFamille] = useState('');
  const [nombreEnfant, setNombreEnfant] = useState('');
  const [numéroVisa, setNuméroVisa] = useState('');
  const [dateVisa, setDateVisa] = useState('');
  const [dateCessation, setDateCessation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data or send it to the server
    console.log({
      DateEntrée,
      fullName,
      dateOfBirth,
      nationalité,
      gender,
      filiation,
      situationFamille,
      nombreEnfant,
      numéroVisa,
      dateVisa,
      dateCessation,
      
    });

    // Clear the form fields

    setFullName('');
    setDateEntrée('');
    setDateOfBirth('');
    setNationalité('');
    setGender('');
    setFiliation('');
    setSituationFamille('');
    setNombreEnfant('');
    setNuméroVisa('');
    setDateVisa('');
    setDateCessation('');
    
  };


  return(
    <div className='formulaire'>
      <form onSubmit={handleSubmit} >
        <h2>Employee Registration Form</h2>
        <label>
          Date d'entrée dans l'établissement:
          <input
            type="date"
            value={DateEntrée}
            onChange={(e) => setDateEntrée(e.target.value)}
            required
          />
          </label>
        <label>
          Nom employé
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Nationalité:
          <input
            type="text"
            value={nationalité}
            onChange={(e) => setNationalité(e.target.value)}
            required
          />
        </label>
        <label>
          Sexe:
          <select value={gender} onChange={(e) => setGender(e.target.value)}required>
            <option value="">Sélectionnez</option>
            <option value="male">Masculin</option>
            <option value="female">Féminin</option>
          </select>
        </label><br/><br/>
        <label>
          Date de naissance:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </label>
        <label>
          Filiation:
          <select value={filiation} onChange={(e) => setFiliation(e.target.value)}required>
            <option value="">Sélectionnez</option>
            <option value="Père">Père</option>
            <option value="Mère">Mère</option>
          </select>
        </label><br/><br/>
        <label>
          Situation de famille:
          <input
            type="text"
            value={situationFamille}
            onChange={(e) => setSituationFamille(e.target.value)}
            required
          />
        </label>
        <label>
          Nombre d'enfant à charge :
          <input
            type="number"
            value={nombreEnfant}
            onChange={(e) => setNombreEnfant(parseInt(e.target.value))}
            required
          />
        </label>
        <label>
          Numéro du visa du contrat de travail ou de l'etablissement de la carte de travail:
          <input
            type="number"
            value={numéroVisa}
            onChange={(e) => setNuméroVisa(e.target.value)}
            
          />
        </label>
        <label>
          Date du visa du contrat de travail ou de l'etablissement de la carte de travail:
          <input
            type="date"
            value={dateVisa}
            onChange={(e) => setDateVisa(e.target.value)}
            
          />
        </label>
        <label>
          Date de cessation de service:
          <input
            type="date"
            value={dateCessation}
            onChange={(e) => setDateCessation(e.target.value)}
            
          />
        </label>
      </form>
    </div>
  )
};

export default EmployeeRegistrationForm;