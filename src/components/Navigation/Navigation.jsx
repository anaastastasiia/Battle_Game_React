import React from "react";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import SportsMmaIcon from '@mui/icons-material/SportsMma';

import NavigationItem from "../NavigationItem";

import "./style.scss";

export default Navigation = () => {
  const nav = [
    {
      path: "/",
      element: <NavigationItem><HomeIcon /> Home</NavigationItem>,
    },
    {
      path: "battle",
      element: <NavigationItem><SportsMmaIcon /> Battle</NavigationItem>,
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