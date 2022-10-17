import React from "react";
import { Button } from "@mui/material";

const HostBtn = ({ handleHosting, btnText }) => {
  return (
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
      {btnText}
    </Button>
  );
};

export default HostBtn;
