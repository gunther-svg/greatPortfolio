"use client";
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Commissions', path: '/commissions' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Print', path: '#', action: 'print' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Register Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(
          function(registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function(err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile Drawer Content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <img src="/icon.svg" alt="greatGolley" />
      <Typography variant="h6" sx={{ my: 2 }}>
        greatPortfolio
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.action === 'print' ? (
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => window.print()}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ) : item.external ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </a>
            ) : (
              <Link href={item.path} passHref style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </Link>
            )}
          </ListItem>
        ))}
        {deferredPrompt && (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'rgba(25, 118, 210, 0.1)' }} onClick={handleInstallClick}>
              <ListItemText primary="Install App" sx={{ color: '#1976d2', fontWeight: 'bold' }} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0f172a' }}>
        <Toolbar>
          {/* Mobile Hamburger Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo/Title */}
          <img src="/icon.svg" alt="greatPortfolio" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            greatPortfolio
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) =>
              item.action === 'print' ? (
                <Button key={item.label} sx={{ color: '#fff' }} onClick={() => window.print()}>
                  {item.label}
                </Button>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button sx={{ color: '#fff' }}>
                    {item.label}
                  </Button>
                </a>
              ) : (
                <Link key={item.label} href={item.path} passHref>
                  <Button sx={{ color: '#fff' }}>
                    {item.label}
                  </Button>
                </Link>
              )
            )}
            {deferredPrompt && (
              <Button 
                variant="outlined" 
                sx={{ color: '#fff', borderColor: '#fff', ml: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: '#fff' } }} 
                onClick={handleInstallClick}
              >
                Install App
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Component */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}