import React from "react";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";

import "./PatientManagementHeader.css";

const PatientManagementHeader = ({
  onExportPatients,
  onImportPatients,
  onAddPatient,
}) => {
  return (
    <header className="patient-management-header">

      {/* =====================================
          Header Left
      ===================================== */}

      <div className="patient-management-header__left">

        <h1 className="patient-management-header__title">
          Patient Management
        </h1>

        <p className="patient-management-header__subtitle">
          Manage patient information and medical records
        </p>

      </div>


      {/* =====================================
          Header Actions
      ===================================== */}

      <div className="patient-management-header__actions">

        {/* Export */}

        <button
          type="button"
          className="patient-management-header__button patient-management-header__button--secondary"
          onClick={onExportPatients}
        >
          <FileDownloadOutlinedIcon fontSize="small" />

          <span>
            Export
          </span>
        </button>


        {/* Import */}

        <button
          type="button"
          className="patient-management-header__button patient-management-header__button--secondary"
          onClick={onImportPatients}
        >
          <FileUploadOutlinedIcon fontSize="small" />

          <span>
            Import
          </span>
        </button>


        {/* New Patient */}

        <button
          type="button"
          className="patient-management-header__button patient-management-header__button--primary"
          onClick={onAddPatient}
        >
          <AddIcon fontSize="small" />

          <span>
            New Patient
          </span>
        </button>

      </div>

    </header>
  );
};

export default PatientManagementHeader;