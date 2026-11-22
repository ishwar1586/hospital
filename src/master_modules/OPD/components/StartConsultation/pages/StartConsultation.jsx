
import React, { useCallback, useMemo, useState } from "react";

import "@/master_modules/OPD/components/StartConsultation/styles/StartConsultation.css";

import ConsultationHeader from "@/master_modules/OPD/components/StartConsultation/components/ConsultationHeader/ConsultationHeader.jsx";

import PatientSummary from "@/master_modules/OPD/components/StartConsultation/components/PatientSummary/PatientSummary";

import ConsultationTabs from "@/master_modules/OPD/components/StartConsultation/components/ConsultationTabs/ConsultationTabs";

import ConsultationForm from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/ConsultationForm";

import Diagnosis from "@/master_modules/OPD/components/StartConsultation/components/DiagnosisTab/Diagnosis";

import Prescription from "@/master_modules/OPD/components/StartConsultation/components/PrescriptionTab/Prescription";

import LabRadiologyTab from "@/master_modules/OPD/components/StartConsultation/components/LabRadiologyTab/LabRadiology";

import { consultationTabsConfig } from "../config/consultationTabs.config";

import { mapOPDPatientToConsultation } from "../mock/consultationPatient.mock";

import { previousPrescriptionsMock } from "../mock/previousPrescriptions.mock";


