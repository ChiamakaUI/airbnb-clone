import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { TbBrandAirbnb } from "react-icons/tb";
import { Card } from "../components/Card";
import Row from "../components/Row";
import Video from "../components/Video";
import logo from "../Images/aircoverhosts.png";
import {
  experienceAds,
  experienceCards,
  experienceHosts,
  dashboardInfo,
  perks,
  registrationProcess,
  faqs,
} from "../data";

const HostExperience = () => {
  const iconStyle = {
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "#ccc",
  };

  const [showMore, setShowMore] = useState(false);
  const itemsToDisplay = showMore ? faqs.length : faqs.length / 2;
  return (
    <Box>
      <Box
        sx={{
          padding: "25px",
          height: "350px",
          zIndex: 10000,
          backgroundColor: "white",
        }}
      >
        <TbBrandAirbnb style={iconStyle} />
        <Box sx={{ width: "80%", mx: "auto", my: 8 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "16px" },
            }}
          >
            HOST AN EXPERIENCE ON AIRBNB
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "48px", lg: "60px" },
            }}
          >
            Earn money leading people on activities you love.
          </Typography>
          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "black",
              mt: 4,
              "&:hover": {
                backgroundColor: "#FF4466",
              },
            }}
          >
            Let's go
          </Button>
        </Box>
      </Box>

      <Box className="ParallaxVideo">
        <Video
          videoSrc={
            "https://player.vimeo.com/external/364759490.sd.mp4?s=e3b96d7076ab1325178c75780615b095e2efbebf&profile_id=164&oauth2_token_id=57447761"
          }
        />
      </Box>
      <Stack sx={{ backgroundColor: "black", opacity: "0.6", padding: "30px" }}>
        <Typography variant="h5" color="#fff">
          What’s an experience?
        </Typography>
        <Typography variant="body1" color="#fff">
          It’s an activity that goes beyond the typical tour or class, designed
          and led by locals all over the world. Show off your city, craft,
          cause, or culture by hosting an experience.
        </Typography>
      </Stack>
      <Box sx={{ backgroundColor: "black" }}>
        {experienceAds.map((ad, index) => (
          <Row
            imgSrc={ad.image}
            heading={ad.heading}
            text={ad.text}
            direction={index % 2 !== 0 ? "row-reverse" : "row"}
            key={ad.id}
          />
        ))}
      </Box>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          alignItems="center"
          spacing={5}
          justifyContent="space-between"
          sx={{ width: "70%", mx: "auto", padding: "35px" }}
        >
          <Typography variant="h6">Show what you know</Typography>
          <Typography variant="body1">
            Experiences of every kind, like cooking, crafting, kayaking, and
            more. There’s no limit to what you can do. Explore these featured
            categories.
          </Typography>
        </Stack>
        <Box sx={{ backgroundColor: "#F2F2F2" }}>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              mx: "auto",
              padding: "15px",
            }}
          >
            {experienceCards.map((card) => (
              <Card
                imgSrc={card.image}
                heading={card.title}
                text={card.text}
                key={card.id}
                containerStyles={{
                  width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
                  backgroundColor: "#fff",
                  my: 4,
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
                imageStyles={{ width: "100%" }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ backgroundImage: "linear-gradient(#fff, #f2f2f2)" }}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            alignItems="center"
            spacing={5}
            justifyContent="space-between"
            sx={{ width: "70%", mx: "auto", padding: "35px" }}
          >
            <Typography variant="h5">
              Join a growing community of curious people
            </Typography>
            <Typography variant="body1">
              Hosts are chefs, artists, DJs, and other experts in their fields.
              They make people from around the world feel connected, and give
              access to unique places and activities that can’t be found
              anywhere else.
            </Typography>
          </Stack>
          <Box
            sx={{
              // display: "flex",
              display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              mx: "auto",
            }}
          >
            {experienceHosts.map((host, index) => (
              <Card
                key={host.id}
                heading={host.name}
                text={host.story}
                imgSrc={host.image}
                containerStyles={{
                  // width: "30%",
                  width: { xs: "80%", sm: "80%", md: "30%", lg: "30%" },
                  backgroundColor: `${index % 2 === 0 ? "#ECEFDE" : "#F5E3CE"}`,
                  my: 4,
                  padding: "30px",
                }}
                imageStyles={{ width: "100%" }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "linear-gradient(#fff, #f2f2f2)",
          padding: "60px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          alignItems="center"
          spacing={5}
          justifyContent="space-between"
          sx={{ width: "85%", mx: "auto", my: 3 }}
        >
          <Typography variant="h6">
            We’ve got your back, every step of the way
          </Typography>
          <Typography variant="body1">
            Resources like articles and insights dedicated to your hosting
            needs, 24/7 customer support for you and your guests, exposure for
            your experience, and much more.
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          alignItems="center"
          spacing={5}
          justifyContent="space-between"
          sx={{
            backgroundColor: "#f2f2f2",
            padding: "25px",
            width: "81%",
            // width: {xs: "100%", sm: "100%", md: "81%", lg: "81%"},
            mx: "auto",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={5}
            justifyContent="space-between"
            sx={{
              padding: "30px",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            {dashboardInfo.map((info, index) => (
              <Box key={info.id}>
                <img
                  src={info.image}
                  alt=""
                  style={{
                    borderRadius: "15px",
                    border: `1px solid ${
                      index === 0 ? "red" : index % 2 !== 0 ? "green" : "yellow"
                    }`,
                    height: { xs: "10px", sm: "10px", md: "95px", lg: "95px" },
                    width: { xs: "25px", sm: "25px", md: "95px", lg: "95px" },
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                />
                <Typography variant="body1">{info.text}</Typography>
              </Box>
            ))}
          </Stack>
          <Box>
            <Typography variant="h6">Tools tailored to you</Typography>
            <Typography variant="body1">
              A dashboard to give you insights, feedback on how to improve,
              visibility to guests from all over the world through search and
              filters, seamless payments, and much more.
            </Typography>
          </Box>
        </Stack>
        <Stack
          // direction="row"
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          alignItems="center"
          spacing={5}
          justifyContent="space-between"
          sx={{
            width: { xs: "100%", sm: "100%", md: "90%", lg: "85%" },
            mx: "auto",
            my: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#f2f2f2",
              padding: "20px",
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            <Box
              sx={{
                width: { xs: "120px", sm: "120px", md: "230px", lg: "350px" },
              }}
            >
              <img src={logo} alt="logo" width="100%" />
            </Box>

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "14px", sm: "14px", md: "18px", lg: "24px" },
                }}
              >
                AirCover for Hosts covers Experiences, too
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "10px", sm: "10px", md: "12px", lg: "16px" },
                }}
              >
                AirCover for Hosts includes $1M in Experiences liability
                insurance in the rare event a guest gets hurt during an Airbnb
                Experience. Always included and always free.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f2f2f2",
              padding: "19px",
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {perks.map((perk, index) => (
                <Box
                  sx={{
                    backgroundImage: `url(${perk.image})`,
                    width: { xs: "60px", sm: "60px", md: "95px", lg: "120px" },
                    height: {
                      xs: "75px",
                      sm: "75px",
                      md: "120px",
                      lg: "150px",
                    },
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                  key={index}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      left: "7px",
                      color: "white",
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "12px",
                        lg: "14px",
                      },
                    }}
                  >
                    {perk.text}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ marginTop: "8px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "20px" },
                }}
              >
                Guidance to help you grow
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "10px", sm: "10px", md: "12px", lg: "14px" },
                }}
              >
                Weekly newsletters, articles, and resources are dedicated to
                help you succeed on every step of your hosting journey.
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          alignItems="center"
          spacing={5}
          justifyContent="space-between"
          sx={{ width: "80%", mx: "auto", my: 3 }}
        >
          <Typography variant="h5">How to get started</Typography>
          <Typography variant="body1">
            Here’s a quick overview of the process, from start to finish.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
            justifyContent: "space-between",
            width: { xs: "100%", sm: "100%", md: "100%", lg: "88%" },
            mx: "auto",
            my: 4,
          }}
        >
          {registrationProcess.map((process, index) => (
            <Box
              key={process.id}
              sx={{
                backgroundColor: "#f2f2f2",
                width: { xs: "80%", sm: "80%", md: "50%", lg: "30%" },
                mx: { xs: "auto", sm: "auto", md: 3, lg: 3 },
                my: { xs: 3, sm: 3, md: 0, lg: 0 },
                padding: "30px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Box>{index + 1}</Box>
              <Typography variant="h5">{process.heading}</Typography>
              <Typography variant="body2">{process.text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Box sx={{ width: "80%", mx: "auto", padding: "50px" }}>
          <Typography variant="h4">Frequently asked questions</Typography>
          {faqs.slice(0, itemsToDisplay).map((faq) => (
            <Box key={faq.id} sx={{ my: 2, padding: "5px" }}>
              <Typography variant="h6">{faq.question}</Typography>
              <Typography variant="body1">{faq.answer}</Typography>
              <hr />
            </Box>
          ))}
          <Typography
            variant="body1"
            onClick={() => {
              setShowMore(!showMore);
            }}
            sx={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {showMore ? "Show less" : "Show more"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HostExperience;
