// src/features/IPDManagement/components/DischargePatient/DischargeType.jsx

import React from "react";

import {
  DISCHARGE_TYPES,
} from "../../config/dischargePatientConfig";

import "./DischargeType.css";


const DischargeType = ({
  value = "normalDischarge",
  onChange,
}) => {

  const handleChange = (type) => {

    if (onChange) {
      onChange(type);
    }

  };


  return (
    <section className="ipd-discharge-type">

      {/* =====================================================
          FIELD LABEL
          ===================================================== */}

      <div className="ipd-discharge-type__header">

        <label className="ipd-discharge-type__label">
          Discharge Type
          <span className="ipd-discharge-type__required">
            *
          </span>
        </label>

      </div>


      {/* =====================================================
          DISCHARGE TYPE OPTIONS
          ===================================================== */}

      <div className="ipd-discharge-type__options">

        {Object.values(DISCHARGE_TYPES).map(
          (type) => {

            const isSelected =
              value === type.value ||
              value === type.id ||
              value === type.key;


            return (
              <button
                key={
                  type.id ||
                  type.value ||
                  type.key
                }
                type="button"
                className={[
                  "ipd-discharge-type__option",
                  isSelected
                    ? "ipd-discharge-type__option--selected"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() =>
                  handleChange(
                    type.value ||
                    type.id ||
                    type.key
                  )
                }
              >

                {/* =================================================
                    RADIO
                    ================================================= */}

                <span
                  className={[
                    "ipd-discharge-type__radio",
                    isSelected
                      ? "ipd-discharge-type__radio--selected"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {isSelected && (
                    <span className="ipd-discharge-type__radio-dot" />
                  )}
                </span>


                {/* =================================================
                    CONTENT
                    ================================================= */}

                <span className="ipd-discharge-type__content">

                  <span className="ipd-discharge-type__title">
                    {type.label}
                  </span>

                  {type.description && (
                    <span className="ipd-discharge-type__description">
                      {type.description}
                    </span>
                  )}

                </span>

              </button>
            );
          }
        )}

      </div>

    </section>
  );
};


export default DischargeType;