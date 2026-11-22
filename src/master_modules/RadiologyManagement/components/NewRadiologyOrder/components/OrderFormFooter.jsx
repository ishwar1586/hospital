import React from "react";
import { ArrowLeft, Save, Send } from "lucide-react";
import "./OrderFormFooter.css";
const OrderFormFooter = ({
  config,
  onCancel,
  onSaveDraft,
  onSubmit,
  isSubmitting = false,
  isDirty = false,
}) => {
  return (
    <footer className="new-radiology-order__footer">
      <div className="new-radiology-order__footer-note">
        {isDirty
          ? "You have unsaved changes."
          : "Complete the required fields before placing the order."}
      </div>

      <div className="new-radiology-order__footer-actions">
        <button
          type="button"
          className="new-radiology-order__button new-radiology-order__button--secondary"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {config.buttons.cancel}
        </button>

        <button
          type="button"
          className="new-radiology-order__button new-radiology-order__button--secondary"
          onClick={onSaveDraft}
          disabled={isSubmitting}
        >
          <Save size={16} aria-hidden="true" />
          {config.buttons.saveDraft}
        </button>

        <button
          type="submit"
          form="new-radiology-order-form"
          className="new-radiology-order__button new-radiology-order__button--primary"
          disabled={isSubmitting}
        >
          <Send size={15} aria-hidden="true" />
          {isSubmitting
            ? config.buttons.submitting
            : config.buttons.submit}
        </button>
      </div>
    </footer>
  );
};

export default OrderFormFooter;