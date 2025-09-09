import React from "react";
import { Box, CssBaseline } from "@mui/material";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const BanasthaliPage: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 2, md: 3 },
          mt: { xs: 7, sm: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 1.5, md: 2 },
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "2 1 0%" } }}>
          <MainContent />
        </Box>

        {/* Right Sidebar */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 0%" },
            mt: { xs: 2, md: 0 },
          }}
        >
          <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
};

export default BanasthaliPage;
