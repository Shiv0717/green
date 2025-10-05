import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoriesMenu from "../components/CategoriesMenu";
import Lenis from "@studio-freight/lenis";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Categories Menu */}
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
