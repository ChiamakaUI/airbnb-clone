import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { BsEmojiFrown } from "react-icons/bs";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Box sx={{ width: "70%", mx: "auto", my: 6 }}>
        <Box
          sx={{
            width: { xs: "60%", sm: "30%", md: "30%", lg: "20%" },
            mx: "auto",
          }}
        >
          <BsEmojiFrown style={{ fontSize: "12rem", color: "#333" }} />
        </Box>

        <Typography variant="h2" sx={{ textAlign: "center", my: 2 }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", my: 2 }}>
          Not Found
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", my: 3 }}>
          The page you are looking for doesn't exist or an another error
          occured.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", my: 2 }}>
          {" "}
          <span onClick={() => navigate(-1)}> Go Back </span> or Click the
          button below to choose a new direction
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "#FF4466",
            width: { xs: "40%", sm: "25%", md: "25%", lg: "25%" },
            mx: "auto",
            // margin: "2% auto",
            "&:hover": {
              backgroundColor: "#FF4466",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          onClick={() => navigate("/")}
        >
          Home Page
        </Button>
      </Box>
    </>
  );
};

export default PageNotFound;
