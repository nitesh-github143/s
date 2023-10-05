// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GridToolbar } from "@mui/x-data-grid";
import MDDataGrid from "components/MDDataGrid";
import dayjs from "dayjs";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { CloseRounded, RefreshRounded } from "@mui/icons-material";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HideSourceIcon from "@mui/icons-material/HideSource";
import { GridColumnMenu } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useMaterialUIController } from "context";
import RecordDetail from "../recordDetail";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

// Custom User Item component
function CustomUserItem(props) {
  const { myCustomHandler, myCustomValue } = props;
  return (
    <MenuItem onClick={myCustomHandler}>
      <ListItemIcon>
        <HideSourceIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>{myCustomValue}</ListItemText>
    </MenuItem>
  );
}

CustomUserItem.propTypes = {
  myCustomHandler: PropTypes.func.isRequired,
  myCustomValue: PropTypes.string.isRequired,
};

// Custom Column Menu component
function CustomColumnMenu(props) {
  const { hideNullValues, setHideNullValues } = props;

  const handleCustomItemClick = () => {
    setHideNullValues(!hideNullValues);
  };

  return (
    <GridColumnMenu
      {...props}
      slots={{
        columnMenuUserItem: CustomUserItem,
      }}
      slotProps={{
        columnMenuUserItem: {
          displayOrder: 15,
          myCustomValue: hideNullValues ? "Show Null Values" : "Hide Null Values",
          myCustomHandler: handleCustomItemClick,
        },
      }}
    />
  );
}

CustomColumnMenu.propTypes = {
  hideNullValues: PropTypes.bool.isRequired,
  setHideNullValues: PropTypes.func.isRequired,
};

function RecordsPage() {
  const [controller] = useMaterialUIController();
  // const { darkMode } = controller;

  const [recordsData, setrecordsData] = useState([]);
  const [hideNullValues, setHideNullValues] = useState(false); // State for tracking whether null values are hidden or shown

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const { rid } = selectedRecord || {};

  const handleRowClick = (params) => {
    setSelectedRecord(params.row);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Fetch your records data here and set it to filteredRecords state
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/records");
        // Process the response data and set it to filteredRecords state
        setFilteredRecords(response.data);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateDataClick = () => {
    fetchData();
  };

  const fetchData = async () => {
    const url = "http://localhost:8001/api/records";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setrecordsData(json.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const columns = [
    {
      field: "rid",
      headerName: "Id",
      cellClassName: "name-column--cell",
      width: 60,
    },
    {
      field: "plot_image",
      headerName: "Vehicle",
      width: 100,
      renderCell: ({ row: { plot_image } }) => {
        return (
          <MDBox
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="4px"
          >
            <MDBox sx={{ m: "5px", p: "10px" }}>
              <img src={plot_image} height="52px"></img>
            </MDBox>
          </MDBox>
        );
      },
    },
    {
      field: "gif",
      headerName: "GIF",
      width: 100,
      renderCell: ({ row: { gif } }) => {
        return (
          <MDBox
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="4px"
          >
            <MDBox sx={{ m: "5px", p: "10px" }}>
              <img src={gif} height="52px"></img>
            </MDBox>
          </MDBox>
        );
      },
    },
    {
      field: "category",
      headerName: "Vehicle Category",
      cellClassName: "name-column--cell",
      width: 150,
    },
    {
      field: "ocr",
      headerName: "OCR",
      cellClassName: "name-column--cell",
      valueFormatter: ({ value }) => (value === null ? "null" : value.code),
      width: 150,
    },
    {
      field: "speed",
      headerName: "Speed",
      cellClassName: "name-column--cell",
      valueFormatter: ({ value }) => (value === null ? "null" : value.code),
      width: 150,
    },
    {
      field: "distance",
      headerName: "Distance",
      cellClassName: "name-column--cell",
      valueFormatter: ({ value }) => (value === null ? "null" : value.code),
      width: 150,
    },
    {
      field: "direction",
      headerName: "Direction",
      cellClassName: "name-column--cell",
      valueFormatter: ({ value }) => (value === null ? "null" : value.code),
      width: 150,
    },
    {
      field: "created_at",
      headerName: "Timestamp",
      // type:'datatime',
      cellClassName: "name-column--cell",
      valueFormatter: ({ value }) =>
        value === null ? "null" : dayjs(value).format("MMM D,YYYY h:mm A"),
      width: 250,
    },

    // {
    //   headerName: 'Details',
    //   renderCell: ({ row: { rid } }) => {
    //     return (
    //       <Box
    //         width="100%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={colors.greenAccent[600]}
    //         borderRadius="4px"
    //       >
    //         <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
    //           <Link to={`/recordDetail/${rid}`}>View</Link>
    //         </Typography>
    //       </Box>
    //     )
    //   },
    // },
  ];

  const filteredRecords = hideNullValues
    ? recordsData.filter((record) => Object.values(record).every((value) => value !== "null"))
    : recordsData;

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography variant="h6" color="white">
                    Records
                  </MDTypography>
                  <MDButton
                    color="error"
                    variant="contained"
                    onClick={() => handleUpdateDataClick()}
                  >
                    <RefreshRounded />
                  </MDButton>
                </MDBox>
                <MDBox pt={3}>
                  <MDDataGrid
                    rows={filteredRecords}
                    columns={columns}
                    slotProps={{ toolbar: { printOptions: { disableToolbarButton: true } } }}
                    components={{
                      Toolbar: GridToolbar,
                      ColumnMenu: (props) => (
                        <CustomColumnMenu
                          {...props}
                          hideNullValues={hideNullValues}
                          setHideNullValues={setHideNullValues}
                        />
                      ),
                    }}
                    density="comfortable"
                    getRowId={(row) => row.rid}
                    onRowClick={handleRowClick}
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        {/* <Footer /> */}
      </DashboardLayout>
      {/* Modal */}
      <Dialog open={isModalOpen} onClose={handleModalClose} fullWidth maxWidth={false}>
        <DialogTitle>Record - {rid}</DialogTitle>
        <DialogContent>
          {/* Render the RecordDetail component and pass the selected record as props */}
          {selectedRecord && <RecordDetail selectedRecord={selectedRecord} />}
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleModalClose} color="error" variant="contained">
            Close
          </MDButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RecordsPage;
