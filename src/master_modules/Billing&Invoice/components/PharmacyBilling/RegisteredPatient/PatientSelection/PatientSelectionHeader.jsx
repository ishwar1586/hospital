import React from "react";

const PatientSelectionHeader = ({
  config = {},
  onClose,
}) => {
  const {
    title = "",
    subtitle = "",
    showCloseButton = false,
    closeButton = {},
  } = config?.page || {};

  const CloseIcon = closeButton?.icon;

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <header className="patient-selection-header">

      {/* =================================================
          HEADER CONTENT
          ================================================= */}

      <div className="patient-selection-header__content">

        {title && (
          <h1 className="patient-selection-header__title">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="patient-selection-header__subtitle">
            {subtitle}
          </p>
        )}

      </div>


      {/* =================================================
          CLOSE BUTTON
          ================================================= */}

      {showCloseButton && (
        <button
          type="button"
          className="patient-selection-header__close"
          onClick={handleClose}
          aria-label={
            closeButton?.ariaLabel ||
            "Close patient selection"
          }
          title={closeButton?.label || "Close"}
        >
          {CloseIcon && (
            <CloseIcon
              className="patient-selection-header__close-icon"
            />
          )}
        </button>
      )}

    </header>
  );
};

export default PatientSelectionHeader;