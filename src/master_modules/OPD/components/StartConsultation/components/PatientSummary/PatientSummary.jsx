
import React from "react";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import BadgeOutlined from "@mui/icons-material/BadgeOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import LocalHospitalOutlined from "@mui/icons-material/LocalHospitalOutlined";
import EventOutlined from "@mui/icons-material/EventOutlined";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import ConfirmationNumberOutlined from "@mui/icons-material/ConfirmationNumberOutlined";
import MedicalServicesOutlined from "@mui/icons-material/MedicalServicesOutlined";

import { startConsultationConfig } from "../../config/startConsultation.config";
import "./PatientSummary.css";

const PatientSummary = ({
  consultationData,
  config = startConsultationConfig.patientSummary,
}) => {
  if (!consultationData?.patient || !consultationData?.appointment) {
    return (
      <section className="patient-summary patient-summary--empty">
        <PersonOutlineOutlined className="patient-summary__empty-icon" />
        <p>{config.unknownPatientLabel}</p>
      </section>
    );
  }

  const { patient, appointment } = consultationData;

  const patientName = patient.name || "Unknown Patient";
  const initials = patientName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  const status = appointment.status || config.defaultStatus;
  const visitType = appointment.visitType || config.defaultVisitType;

  const details = [
    {
      id: "uhid",
      label: "UHID",
      value: patient.uhid || "—",
      icon: BadgeOutlined,
    },
    {
      id: "mobile",
      label: "Mobile",
      value: patient.mobile || "—",
      icon: PhoneOutlined,
    },
    {
      id: "token",
      label: "Token No.",
      value: appointment.tokenNo || "—",
      icon: ConfirmationNumberOutlined,
    },
    {
      id: "department",
      label: "Department",
      value: appointment.department || "—",
      icon: LocalHospitalOutlined,
    },
    {
      id: "doctor",
      label: "Consulting Doctor",
      value: appointment.doctor || "—",
      icon: MedicalServicesOutlined,
    },
    {
      id: "appointment-time",
      label: "Appointment Time",
      value: appointment.appointmentTime || "—",
      icon: EventOutlined,
    },
    {
      id: "check-in-time",
      label: "Check-in Time",
      value: appointment.checkInTime || "—",
      icon: AccessTimeOutlined,
    },
    {
      id: "waiting-time",
      label: "Waiting Time",
      value: appointment.waitingTime || "—",
      icon: AccessTimeOutlined,
    },
  ];

  return (
    <section className="patient-summary" aria-label="Patient information">
      <div className="patient-summary__main">
        <div className="patient-summary__identity">
          <div className="patient-summary__avatar">
            {patient.photo ? (
              <img
                className="patient-summary__photo"
                src={patient.photo}
                alt={patientName}
              />
            ) : (
              <span aria-label={config.fallbackImageLabel}>
                {initials || "P"}
              </span>
            )}
          </div>

          <div className="patient-summary__identity-content">
            <div className="patient-summary__name-row">
              <h2 className="patient-summary__name">{patientName}</h2>

              <span
                className={`patient-summary__status patient-summary__status--${String(
                  status
                )
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")}`}
              >
                {status}
              </span>
            </div>

            <p className="patient-summary__demographics">
              {patient.age ?? "—"} years
              <span aria-hidden="true"> • </span>
              {patient.gender || "—"}
            </p>

            <div className="patient-summary__visit-badge">
              <EventOutlined />
              <span>{visitType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="patient-summary__details">
        {details.map((detail) => {
          const Icon = detail.icon;

          return (
            <div className="patient-summary__detail" key={detail.id}>
              <Icon className="patient-summary__detail-icon" />

              <div className="patient-summary__detail-content">
                <span className="patient-summary__detail-label">
                  {detail.label}
                </span>

                <span
                  className="patient-summary__detail-value"
                  title={String(detail.value)}
                >
                  {detail.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PatientSummary;
