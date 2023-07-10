import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';



export default function PaymentForm({

  setDateEntrée,
  setFullName,
  setDateOfBirth,
  setNationalité,
  setSexe,
  setFiliation,
  setSituationFamille,
  setNombreEnfant,
  setNuméroVisa,
  setDateVisa,
  setDateCessation,
  DateEntrée,
  fullName,
  dateOfBirth,
  nationalité,
  sexe,
  filiation,
  situationFamille,
  nombreEnfant,
  numéroVisa,
  dateVisa,
  dateCessation,
}) {

  console.log({
    DateEntrée,
    fullName,
    dateOfBirth,
    nationalité,
    sexe,
    filiation,
    situationFamille,
    nombreEnfant,
    numéroVisa,
    dateVisa,
    dateCessation,
    
  });
   

  return (

    <form >
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ marginLeft:'25%' }}>
      INFORMATION SUR L'EMPLOYÉ
      </Typography> <br/>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Date d'entrée dans l'établissement:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="DateEntrée"
              name="DateEntrée"
              autoComplete="DateEntrée"
              value={DateEntrée}
              onChange={(e) => setDateEntrée(e.target.value)}
              autoFocus
              type="date"
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Noms et prénoms de l'employé:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              name="fullName"
              autoComplete="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoFocus
              type="text"
            />
        </Grid>
       
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
          Nationalité:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="nationalité"
              name=" nationalité"
              autoComplete="nationalité"
              value={nationalité}
              onChange={(e) => setNationalité(e.target.value)}
              autoFocus
              type="text"
            />
        </Grid>
        <Grid item xs={12} md={6}>
        
        <label>
          Sexe:
          <br/><select value={sexe}  onChange={(e) => setSexe(e.target.value)} required className='select'>
            <option value="">Sélectionnez</option>
            <option value="male">Masculin</option>
            <option value="female">Féminin</option>
          </select>
        </label>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
        Date de naissance:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              name="age"
              autoComplete="age"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              autoFocus
              type="date"
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <label>
          Filiation:
          <br/><select value={filiation}  onChange={(e) => setFiliation(e.target.value)} required className='select'>
            <option value="">Sélectionnez</option>
            <option value="Père">Père</option>
            <option value="Mère">Mère</option>
          </select>
        </label>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
        Situation de famille:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="situationFamille"
              name="situationFamille"
              autoComplete="situationFamille"
              value={situationFamille}
              onChange={(e) => setSituationFamille(e.target.value)}
              autoFocus
              type="text"
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
        Nombre d'enfant à charge :
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="nombreEnfant"
              name="nombreEnfant"
              autoComplete="nombreEnfant"
              value={nombreEnfant}
              onChange={(e) => setNombreEnfant(e.target.value)}
              autoFocus
              type="number"
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
        Numéro du visa du contrat de travail ou de l'etablissement de la carte de travail:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="numéroVisa"
              name="numéroVisa"
              autoComplete="numéroVisa"
              value={numéroVisa}
              onChange={(e) => setNuméroVisa(e.target.value)}
              autoFocus
              type="number"
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
        Date du visa du contrat de travail ou de l'etablissement de la carte de travail:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="dateVisa"
              name="dateVisa"
              autoComplete="dateVisa"
              value={dateVisa}
              onChange={(e) => setDateVisa(e.target.value)}
              autoFocus
              type="date"
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h15" gutterBottom><span className="light-text">
        Date de cessation de service:
        </span></Typography>
        <TextField
              margin="normal"
              required
              fullWidth
              id="dateCessation"
              name="dateCessation"
              autoComplete="dateCessation"
              value={dateCessation}
              onChange={(e) => setDateCessation(e.target.value)}
              autoFocus
              type="date"
            />
        </Grid>
        
      </Grid>
    </React.Fragment>
    
    </form>
  );
}