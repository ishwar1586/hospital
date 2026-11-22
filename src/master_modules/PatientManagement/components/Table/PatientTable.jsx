import React from "react";

import PatientTableRow from "./PatientTableRow";

import "./PatientTable.css";

const PatientTable = ({
  patients = [],
  onView,
  onEdit,
  onDeactivate,
  onDelete,
}) => {
  /* =========================================
     Render
  ========================================= */

  return (
    <div className="patient-table-wrapper">

      <div className="patient-table-scroll">

        <table className="patient-table">

          {/* =====================================
              Table Header
          ===================================== */}

          <thead>
            <tr>
              <th>Patient</th>
              <th>UHID</th>
              <th>Age / Gender</th>
              <th>Mobile</th>
              <th>Blood Group</th>
              <th>Patient Type</th>
              <th>Department</th>
              <th>Last Visit</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>


          {/* =====================================
              Table Body
          ===================================== */}

          <tbody>

            {patients.length > 0 ? (

              patients.map((patient) => (
                <PatientTableRow
                  key={patient.id || patient.uhid}
                  patient={patient}
                  onView={onView}
                  onEdit={onEdit}
                  onDeactivate={onDeactivate}
                  onDelete={onDelete}
                />
              ))

            ) : (

              <tr>
                <td
                  colSpan="10"
                  className="patient-table-empty"
                >
                  No patients found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default PatientTable;