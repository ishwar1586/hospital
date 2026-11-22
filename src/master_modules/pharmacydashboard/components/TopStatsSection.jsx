
// src/master_modules/pharmacydashboard/components/TopStatsSection.jsx

import { useState, useEffect } from "react";
import  TopStatsCard from     "@/master_modules/pharmacydashboard/components/TopStatsCard";
import  { pharmacyTopStatsConfig } from  "@/master_modules/pharmacydashboard/components/pharmacyTopStats.config";
import  { pharmacyTopStatsMock } from  "@/master_modules/pharmacydashboard/components/pharmacyTopStats.mock";
import "@/master_modules/pharmacydashboard/components/TopStatsCard.css";


const TopStatsSection = () => {
  const [stats, setStats] = useState(pharmacyTopStatsMock);

  /* 🔥 Fake real-time update */
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        sales: {
          ...prev.sales,
          value: prev.sales.value + Math.floor(Math.random() * 50),
        },
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-stats-grid">
      {pharmacyTopStatsConfig.map((item) => (
        <TopStatsCard
          key={item.key}
          label={item.label}
          data={stats[item.key]}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default TopStatsSection;