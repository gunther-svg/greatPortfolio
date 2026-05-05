"use client";

import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid, // MUI v6 recommends Grid2 for the new layout system
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  Divider
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Fix 1: Corrected naming
import Link from 'next/link';
import Loading from './loading'


// Define the shape of a GitHub Repo object
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

export default function PortfolioPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetching for github projects with a sort by "recently updated" to keep it fresh. replace the fetch api url with yours
        const response = await fetch('');
        const data = await response.json();

        // Filtering out forks to show only your original work
        if (Array.isArray(data)) {
          const originalRepos = data.filter((repo: any) => !repo.fork);
          setRepos(originalRepos);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>

      <Box sx={{ mb: 10, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          Who am I? && What do I do?
        </Typography>


        <Typography
          variant="h5"
          component="h3"
          color="text.secondary"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          I’m a Full-Stack Developer and Creative Builder. I bridge the gap
          between complex backend logic and immersive frontend experiences—specializing
          in Next.js ecosystems, real-time gaming architecture, and multimedia production.
          If it can be imagined, I can build the system to run it.
        </Typography>
      </Box>

      <Divider sx={{ mb: 8, opacity: 0.5 }} />
      <Typography variant="h5"
        component="h5"
        color="text.primary"
        sx={{
          maxWidth: '800px',
          mx: 'auto',
          lineHeight: 1.6,
          fontWeight: 400
        }}>
        01100111 01110101 01101110 01110100 01101000 01100101 01110010 00100000 01101001 01110011 00100000 01100111 01110010 01100101 01100001 01110100
      </Typography>
      <Divider sx={{ mt: 6, mb: 8, opacity: 0.5 }} />

      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Project Gallery
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A real-time feed of my public work and open-source contributions.
        </Typography>

      </Box>

      {/* Fix 2: 'container' is used without 'item' props on children */}
      <Grid container spacing={4}>
        {repos.map((repo) => (
          /* Fix 3: Size prop uses object notation and 'item' attribute is removed */
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={repo.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)', boxShadow: 6 }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" component="div" sx={{ textTransform: 'capitalize', fontWeight: 'medium' }}>
                    {repo.name.replace(/-/g, ' ')}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarBorderIcon fontSize="small" sx={{ mr: 0.5, color: 'gold' }} />
                    <Typography variant="body2">{repo.stargazers_count}</Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '4.5em', overflow: 'hidden' }}>
                  {repo.description || "No description provided. View the repository for more details."}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {repo.language && (
                    <Chip label={repo.language} size="small" color="primary" variant="outlined" />
                  )}
                  {repo.topics?.slice(0, 2).map((topic) => (
                    <Chip key={topic} label={topic} size="small" variant="filled" />
                  ))}
                </Box>
              </CardContent>

              <Divider />

              <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={repo.html_url}
                  target="_blank"
                  component="a"
                >
                  Code
                </Button>
                {repo.homepage && (
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={repo.homepage}
                    target="_blank"
                    component="a"
                  >
                    Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}