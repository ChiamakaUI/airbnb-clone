import React, { useState, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TbBrandAirbnb } from "react-icons/tb";
import Video from "./Video";
import SignInWithGoogle from "./SignInWithGoogle";
import { currentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

const HostBanner = () => {
  const iconStyle = {
    fontSize: "2.5rem",
    cursor: "pointer",
  };
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(currentUserContext);
  const navigate = useNavigate()
  const handleHosting = () => {
    if(!currentUser){
      setIsOpen(true)
      return
    }
    navigate('/become-a-host')
  }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "550px",
        }}
      >
        <Box
          sx={{ width: "50%", backgroundColor: "#000000", minHeight: "100%" }}
        >
          <Box sx={{ width: "75%", mx: "auto", my: 6 }}>
            <TbBrandAirbnb style={iconStyle} color="white" />
            <Typography
              variant="h2"
              sx={{ color: "white", marginTop: "15%", marginBottom: "7%" }}
            >
              Open your door to hosting
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#FF4466",
                mx: "auto",
                "&:hover": {
                  backgroundColor: "#FF4466",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={handleHosting}
            >
              Try Hosting
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "50%", minHeight: "100%" }}>
          <Video
            videoSrc={
              "https://player.vimeo.com/external/645686154.sd.mp4?s=4f977c22c92de3a08963b18d59e14d9654fd673e&profile_id=164&oauth_token_id=57447761"
            }
          />
        </Box>
      </Box>
      {
        isOpen && <SignInWithGoogle setIsOpen={setIsOpen} redirect={false}/>
      }
    </Box>
  );
};

export default HostBanner;
