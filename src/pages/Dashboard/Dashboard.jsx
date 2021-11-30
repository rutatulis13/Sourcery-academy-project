import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import EatOutSection from "features/EatOutSection/EatOutSection";
import HelloWidget from "features/HelloWidget/HelloWidget";

const Dashboard = () => {
  return (
    <PageLayout>
      <HelloWidget />
      <EatOutSection />
    </PageLayout>
  );
};

export default Dashboard;
