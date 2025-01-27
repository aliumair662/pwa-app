import React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ListAltIcon from '@mui/icons-material/ListAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DescriptionIcon from '@mui/icons-material/Description';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "@mui/icons-material";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";

const drawerWidth = 110;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1D4850", 
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1D4850", 
  width: `calc(${theme.spacing(7)} + 20px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // padding: theme.spacing(0, 1),
  justifyContent: "center",
  backgroundColor: "#0F1438", 

  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

const pageIcons = {
  "Product List": ListAltIcon,
  "PIN Code": QrCodeIcon,
  "Clients 1": EscalatorWarningIcon,
  "Clients 2": ReceiptLongIcon,
  "Inventory": DescriptionIcon,
  "Form List": FormatListBulletedIcon,
};

const DrawerComponent = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: open ? 50 : 40,
            height: open ? 50 : 40,
            marginLeft: open ? 1.5 : 0,
          }}
        />
        {/* <IconButton onClick={handleDrawerClose}>
          {open ? <MenuIcon /> : <ChevronRightIcon />}
        </IconButton> */}
      </DrawerHeader>
      {/* <Divider /> */}
      <List sx={{

         "& . MuiList-root":{
         }
     
      }}>
        {[
          "Product List",
          "PIN Code",
          "Clients 1",
          "Clients 2",
          "Inventory",
          "Form List",
        ].map((text) => (
          <ListItem key={text} sx={{ display: "block",padding:0}}>
            <ListItemButton
              sx={{
                minHeight: "90px",
                color: "white",
                px: 2.5,
                // p:0,
                // borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#73AAB2",
                  color: "black",
                },
                "&:hover .MuiSvgIcon-root": {
                  color: "black",
                },
                justifyContent: open ? "initial" : "center",
                flexDirection: open ? "column" : "column",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  color: "inherit",
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },
                }}
              >
                {React.createElement(pageIcons[text])}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  opacity: open ? 1 : 1,
                  color: "inherit",
                  marginLeft: open ? "0px" : "0px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default DrawerComponent;
