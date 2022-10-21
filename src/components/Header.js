import React, { useState, useContext } from "react";
import {
  Stack,
  Typography,
  Divider,
  Menu,
  MenuItem,
  ButtonGroup,
  IconButton,
  Box,
} from "@mui/material";
import { TbBrandAirbnb } from "react-icons/tb";
import { IoSearchCircle } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { currentUserContext } from "../App";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";


const Header = () => {
  const iconStyles = {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "black",
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { currentUser, setCurrentUser } = useContext(currentUserContext);
  

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setCurrentUser({});
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={3}
      justifyContent="space-between"
      sx={{ my: 2, mx: 5, px: 2, py: 1, margin: "2% auto" }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ display: { xs: "block", sm: "block", md: "block", lg: "flex" } }}
      >
        <TbBrandAirbnb style={{ fontSize: "2.5rem", color: "#FF4466" }} />
        <Typography
          variant="h5"
          sx={{
            color: "#FF4466",
            fontWeight: "bold",
            fontSize: { sm: "16px", xs: "18px", md: "18px", lg: "28px" },
          }}
        >
          airbnb
        </Typography>
      </Stack>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        alignItems="center"
        sx={{
          border: 1,
          p: 1,
          borderColor: "rgb(221, 221, 221)",
          borderRadius: "25px",
          boxShadow: 3,
          color: "rgba(0, 0, 0, 0.87)",
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Anywhere
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Any Week
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">Add guests</Typography>
          <IoSearchCircle style={{ fontSize: "2.5rem", color: "#FF4466" }} />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Link to="host/homes">Become a Host </Link>
        <Stack
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        >
          <BsGlobe style={iconStyles} />
        </Stack>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {Object.keys(currentUser).length === 0 ? (
            <Box>
              <Link to="create-account">
                <MenuItem onClick={handleClose}> Sign up</MenuItem>{" "}
              </Link>
              <MenuItem
                onClick={() => {
                  setIsOpen(true);
                  handleClose();
                }}
              >
                Log in
              </MenuItem>
            </Box>
          ) : (
            <MenuItem>{currentUser?.name}</MenuItem>
          )}

          <Divider />
          <Link to="host/homes">
            <MenuItem onClick={handleClose}> Host your home </MenuItem>{" "}
          </Link>
          <Link to="host/experience">
            <MenuItem onClick={handleClose}> Host an experience</MenuItem>{" "}
          </Link>
          {/* <MenuItem onClick={handleClose}>Book an experience</MenuItem> */}
          {Object.keys(currentUser).length !== 0 && (
            <Box>
              <Divider />
              <MenuItem
                onClick={() => {
                  // handleClose
                  logout();
                }}
              >
                Log out
              </MenuItem>
            </Box>
          )}
        </Menu>
        <ButtonGroup
          variant="contained"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            border: 1,
            borderColor: "rgb(221, 221, 221)",
            borderRadius: "20px",
          }}
        >
          <IconButton>
            <GiHamburgerMenu style={iconStyles} />
          </IconButton>
          <IconButton>
            <CgProfile style={iconStyles} />
          </IconButton>
        </ButtonGroup>
        {isOpen && <LoginForm setIsOpen={setIsOpen} shouldNavigate={false} />}
      </Stack>
    </Stack>
  );
};

export default Header;
