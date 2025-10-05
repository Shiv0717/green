import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoriesMenu from "../components/CategoriesMenu";

const MainLayout = () => {
  // Manage menu open/close state here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (receives state via props) */}
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Categories Menu (controlled via props) */}
      <CategoriesMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
