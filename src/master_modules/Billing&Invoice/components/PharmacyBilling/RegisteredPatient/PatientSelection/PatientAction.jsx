import React from "react";

const PatientAction = ({
  patient = null,
  config = {},
  onSelect,
  disabled = false,
}) => {
  if (!patient) {
    return null;
  }

  const actionConfig =
    config?.table?.action || {};

  const {
    id = "select-patient",
    label = "Select",
    variant = "outlined",
    color = "primary",
    showIcon = false,
    icon: ActionIcon = null,
    ariaLabel = "Select patient",
  } = actionConfig;

  const handleSelect = () => {
    if (disabled) {
      return;
    }

    if (typeof onSelect === "function") {
      onSelect(patient);
    }
  };

  return (
    <button
      type="button"
      data-action-id={id}
      className={`
        patient-action
        patient-action--${variant}
        patient-action--${color}
      `}
      onClick={handleSelect}
      disabled={disabled}
      aria-label={`${ariaLabel}: ${patient.patientName || ""}`}
    >
      {showIcon && ActionIcon && (
        <ActionIcon
          className="patient-action__icon"
          aria-hidden="true"
        />
      )}

      <span className="patient-action__label">
        {label}
      </span>
    </button>
  );
};

export default PatientAction;