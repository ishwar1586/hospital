import React from "react";

const BillingPatientCell = ({ patient }) => {
  if (!patient) {
    return (
      <div className="billing-patient-cell">
        <span className="billing-patient-cell__name">
          -
        </span>
      </div>
    );
  }

  const {
    name = "-",
    uhid = "-",
    age,
    gender,
  } = patient;

  const demographicInfo = [
    age ? `${age} yrs` : null,
    gender || null,
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <div className="billing-patient-cell">
      <div className="billing-patient-cell__name">
        {name}
      </div>

      <div className="billing-patient-cell__uhid">
        {uhid}
      </div>

      {demographicInfo && (
        <div className="billing-patient-cell__meta">
          {demographicInfo}
        </div>
      )}
    </div>
  );
};

export default BillingPatientCell;