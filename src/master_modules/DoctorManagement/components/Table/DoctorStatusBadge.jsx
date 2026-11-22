import React from "react";

import {
    DOCTOR_STATUS_CONFIG,
} from "../../config/doctorConfig";

const DoctorStatusBadge = ({
    status,
}) => {
    const config =
        DOCTOR_STATUS_CONFIG?.[
            status
        ];

    const label =
        config?.label ??
        "Inactive";

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

export default DoctorStatusBadge;