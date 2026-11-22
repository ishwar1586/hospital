import React from "react";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

import { IconButton } from "@mui/material";

import "./PatientProfileHeader.css";

const PatientProfileHeader = ({
  patient,
  onClose,
}) => {
  if (!patient) {
    return null;
  }

  return (
    <div className="patient-profile-header">

      {/* =========================================
          Header Top
      ========================================= */}

      <div className="patient-profile-header-top">

        <div className="patient-profile-title-area">

          <div className="patient-profile-avatar">
            <PersonOutlineOutlinedIcon />
          </div>

          <div className="patient-profile-title">

            <div className="patient-profile-name-row">

              <h2>
                {patient.name || "Unknown Patient"}
              </h2>

              <span
                className={`patient-profile-status ${
                  patient.status?.toLowerCase() === "inactive"
                    ? "inactive"
                    : "active"
                }`}
              >
                {patient.status || "Active"}
              </span>

            </div>

            <div className="patient-profile-primary-info">

              <div className="patient-profile-primary-item">
                <span className="profile-label">
                  UHID
                </span>

                <span className="profile-value">
                  {patient.uhid || patient.id || "-"}
                </span>
              </div>


              <div className="patient-profile-primary-item">
                <span className="profile-label">
                  Age / Gender
                </span>

                <span className="profile-value">
                  {patient.age
                    ? `${patient.age} Y`
                    : "-"}
                  {" / "}
                  {patient.gender || "-"}
                </span>
              </div>


              <div className="patient-profile-primary-item">
                <span className="profile-label">
                  Blood Group
                </span>

                <span className="profile-value">
                  {patient.bloodGroup || "-"}
                </span>
              </div>


              <div className="patient-profile-primary-item">
                <span className="profile-label">
                  Mobile No.
                </span>

                <span className="profile-value">
                  {patient.mobile || "-"}
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            Header Actions
        ========================================= */}

        <div className="patient-profile-header-actions">

          <IconButton
            className="patient-profile-more-button"
            aria-label="More patient options"
          >
            <MoreVertOutlinedIcon />
          </IconButton>

          <IconButton
            className="patient-profile-close-button"
            onClick={onClose}
            aria-label="Close patient profile"
          >
            <CloseOutlinedIcon />
          </IconButton>

        </div>

      </div>


      {/* =========================================
          Secondary Information
      ========================================= */}

      <div className="patient-profile-secondary-info">

        {/* Aadhaar */}

        <div className="patient-profile-secondary-item">

          <div className="patient-profile-secondary-icon">
            <BadgeOutlinedIcon />
          </div>

          <div className="patient-profile-secondary-content">

            <span className="profile-label">
              Aadhaar No.
            </span>

            <span className="profile-value">
              {patient.aadhaar || "XXXX XXXX 1234"}
            </span>

          </div>

        </div>


        {/* Email */}

        <div className="patient-profile-secondary-item">

          <div className="patient-profile-secondary-icon">
            <EmailOutlinedIcon />
          </div>

          <div className="patient-profile-secondary-content">

            <span className="profile-label">
              Email ID
            </span>

            <span className="profile-value">
              {patient.email || "-"}
            </span>

          </div>

        </div>


        {/* Address */}

        <div className="patient-profile-secondary-item patient-profile-address-item">

          <div className="patient-profile-secondary-icon">
            <LocationOnOutlinedIcon />
          </div>

          <div className="patient-profile-secondary-content">

            <span className="profile-label">
              Address
            </span>

            <span className="profile-value">
              {patient.address || "-"}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PatientProfileHeader;