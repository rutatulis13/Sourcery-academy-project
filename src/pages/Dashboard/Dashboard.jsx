import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ReservationsSection from "components/ReservationsSection/ReservationsSection";
import HelloWidget from "features/HelloWidget/HelloWidget";

const Dashboard = () => {
  return (
    <PageLayout>
      <HelloWidget />
      <ReservationsSection />
    </PageLayout>
  );
};

export default Dashboard;
