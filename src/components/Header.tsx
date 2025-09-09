import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#2f4f6f" }}>
      <Toolbar sx={{ display: "flex", flexWrap: "wrap" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Banasthali_Vidyapith_Logo.png/120px-Banasthali_Vidyapith_Logo.png"
          alt="logo"
          style={{
            height: 40,
            marginRight: 12,
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
            whiteSpace: { xs: "normal", sm: "nowrap" },
          }}
        >
          बनस्थली विद्यापीठ | Banasthali Vidyapith
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
