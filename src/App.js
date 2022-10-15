import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Box>
  );
}
