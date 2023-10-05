import { IconButton, useTheme } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";

import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, Fragment } from "react";
import { Formik } from "formik";
import { CloseRounded, RefreshRounded } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { tokens } from "layouts/recent/oldtheme";

import axios from "axios";
import ImageViewer from "react-simple-image-viewer";
import dayjs from "dayjs";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import MDInput from "components/MDInput";
import Old from "assets/images/old.png";
import ReactGifPlayer from "react-gif-player";
import NoPlate from "assets/images/noplate.png";
import PropTypes from "prop-types"; // Import the prop-types library

const RecordDetail = ({ selectedRecord }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const [data, Setdata] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, Setimages] = useState([]);

  const [setting, Setsetting] = useState({});

  const [selectedValues, setSelectedValues] = useState([]);
  const [typeValue, setTypeValue] = useState(""); // Initialize with an empty string or a default value from the database

  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const violations = ["overspeeding", "No Helmet", "Triple Riding", "Fancy Plate", "No Seatbelt"];
  const handleChangevol = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedValues(typeof value === "string" ? value.split(",") : value);
  };

  const type = ["electric", "commercial", "private"]; // Predefined vehicle types

  const handleChangetype = (event) => {
    const {
      target: { value },
    } = event;
    setTypeValue(value);
  };

  const MenuProps = {
    PaperProps: {
      style: {
        colors: "white",
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const printIframe = (id) => {
    const iframe = document.frames ? document.frames[id] : document.getElementById(id);
    const iframeWindow = iframe.contentWindow || iframe;

    iframe.focus();
    iframeWindow.print();

    return false;
  };
  const handleFormSubmit = async (values) => {
    var temp = values;
    temp["violations"] = selectedValues;
    temp["type"] = typeValue;
    console.log(temp);
    let res = await axios.post(`http://127.0.0.1:8001/api/record/${values.rid}`, temp);
  };

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseRounded fontSize="small" />
      </IconButton>
    </Fragment>
  );
  const fetchData = async () => {
    try {
      const [recordRes, settingRes] = await Promise.all([
        axios.get(`http://127.0.0.1:8001/api/record/${id}`),
        axios.get("http://127.0.0.1:8001/api/profile"),
      ]);

      const recentRecord = recordRes.data.data;
      const settingData = settingRes.data;

      Setsetting(settingData);
      Setdata(recentRecord);
      setSelectedValues(recentRecord.violations);
      setTypeValue(recentRecord.type); // Set the value for the vehicle type dropdown

      const tempImages = [
        recentRecord.vehicle_image,
        recentRecord.plate_image,
        recentRecord.original_image,
        recentRecord.plot_image,
        recentRecord.gif,
      ];
      console.log(tempImages);
      Setimages(tempImages);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  useEffect(() => {
    // Set the state to display the details of the selected record
    Setdata(selectedRecord);
    setSelectedValues(selectedRecord.violations);
    setTypeValue(selectedRecord.type);
    const tempImages = [
      selectedRecord.vehicle_image,
      selectedRecord.plate_image,
      selectedRecord.original_image,
      selectedRecord.plot_image,
      selectedRecord.gif,
    ];
    Setimages(tempImages);
  }, [selectedRecord]);

  const handleRefresh = async () => {
    // Get the rid from the selectedRecord prop
    const rid = selectedRecord?.rid;

    if (rid) {
      try {
        const res = await axios.get(`http://127.0.0.1:8001/api/record/${rid}`);
        const recentRecord = res.data.data;

        Setdata(recentRecord);
        setSelectedValues(recentRecord.violations);
        setTypeValue(recentRecord.type);
        const tempImages = [
          recentRecord.vehicle_image,
          recentRecord.plate_image,
          recentRecord.original_image,
          recentRecord.plot_image,
          recentRecord.gif,
        ];
        Setimages(tempImages);
      } catch (error) {
        console.error("Error fetching record:", error);
      }
    } else {
      console.warn("No selected record found.");
    }
  };

  const updateData = async () => {
    const res = await axios.get(`http://127.0.0.1:8001/api/record/${id}`);
    const recentRecords = res.data.data;
    Setdata(recentRecords);
    var tempImages = [];
    for (var i = 0; i < recentRecords.length; i++) {
      var temp = [];
      temp.push(recentRecords[i].vehicle_image);
      temp.push(recentRecords[i].plate_image);
      temp.push(recentRecords[i].original_image);
      temp.push(recentRecords[i].plot_image);
      temp.push(recentRecords.gif);
      tempImages.push(temp);
    }
    Setimages(tempImages);
  };
  const initialValues = data;

  return (
    <>
      {/* <DashboardLayout> */}
      {/* <DashboardNavbar /> */}
      <MDBox my={3}>
        {/* <Card> */}
        <MDBox py={3} px={3} pb={24}>
          <MDBox display="flex" justifyContent="flex-end" marginBottom={1}></MDBox>
          <MDBox
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="160px"
            // gap="10px"
          >
            <MDBox
              mr={1}
              position="relative"
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <MDBox>
                <img
                  src={data?.vehicle_image}
                  height="170px"
                  width="100%"
                  onClick={() => openImageViewer(0)}
                />
              </MDBox>
              <MDBox pt={1}>
                {data?.plate_image !== undefined &&
                data?.plate_image !== "None" &&
                data?.plate_image !== "" ? (
                  <img
                    src={data?.plate_image}
                    height="80px"
                    width="100%"
                    onClick={() => openImageViewer(1)}
                  />
                ) : (
                  <img src={NoPlate} alt="No Plate" height="80px" width="100%" />
                )}
              </MDBox>
              <MDBox pt={1}>
                <ReactGifPlayer
                  gif={data?.gif}
                  autoplay={isPlaying}
                  onClick={togglePlay}
                  still={false}
                  width="100%"
                  height="175px"
                />
              </MDBox>
            </MDBox>
            <MDBox
              pt={2}
              display="flex"
              flexWrap="wrap"
              alignContent="flex-start"
              justifyContent="center"
              alignItems="center"
              position="relative"
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <Formik onSubmit={handleFormSubmit} initialValues={initialValues} enableReinitialize>
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <MDBox
                      display="flex"
                      justifyContent="center"
                      flexWrap="wrap"
                      alignItems="center"
                    >
                      {/* <MDInput
            sx={{'width':'200px','margin':'2px'}}
            fullWidth
            variant="filled"
            type="text"
            label={
              <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                {`Violations`}
              </MDTypography>
            }
            value={values?.violations}
            focused
            onBlur={handleBlur}
            onChange={handleChange}
            name='violations'
              /> */}
                      <MDBox display="flex" flexDirection="column">
                        <InputLabel
                          htmlFor="demo-vehicle-type"
                          sx={{
                            marginLeft: "8px",
                            color: "#1A73E8",
                            fontWeight: "700",
                            fontSize: "14px",
                          }}
                        >
                          Voilations
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          sx={{ width: "200px", margin: "8px", height: "45px" }}
                          multiple
                          onChange={handleChangevol}
                          value={selectedValues}
                          input={<OutlinedInput label="Violations" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                          name="violations"
                        >
                          {violations.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox checked={selectedValues.indexOf(name) > -1} />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </MDBox>

                      <MDBox display="flex" flexDirection="column">
                        <InputLabel
                          htmlFor="demo-vehicle-type"
                          sx={{
                            marginLeft: "8px",
                            color: "#1A73E8",
                            fontWeight: "700",
                            fontSize: "14px",
                          }}
                        >
                          Vehicle Type
                        </InputLabel>
                        <Select
                          labelId="demo-vehicle-type"
                          id="vehicle-type"
                          sx={{ width: "200px", margin: "8px", height: "45px" }}
                          onChange={handleChangetype}
                          value={typeValue}
                          input={<OutlinedInput label="Type" />}
                          name="type"
                        >
                          <MenuItem value="None">Select Vehicle Type</MenuItem>
                          {type.map((name) => (
                            <MenuItem key={name} value={name}>
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </MDBox>

                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            Category
                          </MDTypography>
                        }
                        focused
                        value={values?.category}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="category"
                      />

                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            Number Plate
                          </MDTypography>
                        }
                        focused
                        value={values?.ocr}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="ocr"
                      />

                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            Speed
                          </MDTypography>
                        }
                        focused
                        value={values?.speed}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="speed"
                      />

                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            Distance
                          </MDTypography>
                        }
                        focused
                        value={values?.distance}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="distance"
                      />

                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            Lat
                          </MDTypography>
                        }
                        focused
                        value={values?.lat}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="lat"
                      />
                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            Lon
                          </MDTypography>
                        }
                        focused
                        value={values?.lon}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="lon"
                      />

                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            Direction
                          </MDTypography>
                        }
                        focused
                        value={values?.direction}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="direction"
                      />

                      <MDInput
                        sx={{ width: "200px", margin: "8px" }}
                        fullWidth
                        // disabled
                        // variant="filled"
                        type="text"
                        label={
                          <MDTypography fontSize={18} fontWeight="bold" color="#fff">
                            CreatedAt
                          </MDTypography>
                        }
                        focused
                        value={dayjs(values?.created_at).format("MMM D,YYYY h:mm A")}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </MDBox>
                    <MDBox display="flex" justifyContent="center" pt={2}>
                      <MDButton
                        m={3}
                        type="submit"
                        color="info"
                        variant="contained"
                        sx={{
                          margin: "8px",
                        }}
                      >
                        Save
                      </MDButton>
                      <MDButton
                        m={3}
                        color="info"
                        variant="contained"
                        onClick={() => printIframe("print")}
                        sx={{
                          margin: "8px",
                        }}
                      >
                        Print
                      </MDButton>
                      <MDButton
                        m={3}
                        type="submit"
                        color="info"
                        variant="contained"
                        sx={{
                          margin: "8px",
                        }}
                        onClick={handleClick}
                      >
                        Approve & Send
                      </MDButton>

                      <MDButton
                        color="error"
                        variant="contained"
                        onClick={() => handleRefresh()}
                        m={3}
                        sx={{
                          margin: "8px",
                        }}
                      >
                        <RefreshRounded />
                      </MDButton>

                      <MDSnackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={open}
                        autoHideDuration={5000}
                        onClose={handleClose}
                        message="API IS NOT CONFIGURED"
                        // action={action}
                      />
                    </MDBox>
                  </form>
                )}
              </Formik>
            </MDBox>
          </MDBox>
        </MDBox>
        {/* </Card> */}
      </MDBox>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 1500,
          }}
          closeOnClickOutside={true}
        />
      )}
      <iframe
        id="print"
        // src={`http://localhost:8001/print/${id}`}
        srcDoc={`<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>PrintChallan</title>
              <style>table.customTable {
                  width: 100%;
                  background-color: #FFFFFF;
                  border-collapse: collapse;
                  border-width: 2px;
                  border-color: #000000;
                  border-style: solid;
                  color: #000000;
                }

                table.customTable td, table.customTable th {
                  border-width: 2px;
                  border-color: #000000;
                  border-style: solid;
                  padding: 5px;
                }

                table.customTable thead {
                  background-color: #FFFFFF;
                }
              </style>
          </head>
          <body>
              <div style="display: block;">
                  <div style="display: block;">
                      <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
                          <div style="position: relative;display: flex;align-items: center;justify-content: space-around;width: 100%;" >
                              <h3 style="font-family: sans-serif;">${setting.dept}</h3>
                              <img
                              src="${Old}"
                              height="60x"
                              width="80px"
                            />
                            <h3 style="font-family: sans-serif;">${setting.location}</h3>
                          </div>
                          <div>
                              <div style="position: relative;">
                                  <img src=${data?.plot_image} style="width: 100%;height: auto;margin: 10px;position: relative;max-width: 480px;">
                                  </div>
                              </div>
                          </div>
                          <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
                              <img src=${data?.plate_image} style="width: 100px;"/>
                          </div>
                          <div style="display: flex;width: 100%;">
                              <table class="customTable">
                                  <tbody>
                                    <tr>
                                      <td>Name</td>
                                    </tr>
                                    <tr>
                                      <td>DL No</td>
                                    </tr>
                                    <tr>
                                      <td>Address</td>
                                    </tr>
                                    <tr>
                                      <td>Contact No</td>
                                    </tr>
                                    <tr>
                                    <td>Location</td>
                                  </tr>
                                </tbody>
                              </table>
                          </div>
                          <div style="display: flex;justify-content: space-between;width: 100%;padding-right: 20px;padding-top: 15px;">
                              <h3>Witness</h3>
                              <h3>Signature</h3>
                          </div>

                      </div>
                  </div>
              </div>

          </body>
          </html>`}
        style={{ position: "absolute", top: "-1000px", left: "-1000px" }}
        title="Print Challan"
      />
      {/* <Footer /> */}
      {/* </DashboardLayout> */}
    </>
  );
};

RecordDetail.propTypes = {
  selectedRecord: PropTypes.shape({
    rid: PropTypes.string.isRequired,
    violations: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    vehicle_image: PropTypes.string,
    plate_image: PropTypes.string,
    original_image: PropTypes.string,
    plot_image: PropTypes.string,
    gif: PropTypes.string,
    // Add other prop types if necessary
  }).isRequired,
};
export default RecordDetail;
