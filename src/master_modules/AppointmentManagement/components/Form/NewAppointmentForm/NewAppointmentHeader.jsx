import React from "react";

import AppointmentProgress from "./AppointmentProgress";

import "./NewAppointmentHeader.css";

const NewAppointmentHeader = ({
    currentStep = 1,
    onBack,
}) => {
    const handleBack = () => {
        if (typeof onBack === "function") {
            onBack();
        }
    };

    return (
        <header className="new-appointment-header">
            <div className="new-appointment-header__left">
                <button
                    type="button"
                    className="new-appointment-header__back-button"
                    onClick={handleBack}
                    aria-label="Go back"
                >
                    <span className="new-appointment-header__back-icon">
                        ←
                    </span>
                </button>

                <div className="new-appointment-header__heading">
                    <h1 className="new-appointment-header__title">
                        New Appointment
                    </h1>

                    <p className="new-appointment-header__subtitle">
                        Book a new appointment for a patient
                    </p>
                </div>
            </div>

            <div className="new-appointment-header__progress">
                <AppointmentProgress
                    currentStep={currentStep}
                />
            </div>
        </header>
    );
};

export default NewAppointmentHeader;