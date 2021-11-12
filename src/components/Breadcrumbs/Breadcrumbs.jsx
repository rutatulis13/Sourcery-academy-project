import React, { useEffect, useState } from "react";
import "./Breadcrumbs.scss";
import { ReactComponent as ChevronRightSvg } from "assets/chevron-right.svg";
import { useLocation } from "react-router";

const Breadcrumbs = () => {
  const routerLocation = useLocation();
  const [breadcrumbsArray, setBreadcrumbsArray] = useState(
    routerLocation.pathname.split("/")
  );

  useEffect(() => {
    setBreadcrumbsArray(routerLocation.pathname.split("/"));
  }, [routerLocation]);

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__content">
        <div>{JSON.stringify(routerLocation)}</div>
        <ul className="breadcrumbs-list">
          {breadcrumbsArray.map((v, i) => (
            <li className="breadcrumbs-list__li" key={v}>
              {i > 0 ? <ChevronRightSvg /> : ""}
              <a href="/">{i + " " + v}</a>
            </li>
          ))}
        </ul>
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
