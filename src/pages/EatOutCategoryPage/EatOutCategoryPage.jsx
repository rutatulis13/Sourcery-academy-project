import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import PageLayout from "components/PageLayout/PageLayout";

const EatOutCategoryPage = () => {
  const params = useParams();
  // TODO: check if params.categoryName is one of provided categories in categories api
  // and get a list of restaurants in this category, redirect to 404 otherwise
  return (
    <React.Fragment>
      <Breadcrumbs />
      <PageLayout
        title={`The best places for the ${params.categoryName.toUpperCase()}!`}
      ></PageLayout>
    </React.Fragment>
  );
};

export default EatOutCategoryPage;
