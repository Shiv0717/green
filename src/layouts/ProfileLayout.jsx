import React from "react";
import Sidebar from "../components/profile/Sidebar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Sticky with precise positioning */}
          <div className="lg:w-64 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:z-40 lg:pt-4">
            <Sidebar />
          </div>

          {/* Main content */}
          <main className="flex-1 p-6 lg:pl-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;