import React, { useState, useContext } from "react";
import Modal from "./Modal";
import { Box, TextField, Button, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { currentUserContext } from "../App";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";

const LoginForm = ({ setIsOpen, shouldNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useContext(currentUserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const getUserDetails = async (id) => {
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    const { name, email, image } = snapshot.data();
    setCurrentUser({ name, email, image });
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        getUserDetails(user.uid);
        setIsOpen(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const createAccount = () => {
    navigate("/create-account");
  };
  return (
    <Modal setIsOpen={setIsOpen} modalColor="#f6f6f6">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ width: "90%", mx: "auto", my: 4, padding: "20px" }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Login
        </Typography>
        <TextField
          label="Email Address"
          variant="outlined"
          required
          type="email"
          autoComplete="email-address"
          fullWidth
          margin="dense"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          required
          type="password"
          autoComplete="current-password"
          fullWidth
          margin="dense"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "#FF4466",
            width: "100%",
            margin: "2% 0",
            "&:hover": {
              backgroundColor: "#FF4466",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          size="large"
          variant="outlined"
          sx={{
            color: "#FF4466",
            border: "1px solid #FF4466",
            width: "100%",
            margin: "1% 0",
            "&:hover": {
              backgroundColor: "#FF4466",
              color: "#fff",
              border: "2px solid #FF4466",
            },
          }}
          onClick={createAccount}
        >
          Create an Account
        </Button>
        <Button
          size="large"
          variant="outlined"
          sx={{
            color: "#FF4466",
            border: "1px solid #FF4466",
            width: "100%",
            margin: "1% 0",
            "&:hover": {
              backgroundColor: "#FF4466",
              color: "#fff",
              border: "2px solid #FF4466",
            },
          }}
          onClick={() => {
            setModalOpen(true)
          }}
        >
          Sign in with Google
        </Button>
        {modalOpen && (
          <SignInWithGoogle setIsOpen={setModalOpen} navigate={shouldNavigate} hasParentModal={true} showParentModal={setIsOpen}/>
        )}
      </Box>
    </Modal>
  );
};

export default LoginForm;
