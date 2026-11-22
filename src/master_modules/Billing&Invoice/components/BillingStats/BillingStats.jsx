import React from "react";
import BillingStatCard from "./BillingStatCard";

import "./BillingStats.css";

const BillingStats = ({
  data = [],
  config = [],
}) => {
  const configMap = config.reduce((accumulator, item) => {
    accumulator[item.id] = item;
    return accumulator;
  }, {});

  if (!data.length) {
    return null;
  }

  return (
    <section className="billing-stats">
      <div className="billing-stats__grid">
        {data.map((stat) => {
          const statConfig = configMap[stat.id];

          if (!statConfig) {
            return null;
          }

          return (
            <BillingStatCard
              key={stat.id}
              stat={stat}
              config={statConfig}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BillingStats;