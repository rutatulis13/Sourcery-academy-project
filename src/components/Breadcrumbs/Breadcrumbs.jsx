import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { ReactComponent as ChevronRightSvg } from "assets/chevron-right.svg";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ dark, lastLinkText, maxLevel }) => {
  const routerLocation = useLocation();
  const [breadcrumbsArray, setBreadcrumbsArray] = useState([]);

  useEffect(() => {
    const splittedPathNames = routerLocation.pathname.split("/");
    let currentPath = "";
    let _breadcrumbsArray = [{ name: "dashboard", path: "/" }];
    for (const page of splittedPathNames) {
      if (page) {
        currentPath += "/" + page;
        _breadcrumbsArray = [
          ..._breadcrumbsArray,
          { name: page, path: currentPath },
        ];
      }
    }
    if (maxLevel) {
      if (maxLevel > 2 && _breadcrumbsArray.length > maxLevel) {
        const __breadcrumbsArray = _breadcrumbsArray.slice(0, maxLevel - 1);
        __breadcrumbsArray.push(
          _breadcrumbsArray[_breadcrumbsArray.length - 1]
        );
        _breadcrumbsArray = __breadcrumbsArray;
      } else {
        _breadcrumbsArray = _breadcrumbsArray.slice(0, maxLevel);
      }
    }
    if (lastLinkText) {
      _breadcrumbsArray[_breadcrumbsArray.length - 1].name = lastLinkText;
    }
    setBreadcrumbsArray(_breadcrumbsArray);
  }, [routerLocation, lastLinkText, maxLevel]);

  return (
    <nav>
      <ul className="breadcrumbs-list" aria-label="breadcrumbs navigation">
        {breadcrumbsArray.map((page, index) => (
          <li className="breadcrumbs-list__item" key={`${page.name}_${index}`}>
            {index > 0 && <ChevronRightSvg />}
            <Link
              className={classNames("breadcrumbs-list__item-link", {
                "breadcrumbs-list__item-link--dark": dark,
              })}
              to={page.path}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  dark: PropTypes.bool,
  lastLinkText: PropTypes.string,
  maxLevel: PropTypes.number,
};

export default Breadcrumbs;
