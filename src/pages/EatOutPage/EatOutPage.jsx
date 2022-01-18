import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import EatOutCategorySection from "components/EatOutCategories/EatOutCategorySection";
import EatOutNearYou from "components/EatOutNearYou/EatOutNearYou";

const EatOutPage = () => {
  return (
    <React.Fragment>
      <Breadcrumbs />
      <PageLayout title="Hungry? Find the best place!">
        <EatOutCategorySection />
        <EatOutNearYou />
      </PageLayout>
    </React.Fragment>
  );
};

export default EatOutPage;
