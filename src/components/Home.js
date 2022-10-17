import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ImageCarousel from "./ImageCarousel";
import { AiFillStar } from "react-icons/ai";

const Home = ({
  location,
  isNew,
  rating,
  days,
  price,
  isLiked,
  locationImages,
  locationId,
}) => {
  const openRoom = (id) => {
     window.open(`/rooms/${id}`);
  };
  return (
    <Box
      sx={{ height: "400px", position: "relative" }}
      onClick={() => openRoom(locationId)}
    >
      <ImageCarousel images={locationImages} isLiked={isLiked} />
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "5%",
          left: "2%",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">{location} </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <AiFillStar style={{ fontSize: "1.5rem" }} />
            <Typography variant="body1">{isNew ? "New" : rating}</Typography>
          </Stack>
        </Stack>
        <Typography variant="body1">{days}</Typography>
        <Typography variant="body1">{price}</Typography>
      </Box>
    </Box>
  );
};

export default Home;
//backgroundColor: "red"
