import React from "react";

import "./AppointmentProgress.css";

const progressSteps = [
    {
        id: 1,
        label: "Patient Details",
    },
    {
        id: 2,
        label: "Appointment Details",
    },
    {
        id: 3,
        label: "Confirmation",
    },
    {
        id: 4,
        label: "Complete",
    },
];

const AppointmentProgress = ({
    currentStep = 1,
}) => {
    return (
        <div className="appointment-progress">
            {progressSteps.map((step, index) => {
                const isCompleted = step.id < currentStep;
                const isActive = step.id === currentStep;

                return (
                    <React.Fragment key={step.id}>
                        <div
                            className={[
                                "appointment-progress__step",
                                isActive
                                    ? "appointment-progress__step--active"
                                    : "",
                                isCompleted
                                    ? "appointment-progress__step--completed"
                                    : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            <span className="appointment-progress__number">
                                {isCompleted ? "✓" : step.id}
                            </span>

                            <span className="appointment-progress__label">
                                {step.label}
                            </span>
                        </div>

                        {index < progressSteps.length - 1 && (
                            <div
                                className={[
                                    "appointment-progress__line",
                                    step.id < currentStep
                                        ? "appointment-progress__line--completed"
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
    );
};

export default AppointmentProgress;