import React, { useState } from "react";
import { Box } from "@mui/material";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import LikeIcon from "./LikeIcon";

const ImageCarousel = ({ images, isLiked }) => {
  const [value, setValue] = useState(0);

  const iconStyles = {
    fontSize: "2rem",
    color: "fff",
    cursor: "pointer",
  };

  const handleNext = (event) => {
    if (value === images.length - 1) return;
    setValue((val) => val + 1);
    event.stopPropagation();
  };
  const handlePrev = (event) => {
    if (value === 0) return;
    setValue((val) => val - 1);
    event.stopPropagation();
  };

  return (
    <Box sx={{ position: "absolute", width: "100%", height: "275px",}}>
      <img
        src={images[value]}
        alt="location"
        style={{ width: "100%", height: "100%", borderRadius: "20px"}}
      />
      <Box sx={{ position: "absolute", top: "8%", right: "5%" }}>
        <LikeIcon isLiked={isLiked} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "absolute",
          top: "50%",
        }}
      >
        <AiFillLeftCircle
          onClick={handlePrev}
          style={iconStyles}
          className={value === 0 ? "hide" : ""}
        />
        <AiFillRightCircle
          onClick={handleNext}
          style={iconStyles}
          className={value === images.length - 1 ? "hide" : ""}
        />
      </Box>
      <Box
        sx={{
          width: "140px",
          position: "absolute",
          bottom: "5%",
          left: "25%",
        }}
      >
        {images.map((index) => (
          <BsDot
            key={index}
            className={value === index ? "activeDot" : "notActiveDot"}
            style={iconStyles}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;
