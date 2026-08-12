import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/main/HomePage";
import Contact from "../pages/main/Contact";
import About from "../pages/main/About";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/auth/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/categories/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Categories from "../pages/dashboard/categories/Categories";
import CreateCategory from "../pages/dashboard/categories/CreateCategory";
import ShowCategory from "../pages/dashboard/categories/ShowCategory";
import UpdateCategory from "../pages/dashboard/categories/UpdateCategory";
import Products from "../pages/dashboard/products/Products";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
        ],
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/categories",
            element: <Categories />,
          },
          {
            path: "/create-category",
            element: <CreateCategory />,
          },
          {
            path: "/show-category/:id",
            element: <ShowCategory />,
          },
          {
            path: "/update-category/:id",
            element: <UpdateCategory />,
          },
          {
            path: "/products",
            element: <Products />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
