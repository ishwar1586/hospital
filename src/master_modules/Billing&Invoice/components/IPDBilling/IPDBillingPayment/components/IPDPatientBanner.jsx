
import React from "react";
import { Box, Typography, Avatar, Chip } from "@mui/material";

import "./IPDPatientBanner.css";

const getPatientName = (patient) => {
  return (
    patient?.patientName ||
    patient?.name ||
    patient?.fullName ||
    "Patient Name Not Available"
  );
};

const getPatientInitial = (name) => {
  if (!name || name === "Patient Name Not Available") {
    return "P";
  }

  return name.trim().charAt(0).toUpperCase();
};

const IPDPatientBanner = ({
  patient = {},
  currentStep = 3,
  totalSteps = 4,
}) => {
  const patientName = getPatientName(patient);

  const patientDetails = [
    {
      label: "UHID",
      value:
        patient?.uhid ||
        patient?.UHID ||
        patient?.patientId ||
        "—",
    },
    {
      label: "IPD No",
      value:
        patient?.ipdNo ||
        patient?.ipdNumber ||
        patient?.admissionNo ||
        "—",
    },
    {
      label: "Ward",
      value: patient?.ward || patient?.wardName || "—",
    },
    {
      label: "Room",
      value: patient?.room || patient?.roomNo || "—",
    },
    {
      label: "Bed",
      value: patient?.bed || patient?.bedNo || "—",
    },
  ];

  return (
    <Box className="ipd-patient-banner">
      <Box className="ipd-patient-banner__identity">
        <Avatar className="ipd-patient-banner__avatar">
          {getPatientInitial(patientName)}
        </Avatar>

        <Box className="ipd-patient-banner__information">
          <Typography
            component="h2"
            className="ipd-patient-banner__name"
          >
            {patientName}
          </Typography>

          <Box className="ipd-patient-banner__details">
            {patientDetails.map((detail) => (
              <Box
                key={detail.label}
                className="ipd-patient-banner__detail"
              >
                <Typography
                  component="span"
                  className="ipd-patient-banner__detail-label"
                >
                  {detail.label}:
                </Typography>

                <Typography
                  component="span"
                  className="ipd-patient-banner__detail-value"
                >
                  {detail.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Chip
        className="ipd-patient-banner__step-chip"
        label={`Step ${currentStep} of ${totalSteps}`}
      />
    </Box>
  );
};

export default IPDPatientBanner;