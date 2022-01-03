import React from "react";
import ReservationsSection from "features/ReservationsSection/ReservationsSection";
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
