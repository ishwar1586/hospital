import React from "react";

import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined";

const CustomerTypeFooter = ({
  config = {},
  selectedCustomerType = null,
  onCancel,
  onNext,
}) => {
  const {
    showCancel = true,
    showNext = true,
    nextButton = {},
    cancelButton = {},
  } = config?.footer || {};

  const {
    label: nextLabel = "Next",
    showArrow = true,
    disabledWithoutSelection = true,
  } = nextButton;

  const {
    label: cancelLabel = "Cancel",
  } = cancelButton;

  const isNextDisabled =
    disabledWithoutSelection &&
    !selectedCustomerType;

  const handleCancel = () => {
    if (typeof onCancel === "function") {
      onCancel();
    }
  };

  const handleNext = () => {
    if (isNextDisabled) {
      return;
    }

    if (typeof onNext === "function") {
      onNext(selectedCustomerType);
    }
  };

  return (
    <footer className="customer-type-footer">

      <div className="customer-type-footer__actions">

        {/* =================================================
            CANCEL
        ================================================= */}

        {showCancel && (
          <button
            type="button"
            className="customer-type-footer__button customer-type-footer__button--cancel"
            onClick={handleCancel}
          >
            {cancelLabel}
          </button>
        )}


        {/* =================================================
            NEXT
        ================================================= */}

        {showNext && (
          <button
            type="button"
            className="customer-type-footer__button customer-type-footer__button--next"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <span className="customer-type-footer__button-label">
              {nextLabel}
            </span>

            {showArrow && (
              <ArrowForwardOutlined
                className="customer-type-footer__button-icon"
              />
            )}
          </button>
        )}

      </div>

    </footer>
  );
};

export default CustomerTypeFooter;