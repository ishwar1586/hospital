// src/master_modules/RadiologyManagement/components/NewRadiologyOrder/NewRadiologyOrder.jsx

import React, { useMemo, useState } from "react";
import "./NewRadiologyOrder.css";

import { radiologyFormConfig } from "../../config/radiologyForm.config";
import { radiologyValidationConfig } from "../../config/radiologyValidation.config";

import { radiologyPatientsMock } from "../../mock/radiologyPatients.mock";
import { radiologyDoctorsMock } from "../../mock/radiologyDoctors.mock";
import { radiologyTestsMock } from "../../mock/radiologyTests.mock";
import { radiologyFormOptionsMock } from "../../mock/radiologyFormOptions.mock";

import PatientInformation from "@/master_modules/RadiologyManagement/components/NewRadiologyOrder/components/PatientInformation";
import ImagingStudySection from "@/master_modules/RadiologyManagement/components/NewRadiologyOrder/components/ImagingStudySection";
import ClinicalInformation from "@/master_modules/RadiologyManagement/components/NewRadiologyOrder/components/ClinicalInformation.jsx";
import OrderPrioritySection from "@/master_modules/RadiologyManagement/components/NewRadiologyOrder/components/OrderPrioritySection";
import OrderFormFooter from "@/master_modules/RadiologyManagement/components/NewRadiologyOrder/components/OrderFormFooter";

const createInitialFormData = () => ({
  patientId: "",
  patientName: "",
  modality: "",
  testId: "",
  testName: "",
  bodyPart: "",
  contrast: "not-required",
  orderingDoctorId: "",
  orderingDoctorName: "",
  clinicalIndication: "",
  relevantHistory: "",
  notes: "",
  priority: "routine",
  requestedDate: "",
  requestedTime: "",
});

const NewRadiologyOrder = ({
  onCancel,
  onSubmitOrder,
  onSaveDraft,
  patients = radiologyPatientsMock,
  doctors = radiologyDoctorsMock,
  tests = radiologyTestsMock,
  formOptions = radiologyFormOptionsMock,
}) => {
  const [formData, setFormData] = useState(createInitialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const modalities = useMemo(() => {
    const configured = formOptions?.modalities;

    if (Array.isArray(configured) && configured.length > 0) {
      return configured;
    }

    return [
      ...new Set(
        tests
          .map((test) => test.modality ?? test.modalityName)
          .filter(Boolean)
      ),
    ];
  }, [formOptions, tests]);

  const updateField = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setIsDirty(true);
    setSubmitError("");

    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSelectPatient = (patient) => {
    if (!patient) {
      setFormData((current) => ({
        ...current,
        patientId: "",
        patientName: "",
      }));

      setIsDirty(true);
      return;
    }

    setFormData((current) => ({
      ...current,
      patientId: String(patient.patientId ?? patient.id ?? ""),
      patientName: patient.name ?? patient.patientName ?? "",
    }));

    setErrors((current) => {
      const next = { ...current };
      delete next.patientId;
      return next;
    });

    setIsDirty(true);
  };

  const selectedPatient = patients.find(
    (patient) =>
      String(patient.patientId ?? patient.id ?? "") ===
      String(formData.patientId)
  );

  const validate = () => {
    const nextErrors = radiologyValidationConfig.validate(
      formData,
      radiologyFormConfig.validationMessages
    );

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!validate()) {
      const firstInvalidField = document.querySelector(
        ".new-radiology-order [aria-invalid='true']"
      );

      firstInvalidField?.focus();
      return;
    }

    if (typeof onSubmitOrder !== "function") {
      setSubmitError(
        "Order submission is not connected yet. Connect the order service before placing an order."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmitOrder({
        ...formData,
        status: "Pending",
      });
    } catch (error) {
      setSubmitError(
        error?.message ??
          radiologyFormConfig.validationMessages.submitFailed
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = async () => {
    setSubmitError("");

    if (typeof onSaveDraft !== "function") {
      setSubmitError("Save Draft is not connected yet.");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSaveDraft({ ...formData, status: "Draft" });
    } catch (error) {
      setSubmitError(error?.message ?? "Unable to save the draft.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="new-radiology-order">
      <div className="new-radiology-order__container">
        <header className="new-radiology-order__header">
          <div className="new-radiology-order__header-content">
            <button
              type="button"
              className="new-radiology-order__back-link"
              onClick={onCancel}
            >
              <span aria-hidden="true">←</span>
              Back to Radiology
            </button>

            <h1>{radiologyFormConfig.title}</h1>
            <p>{radiologyFormConfig.subtitle}</p>
          </div>

          <span className="new-radiology-order__header-badge">
            New Request
          </span>
        </header>

        <form
          id="new-radiology-order-form"
          className="new-radiology-order__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <PatientInformation
            config={radiologyFormConfig}
            patients={patients}
            selectedPatient={selectedPatient}
            onSelectPatient={handleSelectPatient}
            errors={errors}
          />

          <ImagingStudySection
            config={radiologyFormConfig}
            modalities={modalities}
            tests={tests}
            doctors={doctors}
            formData={formData}
            onChange={updateField}
            errors={errors}
          />

          <ClinicalInformation
            config={radiologyFormConfig}
            formData={formData}
            onChange={updateField}
            errors={errors}
          />

          <OrderPrioritySection
            config={radiologyFormConfig}
            formData={formData}
            onChange={updateField}
            errors={errors}
          />

          {submitError && (
            <div className="new-radiology-order__submit-error" role="alert">
              {submitError}
            </div>
          )}

          <OrderFormFooter
            config={radiologyFormConfig}
            onCancel={onCancel}
            onSaveDraft={handleSaveDraft}
            isSubmitting={isSubmitting}
            isDirty={isDirty}
          />
        </form>
      </div>
    </main>
  );
};

export default NewRadiologyOrder;