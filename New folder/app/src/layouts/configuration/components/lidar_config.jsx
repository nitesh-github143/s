import { Radio, FormLabel, FormControlLabel, useTheme } from "@mui/material";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import { Field, Formik } from "formik";
import { RadioGroup } from "formik-mui";
import { tokens } from "layouts/recent/oldtheme";
import MDInput from "components/MDInput";

import { useEffect, useState } from "react";
import axios from "axios";

const LidarConfig = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [lidarValue, SetlidarValue] = useState({
    lidar_url: "",
    mode: "manual",
  });

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://127.0.0.1:8001/api/lidarconfig");
      const Lidardata = res.data;
      SetlidarValue(Lidardata);
    })();
  }, []);

  const initialValues = lidarValue;
  const handleFormSubmit = async (values) => {
    let res = await axios.post("http://127.0.0.1:8001/api/lidarconfig", values);
    // console.log(res)
  };
  return (
    <MDBox pt={2} pl={2} pr={2} m={1}>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} enableReinitialize>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <MDBox display="grid" gap="30px" gridTemplateColumns="repeat(3, minmax(0, 1fr))">
              <MDInput
                fullWidth
                type="text"
                label="Lidar Mac Address"
                focused
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lidar_url}
                name="lidar_url"
                sx={{ gridColumn: "span 4" }}
              />
              <Field component={RadioGroup} name="mode">
                <FormLabel component="legend">Mode</FormLabel>
                <FormControlLabel
                  value="manual"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: colors.greenAccent[600],
                        },
                      }}
                      disabled={isSubmitting}
                    />
                  }
                  label="Manual Trigger"
                  disabled={isSubmitting}
                />
                <FormControlLabel
                  value="auto"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: colors.greenAccent[600],
                        },
                      }}
                      disabled={isSubmitting}
                    />
                  }
                  label="Auto Trigger"
                  disabled={isSubmitting}
                />
              </Field>
            </MDBox>
            <MDBox display="flex" justifyContent="end" mt="20px">
              <MDButton type="submit" color="info" variant="contained">
                Save
              </MDButton>
            </MDBox>
          </form>
        )}
      </Formik>
    </MDBox>
  );
};

export default LidarConfig;
