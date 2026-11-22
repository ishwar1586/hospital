
// src/master_modules/StaffManagement/components/StaffStats/StaffStats.jsx

import React from "react";
import {
  Box,
  Skeleton,
  Typography,
} from "@mui/material";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

import { staffStatsConfig } from "../../config/staffStats.config";

import "./StaffStats.css";

const iconMap = {
  groups: GroupsOutlinedIcon,
  "medical-services": MedicalServicesOutlinedIcon,
  vaccines: VaccinesOutlinedIcon,
  "business-center": BusinessCenterOutlinedIcon,
  "support-agent": SupportAgentOutlinedIcon,
};

const StaffStats = ({
  stats = {},
  loading = false,
  onCardClick,
  activeCategory = "all",
}) => {
  const cards = [...staffStatsConfig]
    .filter((card) => card.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  if (!cards.length) {
    return null;
  }

  const handleCardKeyDown = (event, card) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onCardClick?.(card.category, card);
    }
  };

  return (
    <section
      className="staff-stats"
      aria-label="Staff statistics"
    >
      <div className="staff-stats__grid">
        {cards.map((card) => {
          const IconComponent = iconMap[card.icon];
          const TrendIcon =
            card.trendDirection === "down"
              ? TrendingDownRoundedIcon
              : TrendingUpRoundedIcon;

          const value = stats[card.valueKey] ?? card.value ?? 0;
          const isActive = activeCategory === card.category;
          const isClickable = typeof onCardClick === "function";

          return (
            <Box
              key={card.id}
              className={[
                "staff-stats__card",
                `staff-stats__card--${card.color || "blue"}`,
                isActive ? "staff-stats__card--active" : "",
                isClickable ? "staff-stats__card--clickable" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={
                isClickable
                  ? () => onCardClick(card.category, card)
                  : undefined
              }
              onKeyDown={
                isClickable
                  ? (event) => handleCardKeyDown(event, card)
                  : undefined
              }
              role={isClickable ? "button" : undefined}
              tabIndex={isClickable ? 0 : undefined}
              aria-pressed={isClickable ? isActive : undefined}
            >
              <div className="staff-stats__card-main">
                {IconComponent && (
                  <div className="staff-stats__icon">
                    <IconComponent />
                  </div>
                )}

                <div className="staff-stats__card-content">
                  <Typography
                    component="h3"
                    className="staff-stats__card-title"
                  >
                    {card.title}
                  </Typography>

                  {loading ? (
                    <Skeleton
                      variant="text"
                      width={76}
                      height={35}
                      className="staff-stats__value-skeleton"
                    />
                  ) : (
                    <Typography
                      component="p"
                      className="staff-stats__card-value"
                    >
                      {Number(value).toLocaleString("en-IN")}
                    </Typography>
                  )}
                </div>
              </div>

              {!loading && card.showTrend && (
                <div
                  className={[
                    "staff-stats__trend",
                    card.trendDirection === "down"
                      ? "staff-stats__trend--down"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <TrendIcon className="staff-stats__trend-icon" />

                  <span className="staff-stats__trend-value">
                    {card.trendValue ?? 0}
                  </span>

                  <span className="staff-stats__trend-label">
                    {card.trendLabel || "from last month"}
                  </span>
                </div>
              )}
            </Box>
          );
        })}
      </div>
    </section>
  );
};

export default StaffStats;
