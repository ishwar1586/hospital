import React from "react";

import {
  formatDate,
  formatTime,
} from "../../utils/ipdFormatters";

const AdmissionDateCell = ({
  admissionDate,
  admissionTime,
}) => {
  if (!admissionDate) {
    return (
      <span className="ipd-admission-date-cell__empty">
        —
      </span>
    );
  }

  return (
    <div className="ipd-admission-date-cell">
      <span className="ipd-admission-date-cell__date">
        {formatDate(admissionDate)}
      </span>

      <span className="ipd-admission-date-cell__time">
        {admissionTime
          ? formatTime(admissionTime)
          : ""}
      </span>
    </div>
  );
};

export default AdmissionDateCell;