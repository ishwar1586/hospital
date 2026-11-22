import React from "react";

const DoctorQualificationCell = ({
    doctor,
}) => {
    const qualification =
        doctor?.qualification ??
        "—";

    return (
        <span
            className="doctor-table-row__qualification"
            title={qualification}
        >
            {qualification}
        </span>
    );
};

export default DoctorQualificationCell;