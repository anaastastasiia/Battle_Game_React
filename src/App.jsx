import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AccountsBattle from './pages/AccountsBattle';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/battle",
        element: <AccountsBattle />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
