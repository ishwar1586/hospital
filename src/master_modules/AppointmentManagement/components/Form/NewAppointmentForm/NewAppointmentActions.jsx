import React from "react";

import "./NewAppointmentActions.css";

const NewAppointmentActions = ({
    onCancel,
    onBack,
    onNext,
    showBackButton = false,
    nextLabel = "Next: Review & Confirm",
}) => {
    const handleCancel = () => {
        if (typeof onCancel === "function") {
            onCancel();
        }
    };

    const handleBack = () => {
        if (typeof onBack === "function") {
            onBack();
        }
    };

    const handleNext = () => {
        if (typeof onNext === "function") {
            onNext();
        }
    };

    return (
        <div className="new-appointment-actions">
            <div className="new-appointment-actions__left">
                <button
                    type="button"
                    className="new-appointment-actions__cancel-button"
                    onClick={handleCancel}
                >
                    <span className="new-appointment-actions__cancel-icon">
                        ×
                    </span>

                    Cancel
                </button>
            </div>

            <div className="new-appointment-actions__right">
                {showBackButton && (
                    <button
                        type="button"
                        className="new-appointment-actions__back-button"
                        onClick={handleBack}
                    >
                        <span className="new-appointment-actions__back-icon">
                            ←
                        </span>

                        Back
                    </button>
                )}

                <button
                    type="button"
                    className="new-appointment-actions__next-button"
                    onClick={handleNext}
                >
                    {nextLabel}

                    <span className="new-appointment-actions__next-icon">
                        →
                    </span>
                </button>
            </div>
        </div>
    );
};

export default NewAppointmentActions;