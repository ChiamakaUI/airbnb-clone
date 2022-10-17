import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { TbGridDots } from "react-icons/tb";
import Modal from "./Modal";

const RoomImages = ({ locationImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={{ width: "95%", mx: "auto", my: "2%", position: "relative" }}>
      {locationImages.map((locationImage, index) => {
        if (index > 1) return; // eslint-disable-line
        return (
          <img
            src={locationImage}
            alt="location"
            key={index}
            className={index === 0 ? "first" : "second"}
          />
        );
      })}
      <Box
        sx={{
          position: "absolute",
          bottom: "8%",
          right: "7%",
          backgroundColor: "#fff",
          borderRadius: "5px",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<TbGridDots />}
          sx={{
            color: "black",
            textTransform: "lowercase",
            borderColor: "black",
          }}
          onClick={() => setIsOpen(true)}
        >
          Show all photos
        </Button>
      </Box>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} modalColor="#fff">
          {locationImages.map((locationImage, index) => (
            <img
              src={locationImage}
              alt="location"
              key={index}
              width="100%"
              style={{ margin: "5px 0" }}
            />
          ))}
        </Modal>
      )}
    </Box>
  );
};

export default RoomImages;
