"use client";

import React from 'react';
import { Box, keyframes, Typography } from '@mui/material';

// A simple but cool floating and pulsing animation
const floatAndPulse = keyframes`
  0% {
    transform: translateY(0px) scale(0.95);
    opacity: 0.7;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
  }
  50% {
    transform: translateY(-12px) scale(1.05);
    opacity: 1;
    filter: drop-shadow(0px 12px 16px rgba(0, 0, 0, 0.4));
  }
  100% {
    transform: translateY(0px) scale(0.95);
    opacity: 0.7;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
  }
`;

export default function Loading() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column',
        height: '80vh',
        width: '100%',
        gap: 3
      }}
    >
      <Box
        component="img"
        src="/icon.svg"
        alt="Loading"
        sx={{
          width: 80,
          height: 80,
          animation: `${floatAndPulse} 2s ease-in-out infinite`,
        }}
      />
      <Typography 
        variant="button" 
        color="text.secondary" 
        sx={{ 
          letterSpacing: 2,
          animation: `${floatAndPulse} 2s ease-in-out infinite`,
          animationDelay: '0.1s' // slight delay for a nice effect
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
}
