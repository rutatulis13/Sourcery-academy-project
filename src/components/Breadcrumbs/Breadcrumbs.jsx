import React from "react";
import "./Breadcrumbs.scss";
import { ReactComponent as ChevronRightSvg } from "assets/chevron-right.svg";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__ul">
        <li className="breadcrumbs__ul__li">
          <a href="/">Dashboard</a>
        </li>
        <li className="breadcrumbs__ul__li">
          <ChevronRightSvg />
          <a href="/">Reservations</a>
        </li>
        <li className="breadcrumbs__ul__li">
          <ChevronRightSvg />
          <a href="/">Books</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
