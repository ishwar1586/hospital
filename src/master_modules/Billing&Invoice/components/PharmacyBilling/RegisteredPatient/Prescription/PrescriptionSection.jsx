import React, { useState } from "react";

import PrescriptionHeader from "./PrescriptionHeader";
import PrescriptionModeTabs from "./PrescriptionModeTabs";
import OPDPrescription from "./OPDPrescription";
import PrescriptionUpload from "./PrescriptionUpload";
import NoPrescription from "./NoPrescription";

import "./PrescriptionSection.css";

const PrescriptionSection = ({
  patient = null,
  prescription = null,
  onPrescriptionUpload,
}) => {
  /*
   * ---------------------------------------------------------
   * ACTIVE PRESCRIPTION MODE
   * ---------------------------------------------------------
   *
   * opd     -> OPD Prescription
   * upload  -> Upload Prescription
   * none    -> No Prescription
   *
   */

  const [activeMode, setActiveMode] =
    useState("opd");

  /*
   * ---------------------------------------------------------
   * UPLOADED PRESCRIPTION
   * ---------------------------------------------------------
   */

  const [
    uploadedPrescription,
    setUploadedPrescription,
  ] = useState(null);

  /*
   * ---------------------------------------------------------
   * PATIENT SAFETY CHECK
   * ---------------------------------------------------------
   */

  if (!patient) {
    return null;
  }

  /*
   * ---------------------------------------------------------
   * MODE CHANGE
   * ---------------------------------------------------------
   */

  const handleModeChange = (mode) => {
    if (!mode) {
      return;
    }

    setActiveMode(mode);
  };

  /*
   * ---------------------------------------------------------
   * PRESCRIPTION UPLOAD
   * ---------------------------------------------------------
   */

  const handlePrescriptionUpload = (
    file
  ) => {
    setUploadedPrescription(file);

    if (
      typeof onPrescriptionUpload ===
      "function"
    ) {
      onPrescriptionUpload(file);
    }
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <section className="prescription-section">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <PrescriptionHeader
        title="Prescription"
        subtitle="Patient prescription and medication details"
      />

      {/* =====================================================
          PRESCRIPTION MODE TABS
      ===================================================== */}

      <PrescriptionModeTabs
        activeMode={activeMode}
        onModeChange={handleModeChange}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="prescription-section__content">

        {/* ===================================================
            OPD PRESCRIPTION
        =================================================== */}

        {activeMode === "opd" && (
          <OPDPrescription
            patient={patient}
            prescription={prescription}
          />
        )}

        {/* ===================================================
            UPLOAD PRESCRIPTION
        =================================================== */}

        {activeMode === "upload" && (
          <PrescriptionUpload
            value={uploadedPrescription}
            onChange={
              handlePrescriptionUpload
            }
          />
        )}

        {/* ===================================================
            NO PRESCRIPTION
        =================================================== */}

        {activeMode === "none" && (
          <NoPrescription
            title="No Prescription"
            message="Continue without a prescription."
          />
        )}

      </div>

    </section>
  );
};

export default PrescriptionSection;