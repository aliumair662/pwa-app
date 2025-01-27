import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TextwithMenu = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 500 }}>
        {text}
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
          padding: 1,
          borderRadius: "50%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
         <img src={require("../assets/menuIcon.png")} alt={"menu"} style={{ width: 5, height: 10 }} />
      </Box>
    </Box>
  );
};

export default TextwithMenu;
