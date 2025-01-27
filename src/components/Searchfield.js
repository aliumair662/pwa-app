import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const Search = styled("div")(({ theme, backgroundColor }) => ({
  position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  borderRadius: "5%",

  backgroundColor: alpha(backgroundColor || theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(backgroundColor || theme.palette.common.black, 0.25),
  },
  marginLeft: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme, position }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  top: 0,
  [position]: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000000",
  fontSize: "12px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "#000000",
  fontSize: "15px",

  padding: theme.spacing(1, 1, 1, 1),
  paddingLeft: (props) =>
    props.iconPosition === "start"
      ? `calc(1em + ${theme.spacing(4)})`
      : theme.spacing(1), // Space for left icon
  paddingRight: (props) =>
    props.iconPosition === "end"
      ? `calc(1em + ${theme.spacing(4)})`
      : theme.spacing(1), // Space for right icon
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}));

const SearchBar = ({
  iconPosition = "end",
  backgroundColor = "black",
  placeholder = "Search project…",
  showIcon = true,
}) => (
  <Box sx={{ display: "flex", justifyContent: "flex-start", padding: 2 }}>
    <Search backgroundColor={backgroundColor}>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        iconPosition={iconPosition}
      />
      {showIcon && iconPosition !== "end" && (
        <SearchIconWrapper position="left">
          <SearchIcon
            style={{
              fontSize: "15px",
            }}
          />
        </SearchIconWrapper>
      )}
      {showIcon && iconPosition !== "start" && (
        <SearchIconWrapper position="right">
          <SearchIcon
            style={{
              fontSize: "15px",
            }}
          />
        </SearchIconWrapper>
      )}
    </Search>
  </Box>
);

export default SearchBar;
