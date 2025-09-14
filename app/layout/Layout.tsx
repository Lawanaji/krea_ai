"use client";

import React from "react";
import Navigation from "../components/organisms/Navigation";
import Footer from "../components/organisms/Footer";
import { ThemeProvider } from "../context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
