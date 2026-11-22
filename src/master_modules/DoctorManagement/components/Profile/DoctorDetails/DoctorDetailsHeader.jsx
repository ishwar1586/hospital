import React from "react";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import "./DoctorDetailsHeader.css";

const DoctorDetailsHeader = ({
    doctor,
    onEdit,
}) => {
    return (
        <header className="doctor-details-header">
            {/* =================================================
                TITLE
            ================================================= */}

            <div className="doctor-details-header__title">
                Doctor Details
            </div>

            {/* =================================================
                ACTION
            ================================================= */}

            <button
                type="button"
                className="doctor-details-header__edit-button"
                onClick={() => {
                    if (
                        typeof onEdit ===
                        "function"
                    ) {
                        onEdit(doctor);
                    }
                }}
            >
                <EditOutlinedIcon
                    className="doctor-details-header__edit-icon"
                />

                <span>
                    Edit
                </span>
            </button>
        </header>
    );
};

export default DoctorDetailsHeader;