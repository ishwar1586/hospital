import React, { useEffect, useState } from "react";

import DepartmentSelectionModalHeader from "./DepartmentSelectionModalHeader";
import DepartmentSelectionGrid from "./DepartmentSelectionGrid";
import DepartmentSelectionModalFooter from "./DepartmentSelectionModalFooter";

import departmentSelectionConfig from "../../config/departmentSelection.config";
import departmentSelectionActionsConfig from "../../config/departmentSelectionActions.config";

import "./DepartmentSelectionModal.css";

const DepartmentSelectionModal = ({
  open = false,
  departments = [],
  config = departmentSelectionConfig,
  actionsConfig = departmentSelectionActionsConfig,
  initialDepartment = null,
  onClose,
  onDepartmentSelect,
}) => {
  /* =========================================================
     SELECTED DEPARTMENT STATE
  ========================================================= */

  const [selectedDepartment, setSelectedDepartment] =
    useState(initialDepartment);


  /* =========================================================
     SYNC INITIAL DEPARTMENT
  ========================================================= */

  useEffect(() => {
    setSelectedDepartment(
      initialDepartment || null
    );
  }, [initialDepartment]);


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    if (
      config?.modal?.closeOnEscape === false
    ) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (typeof onClose === "function") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    open,
    config?.modal?.closeOnEscape,
    onClose,
  ]);


  /* =========================================================
     DEPARTMENT SELECTION
  ========================================================= */

  const handleDepartmentSelect = (
    department
  ) => {
    if (!department) {
      return;
    }

    setSelectedDepartment(
      department
    );

    if (
      config?.selection
        ?.emitSelectedDepartment !== false
    ) {
      if (
        typeof onDepartmentSelect ===
        "function"
      ) {
        onDepartmentSelect(
          department
        );
      }
    }

    /*
     * Modal close behavior is config-driven.
     */
    if (
      config?.selection
        ?.closeAfterSelection === true
    ) {
      if (
        typeof onClose ===
        "function"
      ) {
        onClose();
      }
    }
  };


  /* =========================================================
     HEADER / FOOTER ACTION
  ========================================================= */

  const handleAction = (
    actionItem
  ) => {
    if (!actionItem?.action) {
      return;
    }

    switch (
      actionItem.action
    ) {
      case "close":
      case "cancel":

        if (
          typeof onClose ===
          "function"
        ) {
          onClose();
        }

        break;


      case "select-department":

        if (
          selectedDepartment &&
          typeof onDepartmentSelect ===
            "function"
        ) {
          onDepartmentSelect(
            selectedDepartment
          );
        }

        break;


      default:
        break;
    }
  };


  /* =========================================================
     BACKDROP CLICK
  ========================================================= */

  const handleBackdropClick = (
    event
  ) => {
    /*
     * Only backdrop itself should
     * trigger close.
     */
    if (
      event.target !==
      event.currentTarget
    ) {
      return;
    }

    if (
      config?.modal
        ?.closeOnBackdropClick === true
    ) {
      if (
        typeof onClose ===
        "function"
      ) {
        onClose();
      }
    }
  };


  /* =========================================================
     MODAL CLOSED
     
     IMPORTANT:
     This conditional is AFTER
     all hooks.
  ========================================================= */

  if (!open) {
    return null;
  }


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div
      className="department-selection-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="department-selection-modal-title"
      onMouseDown={
        handleBackdropClick
      }
    >

      <div className="department-selection-modal__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <DepartmentSelectionModalHeader
          config={config.modal}
          actionsConfig={actionsConfig}
          onAction={handleAction}
        />


        {/* =================================================
            BODY
        ================================================= */}

        <div className="department-selection-modal__body">

          <DepartmentSelectionGrid
            departments={
              departments
            }
            config={config}
            selectedDepartment={
              selectedDepartment
            }
            onDepartmentSelect={
              handleDepartmentSelect
            }
          />

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <DepartmentSelectionModalFooter
          actionsConfig={
            actionsConfig
          }
          onAction={
            handleAction
          }
        />

      </div>

    </div>
  );
};

export default DepartmentSelectionModal;