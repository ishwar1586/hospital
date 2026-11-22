import React, {
    useMemo,
} from "react";

import {
    DOCTOR_AVAILABILITY_CONFIG,
} from "@/master_modules/DoctorManagement/config/doctorConfig.js";

import "./DoctorOverviewTab.css";

const DoctorOverviewTab = ({
    doctor,
}) => {
    // =========================================================
    // OPD TIMING
    // =========================================================

    const opdTimingLabel =
        useMemo(() => {
            const opdTiming =
                doctor?.opdTiming;

            if (
                !opdTiming ||
                typeof opdTiming !==
                    "object"
            ) {
                return "—";
            }

            /*
             * Find the first available day.
             * The mock data contains the same working
             * timing for multiple weekdays, so we use
             * the first available schedule for the
             * compact overview display.
             */

            const availableDay =
                Object.values(
                    opdTiming
                ).find(
                    (day) =>
                        day?.available &&
                        day?.startTime &&
                        day?.endTime
                );

            if (!availableDay) {
                return "—";
            }

            return `${availableDay.startTime} - ${availableDay.endTime}`;
        }, [
            doctor?.opdTiming,
        ]);

    // =========================================================
    // AVAILABILITY LABEL
    // =========================================================

    const availabilityLabel =
        useMemo(() => {
            const value =
                doctor?.availability;

            const config =
                DOCTOR_AVAILABILITY_CONFIG?.[
                    value
                ];

            return (
                config?.label ??
                value ??
                "—"
            );
        }, [
            doctor?.availability,
        ]);

    // =========================================================
    // CONSULTATION FEE
    // =========================================================

    const consultationFee =
        doctor?.consultationFee;

    const consultationFeeLabel =
        consultationFee !==
            undefined &&
        consultationFee !==
            null &&
        consultationFee !==
            ""
            ? `₹ ${Number(
                  consultationFee
              ).toLocaleString(
                  "en-IN"
              )}`
            : "—";

    // =========================================================
    // DATA
    // =========================================================

    const doctorId =
        doctor?.doctorId ??
        doctor?.id ??
        "—";

    const department =
        doctor?.departmentName ??
        "—";

    const qualification =
        doctor?.qualification ??
        "—";

    const experience =
        doctor?.experienceLabel ??
        (
            doctor?.experience !==
                undefined &&
            doctor?.experience !==
                null
        )
            ? `${doctor.experience} Years`
            : "—";

    const specialization =
        doctor?.specialization ??
        "—";

    const registrationNumber =
        doctor?.registrationNumber ??
        "—";

    // =========================================================
    // INFO ROW
    // =========================================================

    const InfoRow = ({
        label,
        value,
        valueClassName = "",
    }) => {
        return (
            <div className="doctor-overview-tab__row">
                <div className="doctor-overview-tab__label">
                    {label}
                </div>

                <div
                    className={`
                        doctor-overview-tab__value
                        ${valueClassName}
                    `}
                    title={
                        typeof value ===
                        "string"
                            ? value
                            : undefined
                    }
                >
                    {value}
                </div>
            </div>
        );
    };

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <section className="doctor-overview-tab">
            <div className="doctor-overview-tab__content">

                <InfoRow
                    label="Doctor ID"
                    value={doctorId}
                />

                <InfoRow
                    label="Department"
                    value={department}
                />

                <InfoRow
                    label="Qualification"
                    value={qualification}
                />

                <InfoRow
                    label="Experience"
                    value={experience}
                />

                <InfoRow
                    label="Specialization"
                    value={specialization}
                />

                <InfoRow
                    label="Registration No."
                    value={
                        registrationNumber
                    }
                />

                <InfoRow
                    label="Consultation Fee"
                    value={
                        consultationFeeLabel
                    }
                />

                <InfoRow
                    label="OPD Timing"
                    value={
                        opdTimingLabel
                    }
                />

                <div className="doctor-overview-tab__row doctor-overview-tab__row--availability">
                    <div className="doctor-overview-tab__label">
                        Availability
                    </div>

                    <div className="doctor-overview-tab__value">
                        <span className="doctor-overview-tab__availability">
                            <span className="doctor-overview-tab__availability-dot" />

                            <span>
                                {
                                    availabilityLabel
                                }
                            </span>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DoctorOverviewTab;