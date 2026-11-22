import React, { useState } from "react";

import "./DoctorProfileSummary.css";


const DoctorProfileSummary = ({
    doctor,
}) => {

    const [imageError, setImageError] =
        useState(false);


    if (!doctor) {
        return null;
    }


    // =========================================
    // DOCTOR DATA
    // =========================================

    const doctorName =
        doctor?.name ||
        [
            doctor?.firstName,
            doctor?.lastName,
        ]
            .filter(Boolean)
            .join(" ") ||
        "Doctor";


    const qualification =
        doctor?.qualification ||
        "—";


    const department =
        doctor?.departmentName ||
        doctor?.department ||
        "—";


    const profileImage =
        doctor?.profileImage ||
        doctor?.photo ||
        doctor?.avatar ||
        null;


    // =========================================
    // STATUS
    // =========================================

    const rawStatus =
        String(
            doctor?.status || ""
        ).toLowerCase();


    const statusLabel =
        rawStatus
            ? rawStatus
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, (letter) =>
                    letter.toUpperCase()
                )
            : "Unknown";


    const isActive =
        rawStatus === "active";


    // =========================================
    // INITIALS FALLBACK
    // =========================================

    const getInitials = () => {

        const first =
            doctor?.firstName?.charAt(0) ||
            doctorName
                .replace(/^Dr\.?\s*/i, "")
                .split(" ")[0]
                ?.charAt(0);


        const last =
            doctor?.lastName?.charAt(0) ||
            doctorName
                .replace(/^Dr\.?\s*/i, "")
                .split(" ")
                .slice(-1)[0]
                ?.charAt(0);


        return (
            `${first || ""}${last || ""}`
        ).toUpperCase();
    };


    return (
        <section
            className="
                doctor-profile-summary
            "
        >

            {/* =====================================
                AVATAR
            ===================================== */}

            <div
                className="
                    doctor-profile-summary__avatar
                "
            >

                {profileImage &&
                !imageError ? (

                    <img
                        src={profileImage}
                        alt={doctorName}
                        className="
                            doctor-profile-summary__image
                        "
                        onError={() =>
                            setImageError(true)
                        }
                    />

                ) : (

                    <span
                        className="
                            doctor-profile-summary__initials
                        "
                    >
                        {getInitials()}
                    </span>

                )}

            </div>


            {/* =====================================
                INFORMATION
            ===================================== */}

            <div
                className="
                    doctor-profile-summary__info
                "
            >

                <h2
                    className="
                        doctor-profile-summary__name
                    "
                >
                    {doctorName}
                </h2>


                <p
                    className="
                        doctor-profile-summary__qualification
                    "
                >
                    {qualification}
                </p>


                <p
                    className="
                        doctor-profile-summary__department
                    "
                >
                    {department}
                </p>


                {/* =================================
                    STATUS
                ================================= */}

                <span
                    className={`
                        doctor-profile-summary__status

                        ${
                            isActive
                                ? "doctor-profile-summary__status--active"
                                : "doctor-profile-summary__status--inactive"
                        }
                    `}
                >

                    <span
                        className="
                            doctor-profile-summary__status-dot
                        "
                    />

                    {statusLabel}

                </span>

            </div>

        </section>
    );
};


export default DoctorProfileSummary;