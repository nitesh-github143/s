import Dashboard from "layouts/dashboard";
import RecordsPage from "layouts/records";
import ConfigPage from "layouts/configuration";
import Profile from "layouts/profile";
import PrintPage from "layouts/printChallan";
import RecordDetail from "layouts/recordDetail";

// @mui icons
import Icon from "@mui/material/Icon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: (
      <Icon fontSize="small">
        <DashboardIcon />
      </Icon>
    ),
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Records",
    key: "records",
    icon: (
      <Icon fontSize="small">
        <TableViewIcon />
      </Icon>
    ),
    route: "/records",
    component: <RecordsPage />,
  },
  {
    route: "/recordDetail/:id",
    component: <RecordDetail />,
  },
  {
    type: "collapse",
    name: "Configuration",
    key: "configuration",
    icon: (
      <Icon fontSize="small">
        <SettingsIcon />
      </Icon>
    ),
    route: "/configuration",
    component: <ConfigPage />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: (
      <Icon fontSize="small">
        <PersonIcon />
      </Icon>
    ),
    route: "/profile",
    component: <Profile />,
  },

  {
    route: "/print/:id",
    component: <PrintPage />,
  },
];

export default routes;
