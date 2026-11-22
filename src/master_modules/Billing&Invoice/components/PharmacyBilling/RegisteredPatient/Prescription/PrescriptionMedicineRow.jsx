import React from "react";

const PrescriptionMedicineRow = ({
  medicine = null,
  fields = [],
}) => {
  /*
   * ---------------------------------------------------------
   * SAFETY CHECK
   * ---------------------------------------------------------
   */

  if (!medicine) {
    return null;
  }

  /*
   * ---------------------------------------------------------
   * SAFE FIELDS
   * ---------------------------------------------------------
   */

  const medicineFields = Array.isArray(fields)
    ? fields
    : [];

  /*
   * ---------------------------------------------------------
   * GET FIELD VALUE
   * ---------------------------------------------------------
   */

  const getFieldValue = (field) => {
    if (!field?.field) {
      return "-";
    }

    const value = medicine?.[field.field];

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return "-";
    }

    return value;
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <div className="opd-prescription__medicine-row">

      {medicineFields.map((field) => (
        <div
          key={
            field?.id ||
            field?.field
          }
          className="opd-prescription__medicine-field"
        >

          <span className="opd-prescription__medicine-label">
            {field?.label || "-"}
          </span>

          <span className="opd-prescription__medicine-value">
            {getFieldValue(field)}
          </span>

        </div>
      ))}

    </div>
  );
};

export default PrescriptionMedicineRow;