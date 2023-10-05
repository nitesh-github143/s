// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import Tabs from "@mui/base/Tabs";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import Tab, { tabClasses } from "@mui/base/Tab";
import { styled } from "@mui/system";
import CameraConfig from "./components/camera_config";
import LidarConfig from "./components/lidar_config";
import SpeedConfig from "./components/speed_config";

function ConfigPage() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const handleFormSubmit = (values) => {
    // console.log(values)
  };

  const TabNew = styled(Tab)`
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background: #358fed;
    width: 100%;
    padding: 10px 12px;
    margin: 4px 4px;
    border: none;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    background-color: #6daced;

    &:hover {
      background-color: #1a73e8;
    }

    &:focus {
      color: white;
      ${"" /* outline: 2px solid #3892ee; */}
    }

    &.${tabClasses.selected} {
      background-color: #1a73e8;
      color: white;
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabsListNew = styled(TabsList)(
    () => `
  background-color: "blueAccent[700]";
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
  );

  const TabPanelNew = styled(TabPanel)(
    () => `
    width: 100%;
    background: transparent;
    border-radius: 2px;
    `
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Card>
          {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" px={3} pb={2}>
          <MDTypography variant="h6" gutterBottom>
            Configuration
          </MDTypography>
        </MDBox> */}
          <MDBox
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="160px"
            gap="10px"
            px={3}
            py={5}
          >
            <MDBox gridColumn="span 12" gridRow="span 2" backgroundColor="primary[400]">
              <Tabs defaultValue={0}>
                <TabsListNew>
                  <TabNew>Camera</TabNew>
                  <TabNew>Lidar</TabNew>
                  <TabNew>Speed</TabNew>
                </TabsListNew>
                <TabPanelNew value={0}>
                  <CameraConfig />
                </TabPanelNew>
                <TabPanelNew value={1}>
                  <LidarConfig />
                </TabPanelNew>
                <TabPanelNew value={2}>
                  <SpeedConfig />
                </TabPanelNew>
              </Tabs>
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default ConfigPage;
