import React from "react";

import "./AppointmentTableHeader.css";

const AppointmentTableHeader = () => {
  return (
    <div className="appointment-table-header">

      {/* Appointment */}
      <div className="appointment-table-header__cell appointment-table-header__cell--appointment">
        Appointment
      </div>

      {/* Patient */}
      <div className="appointment-table-header__cell appointment-table-header__cell--patient">
        Patient
      </div>

      {/* Doctor */}
      <div className="appointment-table-header__cell appointment-table-header__cell--doctor">
        Doctor
      </div>

      {/* Department */}
      <div className="appointment-table-header__cell appointment-table-header__cell--department">
        Department
      </div>

      {/* Type */}
      <div className="appointment-table-header__cell appointment-table-header__cell--type">
        Type
      </div>

      {/* Status */}
      <div className="appointment-table-header__cell appointment-table-header__cell--status">
        Status
      </div>

      {/* Actions */}
      <div className="appointment-table-header__cell appointment-table-header__cell--actions">
        Actions
      </div>

    </div>
  );
};

export default AppointmentTableHeader;