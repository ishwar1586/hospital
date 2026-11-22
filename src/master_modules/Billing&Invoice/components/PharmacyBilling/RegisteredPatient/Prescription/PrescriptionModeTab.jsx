import React from "react";

const PrescriptionModeTab = ({
  mode = null,
  active = false,
  onClick,
}) => {
  /*
   * ---------------------------------------------------------
   * SAFETY CHECK
   * ---------------------------------------------------------
   */

  if (!mode?.id) {
    return null;
  }

  /*
   * ---------------------------------------------------------
   * ICON
   * ---------------------------------------------------------
   */

  const Icon = mode?.icon || null;

  /*
   * ---------------------------------------------------------
   * CLICK HANDLER
   * ---------------------------------------------------------
   */

  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick(mode);
    }
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={[
        "prescription-mode-tabs__tab",
        active
          ? "prescription-mode-tabs__tab--active"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
    >

      {Icon && (
        <Icon
          className="prescription-mode-tabs__icon"
        />
      )}

      <span className="prescription-mode-tabs__label">
        {mode.label || "-"}
      </span>

    </button>
  );
};

export default PrescriptionModeTab;