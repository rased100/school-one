import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import ErrorPage from "./ErrorPage";
import About from "../About/About";
import { NavbarDefault } from "../nav/Navigation";
import Layout from "../components/Layout";
import Login from "../auth/Login/Login";
import Dashboard from "../dashboard/Dashboard";
import ImageGallery from "../components/PhotoGallery/ImageGallery";
import ContactUs from "../ContactUs/ContactUs";

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
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
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
]);

export default router;
