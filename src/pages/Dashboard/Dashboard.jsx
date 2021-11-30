import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import HelloWidget from "features/HelloWidget/HelloWidget";

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard">
      <HelloWidget />
    </PageLayout>
  );
};

export default Dashboard;
