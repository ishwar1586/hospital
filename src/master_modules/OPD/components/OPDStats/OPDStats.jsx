
import React from "react";

import { opdStatsConfig } from "../../config/opdStats.config";
import { opdStatsMock } from "../../mock/opdStats.mock";

import "./OPDStats.css";

const OPDStats = ({
  config = opdStatsConfig,
  data = opdStatsMock,
}) => {
  return (
    <section
      className="opd-stats"
      aria-label="OPD statistics"
    >
      <div className="opd-stats__grid">
        {config.map((item) => {
          const stat = data[item.dataKey];

          if (!stat) {
            return null;
          }

          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className={`opd-stats__card opd-stats__card--${item.tone}`}
            >
              <div className="opd-stats__icon-box" aria-hidden="true">
                <Icon className="opd-stats__icon" />
              </div>

              <div className="opd-stats__content">
                <p className="opd-stats__label">
                  {item.label}
                </p>

                <p className="opd-stats__value">
                  {stat.value}
                </p>

                {stat.footer && (
                  <p
                    className={`opd-stats__footer opd-stats__footer--${stat.footerType}`}
                  >
                    {stat.footerType === "positive" && (
                      <span
                        className="opd-stats__trend"
                        aria-hidden="true"
                      >
                        ↑
                      </span>
                    )}

                    {stat.footer}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OPDStats;
