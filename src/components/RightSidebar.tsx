import React from "react";
import { Paper } from "@mui/material";

const rightMenu = [
  { label: "Panchmukhi Shiksha", color: "#4CAF50" },
  { label: "Banasthali International", color: "#E91E63" },
  { label: "Banasthali Online", color: "#3F51B5" },
  { label: "ALUMNI", color: "#FF9800" },
];

const RightSidebar: React.FC = () => {
  return (
    <>
      {rightMenu.map((item) => (
        <Paper
          key={item.label}
          sx={{
            bgcolor: item.color,
            color: "white",
            p: { xs: 1.5, sm: 2 },
            mb: { xs: 1.5, sm: 2 },
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: "0.85rem", sm: "1rem" },
          }}
        >
          {item.label}
        </Paper>
      ))}
    </>
  );
};

export default RightSidebar;
