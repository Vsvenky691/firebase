import { Typography, Button, Box, Stack, FormControl } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const nagative = useNavigate();
  return( 
    <Box  className="app-container"
          display="flex"
          flexDirection={"column"}
          maxWidth={440}
          height={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          paddingTop={1}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
    <FormControl>
  <Stack spacing={2} width={120} textAlign='center'>
  <Typography color={'primary'}>HomePage</Typography>
  <Button variant='contained' onClick={()=> nagative('/SignUp')}>SignUp</Button>
  <Button variant='contained' onClick={()=> nagative('/SignIn')}>Sign In</Button>
  </Stack>
  </FormControl>
  </Box>
  );
}
