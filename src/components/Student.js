import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container , Paper} from '@mui/material';



export default function Student() {
  const paperStyle = {padding: '50px 20px', width: '600px', margin: '20px auto'};
  const[name, setName]=useState('')
  const[address,setAddress]=useState('')


  return (

    <Container>
      <Paper elevation={3} style ={paperStyle}>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
        <form
        
          component="form"
          sx={{ '& > :not(style)': { m: 1,} }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
           value = {name}
           onChange={(e) => setName(e.target.value)}/>
          
         
          
          <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
          value = {address}
          onChange={(e) => setAddress(e.target.value)} />

        </form>

        {name}
        {address}
      </Paper>
    </Container>
  );
}