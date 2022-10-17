import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Stack, Button } from "@mui/material";
import { differenceInCalendarDays } from "date-fns";
import Guests from "../components/Guests";
import RoomImages from "../components/RoomImages";
import RoomInfo from "../components/RoomInfo";
import { ref, onValue } from "firebase/database";
import { database } from "../config/firebase";
import { currentUserContext } from "../App";
import axios from "axios";
import LoginForm from "../components/LoginForm";

const SingleRoom = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const numberOfDays = differenceInCalendarDays(endDate, startDate);
  const { currentUser } = useContext(currentUserContext);

  const filterById = (ID) => {
    const locationsRef = ref(database, "houses/");
    onValue(locationsRef, (snapshot) => {
      const locations = snapshot.val();
      const allLocations = Object.values(locations);
      const filteredRoom = allLocations.filter(
        (location) => location.id === parseInt(ID)
      );
      setRoom(filteredRoom);
    });
  };

  useEffect(() => {
    filterById(roomId);
  }, [roomId]);

  const reserveRoom = (houseName, houseLocation) => {
    if (numberOfDays <= 0) {
      alert("Please, pick the duration of your stay to continue");
      return;
    }
    if (Object.keys(currentUser).length === 0) {
      setModalOpen(true);
      return;
    }
    const options = {
      method: "POST",
      url: "https://email-sender1.p.rapidapi.com/",
      params: {
        txt_msg: `This is to confirm your booking for ${houseName} in ${houseLocation} from ${startDate} to ${endDate}. We hope you enjoy your stay.`,
        to: currentUser?.email,
        from: "Airbnb clone",
        subject: "Booking Confirmation",
        bcc: "chiamaka.ezemba@trostechnologies.com",
        reply_to: "chiamaka.ezemba@trostechnologies.com",
        html_msg: `<html><body><b>Hi ${currentUser?.name}</b>, <br/> <br/> This is to confirm your booking for ${houseName} in ${houseLocation} from ${startDate} to ${endDate}.  <br/> <br/> We hope you enjoy your stay.</body></html>`,
        cc: "chiamaka.ezemba@trostechnologies.com",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "041695ddc2msh03ecff701bdb863p15a99ejsnfcf96e24fbff",
        "X-RapidAPI-Host": "email-sender1.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        alert(
          `${response.data}. A confirmation email has been sent to your email address to confirm your booking`
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  if (room.length > 0) {
    const {
      houseImages,
      houseLocation,
      housePrice,
      houseName,
      houseDescription,
      hostName,
      hostImage,
      houseType,
    } = room[0];
    const Price = housePrice.match(/\d+/g);
    const value = Price.length === 1 ? Price[0] : Price[0] + Price[1];

    return (
      <Box>
        <Box sx={{ width: "85%", mx: "auto" }}>
          <Typography variant="h5">{houseName}</Typography>
          <Typography variant="body1">{houseLocation}</Typography>
        </Box>
        <Box sx={{ width: "90%", mx: "auto" }}>
          <RoomImages locationImages={houseImages} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "88%",
            mx: "auto",
            my: "3%",
          }}
        >
          <RoomInfo
            description={houseDescription}
            hostName={hostName}
            hostImage={hostImage}
            propertyType={houseType}
          />
          <Box
            sx={{
              border: 1,
              width: "30%",
              padding: "20px",
              borderColor: "#ccc",
              borderRadius: "15px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Typography variant="h6">{`$${value}`} night</Typography>
            <Stack direction="row" alignItems="center">
              <input
                type="date"
                value={startDate.toISOString().split("T")[0]}
                onChange={(e) => setStartDate(new Date(e.target.value))}
              />
              <input
                type="date"
                value={endDate.toISOString().split("T")[0]}
                onChange={(e) => setEndDate(new Date(e.target.value))}
              />
            </Stack>
            <Guests />
            <Button
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#FF4466",
                width: "100%",
                margin: "2% 0",
                "&:hover": {
                  backgroundColor: "#FF4466",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={() => reserveRoom(houseName, houseLocation)}
            >
              Reserve
            </Button>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">
                {`$${value}`} X{" "}
                {numberOfDays < 0
                  ? 0
                  : numberOfDays === 0
                  ? 0
                  : numberOfDays === 1
                  ? `${numberOfDays} night`
                  : `${numberOfDays} nights`}
              </Typography>
              <Typography variant="h6">
                {`$${parseInt(value) * (numberOfDays < 0 ? 0 : numberOfDays)}`}
              </Typography>
            </Stack>
          </Box>
        </Box>
        {modalOpen && (
          <LoginForm setIsOpen={setModalOpen} shouldNavigate={false} />
        )}
      </Box>
    );
  }
};

export default SingleRoom;
