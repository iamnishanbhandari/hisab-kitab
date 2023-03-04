import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {  signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebaseconfig/Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick =  (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        navigate("/Dashboard");
                console.log(user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "100px",
        height: "350px",
        width: "400px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Box mt={2}>
        <Typography variant="h3"> Login </Typography>
      </Box>
      <Box pl={6}>
        <TextField
          label="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box mt={2}>
        <Link to="/Dashboard">
          <Button variant="contained" margin="normal" onClick={handleClick}>
            Login
          </Button>
        </Link>
      </Box>
      <Typography mt={2}>
        No account ?
        <Link to={"/signup"}>
          <Button >Signup</Button>
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
