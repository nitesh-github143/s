// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import { useState, useEffect } from "react";

import axios from "axios";

import { Formik } from "formik";

function PlatformSettings() {
  const [profilevalue, Setprofilevalue] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://127.0.0.1:8001/api/profile");
      const ProfileData = res.data;
      Setprofilevalue(ProfileData);
    })();
  }, []);
  const initialValues = profilevalue;
  // console.log(initialValues)

  const handleFormSubmit = async (values) => {
    let res = await axios.post("http://127.0.0.1:8001/api/profile", values);
    // console.log(values)
  };

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox pt={2} pl={2} pr={2} m={1}>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} enableReinitialize>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              <MDBox display="grid" gap="20px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
                <MDInput
                  fullWidth
                  type="text"
                  label="Operator"
                  focused
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.op_name}
                  name="op_name"
                  sx={{ gridColumn: "span 2" }}
                />
                <MDInput
                  fullWidth
                  type="text"
                  label="Operator ID"
                  focused
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.op_id}
                  name="op_id"
                  sx={{ gridColumn: "span 2" }}
                />
                <MDInput
                  fullWidth
                  type="text"
                  label="Department"
                  focused
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.dept}
                  name="dept"
                  sx={{ gridColumn: "span 2" }}
                />
                <MDInput
                  fullWidth
                  type="text"
                  label="Location"
                  focused
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  name="location"
                  sx={{ gridColumn: "span 2" }}
                />
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
    </Card>
  );
}

export default PlatformSettings;
