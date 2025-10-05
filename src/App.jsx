// src/App.js
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load components to split bundles
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));

// Create router directly here
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="text-center p-8">Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "category/:categoryId",
        element: (
          <Suspense fallback={<div className="text-center p-8">Loading Category...</div>}>
            <CategoryPage />
          </Suspense>
        ),
      },
      {
        path: "product/:productId",
        element: (
          <Suspense fallback={<div className="text-center p-8">Loading Product...</div>}>
            <ProductDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
