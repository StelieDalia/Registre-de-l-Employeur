import React, { useState } from 'react';

const EmployeeRegistrationForm = () => {
  const [dateApplication, setDateApplication] = useState('');
  const [emploi, setEmploi] = useState('');
  const [classification, setClassification] = useState('');
  const [salaire , setSalaire ] = useState('');
  const [accessoires, setAccessoires] = useState('');
  const [nourriture, setNourriture] = useState('');
  const [logement, setLogement] = useState('');
  const [indemnité, setIndemnité] = useState('');
  const [indemnitésDiverses, setIndemnitésDiverses] = useState('');
  const [allocation, setAllocation] = useState('');
  const [primes, setPrimes] = useState('');
  const [cautionnement, setCautionnement] = useState('');
  const [congés, setCongés] = useState('');
  const [durée, setDurée] = useState('');
  const [date, setDate] = useState('');
  const [allocationCongé, setAllocationCongé] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data or send it to the server
    console.log({
      dateApplication,
      emploi,
      classification,
      salaire ,
      accessoires,
      nourriture,
      logement,
      indemnité,
      indemnitésDiverses,
      allocation,
      primes,
      cautionnement,
      congés,
      durée,
      date,
      allocationCongé,
      
    });

    // Clear the form fields

    setDateApplication('');
    setEmploi('');
    setClassification('');
    setSalaire ('');
    setAccessoires('');
    setNourriture('');
    setLogement('');
    setIndemnité('');
    setIndemnitésDiverses('');
    setAllocation('');
    setPrimes('');
    setCautionnement('');
    setCongés('');
    setDurée('');
    setDate('');
    setAllocationCongé('');
    
    
  };


  return(
    <form onSubmit={handleSubmit}>
      <h2>Employee Registration Form</h2>
      <label>
        Date d'application:
        <input
          type="date"
          value={dateApplication}
          onChange={(e) => setDateApplication(e.target.value)}
          required
        />
        </label>
      <label>
        I- Emploi
        <input
          type="text"
          value={emploi}
          onChange={(e) => setEmploi(e.target.value)}
          required
        />
      </label>
      <label>
        Classification professionnelle
        <input
          type="text"
          value={classification}
          onChange={(e) => setClassification(e.target.value)}
          required
        />
      </label>
      <label>
        II- Salaire de base:
        <input
          type="number"
          value={salaire }
          onChange={(e) => setSalaire(e.target.value)}
          required
        />
      </label>
      <label>
        III- Accessoires de salaire        
        <input
          type="number"
          value={accessoires}
          onChange={(e) => setAccessoires(e.target.value)}
          required
        />
      </label>
      <label>
        Nourriture        
        <input
          type="number"
          value={nourriture}
          onChange={(e) => setNourriture(e.target.value)}
          required
        />
      </label>
      <label>
        Logement       
        <input
          type="number"
          value={logement}
          onChange={(e) => setLogement(e.target.value)}
          required
        />
      </label>
      <label>
        Indemnité due au titre de l'art. 94        
        <input
          type="number"
          value={indemnité}
          onChange={(e) => setIndemnité(e.target.value)}
          required
        />
      </label>
      <label>
        Indemnités diverses        
        <input
          type="number"
          value={indemnitésDiverses}
          onChange={(e) => setIndemnitésDiverses(e.target.value)}
          required
        />
      </label>
      <label>
        Allocation familiale        
        <input
          type="number"
          value={allocation}
          onChange={(e) => setAllocation(e.target.value)}
          required
        />
      </label>
      <label>
        Primes diverses       
        <input
          type="number"
          value={primes}
          onChange={(e) => setPrimes(e.target.value)}
          required
        />
      </label>
      <label>
        IV- Cautionnement       
        <input
          type="number"
          value={cautionnement}
          onChange={(e) => setCautionnement(e.target.value)}
          required
        />
      </label>
      <label>
        V- Congés payés       
        <input
          type="number"
          value={congés}
          onChange={(e) => setCongés(e.target.value)}
          required
        />
      </label>
      <label>
        Durée du congé       
        <input
          type="number"
          value={durée}
          onChange={(e) => setDurée(e.target.value)}
          required
        />
      </label>
      <label>
        Date du départ en congé:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Allocation de congé     
        <input
          type="number"
          value={allocationCongé}
          onChange={(e) => setAllocationCongé(e.target.value)}
          required
        />
      </label>
        
      
      
      
    </form>
  )
};

export default EmployeeRegistrationForm;