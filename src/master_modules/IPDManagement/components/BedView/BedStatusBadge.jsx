import React from "react";

import "./BedStatusBadge.css";


const BedStatusBadge = ({
  status = "",
  config = {},
}) => {
  const normalizedStatus = String(
    status || ""
  ).toLowerCase();

  const label =
    config?.label ||
    normalizedStatus ||
    "Unknown";

  const variant =
    config?.variant ||
    "neutral";


  return (
    <span
      className={`bed-view-bed-status-badge bed-view-bed-status-badge--${variant}`}
      data-status={normalizedStatus}
    >
      <span className="bed-view-bed-status-badge__dot" />

      <span className="bed-view-bed-status-badge__label">
        {label}
      </span>
    </span>
  );
};


export default BedStatusBadge;