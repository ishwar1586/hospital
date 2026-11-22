
import React from "react";

import {
  consultationFooterConfig,
} from "@/master_modules/OPD/components/StartConsultation/config/consultationFooter.config.js";

import "./ConsultationFooter.css";

const ConsultationFooter = ({
  tab = "consultation",

  onClear,
  onBack,
  onSaveDraft,
  onNext,
  onComplete,

  disabled = false,
  loading = false,
}) => {
  const config = consultationFooterConfig[tab];

  if (!config) {
    console.error(
      `ConsultationFooter: Configuration not found for tab "${tab}". Available tabs: ${Object.keys(
        consultationFooterConfig
      ).join(", ")}`
    );

    return null;
  }

  const actionHandlers = {
    clear: onClear,
    back: onBack,
    save: onSaveDraft,
    next: onNext,
    complete: onComplete,
  };

  const handleAction = (action) => {
    const callback = actionHandlers[action];

    if (typeof callback === "function") {
      return callback();
    }

    console.warn(
      `ConsultationFooter: Handler not provided for action "${action}".`
    );

    return undefined;
  };

  const renderAction = (actionConfig, position) => {
    if (!actionConfig?.visible) {
      return null;
    }

    const isPrimary = actionConfig.variant === "primary";
    const isSaveAction = actionConfig.action === "save";

    return (
      <button
        key={`${position}-${actionConfig.action}`}
        type="button"
        className={`consultation-footer__button consultation-footer__button--${actionConfig.variant}`}
        onClick={() => handleAction(actionConfig.action)}
        disabled={disabled || loading}
      >
        {loading && isSaveAction ? (
          <span className="consultation-footer__loading">
            Saving...
          </span>
        ) : (
          <>
            <span>{actionConfig.label}</span>

            {isPrimary && (
              <span className="consultation-footer__arrow">
                →
              </span>
            )}
          </>
        )}
      </button>
    );
  };

  return (
    <footer className="consultation-footer">
      <div className="consultation-footer__left">
        {renderAction(config.leftAction, "left")}
      </div>

      <div className="consultation-footer__right">
        {renderAction(config.secondaryAction, "secondary")}

        {renderAction(config.primaryAction, "primary")}
      </div>
    </footer>
  );
};

export default ConsultationFooter;
