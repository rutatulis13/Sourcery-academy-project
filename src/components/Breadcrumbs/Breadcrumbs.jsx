import React from "react";
import "./Breadcrumbs.scss";
import { ReactComponent as ChevronRightSvg } from "assets/chevron-right.svg";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__content">
        <ul className="breadcrumbs-list">
          <li className="breadcrumbs-list__li">
            <a href="/">Dashboard</a>
          </li>
          <li className="breadcrumbs-list__li">
            <ChevronRightSvg />
            <a href="/">Reservations</a>
          </li>
          <li className="breadcrumbs-list__li">
            <ChevronRightSvg />
            <a href="/">Books</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
