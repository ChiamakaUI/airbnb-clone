import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { people } from "../data";

const HostReview = () => {
  const [value, setValue] = useState(0);

  const iconStyles = {
    fontSize: "3.5rem",
    color: "#FF4466",
    cursor: "pointer",
  };

  useEffect(() => {
    let slider = setInterval(handleNext, 10000);
    return () => {
      clearInterval(slider);
    };
  });

  const handleNext = () => {
    if (value === people.length - 1) return;
    setValue((val) => val + 1);
  };
  const handlePrev = () => {
    if (value === 0) return;
    setValue((val) => val - 1);
  };

  const { image, name, location, quote } = people[value];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "75%",
        mx: "auto",
      }}
    >
      <Box
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <AiFillLeftCircle style={iconStyles} onClick={handlePrev} />
      </Box>

      <Box sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "40%" } }}>
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "20px",
            marginBottom: "8px",
          }}
        />
        <Typography variant="h5" sx={{ fontStyle: "italic" }}>
          {quote}
        </Typography>
        <Typography
          variant="body1"
          sx={{ my: 2, fontWeight: "bold", textTransform: "capitalize" }}
        >
          {name}
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          Host in {location}
        </Typography>
      </Box>
      <Box
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <AiFillRightCircle style={iconStyles} onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default HostReview;
