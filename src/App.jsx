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

// Error Boundary for lazy-loaded components
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8 text-red-500">
          Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

// Helper to wrap lazy components
const withSuspense = (Component, fallbackText) => (
  <ErrorBoundary>
    <Suspense fallback={<div className="text-center p-8">{fallbackText}</div>}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

// Create router
const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(MainLayout, "Loading Layout..."),
    children: [
      { index: true, element: withSuspense(Home, "Loading Home...") },
      { path: "category/:categoryId", element: withSuspense(CategoryPage, "Loading Category...") },
      { path: "product/:productId", element: withSuspense(ProductDetailsPage, "Loading Product...") },
      { path: "cart", element: withSuspense(Cart, "Loading Cart...") },
      { path: "checkout", element: withSuspense(Checkout, "Loading Checkout...") },
      { path: "success", element: withSuspense(OrderSuccess, "Loading Success...") },

      // Profile Section
      {
        path: "profile",
        element: withSuspense(ProfileLayout, "Loading Profile Layout..."),
        children: [
          { index: true, element: withSuspense(ProfileOverview, "Loading Overview...") },
          { path: "overview", element: withSuspense(ProfileOverview, "Loading Overview...") },
          { path: "orders", element: withSuspense(ProfileOrders, "Loading Orders...") },
          { path: "details", element: withSuspense(OrderDetails, "Loading Details...") },
          { path: "address", element: withSuspense(ProfileAddress, "Loading Address...") },
          { path: "settings", element: withSuspense(ProfileSettings, "Loading Settings...") },
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
