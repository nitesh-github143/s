import { Grid, Slider, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { tokens } from "layouts/recent/oldtheme";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import PropTypes from "prop-types";

const VehicleSpeed = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);
  const vehicleType = props.type.toLowerCase();

  useEffect(() => {
    (async () => {
      let v_speed = await axios.get(`http://127.0.0.1:8001/api/speed/${vehicleType}`);
      const speed = parseInt(v_speed.data.speed);
      // console.log(speed)
      setValue(speed);
    })();
  }, []);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    // Call handleComplete when the input box loses focus
    handleComplete();
  };

  const handleComplete = async (event) => {
    let res = await axios.post(`http://127.0.0.1:8001/api/speed/${vehicleType}`, { speed: value });
    // console.log(res)
  };

  return (
    <MDBox pl={2} pr={2} sx={{ width: 300 }}>
      <MDTypography fontSize={16} fontWeight={900}>
        {props.type.toUpperCase()}
      </MDTypography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color="secondary"
            step={5}
            onChangeCommitted={handleComplete}
            min={0}
            max={200}
          />
        </Grid>
        <Grid item>
          <MDInput
            sx={{
              "&:MuiInput-input": {
                fontWeight: "600",
              },
            }}
            value={value}
            size="large"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 200,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
};

export default VehicleSpeed;

VehicleSpeed.propTypes = {
  type: PropTypes.string.isRequired,
};
