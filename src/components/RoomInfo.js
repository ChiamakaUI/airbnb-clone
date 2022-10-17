import React, { useState } from "react";
import { Box, Typography, Stack, Divider, Button } from "@mui/material";
import { FcCalendar } from "react-icons/fc";
import logo from "../Images/aircover.png";
import Modal from "./Modal";
const RoomInfo = ({ description, hostName, hostImage, propertyType }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={{ width: "50%" }}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        p={2}
        justifyContent="space-between"
      >
        <Typography variant="h5">
          {propertyType} hosted by {hostName}
        </Typography>
        <img
          src={hostImage}
          alt="host"
          referrerPolicy="no-referrer"
          style={{ width: "65px", height: "65px", borderRadius: "50%" }}
        />
      </Stack>
      <Divider />
      <Stack direction="row" spacing={1} alignItems="center" p={2}>
        <FcCalendar style={{ fontSize: "2rem" }} />
        <Typography variant="body2">Free cancellation before Nov 19</Typography>
      </Stack>

      <Divider />
      <Box p={2}>
        <img src={logo} alt="airlogo" width="120px" />
        <Typography variant="body1">
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in.
        </Typography>
        <Button variant="text" onClick={() => setIsOpen(true)}>
          Learn More
        </Button>
        {isOpen && (
          <Modal setIsOpen={setIsOpen} modalColor="#f5f5f5">
            <Box sx={{ padding: "20px" }}>
              <img src={logo} alt="airlogo" width="120px" />
              <Typography variant="body1">
                AirCover is comprehensive protection included for free with
                every booking.
              </Typography>
              <Divider />
              <Box sx={{ width: "95%", mx: "auto", padding: "10px" }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={3}
                >
                  <Box sx={{ width: "40%" }}>
                    <Typography variant="body2">
                      Booking Protection Guarantee
                    </Typography>
                    <Typography variant="body1">
                      In the unlikely event a Host needs to cancel your booking
                      within 30 days of check-in, we’ll find you a similar or
                      better home, or we’ll refund you.
                    </Typography>
                  </Box>
                  <Box sx={{ width: "60%" }}>
                    <Typography variant="body2">
                      Get-What-You-Booked Guarantee
                    </Typography>
                    <Typography variant="body1">
                      If at any time during your stay you find your listing
                      isn't as advertised—for example, the refrigerator stops
                      working and your Host can’t easily fix it, or it has fewer
                      bedrooms than listed—you'll have three days to report it
                      and we’ll find you a similar or better home, or we’ll
                      refund you.
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={3}
                >
                  <Box sx={{ width: "40%" }}>
                    <Typography variant="body2">Check-In Guarantee</Typography>
                    <Typography variant="body1">
                      If you can’t check into your home and the Host cannot
                      resolve the issue, we’ll find you a similar or better home
                      for the length of your original stay, or we’ll refund you.
                    </Typography>
                  </Box>
                  <Box sx={{ width: "60%" }}>
                    <Typography variant="body2">24-hour Safety Line</Typography>
                    <Typography variant="body1">
                      If you ever feel unsafe, you’ll get priority access to
                      specially-trained safety agents, day or night.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Modal>
        )}
      </Box>
      <Divider />
      <Box p={2}>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default RoomInfo;
