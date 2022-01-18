import React from "react";
import EatOutSection from "features/EatOutSection/EatOutSection";
import ReservationsSection from "features/ReservationsSection/ReservationsSection";
import HelloWidget from "features/HelloWidget/HelloWidget";
import NewsFeedSection from "features/NewsFeedSection/NewsFeedSection";
import WeatherWidget from "features/WeatherWidget/WeatherWidget";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <HelloWidget />
        <WeatherWidget />
      </div>
      <ReservationsSection />
      <EatOutSection />
      <NewsFeedSection />
    </>
  );
};

export default Dashboard;
