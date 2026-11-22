import React from "react";
import CloseOutlined from "@mui/icons-material/CloseOutlined";

const CustomerTypeHeader = ({
  config = {},
  onClose,
}) => {
  const {
    title = "",
    subtitle = "",
    showCloseButton = false,
  } = config?.page || {};

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <header className="customer-type-header">

      {/* =====================================================
          HEADER CONTENT
      ===================================================== */}

      <div className="customer-type-header__content">

        {title && (
          <h1 className="customer-type-header__title">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="customer-type-header__subtitle">
            {subtitle}
          </p>
        )}

      </div>


      {/* =====================================================
          HEADER ACTION
      ===================================================== */}

      {showCloseButton && (
        <button
          type="button"
          className="customer-type-header__close"
          onClick={handleClose}
          aria-label="Close pharmacy billing"
        >
          <CloseOutlined
            className="customer-type-header__close-icon"
          />
        </button>
      )}

    </header>
  );
};

export default CustomerTypeHeader;