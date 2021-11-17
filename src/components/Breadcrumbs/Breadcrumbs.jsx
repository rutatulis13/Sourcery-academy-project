import React, { useEffect, useState } from "react";
import "./Breadcrumbs.scss";
import { ReactComponent as ChevronRightSvg } from "assets/chevron-right.svg";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const routerLocation = useLocation();
  const [breadcrumbsArray, setBreadcrumbsArray] = useState([]);

  useEffect(() => {
    const splittedPathNames = routerLocation.pathname.split("/");
    let currentPath = "";
    let _breadcrumbsArray = [];
    for (const page of splittedPathNames) {
      if (page) {
        currentPath += "/" + page;
        _breadcrumbsArray = [
          ..._breadcrumbsArray,
          { name: page, path: currentPath },
        ];
      }
    }
    setBreadcrumbsArray(_breadcrumbsArray);
  }, [routerLocation]);

  return (
    <ul className="breadcrumbs-list">
      {breadcrumbsArray.map((page, index) => (
        <li className="breadcrumbs-list__li" key={page.name}>
          {index > 0 && <ChevronRightSvg />}
          <Link className="breadcrumbs-link" to={page.path}>
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
