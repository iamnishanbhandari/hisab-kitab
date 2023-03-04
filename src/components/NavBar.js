import { AppBar, Button, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../theme";
import { useAuth } from "../Firebaseconfig/auth";

const NavBar = () => {
    const {authUser,signOut} = useAuth();
  return (
    <>
    <ThemeProvider theme={theme}> 
      <AppBar position="fixed">
        <Toolbar variant="dense" color="primary" sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <Typography variant="h6">Hisab Kitab</Typography>
          <Box sx={{ display: "flex" ,alignItems:"center",}}>
            <Typography variant="h7" mr={7}>{authUser?.email}</Typography>
            <Button variant="text" color="inherit" onClick={signOut}>LogOut</Button>
          </Box>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </>
  );
};

export default NavBar;
