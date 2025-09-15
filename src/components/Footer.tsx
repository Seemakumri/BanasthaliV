import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// A mock component to represent a custom university logo or icon
const CustomLogo = () => (
  <Box 
    sx={{ 
      width: 40, 
      height: 40, 
      borderRadius: '50%', 
      backgroundColor: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      border: '2px solid #ccc'
    }}
  >
    <Typography color="black" variant="caption">Logo</Typography>
  </Box>
);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#194a8d', // A dark blue color similar to the image
        color: 'white',
        py: 2,
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '2px solid rgba(255, 255, 255, 0.2)', // A slight border for separation
        gap: 2,
        
      }}
    >
      {/* Left side: Text content */}
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="body2">
          Notified Under Section (3) of University Grants Commission Act.
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          @ 2027 Banasthali Vidyapith.
        </Typography>
      </Box>

      {/* Right side: Social media and custom icons */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1 
        }}
      >
        {/* Using placeholder icons from MUI. You can replace these with custom images. */}
        <IconButton
          color="inherit"
          aria-label="Instagram"
          component={Link}
          href="#"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="Facebook"
          component={Link}
          href="#"
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="Twitter"
          component={Link}
          href="#"
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="YouTube"
          component={Link}
          href="#"
          target="_blank"
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="LinkedIn"
          component={Link}
          href="#"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
