import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import AppBarComponent from "./Header"; 
import DrawerComponent from "./Sidebar"; 

const MiniDrawer = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "", width: "100%" }}>
      <CssBaseline />
      <AppBarComponent open={open} handleDrawerClose={handleDrawerClose} />
      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0,mt:10, backgroundColor: "#F9F9F9" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MiniDrawer;
