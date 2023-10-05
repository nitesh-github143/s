import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";

const CameraConfig = () => {
  const [camvalue, Setcamvalue] = useState("");

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://127.0.0.1:8001/api/rstpconfig");
      const CamRstpdata = res.data;
      Setcamvalue(CamRstpdata);
    })();
  }, []);
  const initialValues = camvalue;
  // console.log(initialValues)

  const handleFormSubmit = async (values) => {
    let res = await axios.post("http://127.0.0.1:8001/api/rstpconfig", values);
    // console.log(res)
  };
  return (
    <MDBox pt={2} pl={2} pr={2} m={1}>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} enableReinitialize>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <MDBox display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
              <MDInput
                fullWidth
                type="text"
                label="Camera RSTP URL"
                focused
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rstp_url}
                name="rstp_url"
                sx={{ gridColumn: "span 4" }}
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
  );
};

export default CameraConfig;
