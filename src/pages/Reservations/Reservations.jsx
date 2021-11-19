import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import React from "react";
import { Outlet } from "react-router";

const Reservations = () => {
  return (
    <React.Fragment>
      <Breadcrumbs />
      <Outlet />
    </React.Fragment>
  );
};

export default Reservations;
