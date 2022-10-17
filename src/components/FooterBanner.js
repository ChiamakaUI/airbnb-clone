import React, { useState, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import Video from "./Video";
import SignInWithGoogle from "./SignInWithGoogle";
import { currentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

const FooterBanner = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(currentUserContext);
  const navigate = useNavigate()
  const handleHosting = () => {
    console.log("bae")
    if(Object.keys(currentUser).length === 0){
      console.log('baea')
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
        <Box sx={{ width: "50%", minHeight: "100%" }}>
          <Video
            videoSrc={
              "https://player.vimeo.com/external/512066716.sd.mp4?s=528590cc7509afebda83a8240bfde809064d12e2&profile_id=164&oauth2_token_id=57447761"
            }
          />
        </Box>
        <Box
          sx={{ width: "50%", backgroundColor: "#000000", padding: "153px 0" }}
        >
          <Box sx={{ width: "75%", mx: "auto", my: 6 }}>
            <Typography variant="h3" sx={{ color: "white", marginTop: "15%" }}>
              Try hosting on Airbnb
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ textAlign: "center" }}
            >
              Join us. We’ll help you every step of the way.
            </Typography>
            <Box
              m={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
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
        </Box>
      </Box>
      {
        isOpen && <SignInWithGoogle setIsOpen={setIsOpen} redirect={false}/>
      }
    </Box>
  );
};

export default FooterBanner;
