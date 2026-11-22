
import React, { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import StaffFormHeader from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffFormHeader";
import StaffFormFooter from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffFormFooter";
import StaffFormStepper from "@/master_modules/StaffManagement/components/AddStaffMember/components/StaffFormStepper/StaffFormStepper.jsx";

import PersonalInformation from "@/master_modules/StaffManagement/components/AddStaffMember/components/steps/PersonalInformation";
import ContactInformation from "@/master_modules/StaffManagement/components/AddStaffMember/components/steps/ContactInformation";
import ProfessionalDetails from "@/master_modules/StaffManagement/components/AddStaffMember/components/steps/ProfessionalDetails";
import Qualifications from "@/master_modules/StaffManagement/components/AddStaffMember/components/steps/Qualifications";
import AccountSetup from "@/master_modules/StaffManagement/components/AddStaffMember/components/steps/AccountSetup";

import staffFormConfig from "@/master_modules/StaffManagement/config/staffForm.config.js";
import {
  staffValidationConfig,
  validateStaffStep,
  validateStaffForm,
} from "@/master_modules/StaffManagement/config/staffValidation.config";

import { createStaff } from "@/master_modules/StaffManagement/services/staff.service.js";

import "./AddStaffMember.css";

const STEP_COMPONENTS = {
  personalInformation: PersonalInformation,
  contactInformation: ContactInformation,
  professionalDetails: ProfessionalDetails,
  qualifications: Qualifications,
  accountSetup: AccountSetup,
};

const createInitialFormData = () => {
  const fields = Object.values(staffFormConfig.fields).flat();

  return Object.fromEntries(
    fields.map((field) => [
      field.name,
      field.type === "checkbox"
        ? false
        : field.name === "country"
          ? "India"
          : "",
    ])
  );
};

const AddStaffMember = ({
  onCancel,
  onSuccess,
  onSubmit,
  departments = [],
  designations = [],
}) => {
  const steps = staffFormConfig.steps || [];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(createInitialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const activeStep = steps[currentStep - 1];
  const StepComponent = STEP_COMPONENTS[activeStep?.key];

  // Config ke title ko stepper ke expected label mein map karna.
  const stepperSteps = steps.map((step) => ({
    id: step.id,
    label: step.title,
  }));

  const getStepErrors = (stepKey, values = formData) => {
    return validateStaffStep(
      stepKey,
      values,
      staffValidationConfig
    );
  };

  const validateCurrentStep = () => {
    if (!activeStep) return false;

    const stepErrors = getStepErrors(activeStep.key);

    const stepFields = staffFormConfig.fields[activeStep.key] || [];

    setTouched((previous) => ({
      ...previous,
      ...Object.fromEntries(
        stepFields.map((field) => [field.name, true])
      ),
    }));

    setErrors((previous) => {
      const updated = { ...previous };

      stepFields.forEach((field) => {
        delete updated[field.name];
      });

      return {
        ...updated,
        ...stepErrors,
      };
    });

    return Object.keys(stepErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    const nextValue = type === "checkbox" ? checked : value;

    const nextData = {
      ...formData,
      [name]: nextValue,
    };

    setFormData(nextData);
    setSubmitError("");

    if (touched[name]) {
      const fieldRules = Object.entries(staffValidationConfig)
        .flatMap(([stepKey, rules]) =>
          Object.entries(rules).map(([fieldName, rule]) => ({
            stepKey,
            fieldName,
            rule,
          }))
        )
        .find((item) => item.fieldName === name);

      if (fieldRules) {
        const nextErrors = getStepErrors(
          fieldRules.stepKey,
          nextData
        );

        setErrors((previous) => ({
          ...previous,
          [name]: nextErrors[name] || "",
          ...(name === "password" && touched.confirmPassword
            ? {
                confirmPassword:
                  nextErrors.confirmPassword || "",
              }
            : {}),
        }));
      }
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    const matchedStep = Object.entries(staffValidationConfig).find(
      ([, rules]) => Object.prototype.hasOwnProperty.call(rules, name)
    );

    if (!matchedStep) return;

    const [stepKey] = matchedStep;
    const stepErrors = getStepErrors(stepKey);

    setErrors((previous) => ({
      ...previous,
      [name]: stepErrors[name] || "",
    }));
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;

    setCurrentStep((previous) =>
      Math.min(previous + 1, steps.length)
    );

    setSubmitError("");
  };

  const handleBack = () => {
    if (currentStep === 1) return;

    setCurrentStep((previous) => Math.max(previous - 1, 1));
    setSubmitError("");
  };

  const handleStepClick = (targetStep) => {
    if (targetStep < 1 || targetStep > steps.length) return;
    if (targetStep === currentStep) return;

    // Previous steps par direct ja sakte hain.
    if (targetStep < currentStep) {
      setCurrentStep(targetStep);
      return;
    }

    // Aage jump karne se pehle beech ke steps validate honge.
    for (let index = currentStep; index < targetStep; index += 1) {
      const step = steps[index - 1];

      if (!step) return;

      const stepErrors = getStepErrors(step.key);

      if (Object.keys(stepErrors).length > 0) {
        setCurrentStep(index);
        setErrors((previous) => ({
          ...previous,
          ...stepErrors,
        }));
        setTouched((previous) => ({
          ...previous,
          ...Object.fromEntries(
            Object.keys(stepErrors).map((name) => [name, true])
          ),
        }));
        return;
      }
    }

    setCurrentStep(targetStep);
  };

//   const handleFinalSubmit = async () => {
//     if (!validateCurrentStep()) return;

//     const allErrors = validateStaffForm(
//       formData,
//       staffValidationConfig
//     );

//     setErrors(allErrors);

//     if (Object.keys(allErrors).length > 0) {
//       const firstInvalidStep = steps.findIndex((step) => {
//         const stepFields = staffFormConfig.fields[step.key] || [];

//         return stepFields.some((field) => allErrors[field.name]);
//       });

//       if (firstInvalidStep >= 0) {
//         setCurrentStep(firstInvalidStep + 1);
//       }

//       setTouched((previous) => ({
//         ...previous,
//         ...Object.fromEntries(
//           Object.keys(allErrors).map((name) => [name, true])
//         ),
//       }));

//       return;
//     }

//     setLoading(true);
//     setSubmitError("");

//     try {
//       const {
//         confirmPassword,
//         ...payload
//       } = formData;

//       // Parent API handler available ho toh use karo,
//       // warna temporary mock service call hogi.
//       const result = onSubmit
//         ? await onSubmit(payload)
//         : await createStaffMember(payload);

//       onSuccess?.(result);
//     } catch (error) {
//       setSubmitError(
//         error?.message ||
//           "Staff member save nahi ho saka. Dobara try karo."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };


const handleFinalSubmit = async () => {
  if (!validateCurrentStep()) return;

  const allErrors = validateStaffForm(
    formData,
    staffValidationConfig
  );

  setErrors(allErrors);

  if (Object.keys(allErrors).length > 0) {
    const firstInvalidStep = steps.findIndex((step) => {
      const stepFields = staffFormConfig.fields[step.key] || [];

      return stepFields.some((field) => allErrors[field.name]);
    });

    if (firstInvalidStep >= 0) {
      setCurrentStep(firstInvalidStep + 1);
    }

    setTouched((previous) => ({
      ...previous,
      ...Object.fromEntries(
        Object.keys(allErrors).map((name) => [name, true])
      ),
    }));

    return;
  }

  setLoading(true);
  setSubmitError("");

  try {
    const {
      confirmPassword,
      password,
      profilePhoto,
      sendWelcomeEmail,
      ...staffPayload
    } = formData;

    // Existing mock service ka createStaff() use hoga.
    const result = await createStaff({
      ...staffPayload,

      // Existing staff service in fields ko use karti hai.
      contact: {
        phone: staffPayload.phone || "",
        email: staffPayload.email || "",
      },

      // Password ko mock staff record mein save nahi karna.
    });

    onSuccess?.(result);
  } catch (error) {
    setSubmitError(
      error?.message || "Staff member create nahi ho saka."
    );
  } finally {
    setLoading(false);
  }
};


  if (!activeStep || !StepComponent) {
    return (
      <div className="add-staff-error">
        Form configuration incomplete hai. staffForm.config.js ke
        step keys check karo.
      </div>
    );
  }

  return (
    <main className="add-staff-page">
      <div className="add-staff-shell">
        <div className="add-staff-topbar">
          <StaffFormHeader
            title={staffFormConfig.title}
            subtitle={staffFormConfig.subtitle}
          />

          {onCancel && (
            <Button
              type="button"
              variant="outlined"
              color="inherit"
              startIcon={<CloseIcon />}
              onClick={onCancel}
              disabled={loading}
              className="add-staff-cancel"
            >
              Cancel
            </Button>
          )}
        </div>

        <section className="add-staff-card">
          <div className="add-staff-stepper">
            <StaffFormStepper
              steps={stepperSteps}
              currentStep={currentStep}
              onStepClick={handleStepClick}
            />
          </div>

          <div className="add-staff-content">
            {submitError && (
              <div
                className="add-staff-alert add-staff-alert-error"
                role="alert"
              >
                {submitError}
              </div>
            )}

            <StepComponent
              formData={formData}
              errors={errors}
              onChange={handleChange}
              onBlur={handleBlur}
              departments={departments}
              designations={designations}
              onProfilePhotoChange={(file) =>
                setFormData((previous) => ({
                  ...previous,
                  profilePhoto: file,
                }))
              }
            />
          </div>

          <StaffFormFooter
            currentStep={currentStep}
            totalSteps={steps.length}
            onBack={handleBack}
            onNext={handleNext}
            onSubmit={handleFinalSubmit}
            loading={loading}
            disableNext={loading}
            disableSubmit={loading}
            showBack={currentStep > 1}
          />
        </section>
      </div>
    </main>
  );
};

export default AddStaffMember;
