import { useEffect, useState } from "react";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import NoCamera from "assets/images/nocamera.png";

function LiveCamera() {
  //my
  // const defaultimage = "http://localhost:8000/static/dummy/nocamera.png";
  const defaultimage = NoCamera;
  // const [speed, setSpeed] = useState("");
  // const [distance, setDistance] = useState("");

  // useEffect(() => {
  //   const socket = new WebSocket("ws://localhost:8000/ws");

  //   socket.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     setSpeed(data.speed);
  //     setDistance(data.distance);
  //   };

  //   // Close the WebSocket connection on component unmount
  //   return () => socket.close();
  // }, []);

  const handleChange = async (event) => {
    setValue(event.target.value);
    const res = await axios.get(`http://127.0.0.1:8001/${value}`);
  };

  const replaceImage = (error) => {
    error.target.src = defaultimage;
  };

  const onClickHandle = (e) => {
    if (isFullscreenEnabled()) {
      toggleFullScreen(e.target);
    } else {
      openInNewTab(e.target.src);
    }
  };

  const toggleFullScreen = (element) => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen().catch((err) => {
        console.log(err);
      });
    }
  };

  const isFullscreenEnabled = () => {
    return (
      document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.msFullscreenEnabled
    );
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const ZoomIn = async () => {
    const res = await axios.get("http://127.0.0.1:8001/ZoomIn");
  };
  const ZoomOut = async () => {
    const res = await axios.get("http://127.0.0.1:8001/ZoomOut");
  };
  const FocusIn = async () => {
    const res = await axios.get("http://127.0.0.1:8001/FocusIn");
  };
  const FocusOut = async () => {
    const res = await axios.get("http://127.0.0.1:8001/FocusOut");
  }; //my

  return (
    <Card>
      {/* camera feed */}
      {/* <MDBox display="flex" flexDirection="column" alignItems="start" px={3} pt={2}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Speed: {speed} Km/h
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Distance: {distance}
          </MDTypography>
        </MDBox>
      </MDBox> */}
      <MDBox display="flex" justifyContent="space-between" alignItems="center" px={3} pt={2}>
        <MDBox>
          <img
            src="http://localhost:8000/video" //Real Camera Video
            height={"100%"}
            width={"100%"}
            onError={replaceImage}
            onClick={onClickHandle}
          ></img>
        </MDBox>
      </MDBox>
      {/* Zoom and focus button */}
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Zoom
          </MDTypography>
          <MDBox display="flex" alignItems="center">
            <MDButton
              color="info"
              variant="contained"
              onClick={() => ZoomIn()}
              style={{ marginRight: 5 }}
            >
              {" "}
              +{" "}
            </MDButton>
            <MDButton
              color="info"
              variant="contained"
              onClick={() => ZoomOut()}
              style={{ marginRight: 5 }}
            >
              {" "}
              -{" "}
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Focus
          </MDTypography>
          <MDBox display="flex" alignItems="center">
            <MDButton
              color="info"
              variant="contained"
              onClick={() => FocusIn()}
              style={{ marginRight: 5 }}
            >
              {" "}
              +{" "}
            </MDButton>
            <MDButton
              color="info"
              variant="contained"
              onClick={() => FocusOut()}
              style={{ marginRight: 5 }}
            >
              {" "}
              -{" "}
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default LiveCamera;