const StartConsultation = ({
  patient = null,
  consultationData: providedConsultationData = null,

  onBack,
  onSaveDraft,
  onConsultationChange,
  onNext,

  // Prescription callbacks
  onSavePrescription,
  onSendPrescriptionToPharmacy,
  onDownloadPrescription,

  // Lab / Radiology callbacks
  onSaveLabRadiology,
}) => {
  const [activeTab, setActiveTab] = useState(
    consultationTabsConfig.defaultTab
  );

  // Convert selected OPD patient into consultation format.
  const consultationData = useMemo(() => {
    if (providedConsultationData) {
      return providedConsultationData;
    }

    return mapOPDPatientToConsultation(patient);
  }, [patient, providedConsultationData]);

  // Active tab configuration.
  const activeTabConfig = useMemo(
    () =>
      consultationTabsConfig.tabs.find(
        (tab) => tab.id === activeTab
      ),
    [activeTab]
  );

  // Patient details.
  const patientDetails = consultationData?.patient || {};

  const patientId =
    patientDetails.id ||
    patientDetails.patientId ||
    patientDetails._id ||
    "";

  // Consultation details.
  const consultationId =
    consultationData?.consultation?.id ||
    consultationData?.consultation?.consultationId ||
    consultationData?.consultationId ||
    "";

  // Doctor details.
  const doctor = consultationData?.doctor || {};

  // Validate and change active tab.
  const handleTabChange = useCallback((tabId) => {
    const tabExists = consultationTabsConfig.tabs.some(
      (tab) => tab.id === tabId
    );

    if (tabExists) {
      setActiveTab(tabId);
    }
  }, []);

  // Consultation -> Diagnosis.
  const handleConsultationNext = useCallback(
    (payload) => {
      onNext?.(payload);
      handleTabChange("diagnosis");
    },
    [onNext, handleTabChange]
  );

  // Diagnosis -> Prescription.
  const handleDiagnosisNext = useCallback(
    (payload) => {
      onNext?.(payload);
      handleTabChange("prescription");
    },
    [onNext, handleTabChange]
  );

  // Save diagnosis draft.
  const handleDiagnosisSaveDraft = useCallback(
    (payload) => {
      return onSaveDraft?.(payload);
    },
    [onSaveDraft]
  );

  // Diagnosis changes.
  const handleDiagnosisChange = useCallback(
    (data) => {
      onConsultationChange?.({
        patientId,
        consultationId,
        diagnosis: data,
      });
    },
    [patientId, consultationId, onConsultationChange]
  );

  // Navigate back from Diagnosis.
  const handleDiagnosisBack = useCallback(() => {
    handleTabChange("consultation");
  }, [handleTabChange]);

  // Prescription changes.
  const handlePrescriptionChange = useCallback(
    (data) => {
      onConsultationChange?.({
        patientId,
        consultationId,
        prescription: data,
      });
    },
    [patientId, consultationId, onConsultationChange]
  );

  // Save prescription.
  const handlePrescriptionSave = useCallback(
    async (payload) => {
      if (onSavePrescription) {
        return await onSavePrescription(payload);
      }

      if (onSaveDraft) {
        return await onSaveDraft({
          patientId,
          consultationId,
          prescription: payload,
        });
      }

      return null;
    },
    [
      onSavePrescription,
      onSaveDraft,
      patientId,
      consultationId,
    ]
  );

  // Send prescription to Pharmacy.
  const handleSendToPharmacy = useCallback(
    async (payload) => {
      if (!onSendPrescriptionToPharmacy) {
        console.warn(
          "onSendPrescriptionToPharmacy callback is not provided."
        );

        return null;
      }

      return await onSendPrescriptionToPharmacy(payload);
    },
    [onSendPrescriptionToPharmacy]
  );

  // Download prescription.
  const handleDownloadPrescription = useCallback(
    (prescriptionElement) => {
      onDownloadPrescription?.(prescriptionElement);
    },
    [onDownloadPrescription]
  );

  // Lab / Radiology changes.
  const handleLabRadiologyChange = useCallback(
    (data) => {
      onConsultationChange?.({
        patientId,
        consultationId,
        labRadiology: data,
      });
    },
    [patientId, consultationId, onConsultationChange]
  );

  // Save Lab / Radiology draft.
  const handleLabRadiologySaveDraft = useCallback(
    async (payload) => {
      const result = onSaveLabRadiology
        ? await onSaveLabRadiology(payload)
        : await onSaveDraft?.({
            patientId,
            consultationId,
            labRadiology: payload,
          });

      return result;
    },
    [
      onSaveLabRadiology,
      onSaveDraft,
      patientId,
      consultationId,
    ]
  );

  // Lab / Radiology -> Follow-up.
  const handleLabRadiologyNext = useCallback(
    (payload) => {
      onNext?.({
        patientId,
        consultationId,
        labRadiology: payload,
      });

      handleTabChange("follow-up");
    },
    [onNext, handleTabChange, patientId, consultationId]
  );

  // Navigate back from Lab / Radiology.
  const handleLabRadiologyBack = useCallback(() => {
    handleTabChange("prescription");
  }, [handleTabChange]);

  return (
    <main className="start-consultation">
      <div className="start-consultation__container">

        {/* Page Header */}
        <ConsultationHeader onBack={onBack} />

        {/* Selected Patient Information */}
        <PatientSummary consultationData={consultationData} />

        {/* Consultation Workspace */}
        <section className="start-consultation__workspace">

          <ConsultationTabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <div
            className="start-consultation__panel"
            id={`consultation-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`consultation-tab-${activeTab}`}
          >
            {/* Active Tab Heading */}
            <div className="start-consultation__panel-heading">
              <h2 className="start-consultation__panel-title">
                {activeTabConfig?.label || "Consultation"}
              </h2>

              <p className="start-consultation__panel-description">
                {patientDetails.name
                  ? `Patient: ${patientDetails.name}`
                  : "Patient details will appear here when an OPD patient is selected."}
              </p>
            </div>

            {/* No Patient Selected */}
            {!consultationData?.patient ? (
              <div className="start-consultation__empty-state">
                <p>No patient selected.</p>

                <span>
                  Select a patient from the OPD list to start consultation.
                </span>
              </div>
            ) : (
              <>
                {/* Consultation Tab */}
                {activeTab === "consultation" && (
                  <ConsultationForm
                    key={patientId}
                    patientId={patientId}
                    onSaveDraft={onSaveDraft}
                    onChange={onConsultationChange}
                    onNext={handleConsultationNext}
                  />
                )}

                {/* Diagnosis Tab */}
                {activeTab === "diagnosis" && (
                  <Diagnosis
                    key={`${patientId}-${consultationId}`}
                    patientId={patientId}
                    consultationId={consultationId}
                    initialData={consultationData?.diagnosis}
                    onChange={handleDiagnosisChange}
                    onBack={handleDiagnosisBack}
                    onSaveDraft={handleDiagnosisSaveDraft}
                    onNext={handleDiagnosisNext}
                  />
                )}

                {/* Prescription Tab */}
                {activeTab === "prescription" && (
                  <Prescription
                    key={`${patientId}-${consultationId}-prescription`}
                    patient={patientDetails}
                    doctor={doctor}
                    consultation={
                      consultationData?.consultation || {
                        id: consultationId,
                      }
                    }
                    previousPrescriptions={previousPrescriptionsMock}
                    onChange={handlePrescriptionChange}
                    onSavePrescription={handlePrescriptionSave}
                    onSendToPharmacy={handleSendToPharmacy}
                    onDownloadPrescription={handleDownloadPrescription}
                    loading={false}
                    disabled={false}
                  />
                )}

                {/* Lab / Radiology Tab */}
                {activeTab === "lab-radiology" && (
                  <LabRadiologyTab
                    key={`${patientId}-${consultationId}-lab-radiology`}
                    patient={patientDetails}
                    doctor={doctor}
                    consultation={{
                      ...(consultationData?.consultation || {}),
                      id: consultationId,
                    }}
                    initialTests={
                      consultationData?.labRadiology?.tests || []
                    }
                    initialClinicalNote={
                      consultationData?.labRadiology?.clinicalNote || ""
                    }
                    onChange={handleLabRadiologyChange}
                    onBack={handleLabRadiologyBack}
                    onSaveDraft={handleLabRadiologySaveDraft}
                    onNext={handleLabRadiologyNext}
                    disabled={false}
                    saving={false}
                  />
                )}

                {/* Other Tabs */}
                {![
                  "consultation",
                  "diagnosis",
                  "prescription",
                  "lab-radiology",
                ].includes(activeTab) && (
                  <div className="start-consultation__placeholder">
                    <p>
                      {activeTabConfig?.label || "Consultation"} section
                    </p>

                    <span>
                      This section will be developed separately.
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default StartConsultation;
