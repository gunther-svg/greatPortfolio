"use client";

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from '@mui/material';

const rates = [
  { service: 'I design everything', rate: '$10/hour', downPayment: '$500' },
  { service: 'I design, you watch', rate: '$15/hour', downPayment: '$750' },
  { service: 'I design, you advise', rate: '$20/hour', downPayment: '$750' }, // Adjusted duplicate 'watch' to 'advise' for progression
  { service: 'I design, you help', rate: '$25/hour', downPayment: '$1000' },
  { service: 'You design, I help', rate: '$100/hour', downPayment: '$5000' },
  { service: 'You design, I watch', rate: '$150/hour', downPayment: '$5000' },
  { service: 'You design, I advise', rate: '$200/hour', downPayment: '$5000' },
  { service: 'You design everything', rate: '$200/hour', downPayment: '$10000' },
];

export default function CommissionsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
          Commissions
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price List & Service Models
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {rates.map((row, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={row.service}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                // Distinct styling for the "You design" tiers
                backgroundColor: index >= 4 ? 'action.hover' : 'background.paper',
              }}
              elevation={2}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', textTransform: 'capitalize', mb: 2 }}>
                  {row.service}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'medium', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <span>Rate:</span>
                    <span>{row.rate}</span>
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Down Payment:</span>
                    <span>{row.downPayment}</span>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
          Send an email (use the service level as subject) with the details of your project to get started.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="mailto:greatgodsongolley@gmail.com" // Replace with your actual email
          sx={{ fontWeight: 'bold', px: 4, py: 1.5 }}
        >
          Email Me
        </Button>
      </Box>
    </Container>
  );
}
