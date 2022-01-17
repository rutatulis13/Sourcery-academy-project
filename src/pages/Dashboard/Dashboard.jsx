import React from "react";
import EatOutSection from "features/EatOutSection/EatOutSection";
import ReservationsSection from "features/ReservationsSection/ReservationsSection";
import HelloWidget from "features/HelloWidget/HelloWidget";
import NewsFeedSection from "features/NewsFeedSection/NewsFeedSection";

const Dashboard = () => {
  return (
    <>
      <HelloWidget />
      <ReservationsSection />
      <EatOutSection />
      <NewsFeedSection />
    </>
  );
};

export default Dashboard;
