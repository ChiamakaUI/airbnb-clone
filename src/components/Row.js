import { Box, Typography } from "@mui/material";
import React from "react";

const Row = ({ imgSrc, heading, text, direction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: direction,
        width: "80%",
        mx: "auto",
        padding: "35px"

      }}
    >
      <Box sx={{width: "35%"}}>
        <img src={imgSrc} alt="experience"  width="100%"/>
      </Box>
      <Box sx={{width: "50%"}}>
        <Typography variant="h4" color="#fff" sx={{fontSize:{ xs: "16px", sm: "16px", md: "24px", lg: "34px"}}}>{heading}</Typography>
        <Typography variant="body1" color="#fff" sx={{fontSize:{ xs: "10px", sm: "12px", md: "14px", lg: "16px"}}}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default Row;
