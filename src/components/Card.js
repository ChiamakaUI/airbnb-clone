import { Box, Typography } from "@mui/material";
import React from "react";

export const Card = ({
  imgSrc,
  imageStyles,
  heading,
  text,
  containerStyles,
}) => {
  return (
    <Box sx={containerStyles}>
      <img src={imgSrc} alt="ba" style={imageStyles} />
      <Box sx={{padding: "15px"}}>
        <Typography variant="h5" sx={{xs: "18px", sm: "20px", md: "22px", lg: "24px"}}>{heading}</Typography>
        <Typography variant="body1" sx={{xs: "14px", sm: "14px", md: "14px", lg: "16px"}}>{text}</Typography>
      </Box>
    </Box>
  );
};
