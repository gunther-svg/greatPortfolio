import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import Navbar from "./components/Navbar";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: "#1976d2",
};

export const metadata: Metadata = {
  title: "greatPortfolio",
  description: "greatPortfolio - a nextjs portfolio web app.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "greatPortfolio",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon-240.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1976d2" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="greatGolley" />
        <link rel="apple-touch-icon" href="/icon-240.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Navbar />
          <main style={{ marginTop: '100px' }}>
            {children}
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
