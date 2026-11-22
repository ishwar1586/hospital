import "./PharmacyDashboardLayout.css";

/* ================= TOP STATS ================= */
import TopStatsSection from "./components/TopStatsSection";

/* ================= ANALYTICS ================= */
import TotalSalesCard from "./components/TotalSalesCard";
import StoreVisitorsCard from "./components/StoreVisitorsCard";

/* ================= NEW CARDS ================= */
import StoreStatsCard from "./components/StoreStatisticsCard";
import CustomersCard from "./components/NewCustomersCard";

/* ================= MOCK + CONFIG ================= */
import { pharmacyAnalyticsMock } from "@/master_modules/pharmacydashboard/components/pharmacyAnalytics.mock";
import { pharmacyAnalyticsConfig } from "@/master_modules/pharmacydashboard/components/pharmacyAnalytics.config";

import { dashboardMock } from "@/master_modules/pharmacydashboard/components/storeCustomers.mock";

const PharmacyDashboardLayout = () => {
  const analyticsData = pharmacyAnalyticsMock;
  const analyticsConfig = pharmacyAnalyticsConfig;

  return (
    <div className="pharmacy-dashboard-grid">

      {/* 🔝 TOP STATS */}
      <div className="pharmacy-top-stats">
        <TopStatsSection />
      </div>

      {/* 📊 ANALYTICS */}
      <div className="analytics-grid">
        <div className="analytics-card">
          <TotalSalesCard
            data={analyticsData.totalSales}
            config={analyticsConfig.totalSales}
          />
        </div>

        <div className="analytics-card">
          <StoreVisitorsCard
            data={analyticsData.visitors}
            config={analyticsConfig.visitors}
          />
        </div>
      </div>

      {/* 🔥 NEW SECTION (IMPORTANT) */}
      <div className="bottom-grid">

        <div className="bottom-card">
          <StoreStatsCard data={dashboardMock.stats} />
        </div>

        <div className="bottom-card">
          <CustomersCard data={dashboardMock.customers} />
        </div>

      </div>

    </div>
  );
};

export default PharmacyDashboardLayout;