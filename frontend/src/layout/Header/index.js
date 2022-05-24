import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, IconButton, Toolbar } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <GiHamburgerMenu />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
