import React from "react";
import { Box } from "@mui/material";
import { ImCancelCircle } from "react-icons/im";

const Modal = (props) => {
  const iconStyles = {
    fontSize: "2rem",
    cursor: "pointer",
    color: props.iconColor,
  };
  return (
    <Box className="modal" sx={{ backgroundColor: props.modalColor }}>
      <Box sx={{ position: "fixed", top: "5%", right: "5%" }}>
        <ImCancelCircle
          onClick={() => props.setIsOpen(false)}
          style={iconStyles}
        />
      </Box>
      <Box className="modal-content">{props.children}</Box>
    </Box>
  );
};

export default Modal;
