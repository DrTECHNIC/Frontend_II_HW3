import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/dashboard/:category", element: <Category /> },
            { path: "/dashboard/product/:id", element: <Product /> },
        ],
    },
]);