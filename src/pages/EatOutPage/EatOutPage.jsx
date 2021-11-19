import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";

const EatOutPage = () => {
  return (
    <React.Fragment>
      <Breadcrumbs />
      <PageLayout title="Hungry? Find the best place!"></PageLayout>
    </React.Fragment>
  );
};

export default EatOutPage;
