import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import HelloWidget from "features/HelloWidget/HelloWidget";

const Dashboard = () => {
  return (
    <div>
      <PageLayout title="Dashboard"></PageLayout>
      <HelloWidget></HelloWidget>
    </div>
  );
};

export default Dashboard;
