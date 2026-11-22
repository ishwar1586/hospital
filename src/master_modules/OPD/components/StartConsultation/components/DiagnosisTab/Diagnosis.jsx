
import React, { useCallback, useEffect, useState } from "react";

import ProvisionalDiagnosis from "./components/ProvisionalDiagnosis/ProvisionalDiagnosis";
import FinalDiagnosis from "./components/FinalDiagnosis/FinalDiagnosis";
import DifferentialDiagnosis from "./components/DifferentialDiagnosis/DifferentialDiagnosis";
import ClinicalAssessment from "./components/ClinicalAssessment/ClinicalAssessment";

import ConsultationFooter from "../ConsultationFooter/ConsultationFooter";

import { diagnosisConfig } from "../../config/diagnosis.config";
import { diagnosisValidationConfig } from "../../config/diagnosisValidation.config";
import { initialDiagnosisData } from "../../mock/diagnosis.mock";

import "./Diagnosis.css";

const Diagnosis = ({
  initialData,
  patientId = "",
  consultationId = "",
  onChange,
  onBack,
  onSaveDraft,
  onNext,
  disabled = false,
}) => {
  const [diagnosisData, setDiagnosisData] = useState(() => ({
    ...initialDiagnosisData,
    ...(initialData?.diagnosis || initialData || {}),
  }));

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync diagnosis data when patient or initial data changes.
  useEffect(() => {
    const incomingData = initialData?.diagnosis || initialData || {};

    setDiagnosisData({
      ...initialDiagnosisData,
      ...incomingData,
    });

    setErrors({});
  }, [patientId, consultationId, initialData]);

  // Common field change handler.
  const handleFieldChange = useCallback(
    (field, value) => {
      const updatedData = {
        ...diagnosisData,
        [field]: value,
      };

      setDiagnosisData(updatedData);

      if (errors[field]) {
        setErrors((previous) => ({
          ...previous,
          [field]: "",
        }));
      }

      onChange?.(updatedData);
    },
    [diagnosisData, errors, onChange]
  );

  // Validate all diagnosis fields.
  const validateDiagnosis = useCallback(() => {
    const validationErrors = {};

    Object.entries(diagnosisValidationConfig).forEach(
      ([field, rules]) => {
        const value = diagnosisData[field] || "";

        if (rules.required && !value.trim()) {
          validationErrors[field] =
            rules.requiredMessage || "This field is required.";
          return;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
          validationErrors[field] = rules.message;
        }
      }
    );

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  }, [diagnosisData]);

  // Save diagnosis as draft.
  const handleSaveDraft = async () => {
    if (disabled || isSubmitting) return;

    try {
      setIsSubmitting(true);

      await onSaveDraft?.({
        patientId,
        consultationId,
        diagnosis: diagnosisData,
      });
    } catch (error) {
      console.error("Failed to save diagnosis draft:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Move to next consultation tab.
  const handleNext = () => {
    if (disabled || isSubmitting) return;

    const isValid = validateDiagnosis();

    if (!isValid) return;

    onNext?.({
      patientId,
      consultationId,
      diagnosis: diagnosisData,
    });
  };

  const isDisabled = disabled || isSubmitting;

  return (
    <div className="diagnosis-tab">
      <div className="diagnosis-tab__header">
        <div className="diagnosis-tab__header-content">
          <h2 className="diagnosis-tab__title">
            {diagnosisConfig.title}
          </h2>

          <p className="diagnosis-tab__description">
            {diagnosisConfig.description}
          </p>
        </div>
      </div>

      <div className="diagnosis-tab__sections">
        <ProvisionalDiagnosis
          value={diagnosisData.provisionalDiagnosis}
          onChange={(value) =>
            handleFieldChange("provisionalDiagnosis", value)
          }
          error={errors.provisionalDiagnosis}
          disabled={isDisabled}
        />

        <FinalDiagnosis
          value={diagnosisData.finalDiagnosis}
          onChange={(value) =>
            handleFieldChange("finalDiagnosis", value)
          }
          error={errors.finalDiagnosis}
          disabled={isDisabled}
        />

        <DifferentialDiagnosis
          value={diagnosisData.differentialDiagnosis}
          onChange={(value) =>
            handleFieldChange("differentialDiagnosis", value)
          }
          error={errors.differentialDiagnosis}
          disabled={isDisabled}
        />

        <ClinicalAssessment
          value={diagnosisData.clinicalAssessment}
          onChange={(value) =>
            handleFieldChange("clinicalAssessment", value)
          }
          error={errors.clinicalAssessment}
          disabled={isDisabled}
        />
      </div>

      <div className="diagnosis-tab__footer">
        <ConsultationFooter
          tab="diagnosis"
          onBack={onBack}
          onSaveDraft={handleSaveDraft}
          onNext={handleNext}
          disabled={isDisabled}
          loading={isSubmitting}
        />
      </div>
    </div>
  );
};

export default Diagnosis;
