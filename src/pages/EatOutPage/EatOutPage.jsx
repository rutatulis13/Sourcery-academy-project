import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import EatOutCategories from "components/EatOutCategories/EatOutCategories";

const EatOutPage = () => {
  return (
    <div>
      <PageLayout title="Hungry? Find the best place!" />
      <EatOutCategories />
    </div>
  );
};

export default EatOutPage;
