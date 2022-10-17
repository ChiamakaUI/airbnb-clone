import React from "react";
import { Typography, Stack } from "@mui/material";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { useCounter } from "../hooks/useCounter";

const GuestList = ({ guest, age, intialValue, guestNum }) => {
  const [count, increment, decrement] = useCounter(intialValue);
  const iconStyle = {
    fontSize: "1.2rem",
    cursor: "pointer",
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mx={1} my={2}>
      <Stack>
        <Typography variant="body2">{guest}</Typography>
        <Typography variant="body1">{age}</Typography>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <GrSubtractCircle
          onClick={() => {
            decrement();
            guestNum("decrement");
          }}
          style={iconStyle}
        />
        <Typography variant="body2">{count}</Typography>
        <GrAddCircle
          onClick={() => {
            increment();
            guestNum("increment");
          }}
          style={iconStyle}
        />
      </Stack>
    </Stack>
  );
};

export default GuestList;
