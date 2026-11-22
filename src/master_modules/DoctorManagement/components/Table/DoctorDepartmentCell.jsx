import React from "react";

const DoctorDepartmentCell = ({
    doctor,
}) => {
    // =========================================================
    // DEPARTMENT NAME
    // =========================================================

    const departmentName =
        doctor?.departmentName ??
        "—";

    return (
        <div className="doctor-table-row__department">
            {departmentName}
        </div>
    );
};

export default DoctorDepartmentCell;