// src/features/IPDManagement/components/DischargePatient/DischargePatientStepper.jsx

import React from "react";

import {
  DISCHARGE_PATIENT_STEPS,
} from "../../config/dischargePatientConfig";

import "./DischargePatientStepper.css";


const DischargePatientStepper = ({
  currentStep = 1,
}) => {
  return (
    <div className="ipd-discharge-patient-stepper">

      <div className="ipd-discharge-patient-stepper__track">

        {DISCHARGE_PATIENT_STEPS.map((step, index) => {

          const isActive =
            currentStep === step.step;

          const isCompleted =
            currentStep > step.step;

          const isLast =
            index === DISCHARGE_PATIENT_STEPS.length - 1;

          return (
            <React.Fragment key={step.id}>

              <div
                className={[
                  "ipd-discharge-patient-stepper__step",
                  isActive
                    ? "ipd-discharge-patient-stepper__step--active"
                    : "",
                  isCompleted
                    ? "ipd-discharge-patient-stepper__step--completed"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >

                <div className="ipd-discharge-patient-stepper__circle">

                  {isCompleted ? (
                    <span className="material-symbols-outlined">
                      check
                    </span>
                  ) : (
                    step.step
                  )}

                </div>


                <div className="ipd-discharge-patient-stepper__label">
                  {step.label}
                </div>

              </div>


              {!isLast && (
                <div
                  className={[
                    "ipd-discharge-patient-stepper__line",
                    currentStep > step.step
                      ? "ipd-discharge-patient-stepper__line--completed"
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


export default DischargePatientStepper;