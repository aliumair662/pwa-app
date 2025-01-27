import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
// import SearchBar from "../components/Searchfield";
import Box from "@mui/material/Box";

const drawerWidth = 240;
const collapsedDrawerWidth = 85;

const StyledAppBar = styled(MuiAppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",
  marginLeft: open ? drawerWidth : collapsedDrawerWidth,
  width: open
    ? `calc(100% - ${drawerWidth}px)`
    : `calc(100% - ${collapsedDrawerWidth}px)`,
  backgroundColor: "#FFFFFF",
}));

const AppBarComponent = ({ open, handleDrawerClose }) => (
  <StyledAppBar position="fixed" open={open}>
    <Toolbar
      sx={{
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          sx={{ color: "black" }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            sx={{ p: 0 }}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dummy Profile"
              sx={{
                width: 40,
                height: 40,
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  </StyledAppBar>
);

export default AppBarComponent;
