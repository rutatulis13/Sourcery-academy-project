import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import Grid from "components/Grid/Grid";
import ReservationsSection from "components/ReservationsSection/ReservationsSection";
import DoorImage from "../../assets/ReservationsSection/Door.svg";
import BookImage from "../../assets/ReservationsSection/Book.svg";
import DeviceImage from "../../assets/ReservationsSection/Device.svg";
import HelloWidget from "features/HelloWidget/HelloWidget";

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard">
      <HelloWidget />
      <Grid breakpointCols={[1, 1, 2, 3]}>
        <div className="dashboard__reservations-section">
          <ReservationsSection
            firstElement={true}
            name={"door"}
            imagePath={DoorImage}
            headerMessage={"Meeting rooms"}
            reservedItems={2}
          />
        </div>
        <div>
          <ReservationsSection
            name={"book"}
            imagePath={BookImage}
            headerMessage={"Books"}
            reservedItems={2}
          />
        </div>
        <div>
          <ReservationsSection
            name={"device"}
            imagePath={DeviceImage}
            headerMessage={"Device"}
            reservedItems={2}
          />
        </div>
      </Grid>
    </PageLayout>
  );
};

export default Dashboard;
