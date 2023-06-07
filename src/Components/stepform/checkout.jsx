import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentForm from './PaymentForm';
import AddressForm from './addressform';
import axios from 'axios'
import { useState } from "react";



  

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const steps = ['condition d emploi', 'Informations de l employé'];




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme(); 
const handleRedirect = (url) => {
  window.open(url, '_blank');
};

export default function Checkout() {

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
  const [DateEntrée, setDateEntrée] = useState('');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationalité, setNationalité] = useState('');
  const [sexe, setSexe] = useState('');
  const [filiation, setFiliation] = useState('');
  const [situationFamille, setSituationFamille] = useState('');
  const [nombreEnfant, setNombreEnfant] = useState('');
  const [numéroVisa, setNuméroVisa] = useState('');
  const [dateVisa, setDateVisa] = useState('');
  const [dateCessation, setDateCessation] = useState('');



  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm
        setDateApplication={setDateApplication}
        setEmploi={setEmploi}
        setClassification={setClassification}
        setSalaire={setSalaire}
        setAccessoires={setAccessoires}
        setNourriture={setNourriture}
        setLogement={setLogement}
        setIndemnité={setIndemnité}
        setIndemnitésDiverses={setIndemnitésDiverses}
        setAllocation={setAllocation}
        setPrimes={setPrimes}
        setCautionnement={setCautionnement}
        setCongés={ setCongés}
        setDurée={ setDurée}
        setDate={setDate}
        setAllocationCongé={setAllocationCongé}
        dateApplication={dateApplication}
        emploi={emploi}
        classification={classification}
        salaire ={salaire}
        accessoires={accessoires}
        nourriture={nourriture}
        logement={logement}
        indemnité={indemnité}
        indemnitésDiverses={allocation}
        allocation={allocation}
        primes={primes}
        cautionnement={cautionnement}
        congés={congés}
        durée={durée}
        date={date}
        allocationCongé={allocationCongé}
        />;
      case 1:
        return <PaymentForm 
        setDateEntrée={ setDateEntrée}
        setFullName={setFullName}
        setDateOfBirth={setDateOfBirth}
        setNationalité={setNationalité}
        setSexe={setSexe}
        setFiliation={setFiliation}
        setSituationFamille={setSituationFamille}
        setNombreEnfant={setNombreEnfant}
        setNuméroVisa={setNuméroVisa}
        setDateVisa={setDateVisa}
        setDateCessation={setDateCessation}
        DateEntrée={DateEntrée}
        fullName={fullName}
        dateOfBirth={dateOfBirth}
        nationalité={nationalité}
        sexe={sexe}
        filiation={filiation}
        situationFamille={situationFamille}
        nombreEnfant={nombreEnfant}
        numéroVisa={numéroVisa}
        dateVisa={dateVisa}
        dateCessation={dateCessation}
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const dalia = {
    
    dateApplication: dateApplication,
    emploi:  emploi,
    classification: classification,
    salaire:  salaire,
    accessoires: accessoires,
    nourriture: nourriture,
    logement: logement,
    indemnité: indemnité,
    indemnitésDiverses:  indemnitésDiverses,
    allocation: allocation,
    primes: primes,
    cautionnement:cautionnement,
    congés: congés,
    durée: durée,
    date: date,
    allocationCongé: allocationCongé,
    DateEntrée: DateEntrée,
    fullName: fullName,
    nationalité: nationalité,
    sexe: sexe,
    dateOfBirth: dateOfBirth,
    filiation: filiation,
    situationFamille: situationFamille,
    nombreEnfant: nombreEnfant,
    numéroVisa: numéroVisa,
    dateVisa: dateVisa,
    dateCessation: dateCessation
    }
  function handleSubmit () {
    console.log(dalia)

    setActiveStep(activeStep + 1);
    
    axios.post('http://localhost:3001/ajout/Registre_Employeur', dalia)
    .then(response => {
      console.log(response.data); // Affiche la réponse du serveur pour la deuxième étape
      // Vous pouvez effectuer des actions supplémentaires ici, si nécessaire
      
    })
    .catch(error => {
      console.error(error);
    });
  
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <div className='nav'>
          <Typography variant="h6" color="inherit" noWrap>
            Nom de la société
          </Typography>
          <Link to="/Liste" onClick={() => handleRedirect('Liste')}><Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Liste des employés
            </Button></Link>
            </div>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Régistre de l'Employeur
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((value) => (
              <Step key={value}>
                <StepLabel>{value}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Retour
          </Button>
      )}

                <Button
                  type='submit'
                  onClick={handleSubmit}
                 
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Valider' : 'Suivant'}
          </Button>
              </Box>                

            </React.Fragment>
      )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}