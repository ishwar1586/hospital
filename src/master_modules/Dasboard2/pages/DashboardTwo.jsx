import DashboardOverviewCards
from "../components/DashboardOverviewCards";


import StatsOverviewCards
from "../components/StatsOverviewCards";

const DashboardTwo = () => {

  return (
    <div>

      {/* <DashboardOverviewCards /> */}


      {/* TOP CARDS */}
      <DashboardOverviewCards />

      {/* SECOND SECTION */}
      <StatsOverviewCards />

    </div>
  );
};

export default DashboardTwo;