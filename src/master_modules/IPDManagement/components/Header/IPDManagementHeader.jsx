// src/features/IPDManagement/components/Header/IPDManagementHeader.jsx

import React from "react";

import {
  AddOutlined,
  ExitToAppOutlined,
  LocalHospitalOutlined,
  SwapHorizOutlined,
} from "@mui/icons-material";

import {
  IPD_PAGE_CONFIG,
} from "../../config/ipdConfig";

import "./IPDManagementHeader.css";


/* ============================================================
 * ICON MAP
 * ============================================================
 *
 * Config:
 *
 * icon: "bed"
 * icon: "admit"
 * icon: "transfer"
 * icon: "discharge"
 *
 * Actual MUI icon mapping is maintained here.
 * ============================================================
 */

const ACTION_ICON_MAP = {
  bed: LocalHospitalOutlined,
  admit: AddOutlined,
  transfer: SwapHorizOutlined,
  discharge: ExitToAppOutlined,
};


/* ============================================================
 * COMPONENT
 * ============================================================
 */

const IPDManagementHeader = ({
  onAdmitPatient,
  onTransferPatient,
  onDischargePatient,
  onBedManagement,
}) => {
  /* ==========================================================
   * ACTION HANDLERS
   * ==========================================================
   *
   * IMPORTANT:
   *
   * We use action.action from config.
   *
   * Example:
   *
   * {
   *   id: "bed-view",
   *   action: "BED_VIEW"
   * }
   *
   * Therefore:
   *
   * actionHandlers["BED_VIEW"]
   *
   * ==========================================================
   */

  const actionHandlers = {
    BED_VIEW: onBedManagement,
    ADMIT_PATIENT: onAdmitPatient,
    TRANSFER_PATIENT: onTransferPatient,
    DISCHARGE_PATIENT: onDischargePatient,
  };


  /* ==========================================================
   * HEADER ACTIONS
   * ==========================================================
   */

  const headerActions =
    Array.isArray(
      IPD_PAGE_CONFIG?.headerActions
    )
      ? IPD_PAGE_CONFIG.headerActions
      : [];


  /* ==========================================================
   * RENDER
   * ==========================================================
   */

  return (
    <header className="ipd-management-header">

      <div className="ipd-management-header__content">


        <div className="ipd-management-header__info">

          <h1 className="ipd-management-header__title">
            {IPD_PAGE_CONFIG?.title}
          </h1>

          {IPD_PAGE_CONFIG?.subtitle && (
            <p className="ipd-management-header__subtitle">
              {IPD_PAGE_CONFIG.subtitle}
            </p>
          )}

        </div>



        {headerActions.length > 0 && (
          <div className="ipd-management-header__actions">

            {headerActions.map((action) => {
              const {
                id,
                label,
                type,
                action: actionType,
                icon,
                variant = "outlined",
                disabled = false,
              } = action;


              /* ------------------------------------------------
               * HANDLER
               * ------------------------------------------------
               */

              const handler =
                actionHandlers[actionType];


              /*
               * If config action has no connected handler,
               * don't render a broken button.
               */

              if (
                typeof handler !==
                "function"
              ) {
                return null;
              }


              /* ------------------------------------------------
               * ICON
               * ------------------------------------------------
               */

              const ActionIcon =
                ACTION_ICON_MAP[icon];


              /* ------------------------------------------------
               * BUTTON
               * ------------------------------------------------
               */

              return (
                <button
                  key={id}
                  type={
                    type === "button"
                      ? "button"
                      : type
                  }
                  className={`
                    ipd-management-header__action
                    ipd-management-header__action--${variant}
                  `}
                  disabled={disabled}
                  onClick={handler}
                >

                  {ActionIcon && (
                    <ActionIcon
                      className="ipd-management-header__action-icon"
                      fontSize="small"
                    />
                  )}

                  <span>
                    {label}
                  </span>

                </button>
              );
            })}

          </div>
        )}

      </div>

    </header>
  );
};


export default IPDManagementHeader;