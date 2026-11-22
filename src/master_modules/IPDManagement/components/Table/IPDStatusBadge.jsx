import React from "react";

import { IPD_STATUS_CONFIG } from "../../config/ipdConfig";
import { formatStatusLabel } from "../../utils/ipdFormatters";

const IPDStatusBadge = ({ status }) => {
  const statusKey =
    typeof status === "string"
      ? status
      : "";

  const statusConfig =
    IPD_STATUS_CONFIG?.[statusKey];

  const variant =
    statusConfig?.variant ?? "neutral";

  const label =
    statusConfig?.label ??
    formatStatusLabel(status);

  return (
    <span
      className={`ipd-status-badge ipd-status-badge--${variant}`}
    >
      {label}
    </span>
  );
};

export default IPDStatusBadge;