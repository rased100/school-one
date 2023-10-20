import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import ErrorPage from "./ErrorPage";
import About from "../About/About";
import { NavbarDefault } from "../nav/Navigation";
import Layout from "../components/Layout";
import Login from "../auth/Login/Login";
import ImageGallery from "../components/PhotoGallery/ImageGallery";
import ContactUs from "../ContactUs/ContactUs";
import LoginTwo from "../auth/Login/LoginTwo";
import Dashboard from "../dashboard/dashboardPages/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import DbNoticeBoard from "../dashboard/dashboardPages/Notice/DbNoticeBoard";
import DbResults from "../dashboard/dashboardPages/Results/DbResults";
import DbRoutine from "../dashboard/dashboardPages/Routine/DbRoutine";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  // {
  //   path: "/login",
  //   element: (
  //     <Layout>
  //       <Login />
  //     </Layout>
  //   ),
  //   errorElement: (
  //     <Layout>
  //       <ErrorPage />
  //     </Layout>
  //   ),
  // },
  {
    path: "/login",
    element: (
      <Layout>
        <LoginTwo />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <Layout>
  //       <Dashboard />
  //     </Layout>
  //   ),
  //   errorElement: (
  //     <Layout>
  //       <ErrorPage />
  //     </Layout>
  //   ),
  // },
  {
    path: "/imagegallery",
    element: (
      <Layout>
        <ImageGallery />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/contactUs",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },

  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "DbNoticeBoard",
        element: <DbNoticeBoard />,
      },
      {
        path: "DbResults",
        element: <DbResults />,
      },
      {
        path: "DbRoutine",
        element: <DbRoutine />,
      },
    ],
  },
]);

export default router;
