import axios from 'axios'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {


  const handlePrint = () => {
    window.print(); // Déclenche l'impression de la page
  };

  const [listes, setListes] = useState([]);

  useEffect(() => { 
    getListes();
  }, []);

  const getListes = async () => {
    const response = await axios.get("http://localhost:5001/api/Registre_Employeur");
    console.log(response.data);
    setListes(response.data);
  };

  
  return (
    <div className='container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Liste des Responsables</StyledTableCell>
            <StyledTableCell align="right">Nom</StyledTableCell>
            <StyledTableCell align="right">Emploi</StyledTableCell>
            <StyledTableCell align="right">Classification</StyledTableCell>
            <StyledTableCell align="right">Nationalité</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listes.map((row) => (
            <StyledTableRow key={row.id_Registre_Employeur}>
              <StyledTableCell component="th" scope="row">
                {row.id_Registre_Employeur}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fullName}</StyledTableCell>
              <StyledTableCell align="right">{row.emploi}</StyledTableCell>
              <StyledTableCell align="right">{row.classification}</StyledTableCell>
              <StyledTableCell align="right">{row.nationalité}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer><br/>
    <div className='button'> <button onClick={handlePrint}>Imprimer</button></div>
  </div>
  );
}
