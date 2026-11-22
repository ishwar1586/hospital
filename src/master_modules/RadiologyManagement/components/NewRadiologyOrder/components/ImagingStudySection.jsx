import React from "react";
import "./ImagingStudySection.css";

const ImagingStudySection = ({
  config,
  modalities = [],
  tests = [],
  doctors = [],
  formData,
  onChange,
  errors = {},
}) => {
  const availableTests = tests.filter((test) => {
    const testModality =
      test.modalityId ?? test.modality ?? test.modalityName;

    return (
      !formData.modality ||
      !testModality ||
      String(testModality).toLowerCase() ===
        String(formData.modality).toLowerCase()
    );
  });

  const updateField = (field, value) => {
    onChange(field, value);
  };

  return (
    <section className="new-radiology-order__section">
      <div className="new-radiology-order__section-heading">
        <h2>{config.sections.study.title}</h2>
        <p>{config.sections.study.description}</p>
      </div>

      <div className="new-radiology-order__grid new-radiology-order__grid--two">
        <div className="new-radiology-order__field">
          <label htmlFor="radiology-modality">
            {config.fields.modality.label}
            <span className="new-radiology-order__required">*</span>
          </label>

          <select
            id="radiology-modality"
            value={formData.modality}
            aria-invalid={Boolean(errors.modality)}
            onChange={(event) => {
              updateField("modality", event.target.value);
              updateField("testId", "");
              updateField("testName", "");
            }}
          >
            <option value="">{config.fields.modality.placeholder}</option>

            {modalities.map((modality) => {
              const value =
                typeof modality === "string"
                  ? modality
                  : modality.value ?? modality.id ?? modality.name;

              const label =
                typeof modality === "string"
                  ? modality
                  : modality.label ?? modality.name ?? modality.value;

              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>

          {errors.modality && (
            <span className="new-radiology-order__error" role="alert">
              {errors.modality}
            </span>
          )}
        </div>

        <div className="new-radiology-order__field">
          <label htmlFor="radiology-test">
            {config.fields.test.label}
            <span className="new-radiology-order__required">*</span>
          </label>

          <select
            id="radiology-test"
            value={formData.testId}
            disabled={!formData.modality}
            aria-invalid={Boolean(errors.testId)}
            onChange={(event) => {
              const test = availableTests.find(
                (item) =>
                  String(item.id ?? item.testId ?? item.value) ===
                  event.target.value
              );

              updateField("testId", event.target.value);
              updateField(
                "testName",
                test?.name ?? test?.testName ?? test?.label ?? ""
              );
            }}
          >
            <option value="">{config.fields.test.placeholder}</option>

            {availableTests.map((test) => {
              const value = test.id ?? test.testId ?? test.value;
              const label = test.name ?? test.testName ?? test.label;

              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>

          {errors.testId && (
            <span className="new-radiology-order__error" role="alert">
              {errors.testId}
            </span>
          )}
        </div>

        <div className="new-radiology-order__field">
          <label htmlFor="radiology-body-part">
            {config.fields.bodyPart.label}
          </label>

          <input
            id="radiology-body-part"
            value={formData.bodyPart}
            placeholder={config.fields.bodyPart.placeholder}
            onChange={(event) =>
              updateField("bodyPart", event.target.value)
            }
          />
        </div>

        <div className="new-radiology-order__field">
          <label htmlFor="radiology-contrast">
            {config.fields.contrast.label}
          </label>

          <select
            id="radiology-contrast"
            value={formData.contrast}
            onChange={(event) =>
              updateField("contrast", event.target.value)
            }
          >
            {config.options.contrast.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="new-radiology-order__field new-radiology-order__field--full">
          <label htmlFor="radiology-ordering-doctor">
            {config.fields.orderingDoctor.label}
            <span className="new-radiology-order__required">*</span>
          </label>

          <select
            id="radiology-ordering-doctor"
            value={formData.orderingDoctorId}
            aria-invalid={Boolean(errors.orderingDoctorId)}
            onChange={(event) => {
              const doctor = doctors.find(
                (item) =>
                  String(item.id ?? item.doctorId ?? item.value) ===
                  event.target.value
              );

              updateField("orderingDoctorId", event.target.value);
              updateField(
                "orderingDoctorName",
                doctor?.name ?? doctor?.doctorName ?? doctor?.label ?? ""
              );
            }}
          >
            <option value="">
              {config.fields.orderingDoctor.placeholder}
            </option>

            {doctors.map((doctor) => {
              const value = doctor.id ?? doctor.doctorId ?? doctor.value;
              const label =
                doctor.name ?? doctor.doctorName ?? doctor.label;

              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>

          {errors.orderingDoctorId && (
            <span className="new-radiology-order__error" role="alert">
              {errors.orderingDoctorId}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImagingStudySection;