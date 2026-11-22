// src/features/IPDManagement/components/TransferPatient/TransferPatientStepper.jsx

import React from "react";

import {
  TRANSFER_PATIENT_STEPS,
} from "../../config/transferPatientConfig";

import "./TransferPatientStepper.css";

const TransferPatientStepper = ({
  currentStep = 1,
}) => {

  const steps = Array.isArray(
    TRANSFER_PATIENT_STEPS
  )
    ? TRANSFER_PATIENT_STEPS
    : [];

  return (
    <div className="ipd-transfer-patient-stepper">

      <div className="ipd-transfer-patient-stepper__list">

        {steps.map((step, index) => {

          const stepNumber = index + 1;

          const isActive =
            stepNumber === currentStep;

          const isCompleted =
            stepNumber < currentStep;

          return (
            <React.Fragment key={step.id}>

              <div
                className={[
                  "ipd-transfer-patient-stepper__item",

                  isActive
                    ? "ipd-transfer-patient-stepper__item--active"
                    : "",

                  isCompleted
                    ? "ipd-transfer-patient-stepper__item--completed"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >

                <div className="ipd-transfer-patient-stepper__circle">

                  {isCompleted ? (
                    "✓"
                  ) : (
                    stepNumber
                  )}

                </div>

                <div className="ipd-transfer-patient-stepper__label">

                  <span className="ipd-transfer-patient-stepper__title">
                    {step.label}
                  </span>

                </div>

              </div>


              {index < steps.length - 1 && (
                <div
                  className={[
                    "ipd-transfer-patient-stepper__line",

                    isCompleted
                      ? "ipd-transfer-patient-stepper__line--completed"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              )}

            </React.Fragment>
          );
        })}

      </div>

    </div>
  );
};

export default TransferPatientStepper;