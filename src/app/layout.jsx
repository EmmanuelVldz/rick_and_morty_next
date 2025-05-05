"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={createTheme()}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
