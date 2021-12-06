import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ReservationsSection from "components/ReservationsSection/ReservationsSection";
// import WeatherWidget from "features/WeatherWidget/WeatherWidget";
import HelloWidget from "features/HelloWidget/HelloWidget";

const Dashboard = () => {
  return (
    <PageLayout>
      <HelloWidget />
      {/* <WeatherWidget /> */}
      <ReservationsSection />
    </PageLayout>
  );
};

export default Dashboard;
