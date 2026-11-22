import React from "react";

import BedIcon from "@mui/icons-material/Bed";
import KeyIcon from "@mui/icons-material/Key";
import BuildIcon from "@mui/icons-material/Build";

import { BED_VIEW_SUMMARY_CONFIG } from "../../config/bedViewConfig";

import "./BedViewStats.css";


const BedViewStats = ({
  summary = {},
}) => {

  const totalBeds =
    Number(summary?.totalBeds) || 0;

  const occupiedBeds =
    Number(summary?.occupiedBeds) || 0;

  const availableBeds =
    Number(summary?.availableBeds) || 0;

  const reservedBeds =
    Number(summary?.reservedBeds) || 0;

  const maintenanceBeds =
    Number(summary?.maintenanceBeds) || 0;


  const occupiedPercentage =
    totalBeds > 0
      ? Math.round((occupiedBeds / totalBeds) * 100)
      : 0;


  const availablePercentage =
    totalBeds > 0
      ? Math.round((availableBeds / totalBeds) * 100)
      : 0;


  const getIcon = (id) => {

    switch (id) {

      case "total-beds":
        return <BedIcon />;

      case "occupied-beds":
        return <BedIcon />;

      case "available-beds":
        return <BedIcon />;

      case "reserved-beds":
        return <KeyIcon />;

      case "maintenance-beds":
        return <BuildIcon />;

      case "blocked-beds":
        return <BuildIcon />;

      default:
        return <BedIcon />;
    }
  };


  const getCardData = (card) => {

    switch (card.id) {

      case "total-beds":
        return {
          description: "Across all wards",
          iconClass: "total",
        };

      case "occupied-beds":
        return {
          description: `${occupiedPercentage}% occupancy`,
          progress: occupiedPercentage,
          iconClass: "occupied",
        };

      case "available-beds":
        return {
          description: `${availablePercentage}% available`,
          progress: availablePercentage,
          iconClass: "available",
        };

      case "reserved-beds":
        return {
          description: "For admitted patients",
          iconClass: "reserved",
        };

      case "maintenance-beds":
        return {
          description: "Currently unavailable",
          iconClass: "maintenance",
        };

      case "blocked-beds":
        return {
          description: "Currently unavailable",
          iconClass: "blocked",
        };

      default:
        return {
          description: "",
          iconClass: "default",
        };
    }
  };


  return (
    <section className="bed-view-stats">

      <div className="bed-view-stats__grid">

        {BED_VIEW_SUMMARY_CONFIG.map((card) => {

          const cardData =
            getCardData(card);

          const value =
            summary?.[card.key] ?? 0;


          return (
            <article
              key={card.id}
              className="bed-view-stats__card"
            >

              {/* ICON */}

              <div
                className={`bed-view-stats__icon bed-view-stats__icon--${cardData.iconClass}`}
              >
                {getIcon(card.id)}
              </div>


              {/* CONTENT */}

              <div className="bed-view-stats__content">

                <span className="bed-view-stats__label">
                  {card.label}
                </span>


                <strong className="bed-view-stats__value">
                  {value}
                </strong>


                {cardData.description && (
                  <span className="bed-view-stats__description">
                    {cardData.description}
                  </span>
                )}


                {typeof cardData.progress === "number" && (
                  <div className="bed-view-stats__progress">

                    <div
                      className={`bed-view-stats__progress-bar bed-view-stats__progress-bar--${cardData.iconClass}`}
                      style={{
                        width: `${Math.min(
                          cardData.progress,
                          100
                        )}%`,
                      }}
                    />

                  </div>
                )}

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
};


export default BedViewStats;