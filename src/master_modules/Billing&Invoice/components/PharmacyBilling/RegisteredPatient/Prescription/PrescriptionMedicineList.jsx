import React from "react";

import PrescriptionMedicineRow from "./PrescriptionMedicineRow";

const PrescriptionMedicineList = ({
  medicines = [],
  config = {},
}) => {
  /*
   * ---------------------------------------------------------
   * SAFE MEDICINE LIST
   * ---------------------------------------------------------
   */

  const medicineList = Array.isArray(medicines)
    ? medicines
    : [];

  /*
   * ---------------------------------------------------------
   * MEDICINE FIELDS
   * ---------------------------------------------------------
   */

  const fields = Array.isArray(
    config?.fields
  )
    ? config.fields
    : [];

  /*
   * ---------------------------------------------------------
   * EMPTY STATE
   * ---------------------------------------------------------
   */

  if (medicineList.length === 0) {
    return (
      <div className="opd-prescription__medicine-empty">

        <span className="opd-prescription__medicine-empty-title">
          {config?.emptyTitle ||
            "No medicines prescribed"}
        </span>

        <span className="opd-prescription__medicine-empty-text">
          {config?.emptyMessage ||
            "No medicine has been added to this prescription."}
        </span>

      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * MEDICINE LIST
   * ---------------------------------------------------------
   */

  return (
    <div className="opd-prescription__medicine-list">

      {medicineList.map((medicine, index) => (
        <PrescriptionMedicineRow
          key={
            medicine?.id ||
            `medicine-${index}`
          }
          medicine={medicine}
          fields={fields}
        />
      ))}

    </div>
  );
};

export default PrescriptionMedicineList;