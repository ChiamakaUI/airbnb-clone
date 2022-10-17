import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Video from "./Video";
import { TbBrandAirbnb } from "react-icons/tb";
import HostBtn from "./HostBtn";

const Banners = ({
  direction,
  containerStyles,
  videoSrc,
  headingText,
  text,
  showIcon,
  handleHosting,
  btnText,
}) => {
  return (
    <Box sx={containerStyles}>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "block", lg: "flex" },
          alignItems: "center",
          width: "100%",
          height: "550px",
          backgroundColor: "#000000",
          flexDirection: direction,
        }}
      >
        <Box
          sx={{
            minHeight: { xs: "50%", sm: "50%", md: "50%", lg: "100%" },
            width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
          }}
        >
          <Video videoSrc={videoSrc} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
            maxHeight: { xs: "15%", sm: "15%", md: "20%", lg: "100%" },
            backgroundColor: "#000000",
            padding: "100px 0",
            marginTop: {xs: "-70px", sm: "-70px", md: "-50px", lg: "0"},
          }}
        >
          <Box sx={{ width: "75%", mx: "auto", my: 6 }}>
            {showIcon && (
              <Stack
                sx={{
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                }}
              >
                <TbBrandAirbnb
                  style={{
                    fontSize: "2.5rem",
                    cursor: "pointer",
                  }}
                  color="white"
                />
              </Stack>
            )}

            <Typography
              variant="h3"
              sx={{
                color: "white",
                marginTop: "8%",
                marginBottom: "2%",
                fontSize: { xs: "20px", sm: "20px", md: "22px", lg: "40px" },
              }}
            >
              {headingText}
            </Typography>
            {text && (
              <Typography
                variant="body1"
                sx={{ color: "white", marginBottom: "2%" }}
              >
                {text}
              </Typography>
            )}
            <HostBtn handleHosting={handleHosting} btnText={btnText} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banners;
