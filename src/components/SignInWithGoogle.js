import React, { useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import Modal from "./Modal";
import { Box, Button, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { currentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const SignInWithGoogle = (props) => {
  const { setCurrentUser } = useContext(currentUserContext);
  const navigate = useNavigate();
  const handleSignInPopUp = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser({name: user.displayName, email: user.email, image: user.photoURL})
        if(props.navigate){
          navigate("/become-a-host");
        }
        if(!props.navigate){
          props.setIsOpen(false)
        }
        if(props.hasParentModal){
          props.showParentModal(false)
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };


  return (
    <Modal
      modalColor={"rgba(0, 0, 0, 0.5)"}
      setIsOpen={props.setIsOpen}
      iconColor={"white"}
    >
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          my: 5,
          padding: "30px",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">Login or Sign up with google</Typography>
        <Button
          variant="outlined"
          startIcon={<FcGoogle />}
          size="large"
          onClick={handleSignInPopUp}
          sx={{ width: "100%", marginTop: "20px" }}
        >
          Continue with Google
        </Button>
      </Box>
    </Modal>
  );
};

//onClick={() => {props.redirect ? handleSignInRedirect() : handleSignInPopUp()}}

export default SignInWithGoogle;
