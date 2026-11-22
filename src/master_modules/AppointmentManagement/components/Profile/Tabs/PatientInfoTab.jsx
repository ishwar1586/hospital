import React from "react";

import "./PatientInfoTab.css";

const PatientInfoTab = ({
    appointment,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return (
            <div className="patient-info-tab patient-info-tab--empty">
                <p>
                    Patient information is not available.
                </p>
            </div>
        );
    }

    // =========================================
    // Patient Data
    // =========================================

    const {
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
    // Render
    // =========================================

    return (
        <div className="patient-info-tab">

            {/* =====================================
                Patient Information
            ===================================== */}

            <section className="patient-info-tab__section">

                <div className="patient-info-tab__section-header">
                    <h3>
                        Patient Information
                    </h3>
                </div>

                <div className="patient-info-tab__grid">

                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Patient Name
                        </span>

                        <span className="patient-info-tab__value">
                            {patientName || "—"}
                        </span>
                    </div>


                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Patient ID
                        </span>

                        <span className="patient-info-tab__value">
                            {patientId || "—"}
                        </span>
                    </div>

                </div>

            </section>


            {/* =====================================
                Appointment Information
            ===================================== */}

            <section className="patient-info-tab__section">

                <div className="patient-info-tab__section-header">
                    <h3>
                        Appointment Information
                    </h3>
                </div>

                <div className="patient-info-tab__grid">

                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Appointment Type
                        </span>

                        <span className="patient-info-tab__value">
                            {appointmentType || "—"}
                        </span>
                    </div>


                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Department
                        </span>

                        <span className="patient-info-tab__value">
                            {department || "—"}
                        </span>
                    </div>


                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Doctor
                        </span>

                        <span className="patient-info-tab__value">
                            {doctorName || "—"}
                        </span>
                    </div>


                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Appointment Date
                        </span>

                        <span className="patient-info-tab__value">
                            {date || "—"}
                        </span>
                    </div>


                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Appointment Time
                        </span>

                        <span className="patient-info-tab__value">
                            {time || "—"}
                        </span>
                    </div>


                    <div className="patient-info-tab__item">
                        <span className="patient-info-tab__label">
                            Status
                        </span>

                        <span
                            className={`
                                patient-info-tab__status
                                patient-info-tab__status--${String(
                                    status || "unknown"
                                )
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                    .replace(/[^a-z0-9-]/g, "")}
                            `}
                        >
                            {status || "—"}
                        </span>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default PatientInfoTab;