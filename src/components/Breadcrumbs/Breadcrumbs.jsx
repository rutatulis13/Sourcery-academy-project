import React, { useEffect, useState } from "react";
import "./Breadcrumbs.scss";
import { ReactComponent as ChevronRightSvg } from "assets/chevron-right.svg";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const routerLocation = useLocation();
  const [breadcrumbsArray, setBreadcrumbsArray] = useState([]);

  useEffect(() => {
    let splittedPathNames = routerLocation.pathname.split("/");
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
    <div className="breadcrumbs">
      <ul className="breadcrumbs-list">
        {breadcrumbsArray.map((v, i) => (
          <li className="breadcrumbs-list__li" key={v.name}>
            {i > 0 && <ChevronRightSvg />}
            <Link className="breadcrumbs-link" to={v.path}>
              {v.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
