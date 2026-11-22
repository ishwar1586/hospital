import React from "react";

import "./VisitInfoTab.css";

const VisitInfoTab = ({
    appointment,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return (
            <div className="visit-info-tab visit-info-tab--empty">
                <p>
                    Visit information is not available.
                </p>
            </div>
        );
    }

    // =========================================
    // Appointment Data
    // =========================================

    const {
        appointmentId,
        patientName,
        patientId,
        doctorName,
        department,
        appointmentType,
        date,
        time,
        status,
    } = appointment;

    // =========================================
    // Visit Information
    // =========================================

    const visitInformation = [
        {
            id: "appointment-id",
            label: "Appointment ID",
            value: appointmentId,
        },
        {
            id: "patient-id",
            label: "Patient ID",
            value: patientId,
        },
        {
            id: "patient-name",
            label: "Patient Name",
            value: patientName,
        },
        {
            id: "doctor",
            label: "Doctor",
            value: doctorName,
        },
        {
            id: "department",
            label: "Department",
            value: department,
        },
        {
            id: "appointment-type",
            label: "Appointment Type",
            value: appointmentType,
        },
        {
            id: "appointment-date",
            label: "Appointment Date",
            value: date,
        },
        {
            id: "appointment-time",
            label: "Appointment Time",
            value: time,
        },
    ];

    // =========================================
    // Status Class
    // =========================================

    const statusClass = String(
        status || "unknown"
    )
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

    // =========================================
    // Render
    // =========================================

    return (
        <div className="visit-info-tab">

            {/* =====================================
                Visit Overview
            ===================================== */}

            <section className="visit-info-tab__section">

                <div className="visit-info-tab__section-header">
                    <h3>
                        Visit Overview
                    </h3>
                </div>

                <div className="visit-info-tab__grid">

                    {visitInformation.map(
                        (item) => (
                            <div
                                key={item.id}
                                className="visit-info-tab__item"
                            >

                                <span className="visit-info-tab__label">
                                    {item.label}
                                </span>

                                <span className="visit-info-tab__value">
                                    {item.value || "—"}
                                </span>

                            </div>
                        )
                    )}

                </div>

            </section>


            {/* =====================================
                Appointment Status
            ===================================== */}

            <section className="visit-info-tab__section">

                <div className="visit-info-tab__section-header">
                    <h3>
                        Appointment Status
                    </h3>
                </div>

                <div className="visit-info-tab__status-wrapper">

                    <span className="visit-info-tab__label">
                        Current Status
                    </span>

                    <span
                        className={`
                            visit-info-tab__status
                            visit-info-tab__status--${statusClass}
                        `}
                    >
                        {status || "—"}
                    </span>

                </div>

            </section>

        </div>
    );
};

export default VisitInfoTab;