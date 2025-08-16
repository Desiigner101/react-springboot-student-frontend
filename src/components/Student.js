import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Typography, Box } from '@mui/material';

export default function Student() {
  const paperStyle = { padding: '30px 20px', width: '600px' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);

    // API FETCH
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added!");
    });
  };

    useEffect(() => {
      fetch("http://localhost:8080/student/getAll")
        .then((res) => res.json())
        .then((result) => {
          setStudents(result);
        });
      }, 
  []);

  return (

    <Container
      sx={{
        display: "flex",
        flexDirection: "column", // para ma stack vertically
        alignItems: "center",
        py: 5, // padding for top/bottom
        gap: 4, // spacing between form and student list
      }}
    >
      {/* Add Student Form */}
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5" align="center" color="primary" gutterBottom>
          Add Student
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleClick}
          >
            Submit
          </Button>
        </Box>
      </Paper>

      {/* Student List */}
      <Box sx={{ width: "flex", maxWidth: 800 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Students
        </Typography>
        <Paper elevation={3} style={paperStyle}>
          {students.length === 0 ? (
            <Typography align="center" color="text.secondary">
              No students found.
            </Typography>
          ) : (
            students.map((student) => (
              <Paper
                elevation={6}
                style={{
                  margin: "15px 0",
                  padding: "15px",
                  textAlign: "left",
                }}
                key={student.id}
              >
                <Typography><b>Id:</b> {student.id}</Typography>
                <Typography><b>Name:</b> {student.name}</Typography>
                <Typography><b>Address:</b> {student.address}</Typography>
              </Paper>
            ))
          )}
        </Paper>
      </Box>
    </Container>
  );
}
