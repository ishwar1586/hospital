import React from "react";

import "./AppointmentDetailsSummary.css";

const AppointmentDetailsSummary = ({
    appointment,
}) => {
    // =========================================
    // Safe Appointment Data
    // =========================================

    const patientName =
        appointment?.patientName || "—";

    const patientId =
        appointment?.patientId || "—";

    const doctorName =
        appointment?.doctorName || "—";

    const department =
        appointment?.department || "—";

    const appointmentType =
        appointment?.appointmentType || "—";

    const appointmentDate =
        appointment?.date || "—";

    const appointmentTime =
        appointment?.time || "—";

    const duration =
        appointment?.duration || "15 mins";

    const tokenNumber =
        appointment?.tokenNumber ||
        appointment?.tokenNo ||
        "—";

    // =========================================
    // Render
    // =========================================

    return (
        <section className="appointment-details-summary">

            {/* =====================================
                Patient Summary
            ===================================== */}

            <div className="appointment-details-summary__patient-card">

                {/* Patient */}
                <div className="appointment-details-summary__patient-info">

                    <div className="appointment-details-summary__avatar">
                        {patientName
                            .charAt(0)
                            .toUpperCase()}
                    </div>

                    <div className="appointment-details-summary__patient-content">

                        <span className="appointment-details-summary__label">
                            Patient
                        </span>

                        <span className="appointment-details-summary__value">
                            {patientName}
                        </span>

                    </div>

                </div>

                {/* Patient ID */}
                <div className="appointment-details-summary__patient-meta">

                    <span className="appointment-details-summary__label">
                        Patient ID
                    </span>

                    <span className="appointment-details-summary__value">
                        {patientId}
                    </span>

                </div>

            </div>


            {/* =====================================
                Appointment Information
            ===================================== */}

            <div className="appointment-details-summary__appointment-card">

                {/* =================================
                    Department
                ================================= */}

                <div className="appointment-details-summary__item">

                    <span className="appointment-details-summary__label">
                        Department
                    </span>

                    <span className="appointment-details-summary__value">
                        {department}
                    </span>

                </div>


                {/* =================================
                    Date & Time
                ================================= */}

                <div className="appointment-details-summary__item">

                    <span className="appointment-details-summary__label">
                        Date & Time
                    </span>

                    <span className="appointment-details-summary__value">
                        {appointmentDate},{" "}
                        {appointmentTime}
                    </span>

                </div>


                {/* =================================
                    Doctor
                ================================= */}

                <div className="appointment-details-summary__item">

                    <span className="appointment-details-summary__label">
                        Doctor
                    </span>

                    <span className="appointment-details-summary__value">
                        {doctorName}
                    </span>

                </div>


                {/* =================================
                    Duration
                ================================= */}

                <div className="appointment-details-summary__item">

                    <span className="appointment-details-summary__label">
                        Duration
                    </span>

                    <span className="appointment-details-summary__value">
                        {duration}
                    </span>

                </div>


                {/* =================================
                    Appointment Type
                ================================= */}

                <div className="appointment-details-summary__item">

                    <span className="appointment-details-summary__label">
                        Appointment Type
                    </span>

                    <span className="appointment-details-summary__value">
                        {appointmentType}
                    </span>

                </div>


                {/* =================================
                    Token Number
                ================================= */}

                <div className="appointment-details-summary__item">

                    <span className="appointment-details-summary__label">
                        Token No.
                    </span>

                    <span className="appointment-details-summary__value">
                        {tokenNumber}
                    </span>

                </div>

            </div>

        </section>
    );
};

export default AppointmentDetailsSummary;