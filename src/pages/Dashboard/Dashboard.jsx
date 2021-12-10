import React from "react";
import ReservationsSection from "components/ReservationsSection/ReservationsSection";
import HelloWidget from "features/HelloWidget/HelloWidget";
import EatOutSection from "features/EatOutSection/EatOutSection";

const Dashboard = () => {
  return (
    <>
      <HelloWidget />
      <ReservationsSection />
      <EatOutSection />
    </>
  );
};

export default Dashboard;
