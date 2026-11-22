import React from "react";

const PatientStatCard = ({
  title,
  value,
  change,
  changeType,
  description,
  icon: Icon,
}) => {
  return (
    <div className="patient-stat-card">
      <div className="patient-stat-card__top">
        <div className="patient-stat-card__info">
          <p className="patient-stat-card__title">{title}</p>

          <h3 className="patient-stat-card__value">{value}</h3>
        </div>

        <div className="patient-stat-card__icon">
          <Icon />
        </div>
      </div>

      <div className="patient-stat-card__bottom">
        <span
          className={`patient-stat-card__change patient-stat-card__change--${changeType}`}
        >
          {change}
        </span>

        <span className="patient-stat-card__description">
          {description}
        </span>
      </div>
    </div>
  );
};

export default PatientStatCard;