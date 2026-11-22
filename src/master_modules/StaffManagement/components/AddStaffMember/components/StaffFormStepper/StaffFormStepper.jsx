
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./StaffFormStepper.css";

const DEFAULT_STEPS = [
  { id: 1, label: "Personal Information" },
  { id: 2, label: "Contact Information" },
  { id: 3, label: "Professional Details" },
  { id: 4, label: "Qualifications" },
  { id: 5, label: "Account Setup" },
];

const StaffFormStepper = ({
  steps = DEFAULT_STEPS,
  currentStep = 1,
  onStepClick,
}) => {
  return (
    <nav
      className="staff-form-stepper"
      aria-label="Staff onboarding progress"
    >
      <div className="staff-form-stepper__track">
        {steps.map((step, index) => {
          const stepNumber = step.id ?? index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isClickable =
            typeof onStepClick === "function" &&
            (isCompleted || stepNumber <= currentStep);

          return (
            <React.Fragment key={step.id ?? step.label}>
              <div
                className={[
                  "staff-form-stepper__item",
                  isActive && "staff-form-stepper__item--active",
                  isCompleted && "staff-form-stepper__item--completed",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <button
                  type="button"
                  className="staff-form-stepper__step"
                  onClick={() => {
                    if (isClickable) {
                      onStepClick(stepNumber);
                    }
                  }}
                  disabled={!isClickable}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={`${step.label}${isCompleted ? ", completed" : isActive ? ", current step" : ""}`}
                >
                  <span className="staff-form-stepper__indicator">
                    {isCompleted ? (
                      <CheckIcon fontSize="inherit" />
                    ) : (
                      stepNumber
                    )}
                  </span>

                  <span className="staff-form-stepper__label">
                    {step.label}
                  </span>
                </button>
              </div>

              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className={[
                    "staff-form-stepper__connector",
                    isCompleted &&
                      "staff-form-stepper__connector--completed",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default StaffFormStepper;
