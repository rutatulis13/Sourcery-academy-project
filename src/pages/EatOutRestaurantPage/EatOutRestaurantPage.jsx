import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";

const EatOutRestaurantPage = () => {
  // eslint-disable-next-line no-unused-vars
  const params = useParams();
  // TODO: check if params.restaurantId exists in restaurants api and then render the page, redirect to 404 otherwise.
  return (
    <React.Fragment>
      <Breadcrumbs />
    </React.Fragment>
  );
};

export default EatOutRestaurantPage;
