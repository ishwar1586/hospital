
import React from "react";
import "./ChiefComplaints.css";

const ChiefComplaints = ({
  value = "",
  onChange,
  error = "",
  disabled = false,
}) => {
  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="chief-complaints">
      <div className="chief-complaints__header">
        <div className="chief-complaints__heading">
          <h3 className="chief-complaints__title">
            Chief Complaints
          </h3>
          <p className="chief-complaints__description">
            Record the patient's primary complaints.
          </p>
        </div>
      </div>

      <div className="chief-complaints__field">
        <label
          htmlFor="chief-complaints"
          className="chief-complaints__label"
        >
          Patient Complaints
        </label>

        <textarea
          id="chief-complaints"
          name="chiefComplaints"
          className={`chief-complaints__textarea ${
            error ? "chief-complaints__textarea--error" : ""
          }`}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder="Enter patient's chief complaints..."
          aria-invalid={Boolean(error)}
        />

        {error && (
          <span className="chief-complaints__error">
            {error}
          </span>
        )}
      </div>
    </section>
  );
};

export default ChiefComplaints;
