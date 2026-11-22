import React from "react";

import {
    DOCTOR_AVAILABILITY_CONFIG,
} from "../../config/doctorConfig";

const DoctorAvailabilityBadge = ({
    availability,
}) => {
    const config =
        DOCTOR_AVAILABILITY_CONFIG?.[
            availability
        ];

    const label =
        config?.label ??
        "Unavailable";

    const variant =
        config?.variant ??
        "neutral";

    return (
        <span
            className={`
                doctor-table-row__badge
                doctor-table-row__badge--${variant}
            `}
            title={label}
        >
            <span
                className="doctor-table-row__badge-dot"
                aria-hidden="true"
            />

            <span>
                {label}
            </span>
        </span>
    );
};

export default DoctorAvailabilityBadge;