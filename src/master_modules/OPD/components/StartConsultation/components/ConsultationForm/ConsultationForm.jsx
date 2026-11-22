
import React, { useCallback, useEffect, useState } from "react";

import ChiefComplaints from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/components/ChiefComplaints/ChiefComplaints";

import PresentIllness from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/components/PresentIllness/PresentIllness";

import PastHistory from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/components/PastHistory/PastHistory";

import FamilyHistory from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/components/FamilyHistory/FamilyHistory";

import PersonalSocialHistory from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/components/PersonalSocialHistory/PersonalSocialHistory";

import ExaminationFindings from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/components/ExaminationFindings/ExaminationFindings";

import VitalsForm from "@/master_modules/OPD/components/StartConsultation/components/ConsultationForm/components/VitalsForm/VitalsForm";

// Reusable Footer
import ConsultationFooter from "@/master_modules/OPD/components/StartConsultation/components/ConsultationFooter/ConsultationFooter";

import { createInitialConsultationForm } from "../../mock/consultationForm.mock";

import { consultationValidationConfig } from "../../config/consultationValidation.config";

import "./ConsultationForm.css";

// ----------------------------------
// Form data helper
// ----------------------------------

const buildFormData = (initialData = {}) => {
  const initial = createInitialConsultationForm();

  return {
    ...initial,
    ...initialData,

    examinationFindings: {
      ...initial.examinationFindings,
      ...(initialData?.examinationFindings || {}),

      systemicExamination: {
        ...initial.examinationFindings.systemicExamination,
        ...(initialData?.examinationFindings?.systemicExamination || {}),
      },
    },

    vitals: {
      ...initial.vitals,
      ...(initialData?.vitals || {}),
    },
  };
};

// ----------------------------------
// Main Component
// ----------------------------------

