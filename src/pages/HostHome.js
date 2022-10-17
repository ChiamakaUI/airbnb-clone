import { Box, Typography, Stack, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import HostReview from "../components/HostReview";
import Modal from "../components/Modal";
import logo from "../Images/aircoverhosts.png";
import backgroundSvg from "../Images/airbnbSvg.PNG";
import Banners from "../components/Banners";
import { TbBrandAirbnb } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { currentUserContext } from "../App";
import HostBtn from "../components/HostBtn";
import LoginForm from "../components/LoginForm";

const HostHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { currentUser } = useContext(currentUserContext);
  const navigate = useNavigate();
  const bannerInfo = [
    {
      id: 1,
      video:
        "https://player.vimeo.com/external/645686154.sd.mp4?s=4f977c22c92de3a08963b18d59e14d9654fd673e&profile_id=164&oauth_token_id=57447761",
      heading: "Open your door to hosting",
      text: "",
      btnText: "Try Hosting",
    },
    {
      id: 2,
      video:
        "https://player.vimeo.com/external/512066716.sd.mp4?s=528590cc7509afebda83a8240bfde809064d12e2&profile_id=164&oauth2_token_id=57447761",
      heading: "Try hosting on Airbnb",
      text: "Join us. We’ll help you every step of the way.",
      btnText: "Let's go",
    },
  ];
  const handleHosting = () => {
    if (Object.keys(currentUser).length === 0) {
      setModalOpen(true);
      return;
    }
    navigate("/become-a-host");
  };
  return (
    <Box
      sx={{ position: "relative", paddingBottom: "60px", paddingTop: "60px" }}
    >
      <Stack
        sx={{
          backgroundColor: "#ffff",
          position: "sticky",
          top: 0,
          my: 2,
          mx: 5,
          px: 2,
          py: 1,
        }}
        direction="row"
        alignItems="center"
        spacing={3}
        justifyContent="space-between"
      >
        <TbBrandAirbnb
          style={{
            fontSize: "2.5rem",
            cursor: "pointer",
          }}
        />
        <HostBtn handleHosting={handleHosting} btnText={"Try Hosting"} />
      </Stack>
      {bannerInfo.map((info, index) => (
        <Banners
          videoSrc={info.video}
          headingText={info.heading}
          text={info.text}
          key={info.id}
          direction={index % 2 === 0 ? "row-reverse" : "row"}
          containerStyles={
            index % 2 === 0
              ? { top: 0, position: "absolute" }
              : { position: "absolute", bottom: 0 }
          }
          showIcon={index % 2 === 0 ? true : false}
          handleHosting={handleHosting}
          btnText={info.btnText}
        />
      ))}
      <Box
        sx={{
          marginTop: { xs: "700px", sm: "700px", md: "650px", lg: "550px" },
        }}
      >
        <Typography
          variant="h3"
          color="initial"
          sx={{
            textAlign: "center",
            mt: 4,
            fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "44px" },
          }}
        >
          Find out what you could earn as a Host
        </Typography>
        <Stack
          // direction="row"
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          spacing={4}
          // width: "70%"
          sx={{
            width: { xs: "80%", sm: "80%", md: "75%", lg: "70%" },
            mx: "auto",
            my: 5,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F7F7F7",
              padding: "20px",
              borderRadius: "10px",
              width: { xs: "80%", sm: "80%", md: "60%", lg: "35%" },
            }}
          >
            <Typography variant="body2" sx={{ color: "#c5c5c5" }}>
              Hosts in your area earn an average of*
            </Typography>
            <Typography variant="h4" sx={{ color: "#FF4466" }}>
              $980 <span style={{ fontSize: "18px" }}>/ month</span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F7F7F7",
              padding: "20px",
              borderRadius: "10px",
              width: { xs: "80%", sm: "80%", md: "60%", lg: "35%" },
            }}
          >
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              They earn
            </Typography>
            <Typography variant="h4">
              $70 <span style={{ fontSize: "18px" }}>/ night</span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F7F7F7",
              padding: "20px",
              borderRadius: "10px",
              width: { xs: "80%", sm: "80%", md: "60%", lg: "35%" },
            }}
          >
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              They're booked
            </Typography>
            <Typography variant="h4">
              14 nights<span style={{ fontSize: "18px" }}> / month</span>{" "}
            </Typography>
          </Box>
        </Stack>

        <Typography
          variant="body1"
          color="initial"
          sx={{ textAlign: "center", mt: 4 }}
        >
          Tell us about your place
        </Typography>
        <Button
          onClick={() => setIsOpen(true)}
          sx={{
            margin: "3% auto",
            textAlign: "center",
            textTransform: "underline",
            width: "100%",
            backgroundColor: "transparent",
            color: "black",
            "&:hover": {
              backgroundColor: "#FF4466",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          size="small"
        >
          *Learn how we estimate your earnings
        </Button>
      </Box>
      {isOpen && (
        <Modal
          modalColor={"rgba(0, 0, 0, 0.5)"}
          setIsOpen={setIsOpen}
          iconColor={"white"}
        >
          <Box sx={{ padding: "30px" }}>
            <Typography variant="h5">
              How we estimate your earning potential
            </Typography>
            <Typography variant="body1">
              To estimate your earnings, we review the past 12 months of booking
              data from similar Airbnb listings. We choose these listings based
              on the information you share about your place. If you enter an
              address, you'll get a more specific estimate based on the listings
              closest to you. If you enter an area, we look at the top 50% of
              similar listings in that area, based on their earnings. For areas
              with a limited number of listings, we may use listings from other
              areas. Based on these similar listings, and assuming your place is
              available every day of the month, we estimate the average number
              of nights your place will be booked per month. Then we multiply
              that number by your average nightly earnings. (Nightly earnings
              are the price set by each Host minus the Airbnb Host service fee.
              We don’t subtract taxes or hosting expenses.) Your actual earnings
              will depend on several factors, including your availability,
              price, and the demand in your area. Your ability to host may also
              depend on local laws. Learn more about responsible hosting.
            </Typography>
          </Box>
        </Modal>
      )}
      <HostReview />
      <Box
        sx={{
          backgroundColor: "#FF4466",
          width: "85%",
          mx: "auto",
          borderRadius: "20px",
          my: 5,
          padding: "160px 0",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          color="#fff"
          sx={{ fontSize: { xs: "22px", sm: "22px", md: "46px", lg: "60px" } }}
        >
          Help house 100,000 refugees fleeing Ukraine
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${"https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
          width: "85%",
          mx: "auto",
          borderRadius: "20px",
          my: 7,
          padding: "200px 0",
          textAlign: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h2"
          color="#fff"
          sx={{ fontSize: { xs: "22px", sm: "22px", md: "46px", lg: "60px" } }}
        >
          Questions about hosting?
          <br /> Ask a Superhost.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          alignItems: "center",
          width: "85%",
          mx: "auto",
          justifyContent: "space-between",
          my: 5,
          backgroundColor: "#F7F7F7",
          borderRadius: "20px",
          marginBottom: "550px",
        }}
      >
        <Box sx={{ width: "30%", padding: "25px" }}>
          <Box
            sx={{
              width: { xs: "150px", sm: "150px", md: "250px", lg: "350px" },
            }}
          >
            <img src={logo} alt="air cover" style={{ width: "100%" }} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              my: 3,
              fontSize: {xs: "12px", sm: "12px", md: "24px", lg: "30px"}

            }}
          >
            Top-to-bottom protection. Always included, always free. <br /> Only
            on Airbnb.
          </Typography>
        </Box>
        <Box sx={{width: { xs: "100%", sm: "100%", md:"70%", lg:"70%"}}}>
          <img
            src={backgroundSvg}
            alt="background"
            style={{ width: "100%", borderRadius: "0px 20px 20px 0px" }}
          />
        </Box>
      </Box>
      {modalOpen && (
        <LoginForm setIsOpen={setModalOpen} shouldNavigate={true} />
      )}
    </Box>
  );
};

export default HostHome;
