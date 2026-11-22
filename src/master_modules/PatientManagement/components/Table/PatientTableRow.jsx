import React from "react";

import PatientTypeChip from "./PatientTypeChip";
import PatientStatusChip from "./PatientStatusChip";
import PatientActionMenu from "./PatientActionMenu";

const PatientTableRow = ({
  patient,
  onView,
  onEdit,
  onDeactivate,
  onDelete,
}) => {
  return (
    <tr className="patient-table-row">

      {/* =====================================
          Patient
      ===================================== */}

      <td>
        <div className="patient-table-patient">

          <div className="patient-table-avatar">
            {patient.name?.charAt(0)}
          </div>

          <div className="patient-table-patient-info">

            <span className="patient-table-patient-name">
              {patient.name}
            </span>

            <span className="patient-table-patient-id">
              {patient.id}
            </span>

          </div>

        </div>
      </td>


      {/* =====================================
          UHID
      ===================================== */}

      <td>
        <span className="patient-table-uhid">
          {patient.uhid}
        </span>
      </td>


      {/* =====================================
          Age / Gender
      ===================================== */}

      <td>
        <span className="patient-table-normal">
          {patient.age} / {patient.gender}
        </span>
      </td>


      {/* =====================================
          Mobile
      ===================================== */}

      <td>
        <span className="patient-table-normal">
          {patient.mobile}
        </span>
      </td>


      {/* =====================================
          Blood Group
      ===================================== */}

      <td>
        <span className="patient-blood-group">
          {patient.bloodGroup}
        </span>
      </td>


      {/* =====================================
          Patient Type
      ===================================== */}

      <td>
        <PatientTypeChip
          type={patient.patientType}
        />
      </td>


      {/* =====================================
          Department
      ===================================== */}

      <td>
        <span className="patient-table-normal">
          {patient.department}
        </span>
      </td>


      {/* =====================================
          Last Visit
      ===================================== */}

      <td>
        <span className="patient-table-normal">
          {patient.lastVisit}
        </span>
      </td>


      {/* =====================================
          Status
      ===================================== */}

      <td>
        <PatientStatusChip
          status={patient.status}
        />
      </td>


      {/* =====================================
          Actions
      ===================================== */}

      <td>
        <div className="patient-table-actions">

          <PatientActionMenu
            patient={patient}
            onView={onView}
            onEdit={onEdit}
            onDeactivate={onDeactivate}
            onDelete={onDelete}
          />

        </div>
      </td>

    </tr>
  );
};

export default PatientTableRow;