const ConsultationForm = ({
  patientId = "",
  initialData = null,
  onSaveDraft,
  onNext,
  onChange,
  disabled = false,
}) => {
  const [formData, setFormData] = useState(() =>
    buildFormData(initialData)
  );

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // ----------------------------------
  // Patient change / Initial data sync
  // ----------------------------------

  useEffect(() => {
    const updatedForm = buildFormData(initialData);

    setFormData(updatedForm);
    setErrors({});
    setSaveMessage("");
    setIsSubmitting(false);
  }, [patientId, initialData]);

  // ----------------------------------
  // Update form fields
  // ----------------------------------

  const handleFieldChange = useCallback(
    (field, value) => {
      setFormData((previous) => {
        const updated = {
          ...previous,
          [field]: value,
        };

        onChange?.(updated);

        return updated;
      });

      setErrors((previous) => {
        const updated = { ...previous };

        delete updated[field];

        return updated;
      });

      setSaveMessage("");
    },
    [onChange]
  );

  // ----------------------------------
  // Validation
  // ----------------------------------

  const validateForm = () => {
    const nextErrors = {};
    const rules = consultationValidationConfig;

    // Chief Complaints

    const complaints = String(
      formData.chiefComplaints || ""
    ).trim();

    const complaintRules = rules.chiefComplaints;

    if (complaintRules.required && !complaints) {
      nextErrors.chiefComplaints = complaintRules.message;
    } else if (
      complaints.length > 0 &&
      complaints.length < complaintRules.minLength
    ) {
      nextErrors.chiefComplaints =
        `Enter at least ${complaintRules.minLength} characters.`;
    } else if (complaints.length > complaintRules.maxLength) {
      nextErrors.chiefComplaints =
        `Maximum ${complaintRules.maxLength} characters allowed.`;
    }

    // Present Illness

    const presentIllness = String(
      formData.presentIllness || ""
    ).trim();

    const illnessRules = rules.presentIllness;

    if (presentIllness.length > illnessRules.maxLength) {
      nextErrors.presentIllness =
        `Maximum ${illnessRules.maxLength} characters allowed.`;
    }

    // Family History

    const familyHistory = String(
      formData.familyHistory || ""
    ).trim();

    const familyRules = rules.familyHistory;

    if (familyHistory.length > familyRules.maxLength) {
      nextErrors.familyHistory =
        `Maximum ${familyRules.maxLength} characters allowed.`;
    }

    // Personal & Social History

    const personalHistory = String(
      formData.personalSocialHistory || ""
    ).trim();

    const personalRules = rules.personalSocialHistory;

    if (personalHistory.length > personalRules.maxLength) {
      nextErrors.personalSocialHistory =
        `Maximum ${personalRules.maxLength} characters allowed.`;
    }

    // Examination Findings

    const examination = formData.examinationFindings || {};
    const examinationRules = rules.examinationFindings;
    const examinationErrors = {};

    if (
      examination.generalCondition &&
      !examinationRules.generalCondition.allowedValues.includes(
        examination.generalCondition
      )
    ) {
      examinationErrors.generalCondition =
        "Select a valid condition.";
    }

    if (
      examination.consciousnessLevel &&
      !examinationRules.consciousnessLevel.allowedValues.includes(
        examination.consciousnessLevel
      )
    ) {
      examinationErrors.consciousnessLevel =
        "Select a valid consciousness level.";
    }

    const otherFindings = String(
      examination.otherSystemicFindings || ""
    ).trim();

    if (
      otherFindings.length >
      examinationRules.otherSystemicFindings.maxLength
    ) {
      examinationErrors.otherSystemicFindings =
        `Maximum ${examinationRules.otherSystemicFindings.maxLength} characters allowed.`;
    }

    if (Object.keys(examinationErrors).length > 0) {
      nextErrors.examinationFindings = examinationErrors;
    }

    // Patient Vitals

    const vitalErrors = {};
    const vitalRules = rules.vitals;

    Object.entries(vitalRules).forEach(([field, fieldRules]) => {
      const value = formData.vitals?.[field];

      if (
        value === "" ||
        value === null ||
        value === undefined
      ) {
        return;
      }

      const stringValue = String(value).trim();

      if (fieldRules.type === "text") {
        if (
          fieldRules.maxLength &&
          stringValue.length > fieldRules.maxLength
        ) {
          vitalErrors[field] =
            `Maximum ${fieldRules.maxLength} characters allowed.`;
        }

        return;
      }

      if (fieldRules.type === "number") {
        const numericValue = Number(value);

        if (!Number.isFinite(numericValue)) {
          vitalErrors[field] = "Enter a valid number.";
          return;
        }

        if (numericValue < fieldRules.min) {
          vitalErrors[field] =
            `Minimum value is ${fieldRules.min}.`;
        } else if (numericValue > fieldRules.max) {
          vitalErrors[field] =
            `Maximum value is ${fieldRules.max}.`;
        }
      }
    });

    if (Object.keys(vitalErrors).length > 0) {
      nextErrors.vitals = vitalErrors;
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  // ----------------------------------
  // Save Draft
  // ----------------------------------

  const handleSaveDraft = async () => {
    if (disabled || isSubmitting) return;

    setIsSubmitting(true);
    setSaveMessage("");

    try {
      await onSaveDraft?.({
        patientId,
        formData,
      });

      setSaveMessage("Draft saved successfully.");
    } catch (error) {
      setSaveMessage(
        error?.message || "Unable to save draft. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ----------------------------------
  // Next: Diagnosis
  // ----------------------------------

  const handleNext = () => {
    if (disabled || isSubmitting) return;

    const isValid = validateForm();

    if (!isValid) {
      setSaveMessage("Please correct the highlighted fields.");
      return;
    }

    onNext?.({
      patientId,
      formData,
    });
  };

  // ----------------------------------
  // Clear All
  // ----------------------------------

  const handleClear = () => {
    if (disabled || isSubmitting) return;

    const initialForm = createInitialConsultationForm();

    setFormData(initialForm);
    setErrors({});
    setSaveMessage("");

    onChange?.(initialForm);
  };

  // ----------------------------------
  // Render
  // ----------------------------------

  return (
    <form
      className="consultation-form"
      onSubmit={(event) => event.preventDefault()}
      noValidate
    >
      {/* Consultation Notes */}

      <section className="consultation-form__section">
        <div className="consultation-form__grid">

          <div className="consultation-form__full-width">
            <ChiefComplaints
              value={formData.chiefComplaints}
              onChange={(value) =>
                handleFieldChange("chiefComplaints", value)
              }
              error={errors.chiefComplaints}
              disabled={disabled || isSubmitting}
            />
          </div>

          <div className="consultation-form__full-width">
            <PresentIllness
              value={formData.presentIllness}
              onChange={(value) =>
                handleFieldChange("presentIllness", value)
              }
              error={errors.presentIllness}
              disabled={disabled || isSubmitting}
            />
          </div>

          <div>
            <PastHistory
              value={formData.pastHistory}
              onChange={(value) =>
                handleFieldChange("pastHistory", value)
              }
              error={errors.pastHistory}
              disabled={disabled || isSubmitting}
            />
          </div>

          <div>
            <FamilyHistory
              value={formData.familyHistory}
              onChange={(value) =>
                handleFieldChange("familyHistory", value)
              }
              error={errors.familyHistory}
              disabled={disabled || isSubmitting}
            />
          </div>

          <div className="consultation-form__full-width">
            <PersonalSocialHistory
              value={formData.personalSocialHistory}
              onChange={(value) =>
                handleFieldChange("personalSocialHistory", value)
              }
              error={errors.personalSocialHistory}
              disabled={disabled || isSubmitting}
            />
          </div>

        </div>
      </section>

      {/* Clinical Examination */}

      <section className="consultation-form__section">
        <ExaminationFindings
          value={formData.examinationFindings}
          onChange={(value) =>
            handleFieldChange("examinationFindings", value)
          }
          errors={errors.examinationFindings || {}}
          disabled={disabled || isSubmitting}
        />
      </section>

      {/* Patient Vitals */}

      <section className="consultation-form__section">
        <VitalsForm
          value={formData.vitals}
          onChange={(value) =>
            handleFieldChange("vitals", value)
          }
          errors={errors.vitals || {}}
          disabled={disabled || isSubmitting}
        />
      </section>

      {/* Feedback Message */}

      {saveMessage && (
        <div
          className={`consultation-form__message ${
            saveMessage.startsWith("Please") ||
            saveMessage.startsWith("Unable")
              ? "consultation-form__message--error"
              : "consultation-form__message--success"
          }`}
          role="status"
          aria-live="polite"
        >
          <span className="consultation-form__message-dot" />
          {saveMessage}
        </div>
      )}

      {/* Reusable Dynamic Footer */}

      <ConsultationFooter
        tab="consultation"
        onClear={handleClear}
        onSaveDraft={handleSaveDraft}
        onNext={handleNext}
        disabled={disabled || isSubmitting}
        loading={isSubmitting}
      />

    </form>
  );
};

export default ConsultationForm;
