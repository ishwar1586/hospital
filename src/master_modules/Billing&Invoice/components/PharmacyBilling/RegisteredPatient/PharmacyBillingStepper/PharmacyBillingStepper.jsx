// src/master_modules/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PharmacyBillingStepper/PharmacyBillingStepper.jsx

import React from "react";
import pharmacyBillingStepperConfig from "@/master_modules/Billing&Invoice/config/pharmacyBillingStepper.config.js";
import "./PharmacyBillingStepper.css";
const PharmacyBillingStepper = ({
  currentStep = 1,
  onStepChange,
}) => {
  const config = pharmacyBillingStepperConfig;

  const steps = Array.isArray(config?.steps)
    ? config.steps
    : [];

  const handleStepClick = (step) => {
    if (!step?.enabled) {
      return;
    }

    if (typeof onStepChange === "function") {
      onStepChange(step);
    }
  };

  return (
    <div className="pharmacy-billing-stepper">
      <div className="pharmacy-billing-stepper__track">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isActive =
            stepNumber === currentStep;

          const isCompleted =
            stepNumber < currentStep;

          const isClickable =
            step?.enabled === true;

          return (
            <React.Fragment key={step.id}>
              <button
                type="button"
                className={[
                  "pharmacy-billing-stepper__step",
                  isActive
                    ? "pharmacy-billing-stepper__step--active"
                    : "",
                  isCompleted
                    ? "pharmacy-billing-stepper__step--completed"
                    : "",
                  isClickable
                    ? "pharmacy-billing-stepper__step--clickable"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() =>
                  handleStepClick(step)
                }
                disabled={!isClickable}
                aria-current={
                  isActive ? "step" : undefined
                }
              >
                <span className="pharmacy-billing-stepper__number">
                  {stepNumber}
                </span>

                <span className="pharmacy-billing-stepper__label">
                  {step.label}
                </span>
              </button>

              {index < steps.length - 1 && (
                <span
                  className={[
                    "pharmacy-billing-stepper__connector",
                    stepNumber < currentStep
                      ? "pharmacy-billing-stepper__connector--completed"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PharmacyBillingStepper;