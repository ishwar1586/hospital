import React from "react";

import "./RecentVisits.css";

const RecentVisits = ({ patient }) => {
  if (!patient) {
    return null;
  }

  const visits = patient.recentVisits || [];

  return (
    <div className="patient-recent-visits">

      {/* =====================================
          Section Header
      ===================================== */}

      <div className="patient-recent-visits-header">

        <div>
          <h3 className="patient-recent-visits-title">
            Recent Visits
          </h3>

          <p className="patient-recent-visits-subtitle">
            Latest patient visits and consultations
          </p>
        </div>

        <span className="patient-recent-visits-count">
          {visits.length}
        </span>

      </div>


      {/* =====================================
          Visits List
      ===================================== */}

      {visits.length > 0 ? (

        <div className="patient-recent-visits-list">

          {visits.map((visit, index) => (

            <div
              className="patient-recent-visit"
              key={visit.id || index}
            >

              {/* Date */}

              <div className="patient-recent-visit-date">

                <span className="patient-recent-visit-day">
                  {visit.day || "-"}
                </span>

                <span className="patient-recent-visit-month">
                  {visit.month || "-"}
                </span>

              </div>


              {/* Visit Details */}

              <div className="patient-recent-visit-details">

                <span className="patient-recent-visit-doctor">
                  {visit.doctor || "-"}
                </span>

                <span className="patient-recent-visit-department">
                  {visit.department || "-"}
                </span>

              </div>


              {/* Visit Type */}

              <span className="patient-recent-visit-type">
                {visit.type || "Consultation"}
              </span>


              {/* Status */}

              <span
                className={`patient-recent-visit-status ${
                  visit.status
                    ? `status-${visit.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    : ""
                }`}
              >
                {visit.status || "-"}
              </span>

            </div>

          ))}

        </div>

      ) : (

        <div className="patient-recent-visits-empty">
          No recent visits found
        </div>

      )}

    </div>
  );
};

export default RecentVisits;