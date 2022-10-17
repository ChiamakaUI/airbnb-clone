import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Home from "../components/Home";
import OptionsTab from "../components/OptionsTab";
import { locationsTab } from "../data";
import Header from "../components/Header";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";

const Homes = () => {
  const [locations, setLocations] = useState([]);
  const fetchLocations = () => {
    const locationsRef = ref(database, "houses/");
    onValue(locationsRef, (snapshot) => {
      const locations = snapshot.val();
       setLocations(Object.values(locations));
    });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <>
      <Header />
      <OptionsTab options={locationsTab} />
      <Box sx={{ width: "90%", margin: "1% auto",  mx: "auto"  }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {locations.map((location) => (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <Home
                location={location.houseLocation}
                isNew={location.isNew}
                locationImages={location.houseImages}
                days={location.days}
                isLiked={location.isLiked}
                rating={location.rating}
                price={location.housePrice}
                locationId={location.id}
              />
            </Grid>
          ))}
          </Grid>
      </Box>
    </>
  );
};

// rowSpacing={5} columnSpacing={5}
//spacing={15}

export default Homes;
