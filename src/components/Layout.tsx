import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Header />
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: 1,
          mt: "17vh",  
          px: { xs: 2, md: 4 },
          py: 2,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
