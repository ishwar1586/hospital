import React from "react";
import "./DepartmentStats.css";

import { departmentStatsConfig } from "../../config/departmentStats.config";
import { departmentStatsMock } from "../../mock/departmentStats.mock";

const DepartmentStats = ({ stats = departmentStatsMock }) => {
  return (
    <section className="department-stats">
      <div className="department-stats__grid">
        {departmentStatsConfig.map((item) => {
          const StatIcon = item.icon;

          return (
            <article
              key={item.id}
              className={`department-stats__card department-stats__card--${item.color}`}
            >
              <div className="department-stats__icon">
                <StatIcon />
              </div>

              <div className="department-stats__content">
                <p className="department-stats__label">
                  {item.label}
                </p>

                <h3 className="department-stats__value">
                  {stats?.[item.id] ?? 0}
                </h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default DepartmentStats;