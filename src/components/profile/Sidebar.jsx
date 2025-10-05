import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { User, ShoppingBag, MapPin, Settings } from "lucide-react";

const links = [
  { name: "PROFILE", path: "overview", icon: User },
  { name: "ORDERS", path: "orders", icon: ShoppingBag },
  { name: "ADDRESS", path: "address", icon: MapPin },
  { name: "SETTINGS", path: "settings", icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-white border mt-4 border-gray-100">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-normal tracking-wide uppercase">ACCOUNT</h2>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm tracking-wide transition-colors ${
                  isActive 
                    ? "bg-black text-white font-normal" 
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40">
        <div className="flex justify-around items-center">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname.includes(link.path);
            
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-3 px-2 flex-1 min-w-0 transition-colors ${
                    isActive 
                      ? "text-black" 
                      : "text-gray-400"
                  }`
                }
              >
                <Icon 
                  size={20} 
                  className={`mb-1 ${isActive ? 'text-black' : 'text-gray-400'}`}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span className="text-xs tracking-wide truncate max-w-full">
                  {link.name}
                </span>
                {isActive && (
                  <div className="w-1 h-1 bg-black rounded-full mt-1"></div>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

     
    </>
  );
};

export default Sidebar;