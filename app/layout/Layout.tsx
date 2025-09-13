import React from "react";
import Navigation from "../components/organisms/Navigation";
import Footer from "../components/organisms/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
