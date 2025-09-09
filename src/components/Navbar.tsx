import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";

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

const Navbar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: { xs: 0, sm: 200, md: 240 }, // hide on mobile
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: { xs: 0, sm: 200, md: 240 },
          top: { xs: 56, sm: 64 }, // adjust header height
        },
        display: { xs: "none", sm: "block" }, // hide drawer in mobile
      }}
    >
      <List>
        {leftMenu.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
