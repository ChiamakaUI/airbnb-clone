import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const OptionsTab = ({ options }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderTop: 1, borderColor: "rgb(221, 221, 221)" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {options.map((option) => (
          <Tab key={option.id} label={option.label} icon={option.icon} />
        ))}
      </Tabs>
    </Box>
  );
};

export default OptionsTab;
