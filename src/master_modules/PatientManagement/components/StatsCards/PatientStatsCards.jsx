import React from "react";

import PatientStatCard from "./PatientStatCard";
import { statsCards } from "../../config/statsCards";

import "./PatientStatsCards.css";

const PatientStatsCards = () => {
  return (
    <section className="patient-stats-cards">
      {statsCards.map((card) => (
        <PatientStatCard
          key={card.id}
          title={card.title}
          value={card.value}
          change={card.change}
          changeType={card.changeType}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </section>
  );
};

export default PatientStatsCards;