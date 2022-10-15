import React from "react";
import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const CLIENT_ID = "7c4b1fdd91d5c9f17293";

export default function SignIn() {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const providers = new FacebookAuthProvider();
  const provider = new GoogleAuthProvider();
  const [data, setData] = useState({});
  function loginWithGithub() {
    window.location.assign(
      "https://github.com/settings/applications/2017761?cliend_id" + CLIENT_ID
    );
  }
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParams = urlParams.get("code");
    console.log(codeParams);
  }, []);

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSumbit = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const facebookAuth = async () => {
    try {
      const result = await signInWithPopup(auth, providers);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box
      className="app-container"
      display="flex"
      flexDirection={"column"}
      maxWidth={430}
      height={430}
      alignItems="center"
      justifyContent={"center"}
      margin="auto"
      marginTop={5}
      paddingTop={3}
      borderRadius={5}
      boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <Typography color="primary" fontSize={40}>
        SignIn
      </Typography>

      <TextField 
        label="Email"
        required
        type="email"
        margin="normal"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter your email address"
      />
      <TextField
        label="Password"
        required 
        type="text"
        margin="normal"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter your password"
      />

      <Button variant="contained" onClick={handleSumbit}>
        SignIn
      </Button>

      <Typography margin={"normal"} variant='body2'>Or Sign Up Using</Typography>
      <Stack
        flexDirection="row"
        spacing={0}
        textAlign="center"
        justifyContent={"center"}
      >
        <IconButton size="large">
          <Avatar backgroungColor="skyblue">
            <FacebookRoundedIcon
              fontSize="medium"
              color="primary"
              onClick={facebookAuth}
            />
          </Avatar>
        </IconButton>
        <IconButton onClick={handleLoginWithGoogle} size="medium">
          <Avatar>
            <GoogleIcon fontSize="medium" color="error" />
          </Avatar>
        </IconButton>
        <IconButton onClick={loginWithGithub} size="large">
          <Avatar>
            <GitHubIcon fontSize="medium" color="inherit" />
          </Avatar>
        </IconButton>
      </Stack>
    </Box>
  );
}
