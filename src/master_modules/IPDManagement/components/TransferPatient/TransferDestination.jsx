// src/features/IPDManagement/components/TransferPatient/TransferDestination.jsx

import React from "react";

import {
  TRANSFER_PATIENT_TYPES,
} from "../../config/transferPatientConfig";

import "./TransferDestination.css";


const TransferDestination = ({
  value = "withinHospital",
  onChange,
}) => {

  const transferTypes = Array.isArray(
    TRANSFER_PATIENT_TYPES
  )
    ? TRANSFER_PATIENT_TYPES
    : [];


  const handleSelect = (transferType) => {

    if (!transferType?.value) {
      return;
    }

    onChange?.(transferType.value);
  };


  return (
    <section className="ipd-transfer-destination">

      {/* =====================================================
          SECTION HEADER
          ===================================================== */}

      <div className="ipd-transfer-destination__header">

        <div>

          <h3 className="ipd-transfer-destination__title">
            Transfer Destination
          </h3>

          <p className="ipd-transfer-destination__subtitle">
            Select where you want to transfer the patient.
          </p>

        </div>

      </div>


      {/* =====================================================
          DESTINATION OPTIONS
          ===================================================== */}

      <div className="ipd-transfer-destination__options">

        {transferTypes.map((type) => {

          const isSelected =
            value === type.value;


          return (
            <button
              key={type.id ?? type.value}
              type="button"
              className={[
                "ipd-transfer-destination__option",

                isSelected
                  ? "ipd-transfer-destination__option--selected"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}

              onClick={() => handleSelect(type)}
            >

              {/* Radio */}

              <span
                className={[
                  "ipd-transfer-destination__radio",

                  isSelected
                    ? "ipd-transfer-destination__radio--selected"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >

                {isSelected && (
                  <span className="ipd-transfer-destination__radio-dot" />
                )}

              </span>


              {/* Content */}

              <span className="ipd-transfer-destination__content">

                <span className="ipd-transfer-destination__label">
                  {type.label}
                </span>

                {type.description && (
                  <span className="ipd-transfer-destination__description">
                    {type.description}
                  </span>
                )}

              </span>

            </button>
          );

        })}

      </div>

    </section>
  );
};


export default TransferDestination;