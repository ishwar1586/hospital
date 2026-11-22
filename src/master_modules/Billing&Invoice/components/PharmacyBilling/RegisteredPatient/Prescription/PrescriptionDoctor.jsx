import React from "react";

import {
  PersonOutlined,
} from "@mui/icons-material";

const PrescriptionDoctor = ({
  doctor = null,
  config = {},
}) => {
  /*
   * ---------------------------------------------------------
   * DOCTOR ICON
   * ---------------------------------------------------------
   */

  const DoctorIcon =
    config?.icon || PersonOutlined;


  /*
   * ---------------------------------------------------------
   * NESTED VALUE HELPER
   * ---------------------------------------------------------
   */

  const getNestedValue = (object, path) => {
    if (!object || !path) {
      return undefined;
    }

    return path
      .split(".")
      .reduce(
        (value, key) => value?.[key],
        object
      );
  };


  /*
   * ---------------------------------------------------------
   * FIELD VALUE
   * ---------------------------------------------------------
   */

  const getFieldValue = (fieldConfig) => {
    const value = getNestedValue(
      doctor,
      fieldConfig?.field?.replace(
        "doctor.",
        ""
      )
    );

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return fieldConfig?.fallback || "-";
    }

    return value;
  };


  /*
   * ---------------------------------------------------------
   * EMPTY DOCTOR
   * ---------------------------------------------------------
   */

  if (!doctor) {
    return (
      <section className="opd-prescription__doctor">

        <div className="opd-prescription__doctor-heading">
          {config?.title || "Doctor Information"}
        </div>

        <div className="opd-prescription__doctor-body">

          <div className="opd-prescription__doctor-avatar">
            <DoctorIcon />
          </div>

          <div className="opd-prescription__doctor-info">

            <span className="opd-prescription__doctor-name">
              {config?.fields?.name?.fallback || "-"}
            </span>

            <span className="opd-prescription__doctor-speciality">
              {config?.fields?.speciality?.fallback || "-"}
            </span>

            <span className="opd-prescription__doctor-registration">
              {config?.fields?.registrationNumber?.fallback || "-"}
            </span>

          </div>

        </div>

      </section>
    );
  }


  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <section className="opd-prescription__doctor">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="opd-prescription__doctor-heading">
        {config?.title || "Doctor Information"}
      </div>


      {/* =====================================================
          BODY
      ===================================================== */}

      <div className="opd-prescription__doctor-body">

        <div className="opd-prescription__doctor-avatar">
          <DoctorIcon />
        </div>


        <div className="opd-prescription__doctor-info">

          {/* DOCTOR NAME */}

          <span className="opd-prescription__doctor-name">
            {getFieldValue(
              config?.fields?.name
            )}
          </span>


          {/* SPECIALITY */}

          <span className="opd-prescription__doctor-speciality">
            {getFieldValue(
              config?.fields?.speciality
            )}
          </span>


          {/* REGISTRATION */}

          <span className="opd-prescription__doctor-registration">
            {getFieldValue(
              config?.fields?.registrationNumber
            )}
          </span>

        </div>

      </div>

    </section>
  );
};

export default PrescriptionDoctor;