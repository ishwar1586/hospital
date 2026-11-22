
import React, { useRef } from "react";
import LocalHospitalOutlined from "@mui/icons-material/LocalHospitalOutlined";
import PrintOutlined from "@mui/icons-material/PrintOutlined";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import "./PrescriptionCard.css";

const PrescriptionCard = ({
  patient = {},
  doctor = {},
  consultation = {},
  medicines = [],
  additionalInstructions = "",
  followUp = {},
  onDownload,
  onSendToPharmacy,
  isSending = false,
  disabled = false,
}) => {
  const prescriptionRef = useRef(null);

  if (!medicines.length) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (disabled || !prescriptionRef.current) return;

    onDownload?.(prescriptionRef.current);
  };

  const handleSendToPharmacy = () => {
    if (disabled || isSending) return;

    onSendToPharmacy?.({
      patientId: patient.id || "",
      consultationId: consultation.id || "",
      medicines,
      additionalInstructions,
      followUp,
    });
  };

  return (
    <section className="prescription-card-section">
      <div className="prescription-card-section__header">
        <div>
          <h3 className="prescription-card-section__title">
            Prescription
          </h3>
          <p className="prescription-card-section__subtitle">
            Review the generated prescription before sharing.
          </p>
        </div>

        <div className="prescription-card-section__actions">
          <button
            type="button"
            className="prescription-card-section__action prescription-card-section__print"
            onClick={handlePrint}
            disabled={disabled}
          >
            <PrintOutlined />
            <span>Print</span>
          </button>

          <button
            type="button"
            className="prescription-card-section__action prescription-card-section__download"
            onClick={handleDownload}
            disabled={disabled}
          >
            <DownloadOutlined />
            <span>Download</span>
          </button>

          <button
            type="button"
            className="prescription-card-section__action prescription-card-section__send"
            onClick={handleSendToPharmacy}
            disabled={disabled || isSending}
          >
            <SendOutlined />
            <span>
              {isSending ? "Sending..." : "Send to Pharmacy"}
            </span>
          </button>
        </div>
      </div>

      <div
        className="prescription-card"
        ref={prescriptionRef}
      >
        <div className="prescription-card__hospital-header">
          <div className="prescription-card__hospital-brand">
            <div className="prescription-card__hospital-icon">
              <LocalHospitalOutlined />
            </div>

            <div>
              <h2>{consultation.hospitalName || "Hospital Name"}</h2>
              <p>
                {consultation.hospitalAddress || "Hospital address"}
              </p>
              {consultation.hospitalPhone && (
                <p>{consultation.hospitalPhone}</p>
              )}
            </div>
          </div>

          <div className="prescription-card__document-label">
            <span>OPD</span>
            <strong>MEDICAL PRESCRIPTION</strong>
          </div>
        </div>

        <div className="prescription-card__divider" />

        <div className="prescription-card__patient-details">
          <div>
            <span>Patient Name</span>
            <strong>{patient.name || "—"}</strong>
          </div>

          <div>
            <span>UHID</span>
            <strong>{patient.uhid || "—"}</strong>
          </div>

          <div>
            <span>Age / Gender</span>
            <strong>
              {[patient.age, patient.gender].filter(Boolean).join(" / ") || "—"}
            </strong>
          </div>

          <div>
            <span>Consultation Date</span>
            <strong>{consultation.date || "—"}</strong>
          </div>
        </div>

        <div className="prescription-card__doctor-details">
          <div>
            <span>Consulting Doctor</span>
            <strong>{doctor.name || "—"}</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>{doctor.department || "—"}</strong>
          </div>

          {doctor.registrationNumber && (
            <div>
              <span>Registration No.</span>
              <strong>{doctor.registrationNumber}</strong>
            </div>
          )}
        </div>

        {patient.allergies && (
          <div className="prescription-card__allergy">
            <strong>Known Allergies:</strong>
            <span>{patient.allergies}</span>
          </div>
        )}

        <div className="prescription-card__rx-heading">
          <span>℞</span>
          <strong>Prescribed Medicines</strong>
        </div>

        <div className="prescription-card__table-wrapper">
          <table className="prescription-card__table">
            <thead>
              <tr>
                <th>#</th>
                <th>Medicine</th>
                <th>Dose</th>
                <th>Route</th>
                <th>Frequency</th>
                <th>Duration</th>
                <th>Instructions</th>
              </tr>
            </thead>

            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={medicine.id}>
                  <td>{index + 1}</td>
                  <td>
                    <strong>
                      {[medicine.name, medicine.strength]
                        .filter(Boolean)
                        .join(" ")}
                    </strong>
                    {medicine.form && <small>{medicine.form}</small>}
                  </td>
                  <td>{medicine.dose || "—"}</td>
                  <td>{medicine.route || "—"}</td>
                  <td>{medicine.frequency || "—"}</td>
                  <td>{medicine.duration || "—"}</td>
                  <td>{medicine.instruction || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {additionalInstructions && (
          <div className="prescription-card__instructions">
            <h4>Additional Instructions</h4>
            <p>{additionalInstructions}</p>
          </div>
        )}

        {(followUp.date || followUp.duration) && (
          <div className="prescription-card__follow-up">
            <h4>Follow-up</h4>
            <p>
              {followUp.duration || ""}
              {followUp.duration && followUp.date ? " • " : ""}
              {followUp.date || ""}
            </p>
          </div>
        )}

        <div className="prescription-card__signature">
          <div>
            <strong>{doctor.name || "Consulting Doctor"}</strong>
            <span>Doctor's Signature</span>
          </div>
        </div>

        <div className="prescription-card__footer">
          <span>Computer-generated medical prescription</span>
          <span>{consultation.prescriptionNumber || ""}</span>
        </div>
      </div>
    </section>
  );
};

export default PrescriptionCard;
