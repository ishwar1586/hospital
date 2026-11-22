// src/master_modules/RadiologyManagement/components/Stats/RadiologyStats.jsx

import React from "react";
import {
  ClipboardList,
  Clock3,
  Scan,
  FileCheck2,
} from "lucide-react";

import "./RadiologyStats.css";

import { radiologyStatsConfig } from "../../config/radiologyStats.config";
import { radiologyStatsMock } from "../../mock/radiologyStats.mock";

const iconMap = {
  "clipboard-list": ClipboardList,
  clock: Clock3,
  scan: Scan,
  "file-check": FileCheck2,
};

const RadiologyStats = ({
  config = radiologyStatsConfig,
  stats = radiologyStatsMock,
}) => {
  if (!config || !stats) {
    return null;
  }

  const statValues = {
    "total-orders": stats.totalOrders,
    "pending-studies": stats.pendingStudies,
    "in-progress": stats.inProgress,
    "reports-ready": stats.reportsReady,
  };

  return (
    <section
      className="radiology-stats"
      aria-label={config.section.ariaLabel}
      data-columns={config.layout.columns}
      style={{ "--radiology-stats-gap": config.layout.gap }}
    >
      {config.cards.map((card) => {
        const Icon = iconMap[card.icon];
        const value = statValues[card.id];

        return (
          <article
            key={card.id}
            className="radiology-stats__card"
            data-color={card.color}
          >
            <div className="radiology-stats__card-top">
              <div className="radiology-stats__icon">
                {Icon && <Icon size={21} strokeWidth={1.8} />}
              </div>
            </div>

            <div className="radiology-stats__value">
              {value ?? "—"}
            </div>

            <h2 className="radiology-stats__label">
              {card.label}
            </h2>

            <p className="radiology-stats__description">
              {card.description}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default RadiologyStats;