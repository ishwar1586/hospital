import React, { useState } from "react";

const DoctorProfileCell = ({
    doctor,
}) => {
    const [imageError, setImageError] =
        useState(false);

    const name =
        doctor?.name ??
        "Unknown Doctor";

    const doctorId =
        doctor?.doctorId ??
        doctor?.id ??
        "—";

    const profileImage =
        doctor?.profileImage;

    const getInitials = (value) => {
        return String(value)
            .replace(/^Dr\.\s*/i, "")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(
                (part) =>
                    part.charAt(0).toUpperCase()
            )
            .join("");
    };

    return (
        <div className="doctor-table-row__profile">
            {profileImage && !imageError ? (
                <img
                    src={profileImage}
                    alt={name}
                    className="doctor-table-row__profile-image"
                    loading="lazy"
                    onError={() =>
                        setImageError(true)
                    }
                />
            ) : (
                <div
                    className="doctor-table-row__profile-fallback"
                    aria-hidden="true"
                >
                    {getInitials(name)}
                </div>
            )}

            <div className="doctor-table-row__profile-info">
                <span className="doctor-table-row__profile-name">
                    {name}
                </span>

                <span className="doctor-table-row__profile-id">
                    {doctorId}
                </span>
            </div>
        </div>
    );
};

export default DoctorProfileCell;