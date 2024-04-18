import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AccountsBattle from './pages/AccountsBattle';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import Container from '@mui/material/Container';
import RepositoreDetailsPage from './pages/RepositoreDetailsPage';

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
      },
      {
        path: "/repository/:id",
        element: <RepositoreDetailsPage />
      }
    ]
  }
]);

export default function App() {
  return <Container maxWidth="900px"><RouterProvider router={router} /></Container>
}
