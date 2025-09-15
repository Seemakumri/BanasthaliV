// import React from "react";
// import { Paper } from "@mui/material";


// const rightMenu = [
//   { label: "Panchmukhi Shiksha", color: "#4CAF50" },
//   { label: "Banasthali International", color: "#E91E63" },
//   { label: "Banasthali Online", color: "#3F51B5" },
//   { label: "ALUMNI", color: "#FF9800" },
// ];

// const RightSidebar: React.FC = () => {
//   return (
//     <>
//       {rightMenu.map((item) => (
//         <Paper
//           key={item.label}
//           sx={{
//             bgcolor: item.color,
//             color: "white",
//             p: { xs: 1.5, sm: 2 },
//             mb: { xs: 1.5, sm: 2 },
//             textAlign: "center",
//             fontWeight: "bold",
//             fontSize: { xs: "0.85rem", sm: "1rem" },
//           }}
//         >
//           {item.label}
//         </Paper>
//       ))}
//     </>
//   );
// };

// export default RightSidebar;


import React from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const rightMenu = [
  {
    label: "Panchmukhi Shiksha",
    subLabel: "Five–Fold Education",
    color: "#4CAF50",
  },
  {
    label: "Banasthali International",
    subLabel: "",
    color: "#E91E63",
  },
  {
    label: "Banasthali Online",
    subLabel: "Banasthali’s e–learning program.",
    color: "#3F51B5",
  },
  {
    label: "ALUMNI",
    subLabel: "",
    color: "#FF9800",
  },
];

const RightSidebar: React.FC = () => {
  return (
    <>
      {rightMenu.map((item) => (
        <Box
          key={item.label}
          sx={{
            bgcolor: item.color,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: { xs: 1.2, sm: 1.5 },
            mb: { xs: 1.2, sm: 1.5 },
          }}
        >
          {/* Left Side (+ icon + text) */}
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <AddIcon sx={{ fontSize: 18, mt: 0.3 }} />
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  lineHeight: 1.2,
                }}
              >
                {item.label}
              </Typography>
              {item.subLabel && (
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    fontWeight: 400,
                  }}
                >
                  {item.subLabel}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default RightSidebar;
