import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import GuestList from "./GuestList";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Guests = () => {
  const [showGuestList, setShowGuestList] = useState(false);
  const [guestNumber, setGuestNumber] = useState(1);
  const iconStyle = {
    fontSize: "2rem",
    cursor: "pointer",
  };
  const displayedIcon = showGuestList ? (
    <MdKeyboardArrowUp
      onClick={() => setShowGuestList(!showGuestList)}
      style={iconStyle}
    />
  ) : (
    <MdKeyboardArrowDown
      onClick={() => setShowGuestList(!showGuestList)}
      style={iconStyle}
    />
  );
  const guests = [
    {
      id: 1,
      guestType: "Adults",
      age: "Age 13+",
      minimumNumber: 1,
    },
    {
      id: 2,
      guestType: "Children",
      age: "Ages 2–12",
      minimumNumber: 0,
    },
    {
      id: 3,
      guestType: "Infants",
      age: "Under 2",
      minimumNumber: 0,
    },
  ];

  const getGuestNumber = (countType) => {
    if (countType === "increment") setGuestNumber((prev) => prev + 1);
    if (countType === "decrement" && guestNumber > 1)
      setGuestNumber((prev) => prev - 1);
  };
  return (
    <Box sx={{position: "relative" }}>
      <Box sx={{border: 2, width: "96%", borderColor: "#ccc", padding: "5px"}}>
      <Typography variant="body2"> Guests </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography>{guestNumber} guest</Typography>
        {displayedIcon}
      </Stack>
      </Box>
      {showGuestList && (
        <Box
          sx={{
            width: "94%",
            padding: "10px",
            margin: "1% auto",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              position: "absolute",
              top: "92%",
              zIndex : "100",
              backgroundColor: "#fff"
          }}
        >
          {guests.map((guest) => (
            <GuestList
              guest={guest.guestType}
              age={guest.age}
              intialValue={guest.minimumNumber}
              key={guest.id}
              guestNum={getGuestNumber}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Guests;
