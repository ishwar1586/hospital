
import React from "react";
import "./RoomAllotmentStats.css";

import StatCard from "./StatCard/StatCard";

import { roomAllotmentStatsConfig } from "../../config/roomAllotmentStats.config";

const RoomAllotmentStats = ({ stats = {} }) => {
  return (
    <div className="room-allotment-stats">

      {roomAllotmentStatsConfig.map((card) => {

        const value = stats[card.valueKey];

        const percentage = card.percentageKey
          ? stats[card.percentageKey]
          : undefined;

        return (
          <StatCard
            key={card.id}
            title={card.title}
            value={value}
            icon={card.icon}
            color={card.color}
            percentage={percentage}
            showPercentage={card.showPercentage}
          />
        );
      })}

    </div>
  );
};

export default RoomAllotmentStats;
