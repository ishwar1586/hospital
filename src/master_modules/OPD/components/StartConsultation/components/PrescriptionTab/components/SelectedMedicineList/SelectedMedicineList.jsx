
import React from "react";
import "./SelectedMedicineList.css";

const SelectedMedicineList = ({
  medicines = [],
  children,
}) => {
  if (!Array.isArray(medicines) || medicines.length === 0) {
    return null;
  }

  return (
    <section className="selected-medicine-list">
      <div className="selected-medicine-list__header">
        <div className="selected-medicine-list__heading">
          <h3 className="selected-medicine-list__title">
            Selected Medicines
          </h3>

          <span className="selected-medicine-list__count">
            {medicines.length}
          </span>
        </div>

        <p className="selected-medicine-list__description">
          Review and update prescribed medicines before generating the prescription.
        </p>
      </div>

      <div className="selected-medicine-list__table-wrapper">
        <table className="selected-medicine-list__table">
          <thead>
            <tr>
              <th className="selected-medicine-list__serial">#</th>
              <th className="selected-medicine-list__medicine">
                Medicine / Composition
              </th>
              <th>Dose</th>
              <th>Route</th>
              <th>Frequency</th>
              <th>Duration</th>
              <th>Instruction</th>
              <th className="selected-medicine-list__actions">
                Action
              </th>
            </tr>
          </thead>

          <tbody>{children}</tbody>
        </table>
      </div>
    </section>
  );
};

export default SelectedMedicineList;
