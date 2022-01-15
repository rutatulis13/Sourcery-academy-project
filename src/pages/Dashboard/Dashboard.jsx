import React from "react";
import EatOutSection from "features/EatOutSection/EatOutSection";
import HelloWidget from "features/HelloWidget/HelloWidget";
import NewsFeedSection from "features/NewsFeedSection/NewsFeedSection";
import MasonryLayout from "components/MasonryLayout/MasonryLayout";

const Dashboard = () => {
  return (
    <>
      <HelloWidget />
      <EatOutSection />
      <MasonryLayout>
        <NewsFeedSection />
      </MasonryLayout>
    </>
  );
};

export default Dashboard;
