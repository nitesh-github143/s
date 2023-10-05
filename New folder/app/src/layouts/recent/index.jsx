import { IconButton, useTheme } from "@mui/material";
import { tokens } from "./oldtheme";
import { useState, useEffect, useCallback, Fragment } from "react";

import axios from "axios";
import ImageViewer from "react-simple-image-viewer";
import dayjs from "dayjs";
import { CloseRounded, RefreshRounded } from "@mui/icons-material";
import { Formik } from "formik";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MDInput from "components/MDInput";
import MDSnackbar from "components/MDSnackbar";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import NoPlate from "assets/images/noplate.png";

const RecentPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pageIndex, SetpageIndex] = useState(1);
  const [data, Setdata] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, Setimages] = useState([]);

  const [setting, Setsetting] = useState({});

  const [selectedValues, setSelectedValues] = useState([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const handleChangevol = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedValues(typeof value === "string" ? value.split(",") : value);
  };
  const violations = ["overspeeding", "No Helmet", "Triple Riding", "Fancy Plate", "No Seatbelt"];

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
    console.log(temp);
    let res = await axios.post(`http://127.0.0.1:8001/api/record/${values.rid}`, temp);
  };

  const updateData = async () => {
    const res = await axios.get("http://127.0.0.1:8001/api/recent");
    const recentRecords = res.data.data;
    const sett = await axios.get("http://127.0.0.1:8001/api/profile");
    Setsetting(sett.data);
    Setdata(recentRecords);
    var tempImages = [];
    for (var i = 0; i < recentRecords.length; i++) {
      var temp = [];
      temp.push(recentRecords[i].vehicle_image);
      temp.push(recentRecords[i].plate_image);
      temp.push(recentRecords[i].original_image);
      temp.push(recentRecords[i].plot_image);
      tempImages.push(temp);
    }
    Setimages(tempImages);
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

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://127.0.0.1:8001/api/recent");
      const recentRecords = res.data.data;
      // console.log(recentRecords)
      Setdata(recentRecords);
      setSelectedValues(recentRecords[pageIndex - 1].violations);
      var tempImages = [];
      for (var i = 0; i < recentRecords.length; i++) {
        var temp = [];
        temp.push(recentRecords[i].vehicle_image);
        temp.push(recentRecords[i].plate_image);
        temp.push(recentRecords[i].original_image);
        temp.push(recentRecords[i].plot_image);
        tempImages.push(temp);
      }

      Setimages(tempImages);
      console.log(pageIndex);
    })();
  }, [pageIndex]);
  const initialValues = data[pageIndex - 1];
  return (
    <>
      <MDBox m="10px" pt={"10px"}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDBox mb="5px">
            <MDTypography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              {`Recent:${data[pageIndex - 1]?.rid}`}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" justifyContent="flex-end" marginBottom={1}>
          <MDButton
            color="secondary"
            variant="contained"
            onClick={() => updateData()}
            style={{ marginRight: 5 }}
          >
            <RefreshRounded />
          </MDButton>
          <MDPagination
            count={data.length}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => {
              SetpageIndex(value);
            }}
          />
        </MDBox>
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
                src={data[pageIndex - 1]?.vehicle_image}
                height="170px"
                width="100%"
                onClick={() => openImageViewer(0)}
              />
            </MDBox>
            <MDBox pt={1}>
              {data[pageIndex - 1]?.plate_image ? (
                <img
                  src={data[pageIndex - 1]?.plate_image}
                  height="80px"
                  width="100%"
                  onClick={() => openImageViewer(1)}
                />
              ) : (
                <img src={NoPlate} alt="No PLate" height="80px" width="100%" />
              )}
            </MDBox>
            <MDBox
              display="flex"
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <MDBox>
                <img
                  src={data[pageIndex - 1]?.gif}
                  height="125px"
                  width="100%"
                  onClick={() => openImageViewer(0)}
                />
              </MDBox>
              <MDTypography fontSize={27} fontWeight="bold" color="#fff">
                {data[pageIndex - 1]?.ocr}
              </MDTypography>
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
                  <MDBox display="flex" justifyContent="center" flexWrap="wrap" alignItems="center">
                    {/* <TextField
            sx={{'width':'200px','margin':'2px'}}
            fullWidth
            variant="filled"
            type="text"
            label={
              <Typography fontSize={18} fontWeight="bold" color="#fff">
                {`Violations`}
              </Typography>
            }
            value={values?.violations}
            focused
            onBlur={handleBlur}
            onChange={handleChange}
            name='violations'
              /> */}

                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      sx={{ width: "200px", margin: "2px" }}
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

                    <MDInput
                      sx={{ width: "200px", margin: "2px" }}
                      fullWidth
                      variant="filled"
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
                      sx={{ width: "200px", margin: "2px" }}
                      fullWidth
                      variant="filled"
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
                      sx={{ width: "200px", margin: "2px" }}
                      fullWidth
                      variant="filled"
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
                      sx={{ width: "200px", margin: "2px" }}
                      fullWidth
                      variant="filled"
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
                      sx={{ width: "200px", margin: "2px" }}
                      fullWidth
                      variant="filled"
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
                      sx={{ width: "100px", margin: "2px" }}
                      fullWidth
                      variant="filled"
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
                      sx={{ width: "100px", margin: "2px" }}
                      fullWidth
                      variant="filled"
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
                      sx={{ width: "200px", margin: "2px" }}
                      fullWidth
                      disabled
                      variant="filled"
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
                      color="secondary"
                      variant="contained"
                      sx={{
                        margin: "5px",
                      }}
                    >
                      Save
                    </MDButton>
                    <MDButton
                      m={3}
                      color="secondary"
                      variant="contained"
                      onClick={() => printIframe("print")}
                      sx={{
                        margin: "5px",
                      }}
                    >
                      Print
                    </MDButton>
                    <MDButton
                      m={3}
                      type="submit"
                      color="secondary"
                      variant="contained"
                      sx={{
                        margin: "5px",
                      }}
                      onClick={handleClick}
                    >
                      Approve & Send
                    </MDButton>
                    <MDSnackbar
                      anchorOrigin={{ vertical: "top", horizontal: "center" }}
                      open={open}
                      autoHideDuration={5000}
                      onClose={handleClose}
                      message="API IS NOT CONFIGURED"
                      action={action}
                    />
                  </MDBox>
                </form>
              )}
            </Formik>
          </MDBox>
        </MDBox>
        {isViewerOpen && (
          <ImageViewer
            src={images[pageIndex - 1]}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </MDBox>
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
                          src="http://localhost:8000/static/dummy/mplogo.jpeg"
                          height="80x"
                          width="80px"
                        />
                        <h3 style="font-family: sans-serif;">${setting.location}</h3>
                          </div>
                          <div>
                              <div style="position: relative;">
                                  <img src=${
                                    data[pageIndex - 1]?.plot_image
                                  } style="width: 100%;height: auto;margin: 20px;position: relative;max-width: 480px;">
                              </div>
                          </div>
                          <div>
                              <img src=${data[pageIndex - 1]?.plate_image} style="width: 100px;"/>
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
                                  <tr>
                                  <td>Witness</td>
                                </tr>
                                  </tbody>
                                </table>
                          </div>
                          <div style="display: flex;justify-content: flex-end;width: 100%;padding-right: 20px;padding-top: 15px;">
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
    </>
  );
};
export default RecentPage;
