import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";

import { createUserWithEmailAndPassword } from "firebase/auth";
import SignIn from "./SignIn";
import { auth } from "./firebaseConfig";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SignUpH = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Box
      className="app-container"
      display="flex"
      flexDirection={"column"}
      maxWidth={450}
      height={430}
      margin="auto"
      alignItems="center"
      justifyContent={"center"}
      marginTop={5}
      paddingTop={3}
      textAlign="center"
      borderRadius={5}
      boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <Typography variant="h4" color={"primary"}>
        SignUp
      </Typography>
      
    <Stack>
      <TextField
        name="name"
        label="name"
        margin="normal"
        type="text"
        variant="outlined"
        placeholder="name"
      />
      <TextField
        name="email"
        label="email"
        margin="normal"
        type="email"
        required
        variant="outlined"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <TextField
        name="password"
        margin="normal"
        label="password"
        required
        type="password"
        variant="outlined"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      </Stack>
      <Box >
        <Button variant="contained" onClick={SignUpH}>
          SignUp
        </Button>
        
      </Box>
    </Box>
  );
}
