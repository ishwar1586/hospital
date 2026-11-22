import React from "react";

import "./UpcomingAppointment.css";

const UpcomingAppointment = ({ patient }) => {
  if (!patient) {
    return null;
  }

  const appointment = patient.upcomingAppointment;

  if (!appointment) {
    return (
      <div className="patient-upcoming-appointment">
        <div className="patient-upcoming-appointment-header">
          <div>
            <h3 className="patient-upcoming-appointment-title">
              Upcoming Appointment
            </h3>

            <p className="patient-upcoming-appointment-subtitle">
              Next scheduled appointment
            </p>
          </div>
        </div>

        <div className="patient-upcoming-appointment-empty">
          No upcoming appointment
        </div>
      </div>
    );
  }

  return (
    <div className="patient-upcoming-appointment">

      {/* =====================================
          Header
      ===================================== */}

      <div className="patient-upcoming-appointment-header">

        <div>
          <h3 className="patient-upcoming-appointment-title">
            Upcoming Appointment
          </h3>

          <p className="patient-upcoming-appointment-subtitle">
            Next scheduled appointment
          </p>
        </div>

        <span className="patient-upcoming-appointment-status">
          {appointment.status || "Scheduled"}
        </span>

      </div>


      {/* =====================================
          Appointment Details
      ===================================== */}

      <div className="patient-upcoming-appointment-body">

        {/* Date */}

        <div className="patient-upcoming-appointment-date">

          <span className="patient-upcoming-appointment-day">
            {appointment.day || "-"}
          </span>

          <span className="patient-upcoming-appointment-month">
            {appointment.month || "-"}
          </span>

        </div>


        {/* Details */}

        <div className="patient-upcoming-appointment-details">

          <div className="patient-upcoming-appointment-detail">

            <span className="patient-upcoming-appointment-label">
              Doctor
            </span>

            <span className="patient-upcoming-appointment-value">
              {appointment.doctor || "-"}
            </span>

          </div>


          <div className="patient-upcoming-appointment-detail">

            <span className="patient-upcoming-appointment-label">
              Department
            </span>

            <span className="patient-upcoming-appointment-value">
              {appointment.department || "-"}
            </span>

          </div>


          <div className="patient-upcoming-appointment-detail">

            <span className="patient-upcoming-appointment-label">
              Time
            </span>

            <span className="patient-upcoming-appointment-value">
              {appointment.time || "-"}
            </span>

          </div>


          <div className="patient-upcoming-appointment-detail">

            <span className="patient-upcoming-appointment-label">
              Type
            </span>

            <span className="patient-upcoming-appointment-value">
              {appointment.type || "Consultation"}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UpcomingAppointment;