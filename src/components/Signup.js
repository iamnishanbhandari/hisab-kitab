import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebaseconfig/Firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userinfo) => {
        const user = userinfo.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
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
        <Typography variant="h3"> Signup </Typography>
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
        <Link to={"/"}>
          <Button variant="contained" margin="normal"  onClick={handleSubmit}>
            Signup
          </Button>
        </Link>
      </Box>
      <Typography mt={2}>
        Have account ?
        <Link to={"/"}>
          <Button>Login</Button>
        </Link>
      </Typography>
    </Container>
  );
};

export default Signup;
