
/* =========================================
   PRESCRIPTION SERVICE
   OPD MODULE
========================================= */

import { searchMedicines } from "../mock/medicines.mock";

import {
  prescriptionMock,
} from "../mock/prescription.mock";

import {
  getLatestPreviousPrescription,
} from "../mock/previousPrescriptions.mock";

import {
  validatePrescription,
} from "../config/prescriptionValidation.config";


/* =========================================
   HELPER: GENERATE UNIQUE ID
========================================= */

const generatePrescriptionId = () => {
  return `PRES-${Date.now()}`;
};

const generatePrescriptionNumber = () => {
  return `RX-${Date.now()}`;
};


/* =========================================
   HELPER: CLONE DATA
========================================= */

const cloneData = (data) => {
  return JSON.parse(JSON.stringify(data));
};


/* =========================================
   1. SEARCH MEDICINES
========================================= */

export const searchMedicinesService = async (searchTerm) => {
  try {
    if (!searchTerm?.trim()) {
      return [];
    }

    const results = searchMedicines(searchTerm);

    return cloneData(results);
  } catch (error) {
    console.error("Medicine Search Service Error:", error);
    throw new Error("Unable to search medicines.");
  }
};


/* =========================================
   2. LOAD PREVIOUS PRESCRIPTION
========================================= */

export const loadPreviousPrescriptionService = async ({
  patientId,
}) => {
  try {
    if (!patientId) {
      throw new Error("Patient ID is required.");
    }

    const previousPrescription =
      getLatestPreviousPrescription(patientId);

    if (!previousPrescription) {
      return null;
    }

    return cloneData(previousPrescription);
  } catch (error) {
    console.error("Previous Prescription Service Error:", error);
    throw error;
  }
};


/* =========================================
   3. GET ALL PRESCRIPTIONS
========================================= */

export const getAllPrescriptionsService = async () => {
  try {
    return cloneData(prescriptionMock);
  } catch (error) {
    console.error("Get Prescriptions Service Error:", error);
    throw new Error("Unable to fetch prescriptions.");
  }
};


/* =========================================
   4. GET PRESCRIPTION BY ID
========================================= */

export const getPrescriptionByIdService = async (
  prescriptionId
) => {
  try {
    const prescription = prescriptionMock.find(
      (item) => item.id === prescriptionId
    );

    return prescription ? cloneData(prescription) : null;
  } catch (error) {
    console.error("Get Prescription By ID Error:", error);
    throw new Error("Unable to fetch prescription.");
  }
};


/* =========================================
   5. GET PRESCRIPTIONS BY PATIENT
========================================= */

export const getPatientPrescriptionsService = async (
  patientId
) => {
  try {
    if (!patientId) {
      return [];
    }

    const prescriptions = prescriptionMock.filter(
      (item) => item.patient?.id === patientId
    );

    return cloneData(prescriptions);
  } catch (error) {
    console.error("Patient Prescriptions Service Error:", error);
    throw new Error("Unable to fetch patient prescriptions.");
  }
};


/* =========================================
   6. SAVE PRESCRIPTION
========================================= */

export const savePrescriptionService = async (payload) => {
  try {
    const validation = validatePrescription(payload);

    if (!validation.isValid) {
      const error = new Error(
        "Prescription validation failed."
      );

      error.validationErrors = validation.errors;

      throw error;
    }

    const now = new Date().toISOString();

    const newPrescription = {
      id: generatePrescriptionId(),
      prescriptionNo: generatePrescriptionNumber(),

      patient: {
        id: payload.patientId,
        ...(payload.patient || {}),
      },

      doctor: {
        id: payload.doctorId,
        ...(payload.doctor || {}),
      },

      consultation: {
        id: payload.consultationId,
        ...(payload.consultation || {}),
      },

      medicines: cloneData(payload.medicines || []),

      additionalInstructions:
        payload.additionalInstructions || "",

      followUp: cloneData(
        payload.followUp || {
          date: "",
          type: "",
        }
      ),

      status: "saved",
      pharmacyStatus: "not-sent",

      createdAt: now,
      updatedAt: now,
    };

    prescriptionMock.push(newPrescription);

    return {
      success: true,
      message: "Prescription saved successfully.",
      data: cloneData(newPrescription),
    };
  } catch (error) {
    console.error("Save Prescription Service Error:", error);
    throw error;
  }
};


/* =========================================
   7. SEND PRESCRIPTION TO PHARMACY
========================================= */

export const sendPrescriptionToPharmacyService = async (
  payload
) => {
  try {
    let prescription = null;

    // Find existing saved prescription if ID is supplied.
    if (payload.prescriptionId) {
      prescription = prescriptionMock.find(
        (item) => item.id === payload.prescriptionId
      );

      if (!prescription) {
        throw new Error("Prescription record not found.");
      }
    }

    // If not saved earlier, validate and save it first.
    if (!prescription) {
      const saveResult =
        await savePrescriptionService(payload);

      prescription = prescriptionMock.find(
        (item) => item.id === saveResult.data.id
      );
    }

    if (prescription.pharmacyStatus === "sent") {
      throw new Error(
        "This prescription has already been sent to pharmacy."
      );
    }

    prescription.pharmacyStatus = "sent";
    prescription.status = "saved";
    prescription.sentToPharmacyAt = new Date().toISOString();
    prescription.updatedAt = new Date().toISOString();

    return {
      success: true,
      message: "Prescription sent to pharmacy successfully.",
      data: cloneData(prescription),
    };
  } catch (error) {
    console.error("Send To Pharmacy Service Error:", error);
    throw error;
  }
};


/* =========================================
   8. UPDATE PRESCRIPTION
========================================= */

export const updatePrescriptionService = async (
  prescriptionId,
  payload
) => {
  try {
    const index = prescriptionMock.findIndex(
      (item) => item.id === prescriptionId
    );

    if (index === -1) {
      throw new Error("Prescription record not found.");
    }

    const existingPrescription = prescriptionMock[index];

    if (existingPrescription.pharmacyStatus === "sent") {
      throw new Error(
        "A prescription already sent to pharmacy cannot be edited here."
      );
    }

    const validation = validatePrescription(payload);

    if (!validation.isValid) {
      const error = new Error(
        "Prescription validation failed."
      );

      error.validationErrors = validation.errors;

      throw error;
    }

    prescriptionMock[index] = {
      ...existingPrescription,

      medicines: cloneData(payload.medicines || []),

      additionalInstructions:
        payload.additionalInstructions || "",

      followUp: cloneData(
        payload.followUp || {
          date: "",
          type: "",
        }
      ),

      updatedAt: new Date().toISOString(),
    };

    return {
      success: true,
      message: "Prescription updated successfully.",
      data: cloneData(prescriptionMock[index]),
    };
  } catch (error) {
    console.error("Update Prescription Service Error:", error);
    throw error;
  }
};
