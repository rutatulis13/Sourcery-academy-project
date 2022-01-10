import React from "react";
import EatOutSection from "features/EatOutSection/EatOutSection";
import HelloWidget from "features/HelloWidget/HelloWidget";
import NewsFeedSection from "features/NewsFeedSection/NewsFeedSection";

const Dashboard = () => {
  return (
    <>
      <HelloWidget />
      <EatOutSection />
      <NewsFeedSection />
    </>
  );
};

export default Dashboard;
