import React, { useMemo } from "react";

import BedIcon from "@mui/icons-material/Bed";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

import BedStatusBadge from "./BedStatusBadge";

import { IPD_BED_STATUS_CONFIG } from "../../config/ipdConfig";

import "./BedCard.css";


const BedCard = ({
  bed = {},
  onSelect,
}) => {
  /* ==========================================================
   * BED DATA
   * ==========================================================
   */

  const bedId = bed?.id || "";

  const bedNumber =
    bed?.bedNumber ||
    bed?.name ||
    "Bed";


  const status = String(
    bed?.status || ""
  ).toLowerCase();


  const statusConfig =
    IPD_BED_STATUS_CONFIG?.[status] || {};


  /* ==========================================================
   * PATIENT DATA
   * ==========================================================
   */

  const patient =
    bed?.patient ||
    bed?.patientDetails ||
    null;


  const patientName =
    bed?.patientName ||
    patient?.name ||
    patient?.patientName ||
    "";


  const patientUHID =
    bed?.uhid ||
    bed?.patientUHID ||
    patient?.uhid ||
    patient?.patientUHID ||
    "";


  const doctorName =
    bed?.doctor ||
    bed?.doctorName ||
    patient?.doctor ||
    patient?.doctorName ||
    "";


  /* ==========================================================
   * DISPLAY STATE
   * ==========================================================
   */

  const isOccupied = useMemo(() => {
    return status === "occupied";
  }, [status]);


  const handleSelect = () => {
    if (!bedId) {
      return;
    }

    onSelect?.(bedId);
  };


  /* ==========================================================
   * RENDER
   * ==========================================================
   */

  return (
    <button
      type="button"
      className={`bed-view-bed-card ${
        isOccupied
          ? "bed-view-bed-card--occupied"
          : ""
      }`}
      data-bed-id={bedId}
      data-status={status}
      onClick={handleSelect}
    >

      {/* ======================================================
          TOP ROW
          ====================================================== */}

      <div className="bed-view-bed-card__top">

        <div className="bed-view-bed-card__identity">

          <div className="bed-view-bed-card__icon">
            <BedIcon />
          </div>

          <div className="bed-view-bed-card__number">
            {bedNumber}
          </div>

        </div>


        {status && (
          <BedStatusBadge
            status={status}
            config={statusConfig}
          />
        )}

      </div>


      {/* ======================================================
          PATIENT INFORMATION
          ====================================================== */}

      {isOccupied && (
        <div className="bed-view-bed-card__patient">

          {patientName && (
            <div className="bed-view-bed-card__patient-row">

              <PersonOutlinedIcon />

              <span className="bed-view-bed-card__patient-name">
                {patientName}
              </span>

            </div>
          )}


          {patientUHID && (
            <div className="bed-view-bed-card__patient-row">

              <BadgeOutlinedIcon />

              <span>
                {patientUHID}
              </span>

            </div>
          )}


          {doctorName && (
            <div className="bed-view-bed-card__patient-row">

              <MedicalServicesOutlinedIcon />

              <span>
                {doctorName}
              </span>

            </div>
          )}

        </div>
      )}


      {/* ======================================================
          AVAILABLE / NON-OCCUPIED STATE
          ====================================================== */}

      {!isOccupied && status && (
        <div className="bed-view-bed-card__state">

          <span>
            {statusConfig?.label || status}
          </span>

        </div>
      )}

    </button>
  );
};


export default BedCard;