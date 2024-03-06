// import React from "react";
// import { Routes, Route, Outlet } from "react-router-dom";
// import SplashScreen from "./pages/splash/Index";
// export default function App() {
//   return <div>test</div>;
// }

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

/* imports pages */
import Layout from "./layouts/Main.jsx";
import SplashPage from "./pages/splash/Index";
import BoardingPage from "./pages/Boarding/Index";
import LoginPage from "./pages/auth/Login";
import VerifyPage from "./pages/loading/Index";
import OTPage from "./pages/OTP/Index";
import SuccessPage from "./pages/home/Success";
import HomePage from "./pages/home/Index";
import PaymentSuccess from "./pages/home/Success";

const ProtectedRoute = ({
  element: Element,
  isAuthenticated,
  fallbackPath,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route element={<Element />} {...rest} />
  ) : (
    <Navigate to={fallbackPath} />
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Set initial authentication status

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <SplashPage />,
        },
        {
          path: "/boarding",
          element: <BoardingPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        // {
        //   path: "/verify",
        //   element: <VerifyPage />,
        // },
        {
          path: "/verify-otp",
          element: <OTPage />,
        },
        {
          path: "/success",
          element: <SuccessPage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/payment-success",
          element: <PaymentSuccess />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
