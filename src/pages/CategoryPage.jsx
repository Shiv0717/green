import React from "react";
import Filter from "../components/Filter";
import CategoriesProduct from "../components/CategoriesProduct";
import { ChevronRight, Home } from "lucide-react";

const CategoryPage = () => {
  // Dummy breadcrumb data
  const breadcrumbs = [
    { name: "Home", href: "/", current: false },
    { name: "Categories", href: "/categories", current: false },
    { name: "Living Room", href: "#", current: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.name}>
                  <div className="flex items-center">
                    {index === 0 ? (
                      <Home className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                    <a
                      href={breadcrumb.href}
                      className={`ml-2 text-sm font-normal ${
                        breadcrumb.current
                          ? "text-black"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      aria-current={breadcrumb.current ? "page" : undefined}
                    >
                      {breadcrumb.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filter */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <Filter />
          </div>

          {/* Right Content - Products */}
          <div className="flex-1 min-w-0">
            <CategoriesProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;