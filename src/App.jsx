// src/App.js
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderDetails from "./pages/profile/OrderDetails";
import OrderSuccess from "./pages/OrderSuccess";

// Lazy load components
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));

// Profile pages
const ProfileLayout = lazy(() => import("./layouts/ProfileLayout"));
const ProfileOverview = lazy(() => import("./pages/profile/ProfileOverview"));
const ProfileOrders = lazy(() => import("./pages/profile/ProfileOrders"));
const ProfileAddress = lazy(() => import("./pages/profile/ProfileAddress"));
const ProfileSettings = lazy(() => import("./pages/profile/ProfileSettings"));

// Create router
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
        ) 
      },
      { 
        path: "category/:categoryId", 
        element: (
          <Suspense fallback={<div className="text-center p-8">Loading Category...</div>}>
            <CategoryPage />
          </Suspense>
        ) 
      },
      { 
        path: "product/:productId", 
        element: (
          <Suspense fallback={<div className="text-center p-8">Loading Product...</div>}>
            <ProductDetailsPage />
          </Suspense>
        ) 
      },
     {
      path: "cart", 
      element: (
        <Suspense fallback={<div className="text-center p-8">Loading Product...</div>}>
         <Cart/>
        </Suspense>
      ) 
    },
    {
      path: "checkout", 
      element: (
        <Suspense fallback={<div className="text-center p-8">Loading Product...</div>}>
        <Checkout/>
        </Suspense>
      ) 
    },
    {
      path: "success", 
      element: (
        <Suspense fallback={<div className="text-center p-8">Loading Product...</div>}>
       <OrderSuccess/>
        </Suspense>
      ) 
    },


      // Profile section
      {
        path: "profile",
        element: (
          <Suspense fallback={<div className="text-center p-8">Loading Profile...</div>}>
            <ProfileLayout />
          </Suspense>
        ),
        children: [
          { index: true, element: <ProfileOverview /> }, // default
          { path: "overview", element: <ProfileOverview /> },
          { path: "orders", element: <ProfileOrders /> },
          { path: "details", element: <OrderDetails/> },
          { path: "address", element: <ProfileAddress /> },
          { path: "settings", element: <ProfileSettings /> },
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
