import React from "react";
import "./OrderPrioritySection.css";
const OrderPrioritySection = ({
  config,
  formData,
  onChange,
  errors = {},
}) => {
  return (
    <section className="new-radiology-order__section">
      <div className="new-radiology-order__section-heading">
        <h2>{config.sections.priority.title}</h2>
        <p>{config.sections.priority.description}</p>
      </div>

      <div className="new-radiology-order__priority-options">
        {config.options.priority.map((option) => (
          <label
            key={option.value}
            className={`new-radiology-order__priority-card ${
              formData.priority === option.value
                ? "new-radiology-order__priority-card--selected"
                : ""
            }`}
          >
            <input
              type="radio"
              name="radiology-order-priority"
              value={option.value}
              checked={formData.priority === option.value}
              onChange={() => onChange("priority", option.value)}
            />

            <span className="new-radiology-order__priority-radio" />

            <span className="new-radiology-order__priority-content">
              <strong>{option.label}</strong>
              <small>{option.description}</small>
            </span>
          </label>
        ))}
      </div>

      {errors.priority && (
        <span className="new-radiology-order__error" role="alert">
          {errors.priority}
        </span>
      )}

      <div className="new-radiology-order__grid new-radiology-order__grid--two new-radiology-order__schedule">
        <div className="new-radiology-order__field">
          <label htmlFor="radiology-requested-date">
            {config.fields.requestedDate.label}
          </label>

          <input
            id="radiology-requested-date"
            type="date"
            value={formData.requestedDate}
            aria-invalid={Boolean(errors.requestedDate)}
            onChange={(event) =>
              onChange("requestedDate", event.target.value)
            }
          />

          {errors.requestedDate && (
            <span className="new-radiology-order__error" role="alert">
              {errors.requestedDate}
            </span>
          )}
        </div>

        <div className="new-radiology-order__field">
          <label htmlFor="radiology-requested-time">
            {config.fields.requestedTime.label}
          </label>

          <input
            id="radiology-requested-time"
            type="time"
            value={formData.requestedTime}
            aria-invalid={Boolean(errors.requestedTime)}
            onChange={(event) =>
              onChange("requestedTime", event.target.value)
            }
          />

          {errors.requestedTime && (
            <span className="new-radiology-order__error" role="alert">
              {errors.requestedTime}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderPrioritySection;