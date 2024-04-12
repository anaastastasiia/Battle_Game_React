import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default Navigation = () => {
  const nav = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "battle",
      element: "Battle",
    }
  ];

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {nav.map((item, index) => (
        <Link underline="hover" color="inherit" href={item.path} key={index}>
        {item.element}
      </Link>
      ))}
    </Breadcrumbs>
  );
}