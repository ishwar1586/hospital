import React from "react";

import "./HistoryTab.css";

const HistoryTab = ({
    appointment,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return (
            <div className="appointment-history-tab appointment-history-tab--empty">
                <p>
                    Appointment history is not available.
                </p>
            </div>
        );
    }


    // =========================================
    // Current Appointment Information
    // =========================================

    const appointmentId =
        appointment?.appointmentId ||
        appointment?.id ||
        "—";

    const patientName =
        appointment?.patientName ||
        "—";

    const doctorName =
        appointment?.doctorName ||
        "—";

    const department =
        appointment?.department ||
        "—";

    const appointmentType =
        appointment?.appointmentType ||
        "—";

    const appointmentDate =
        appointment?.date ||
        "—";

    const appointmentTime =
        appointment?.time ||
        "—";

    const appointmentStatus =
        appointment?.status ||
        "—";


    // =========================================
    // Current Appointment History Entry
    // =========================================

    const currentHistory = {
        id: appointmentId,

        date: appointmentDate,

        time: appointmentTime,

        title: "Current Appointment",

        description: `${appointmentType} with ${doctorName}`,

        department,

        status: appointmentStatus,
    };


    // =========================================
    // Render
    // =========================================

    return (
        <div className="appointment-history-tab">

            {/* =====================================
                History Header
            ===================================== */}

            <section className="appointment-history-tab__section">

                <div className="appointment-history-tab__section-header">

                    <div>
                        <h3>
                            Appointment History
                        </h3>

                        <p>
                            Previous appointment activity
                            for this patient
                        </p>
                    </div>

                </div>


                {/* =================================
                    History Timeline
                ================================= */}

                <div className="appointment-history-tab__timeline">

                    <div
                        className="
                            appointment-history-tab__timeline-line
                        "
                    />

                    {/* =================================
                        History Item
                    ================================= */}

                    <div className="appointment-history-tab__item">

                        {/* Timeline Dot */}

                        <div
                            className="
                                appointment-history-tab__timeline-dot
                            "
                        />


                        {/* History Content */}

                        <div className="appointment-history-tab__card">

                            {/* Top Row */}

                            <div className="appointment-history-tab__card-top">

                                <div className="appointment-history-tab__date-wrapper">

                                    <span className="appointment-history-tab__date">
                                        {currentHistory.date}
                                    </span>

                                    <span className="appointment-history-tab__time">
                                        {currentHistory.time}
                                    </span>

                                </div>


                                <span
                                    className={`
                                        appointment-history-tab__status
                                        appointment-history-tab__status--${String(
                                            currentHistory.status
                                        )
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")
                                            .replace(
                                                /[^a-z0-9-]/g,
                                                ""
                                            )}
                                    `}
                                >
                                    {currentHistory.status}
                                </span>

                            </div>


                            {/* Title */}

                            <h4 className="appointment-history-tab__title">
                                {currentHistory.title}
                            </h4>


                            {/* Description */}

                            <p className="appointment-history-tab__description">
                                {currentHistory.description}
                            </p>


                            {/* Metadata */}

                            <div className="appointment-history-tab__meta">

                                <div className="appointment-history-tab__meta-item">

                                    <span className="appointment-history-tab__meta-label">
                                        Department
                                    </span>

                                    <span className="appointment-history-tab__meta-value">
                                        {currentHistory.department}
                                    </span>

                                </div>


                                <div className="appointment-history-tab__meta-item">

                                    <span className="appointment-history-tab__meta-label">
                                        Appointment ID
                                    </span>

                                    <span className="appointment-history-tab__meta-value">
                                        {currentHistory.id}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================
                Patient Reference
            ===================================== */}

            <section className="appointment-history-tab__section">

                <div className="appointment-history-tab__patient-reference">

                    <span className="appointment-history-tab__patient-reference-label">
                        Patient
                    </span>

                    <span className="appointment-history-tab__patient-reference-value">
                        {patientName}
                    </span>

                </div>

            </section>

        </div>
    );
};

export default HistoryTab;