// src/App.js
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

// Create router directly here
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,        // layout containing <Outlet />
    children: [
      { index: true, element: <Home /> },    
      { path: "category/:categoryId", element: <CategoryPage /> },
      { path: "product/:productId", element: <ProductDetailsPage /> },
      
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
