
import React from "react";
import {
  CalendarMonthOutlined,
  EventAvailableOutlined,
} from "@mui/icons-material";
import "./FollowUp.css";

const DEFAULT_FOLLOW_UP_TYPES = [
  { label: "Routine Follow-up", value: "routine" },
  { label: "Review Visit", value: "review" },
  { label: "Report Review", value: "report-review" },
  { label: "As Required", value: "as-required" },
];

const FollowUp = ({
  value = {},
  onChange,
  followUpTypes = DEFAULT_FOLLOW_UP_TYPES,
  disabled = false,
}) => {
  const handleChange = (field, fieldValue) => {
    onChange?.({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <section className="prescription-follow-up">
      <div className="prescription-follow-up__header">
        <div className="prescription-follow-up__heading">
          <span className="prescription-follow-up__icon">
            <EventAvailableOutlined />
          </span>

          <div>
            <h3 className="prescription-follow-up__title">
              Follow-up
            </h3>

            <p className="prescription-follow-up__subtitle">
              Schedule the patient's next visit.
            </p>
          </div>
        </div>

        <span className="prescription-follow-up__optional">
          Optional
        </span>
      </div>

      <div className="prescription-follow-up__fields">
        <div className="prescription-follow-up__field">
          <label
            className="prescription-follow-up__label"
            htmlFor="prescription-follow-up-date"
          >
            Follow-up Date
          </label>

          <div className="prescription-follow-up__input-wrapper">
            <CalendarMonthOutlined className="prescription-follow-up__input-icon" />

            <input
              id="prescription-follow-up-date"
              type="date"
              className="prescription-follow-up__input"
              value={value.date || ""}
              onChange={(event) =>
                handleChange("date", event.target.value)
              }
              disabled={disabled}
            />
          </div>
        </div>

        <div className="prescription-follow-up__field">
          <label
            className="prescription-follow-up__label"
            htmlFor="prescription-follow-up-type"
          >
            Follow-up Type
          </label>

          <select
            id="prescription-follow-up-type"
            className="prescription-follow-up__select"
            value={value.type || ""}
            onChange={(event) =>
              handleChange("type", event.target.value)
            }
            disabled={disabled}
          >
            <option value="">Select follow-up type</option>

            {followUpTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="prescription-follow-up__helper">
        The follow-up details will be included in the patient's prescription.
      </p>
    </section>
  );
};

export default FollowUp;
