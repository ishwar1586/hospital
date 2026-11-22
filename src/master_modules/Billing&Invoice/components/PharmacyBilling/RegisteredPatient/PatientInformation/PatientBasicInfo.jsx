// src/master_modules/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientInformation/PatientBasicInfo.jsx

import React from "react";
import {
  PersonOutlined,
  PhoneOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

const PatientBasicInfo = ({
  patient = {},
}) => {
  const {
    patientName = "-",
    uhid = "-",
    age = "-",
    gender = "-",
    mobile = "-",
    address = "-",
  } = patient;

  const initials = patientName
    ? patientName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((name) => name.charAt(0))
        .join("")
        .toUpperCase()
    : "P";

  return (
    <div className="patient-information__basic">

      {/* Patient Identity */}

      <div className="patient-information__identity">

        <div className="patient-information__avatar">
          {initials}
        </div>

        <div className="patient-information__identity-content">

          <h3 className="patient-information__patient-name">
            {patientName}
          </h3>

          <span className="patient-information__patient-type">
            Registered Patient
          </span>

          <div className="patient-information__uhid">
            UHID: <strong>{uhid}</strong>
          </div>

        </div>

      </div>


      {/* Basic Details */}

      <div className="patient-information__details">

        <div className="patient-information__detail">

          <span className="patient-information__detail-label">
            Age / Gender
          </span>

          <span className="patient-information__detail-value">
            {age} / {gender}
          </span>

        </div>


        <div className="patient-information__detail">

          <span className="patient-information__detail-label">
            Mobile
          </span>

          <span className="patient-information__detail-value patient-information__detail-value--with-icon">

            <PhoneOutlined />

            {mobile}

          </span>

        </div>


        <div className="patient-information__detail patient-information__detail--address">

          <span className="patient-information__detail-label">
            Address
          </span>

          <span className="patient-information__detail-value patient-information__detail-value--with-icon">

            <LocationOnOutlined />

            {address}

          </span>

        </div>

      </div>

    </div>
  );
};

export default PatientBasicInfo;