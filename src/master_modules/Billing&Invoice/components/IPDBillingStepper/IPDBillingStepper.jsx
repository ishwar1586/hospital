
import React from "react";
import CheckOutlined from "@mui/icons-material/CheckOutlined";
import { ipdBillingStepperConfig as config } from "../../config/ipdBillingStepper.config";
import "./IPDBillingStepper.css";

export default function IPDBillingStepper({ currentStep = 1 }) {
  return (
    <nav
      className="ipd-shared-stepper"
      aria-label={config.ariaLabel}
    >
      {config.steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isComplete = stepNumber < currentStep;
        const Icon = step.icon;

        return (
          <React.Fragment key={step.id}>
            <div
              className={[
                "ipd-shared-stepper__step",
                isActive ? "is-active" : "",
                isComplete ? "is-complete" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={isActive ? "step" : undefined}
            >
              <span className="ipd-shared-stepper__circle">
                {isComplete ? (
                  <CheckOutlined fontSize="small" />
                ) : (
                  <Icon fontSize="small" />
                )}
              </span>

              <span className="ipd-shared-stepper__copy">
                <strong>{step.title}</strong>
                <small>{step.subtitle}</small>
              </span>
            </div>

            {index < config.steps.length - 1 && (
              <span
                className={[
                  "ipd-shared-stepper__line",
                  stepNumber < currentStep ? "is-complete" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
