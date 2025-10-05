import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Filter from "../components/Filter";
import CategoriesProduct from "../components/CategoriesProduct";
import { ChevronRight, Home } from "lucide-react";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Dynamic breadcrumb data based on current category
  const breadcrumbs = [
    { name: "HOME", href: "/", current: false },
    { name: "SHOP", href: "/categories", current: false },
    { name: "LIVING ROOM", href: "#", current: true },
  ];

  const categoryInfo = {
    name: "LIVING ROOM",
    description: "Sustainable furniture for modern living spaces",
    productCount: "24 PRODUCTS"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.name} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                  )}
                  <button
                    onClick={() => !breadcrumb.current && navigate(breadcrumb.href)}
                    className={`text-xs tracking-wide transition-colors ${
                      breadcrumb.current
                        ? "text-black font-normal"
                        : "text-gray-600 hover:text-black"
                    } ${!breadcrumb.current ? 'hover:underline' : ''}`}
                    disabled={breadcrumb.current}
                  >
                    {index === 0 ? (
                      <Home className="w-4 h-4" />
                    ) : (
                      breadcrumb.name
                    )}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-2xl lg:text-3xl font-normal tracking-tight mb-2">
                {categoryInfo.name}
              </h1>
              <p className="text-sm text-gray-600 tracking-wide">
                {categoryInfo.description}
              </p>
            </div>
            <div className="text-sm text-gray-600 tracking-wide">
              {categoryInfo.productCount}
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
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