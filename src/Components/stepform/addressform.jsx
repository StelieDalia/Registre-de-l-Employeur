import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AddressForm({
  
  setDateApplication,
  setEmploi,
  setClassification,
  setSalaire,
  setAccessoires,
  setNourriture,
  setLogement,
  setIndemnité,
  setIndemnitésDiverses,
  setAllocation,
  setPrimes,
  setCautionnement,
  setCongés,
  setDurée,
  setDate,
  setAllocationCongé,
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


}) 

{

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
   

  return (
    <form >
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ marginLeft:'28%' }}>
        CONDITION D'EMPLOI
      </Typography><br/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h15" gutterBottom><span className="light-text">
          Date d'application:
          </span></Typography>
          <TextField
                margin="normal"
                required
                fullWidth
                id="dateApplication"
                name="dateApplication"
                autoComplete="dateApplication"
                value={dateApplication}
                onChange={(e) => setDateApplication(e.target.value)}
                type='date'
                autoFocus
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h15" gutterBottom><span className="light-text">
          Emploi:
          </span></Typography>
          <TextField
                margin="normal"
                required
                fullWidth
                id="emploi"
                name="emploi"
                autoComplete="emploi"
                value={emploi}
                onChange={(e) => setEmploi(e.target.value)}
                type='text'
                autoFocus
              />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h15" gutterBottom><span className="light-text">
          Classification professionnelle:
          </span></Typography>
          <TextField
                margin="normal"
                required
                fullWidth
                id="classification"
                name="classification"
                autoComplete="classification"
                value={classification}
                type='text'
                onChange={(e) => setClassification(e.target.value)}
                autoFocus
              />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Salaire de base:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="salaire"
              name="salaire"
              autoComplete="salaire"
              value={salaire}
              onChange={(e) => setSalaire(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Accessoires de salaire:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="accessoires"
              name="accessoires"
              autoComplete="accessoires"
              value={accessoires}
              onChange={(e) => setAccessoires(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Nourriture:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="nourriture "
              name="nourriture "
              autoComplete="nourriture "
              value={nourriture}
              onChange={(e) => setNourriture(e.target.value)}
              type='number'
              
            />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Logement:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="logement  "
              name="logement  "
              autoComplete="logement  "
              value={logement}
              onChange={(e) => setLogement(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Indemnité due au titre de l'art. 94 :
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="indemnité"
              name="indemnité"
              autoComplete="indemnité"
              value={indemnité}
              onChange={(e) => setIndemnité(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Indemnités diverses:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="indemnitésDiverses"
              name="indemnitésDiverses"
              autoComplete="indemnitésDiverses"
              value={indemnitésDiverses}
              onChange={(e) => setIndemnitésDiverses(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Allocation familiale:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="allocation"
              name="allocation"
              autoComplete="allocation"
              value={allocation}
              onChange={(e) => setAllocation(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Primes diverses:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="primes"
              name="primes"
              autoComplete="primes"
              value={primes}
              onChange={(e) => setPrimes(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Cautionnement:
          </span></Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="cautionnement"
            name="cautionnement"
            autoComplete="cautionnement"
            value={cautionnement}
            onChange={(e) => setCautionnement(e.target.value)}
            type='number'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Congés payés:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="congés"
              name="congés"
              autoComplete="congés"
              value={congés}
              onChange={(e) => setCongés(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Durée du congé:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="durée"
              name="durée"
              autoComplete="durée"
              value={durée}
              onChange={(e) => setDurée(e.target.value)}
              type='text'
              autoFocus
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Date du départ en congé:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="date"
              name="date"
              autoComplete="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type='date'
              autoFocus
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Allocation de congé:
          </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="allocationCongé"
              name="allocationCongé"
              autoComplete="allocationCongé"
              value={allocationCongé}
              onChange={(e) => setAllocationCongé(e.target.value)}
              type='number'
              autoFocus
            />
        </Grid>
       

      </Grid>
    </React.Fragment>
    </form>
  );
}