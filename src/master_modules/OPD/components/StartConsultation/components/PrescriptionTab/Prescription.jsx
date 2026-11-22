
import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import "./Prescription.css";

// Components
import MedicineSearch from "./components/MedicineSearch/MedicineSearch";

import MedicineSearchResults from "./components/MedicineSearchResults/MedicineSearchResults";

import SelectedMedicineList from "./components/SelectedMedicineList/SelectedMedicineList";

import MedicineRow from "./components/MedicineRow/MedicineRow";

import PrescriptionCard from "./components/PrescriptionCard/PrescriptionCard";

import AdditionalInstructions from "./components/AdditionalInstructions/AdditionalInstructions";

import FollowUp from "./components/FollowUp/FollowUp";

// Reusable Consultation Footer
import ConsultationFooter from "@/master_modules/OPD/components/StartConsultation/components/ConsultationFooter/ConsultationFooter";

// Config
import {
  validatePrescription,
} from "../../config/prescriptionValidation.config";

// Mock
import {
  getLatestPreviousPrescription,
} from "../../mock/previousPrescriptions.mock";

// Services
import {
  searchMedicinesService,
  savePrescriptionService,
  sendPrescriptionToPharmacyService,
} from "../../services/prescription.service";


const Prescription = ({
  patient = {},
  doctor = {},
  consultation = {},

  medicines = [],
  previousPrescriptions = [],

  onSearchMedicines,
  onLoadPreviousPrescription,
  onSavePrescription,
  onSendToPharmacy,
  onDownloadPrescription,

  onChange,
  onBack,
  onNext,

  loading = false,
  disabled = false,
}) => {

  // =========================================
  // 1. STATES
  // =========================================

  const [searchResults, setSearchResults] = useState([]);

  const [selectedMedicines, setSelectedMedicines] = useState(
    Array.isArray(medicines) ? medicines : []
  );

  const [additionalInstructions, setAdditionalInstructions] =
    useState("");

  const [followUp, setFollowUp] = useState({
    date: "",
    type: "",
  });

  const [searchLoading, setSearchLoading] = useState(false);

  const [saving, setSaving] = useState(false);

  const [sending, setSending] = useState(false);

  const [addingMedicineId, setAddingMedicineId] = useState(null);

  const [savedPrescriptionId, setSavedPrescriptionId] = useState(null);

  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");


  // =========================================
  // 2. COMMON HELPERS
  // =========================================

  const isDisabled = disabled || loading;

  const isProcessing = isDisabled || saving || sending;


  const getSavedPrescription = (result) => {
    if (!result) return null;

    return result.data || result.prescription || result;
  };


  // =========================================
  // 3. PRESCRIPTION PAYLOAD
  // =========================================

  const prescriptionPayload = useMemo(
    () => ({
      patientId: patient?.id || patient?._id || "",
      doctorId: doctor?.id || doctor?._id || "",
      consultationId:
        consultation?.id ||
        consultation?._id ||
        consultation?.consultationId ||
        "",

      patient: {
        ...patient,
      },

      doctor: {
        ...doctor,
      },

      consultation: {
        ...consultation,
      },

      medicines: selectedMedicines,

      additionalInstructions,

      followUp,
    }),
    [
      patient,
      doctor,
      consultation,
      selectedMedicines,
      additionalInstructions,
      followUp,
    ]
  );


  // Notify parent when prescription data changes.
  const notifyParent = useCallback(
    (updatedData = {}) => {
      onChange?.({
        patientId: prescriptionPayload.patientId,
        doctorId: prescriptionPayload.doctorId,
        consultationId: prescriptionPayload.consultationId,
        ...updatedData,
      });
    },
    [onChange, prescriptionPayload]
  );


  // =========================================
  // 4. SEARCH MEDICINES
  // =========================================

  const handleSearchMedicines = useCallback(
    async (searchTerm) => {

      const term = searchTerm?.trim();

      if (!term) {
        setSearchResults([]);
        return;
      }

      try {
        setError("");
        setSuccessMessage("");
        setSearchLoading(true);

        const results = onSearchMedicines
          ? await onSearchMedicines(term)
          : await searchMedicinesService(term);

        setSearchResults(
          Array.isArray(results) ? results : []
        );

      } catch (err) {
        console.error("Medicine search failed:", err);

        setSearchResults([]);

        setError(
          err.message || "Unable to search medicines. Please try again."
        );

      } finally {
        setSearchLoading(false);
      }
    },
    [onSearchMedicines]
  );


  // =========================================
  // 5. ADD MEDICINE
  // =========================================

  const handleAddMedicine = useCallback(
    (medicine) => {

      const medicineId = medicine?.id ?? medicine?._id;

      if (!medicineId || isProcessing) return;

      setError("");
      setSuccessMessage("");

      setSelectedMedicines((previous) => {

        const alreadyAdded = previous.some(
          (item) =>
            String(item.id ?? item._id) === String(medicineId)
        );

        if (alreadyAdded) {
          return previous;
        }

        const newMedicine = {
          ...medicine,

          id: medicineId,

          dose: medicine.dose || "",

          route: medicine.route || "oral",

          frequency: medicine.frequency || "",

          duration: medicine.duration || "",

          instruction: medicine.instruction || "",
        };

        return [...previous, newMedicine];
      });

      setSearchResults((previous) =>
        previous.filter(
          (item) =>
            String(item.id ?? item._id) !== String(medicineId)
        )
      );

      setAddingMedicineId(null);

      setSavedPrescriptionId(null);

    },
    [isProcessing]
  );


  // =========================================
  // 6. UPDATE MEDICINE
  // =========================================

  const handleMedicineChange = useCallback(
    (medicineId, field, value) => {

      if (isProcessing) return;

      setSelectedMedicines((previous) => {

        const updatedMedicines = previous.map((medicine) => {

          const currentId = medicine.id ?? medicine._id;

          if (String(currentId) !== String(medicineId)) {
            return medicine;
          }

          return {
            ...medicine,
            [field]: value,
          };
        });

        return updatedMedicines;
      });

      setSavedPrescriptionId(null);

      setError("");
      setSuccessMessage("");

    },
    [isProcessing]
  );


  // =========================================
  // 7. REMOVE MEDICINE
  // =========================================

  const handleRemoveMedicine = useCallback(
    (medicineId) => {

      if (isProcessing) return;

      setSelectedMedicines((previous) =>
        previous.filter(
          (medicine) =>
            String(medicine.id ?? medicine._id) !==
            String(medicineId)
        )
      );

      setSavedPrescriptionId(null);

      setError("");
      setSuccessMessage("");

    },
    [isProcessing]
  );


  // =========================================
  // 8. EDIT MEDICINE
  // =========================================

  const handleEditMedicine = useCallback((medicine) => {

    if (!medicine) return;

    // MedicineRow already provides editable fields.
    // A separate edit modal can be integrated later if required.

  }, []);


  // =========================================
  // 9. LOAD PREVIOUS PRESCRIPTION
  // =========================================

  const handleLoadPreviousPrescription = useCallback(
    async () => {

      const patientId = patient?.id || patient?._id;

      if (!patientId) {
        setError("Patient information is not available.");
        return;
      }

      try {
        setError("");
        setSuccessMessage("");
        setSearchLoading(true);

        let previousData = null;


        // Priority 1: Parent callback
        if (onLoadPreviousPrescription) {

          previousData = await onLoadPreviousPrescription({
            patientId,
            patientUHID: patient.uhid,
          });

          previousData =
            previousData?.data ||
            previousData?.prescription ||
            previousData;
        }


        // Priority 2: Previous prescription records passed through props
        if (
          !previousData &&
          Array.isArray(previousPrescriptions) &&
          previousPrescriptions.length > 0
        ) {

          const patientHistory = previousPrescriptions
            .filter((item) => {

              const historyPatientId =
                item.patientId ||
                item.patient?.id ||
                item.patient?._id;

              const historyUHID =
                item.patientUHID ||
                item.patient?.uhid;

              return (
                (
                  historyPatientId &&
                  String(historyPatientId) === String(patientId)
                ) ||
                (
                  patient.uhid &&
                  historyUHID &&
                  historyUHID === patient.uhid
                )
              );

            })
            .sort((a, b) => {

              const dateA = new Date(
                a.prescriptionDate || a.createdAt || 0
              ).getTime() || 0;

              const dateB = new Date(
                b.prescriptionDate || b.createdAt || 0
              ).getTime() || 0;

              return dateB - dateA;
            });

          previousData = patientHistory[0] || null;
        }


        // Priority 3: Direct mock fallback
        if (!previousData) {
          previousData = getLatestPreviousPrescription(patientId);
        }


        if (!previousData) {

          setSelectedMedicines([]);

          setAdditionalInstructions("");

          setFollowUp({
            date: "",
            type: "",
          });

          setSavedPrescriptionId(null);

          setError(
            "No previous prescription found for this patient."
          );

          return;
        }


        // Load previous medicines
        const previousMedicines = (
          previousData.medicines || []
        ).map((medicine) => ({

          ...medicine,

          id: medicine.id || medicine.medicineId || medicine._id,

          dose: medicine.dose || "",

          route: medicine.route || "",

          frequency: medicine.frequency || "",

          duration: medicine.duration || "",

          instruction: medicine.instruction || "",

        }));


        setSelectedMedicines(previousMedicines);

        setAdditionalInstructions(
          previousData.additionalInstructions || ""
        );

        setFollowUp(
          previousData.followUp || {
            date: "",
            type: "",
          }
        );

        setSavedPrescriptionId(null);

        setSearchResults([]);

        setSuccessMessage(
          "Previous prescription loaded. Please review all medicines and instructions before saving."
        );

      } catch (err) {

        console.error(
          "Previous prescription loading failed:",
          err
        );

        setError(
          err.message || "Unable to load previous prescription."
        );

      } finally {
        setSearchLoading(false);
      }
    },
    [
      patient,
      previousPrescriptions,
      onLoadPreviousPrescription,
    ]
  );


  // =========================================
  // 10. SAVE PRESCRIPTION
  // =========================================

  const handleSavePrescription = useCallback(
    async () => {

      if (!selectedMedicines.length) {
        setError("Please add at least one medicine.");
        return null;
      }

      const validation = validatePrescription(
        prescriptionPayload
      );

      if (!validation.isValid) {

        console.error(
          "Prescription Validation Errors:",
          validation.errors
        );

        setError(
          "Please complete all required prescription fields."
        );

        return null;
      }

      try {
        setError("");
        setSuccessMessage("");
        setSaving(true);

        const result = onSavePrescription
          ? await onSavePrescription(prescriptionPayload)
          : await savePrescriptionService(prescriptionPayload);

        if (!result) {
          throw new Error("Prescription could not be saved.");
        }

        const savedRecord = getSavedPrescription(result);

        const prescriptionId =
          savedRecord?.id ||
          savedRecord?.prescriptionId ||
          savedRecord?._id;

        if (prescriptionId) {
          setSavedPrescriptionId(prescriptionId);
        }

        setSuccessMessage(
          result?.message || "Prescription saved successfully."
        );

        return savedRecord || result;

      } catch (err) {

        console.error("Prescription save failed:", err);

        if (err.validationErrors) {
          console.error(
            "Validation Details:",
            err.validationErrors
          );
        }

        setError(
          err.message || "Unable to save prescription. Please try again."
        );

        return null;

      } finally {
        setSaving(false);
      }
    },
    [
      selectedMedicines,
      prescriptionPayload,
      onSavePrescription,
    ]
  );


  // =========================================
  // 11. SEND PRESCRIPTION TO PHARMACY
  // =========================================

  const handleSendToPharmacy = useCallback(
    async () => {

      if (!selectedMedicines.length) {
        setError("Please add at least one medicine.");
        return;
      }

      const validation = validatePrescription(
        prescriptionPayload
      );

      if (!validation.isValid) {

        setError(
          "Please complete all required prescription fields before sending to pharmacy."
        );

        return;
      }

      try {
        setError("");
        setSuccessMessage("");
        setSending(true);

        let prescriptionId = savedPrescriptionId;


        // Save prescription first if it has not been saved yet.
        if (!prescriptionId) {

          const saveResult = onSavePrescription
            ? await onSavePrescription(prescriptionPayload)
            : await savePrescriptionService(prescriptionPayload);

          const savedRecord = getSavedPrescription(saveResult);

          prescriptionId =
            savedRecord?.id ||
            savedRecord?.prescriptionId ||
            savedRecord?._id ||
            null;

          if (!prescriptionId) {
            throw new Error(
              "Prescription could not be saved. Please save it before sending to pharmacy."
            );
          }

          setSavedPrescriptionId(prescriptionId);
        }


        const pharmacyPayload = {
          ...prescriptionPayload,
          prescriptionId,
        };


        const result = onSendToPharmacy
          ? await onSendToPharmacy(pharmacyPayload)
          : await sendPrescriptionToPharmacyService(
              pharmacyPayload
            );

        setSuccessMessage(
          result?.message ||
          "Prescription sent to pharmacy successfully."
        );

      } catch (err) {

        console.error(
          "Sending prescription to pharmacy failed:",
          err
        );

        setError(
          err.message || "Unable to send prescription to pharmacy."
        );

      } finally {
        setSending(false);
      }
    },
    [
      selectedMedicines,
      prescriptionPayload,
      savedPrescriptionId,
      onSavePrescription,
      onSendToPharmacy,
    ]
  );


  // =========================================
  // 12. ADDITIONAL INSTRUCTIONS
  // =========================================

  const handleInstructionsChange = useCallback((value) => {

    setAdditionalInstructions(value);

    setSavedPrescriptionId(null);

    setError("");
    setSuccessMessage("");

  }, []);


  // =========================================
  // 13. FOLLOW-UP
  // =========================================

  const handleFollowUpChange = useCallback((value) => {

    setFollowUp(value);

    setSavedPrescriptionId(null);

    setError("");
    setSuccessMessage("");

  }, []);


  // =========================================
  // 14. FOOTER ACTIONS
  // =========================================

  // Back to Diagnosis
  const handleFooterBack = useCallback(() => {

    onBack?.();

  }, [onBack]);


  // Save as Draft
  const handleFooterSaveDraft = useCallback(async () => {

    await handleSavePrescription();

  }, [handleSavePrescription]);


  // Next: Lab / Radiology
  const handleFooterNext = useCallback(() => {

    onNext?.(prescriptionPayload);

  }, [onNext, prescriptionPayload]);


  // =========================================
  // 15. RENDER
  // =========================================

  return (

    <div className="opd-prescription">


      {/* Medicine Search */}

      <div className="opd-prescription__search-section">

        <MedicineSearch
          onSearch={handleSearchMedicines}
          onLoadPreviousPrescription={
            handleLoadPreviousPrescription
          }
          loading={searchLoading}
          disabled={isProcessing}
        />

      </div>


      {/* Error Message */}

      {error && (

        <div
          className="opd-prescription__error"
          role="alert"
        >
          {error}
        </div>

      )}


      {/* Success Message */}

      {successMessage && (

        <div
          className="opd-prescription__success"
          role="status"
        >
          {successMessage}
        </div>

      )}


      {/* Medicine Search Results */}

      {searchResults.length > 0 && (

        <div className="opd-prescription__results-section">

          <MedicineSearchResults
            results={searchResults}
            onAddMedicine={handleAddMedicine}
            addingMedicineId={addingMedicineId}
            disabled={isProcessing}
          />

        </div>

      )}


      {/* Selected Medicines */}

      {selectedMedicines.length > 0 && (

        <div className="opd-prescription__medicines-section">

          <SelectedMedicineList
            medicines={selectedMedicines}
          >

            {selectedMedicines.map((medicine, index) => (

              <MedicineRow
                key={medicine.id ?? medicine._id ?? index}
                medicine={medicine}
                index={index}
                onChange={handleMedicineChange}
                onEdit={handleEditMedicine}
                onRemove={handleRemoveMedicine}
                disabled={isProcessing}
              />

            ))}

          </SelectedMedicineList>

        </div>

      )}


      {/* Additional Instructions */}

      <div className="opd-prescription__instructions-section">

        <AdditionalInstructions
          value={additionalInstructions}
          onChange={handleInstructionsChange}
          disabled={isProcessing}
        />

      </div>


      {/* Follow Up */}

      <div className="opd-prescription__follow-up-section">

        <FollowUp
          value={followUp}
          onChange={handleFollowUpChange}
          disabled={isProcessing}
        />

      </div>


      {/* Prescription Preview */}

      {selectedMedicines.length > 0 && (

        <div className="opd-prescription__preview-section">

          <PrescriptionCard
            patient={patient}
            doctor={doctor}
            consultation={consultation}
            medicines={selectedMedicines}
            additionalInstructions={additionalInstructions}
            followUp={followUp}
            onDownload={onDownloadPrescription}
            onSendToPharmacy={handleSendToPharmacy}
            isSending={sending || saving || loading}
            disabled={isDisabled}
          />

        </div>

      )}


      {/* Reusable Consultation Footer */}

      <ConsultationFooter
        tab="prescription"
        onBack={handleFooterBack}
        onSaveDraft={handleFooterSaveDraft}
        onNext={handleFooterNext}
        disabled={isDisabled}
        loading={saving}
      />

    </div>

  );
};


export default Prescription;
