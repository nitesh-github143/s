import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "layouts/recent/oldtheme";
import VehicleSpeed from "./vehicleSpeed";
import MDBox from "components/MDBox";

const SpeedConfig = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState(30);

  // const handleSliderChange = (event, newValue) => {
  //   setValue(newValue);
  //   console.log(value);
  // };
  // const handleInputChange = (event) => {
  //   setValue(event.target.value === "" ? "" : Number(event.target.value));
  // };
  return (
    <MDBox
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
      flexWrap="wrap"
      py={3}
      px={2}
    >
      <VehicleSpeed type="Car" />
      <VehicleSpeed type="TwoWheeler" />
      <VehicleSpeed type="Auto" />
      <VehicleSpeed type="Truck" />
      <VehicleSpeed type="Bus" />
      <VehicleSpeed type="Mgv" />
    </MDBox>
  );
};

export default SpeedConfig;
