import React from "react";

const BillingStatCard = ({
  stat,
  config,
}) => {
  if (!stat || !config) {
    return null;
  }

  const {
    label,
    value,
    trendValue,
    trendLabel,
    trendDirection,
  } = stat;

  const {
    icon: Icon,
    iconVariant = "blue",
    valueType = "number",
    trendType = "positive",
  } = config;

  const isNegativeTrend = trendType === "negative";

  const formattedValue =
    valueType === "currency"
      ? `₹ ${Number(value || 0).toLocaleString("en-IN")}`
      : Number(value || 0).toLocaleString("en-IN");

  return (
    <article className="billing-stat-card">
      {/* Icon */}
      <div
        className={`billing-stat-card__icon billing-stat-card__icon--${iconVariant}`}
      >
        {Icon && (
          <Icon className="billing-stat-card__icon-svg" />
        )}
      </div>

      {/* Content */}
      <div className="billing-stat-card__content">
        <p className="billing-stat-card__label">
          {label}
        </p>

        <h2 className="billing-stat-card__value">
          {formattedValue}
        </h2>

        <div
          className={`
            billing-stat-card__trend
            billing-stat-card__trend--${isNegativeTrend ? "negative" : "positive"}
          `}
        >
          <span className="billing-stat-card__trend-arrow">
            {trendDirection === "down" ? "↓" : "↑"}
          </span>

          <span className="billing-stat-card__trend-value">
            {trendValue}%
          </span>

          <span className="billing-stat-card__trend-label">
            {trendLabel}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BillingStatCard;