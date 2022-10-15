import { Box } from "@mui/material";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            CatchingPokemon
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/SignUp")}>
              SignUp
            </Button>
            <Button color="inherit" onClick={() => navigate("/SignIn")}>
              SignIn
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
