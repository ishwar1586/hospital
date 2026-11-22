import React, { useMemo, useState } from "react";
import "./PatientInformation.css";
const PatientInformation = ({
  config,
  patients = [],
  selectedPatient,
  onSelectPatient,
  errors = {},
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return [];

    return patients
      .filter((patient) => {
        const searchable = [
          patient.patientId,
          patient.id,
          patient.name,
          patient.patientName,
          patient.phone,
          patient.mobile,
        ]
          .map((value) => String(value ?? "").toLowerCase())
          .join(" ");

        return searchable.includes(query);
      })
      .slice(0, 8);
  }, [patients, search]);

  const getPatientName = (patient) =>
    patient.name ?? patient.patientName ?? "";

  const getPatientId = (patient) =>
    patient.patientId ?? patient.id ?? "";

  const handleSelect = (patient) => {
    onSelectPatient(patient);
    setSearch("");
    setIsOpen(false);
  };

  return (
    <section className="new-radiology-order__section">
      <div className="new-radiology-order__section-heading">
        <h2>{config.sections.patient.title}</h2>
        <p>{config.sections.patient.description}</p>
      </div>

      <div className="new-radiology-order__field new-radiology-order__patient-search">
        <label htmlFor="radiology-patient-search">
          {config.fields.patientSearch.label}
          <span className="new-radiology-order__required">*</span>
        </label>

        <input
          id="radiology-patient-search"
          type="search"
          autoComplete="off"
          value={search}
          placeholder={config.fields.patientSearch.placeholder}
          aria-invalid={Boolean(errors.patientId)}
          aria-describedby={
            errors.patientId ? "radiology-patient-error" : undefined
          }
          onFocus={() => setIsOpen(true)}
          onChange={(event) => {
            setSearch(event.target.value);
            setIsOpen(true);
          }}
        />

        {isOpen && search.trim() && (
          <div className="new-radiology-order__patient-results">
            {results.length ? (
              results.map((patient) => (
                <button
                  type="button"
                  key={getPatientId(patient)}
                  className="new-radiology-order__patient-result"
                  onClick={() => handleSelect(patient)}
                >
                  <span className="new-radiology-order__patient-avatar">
                    {getPatientName(patient).charAt(0).toUpperCase() || "P"}
                  </span>

                  <span className="new-radiology-order__patient-result-info">
                    <strong>{getPatientName(patient)}</strong>
                    <small>
                      {getPatientId(patient)}
                      {patient.phone || patient.mobile
                        ? ` · ${patient.phone ?? patient.mobile}`
                        : ""}
                    </small>
                  </span>
                </button>
              ))
            ) : (
              <p className="new-radiology-order__patient-empty">
                No matching patients found.
              </p>
            )}
          </div>
        )}

        {errors.patientId && (
          <span
            id="radiology-patient-error"
            className="new-radiology-order__error"
            role="alert"
          >
            {errors.patientId}
          </span>
        )}
      </div>

      {selectedPatient && (
        <div className="new-radiology-order__selected-patient">
          <div className="new-radiology-order__selected-patient-top">
            <div>
              <span className="new-radiology-order__eyebrow">
                SELECTED PATIENT
              </span>
              <h3>{getPatientName(selectedPatient)}</h3>
              <p>{getPatientId(selectedPatient)}</p>
            </div>

            <button
              type="button"
              className="new-radiology-order__text-button"
              onClick={() => onSelectPatient(null)}
            >
              Change patient
            </button>
          </div>

          <div className="new-radiology-order__patient-meta">
            <div>
              <span>Age</span>
              <strong>
                {selectedPatient.age !== undefined &&
                selectedPatient.age !== null
                  ? `${selectedPatient.age} years`
                  : "—"}
              </strong>
            </div>

            <div>
              <span>Gender</span>
              <strong>
                {selectedPatient.gender ?? selectedPatient.sex ?? "—"}
              </strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>
                {selectedPatient.phone ?? selectedPatient.mobile ?? "—"}
              </strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PatientInformation;