import React from "react";
import { Paper, Typography } from "@mui/material";

const MainContent: React.FC = () => {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <Typography
        variant="h6"
        sx={{ color: "blue", fontWeight: "bold", fontSize: { xs: "1rem", md: "1.25rem" } }}
      >
        Accredited with the highest possible grade 'A++' with CGPA 3.63/4.00 by NAAC
      </Typography>

      <Typography sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
        Banasthali Vidyapith aims at the synthesis of spiritual values and scientific
        achievements of both the East and the West. Its educational programme is based on
        the concept of "Panchmukhi Shiksha" and aims at all round harmonious development
        of personality.
      </Typography>

      <Typography sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
        Emphasis on Indian culture and thought characterized by simple living and khadi
        wearing are hallmarks of life at Banasthali.
      </Typography>
    </Paper>
  );
};

export default MainContent;
