
import React from "react";
import "./StatCard.css";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color = "blue",
  percentage,
  showPercentage = false,
}) => {
  return (
    <div className={`room-allotment-stat-card room-allotment-stat-card--${color}`}>

      {/* Icon */}

      <div className="room-allotment-stat-card__icon-wrapper">
        {Icon && (
          <Icon className="room-allotment-stat-card__icon" />
        )}
      </div>

      {/* Information */}

      <div className="room-allotment-stat-card__content">

        <span className="room-allotment-stat-card__title">
          {title}
        </span>

        <div className="room-allotment-stat-card__bottom">

          <h3 className="room-allotment-stat-card__value">
            {value ?? 0}
          </h3>

          {showPercentage && (
            <span className="room-allotment-stat-card__percentage">
              {percentage ?? 0}%
            </span>
          )}

        </div>

      </div>

    </div>
  );
};

export default StatCard;
