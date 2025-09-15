// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

// const leftMenu = [
//   "ABOUT US",
//   "SCHOOL EDUCATION",
//   "HIGHER EDUCATION",
//   "ADMISSIONS",
//   "FINANCIAL ASSISTANCE",
//   "LIBRARY",
//   "EXAMINATION",
//   "SPORTS",
//   "BANASTHALI RADIO",
//   "MOOCS",
// ];

// const Navbar: React.FC = () => {
//   return (
//    <AppBar
//   position="fixed"   // ✅ sticky ko fixed karo
//   sx={{
//     backgroundColor: "#1976d2",
//     height: "9vh",
//     top: "8vh",       // ✅ header ke neeche fix karo
//     width: "100%"     // ✅ ensure full width
//   }}
// >

//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h6" sx={{ flexShrink: 0 }}>
//           Our Brand
//         </Typography>
//         <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
//           {leftMenu.map((text) => (
//             <Button
//               key={text}
//               color="inherit"
//               sx={{ fontSize: { xs: "0.7rem", md: "0.9rem" } }}
//             >
//               {text}
//             </Button>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const leftMenu = [
  "ABOUT US",
  "SCHOOL EDUCATION",
  "HIGHER EDUCATION",
  "ADMISSIONS",
  "FINANCIAL ASSISTANCE",
  "LIBRARY",
  "EXAMINATION",
  "SPORTS",
  "BANASTHALI RADIO",
  "MOOCS",
];

interface NavbarProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#1976d2",
        height: "9vh",
        top: "8vh",
        width: "100%",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexShrink: 0 }}>
          Our Brand
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {leftMenu.map((text) => (
            <Button
              key={text}
              onClick={() => setSelectedMenu(text)}
              color={selectedMenu === text ? "secondary" : "inherit"} // active button highlight
              sx={{ fontSize: { xs: "0.7rem", md: "0.9rem" } }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
