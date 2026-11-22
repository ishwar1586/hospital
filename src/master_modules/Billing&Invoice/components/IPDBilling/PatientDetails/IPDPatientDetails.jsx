
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  CloseOutlined,
  EditOutlined,
  PersonOutlineOutlined,
  PhoneOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";

import "./IPDPatientDetails.css";
import {
  ipdPatientDetailsConfig as config,
} from "@/master_modules/Billing&Invoice/config/ipdPatientDetails.config";

import IPDBillingStepper from
  "@/master_modules/Billing&Invoice/components/IPDBillingStepper/IPDBillingStepper";

const valueOrFallback = (value, fallback = "—") =>
  value === undefined || value === null || value === ""
    ? fallback
    : value;

const resolveValue = (source, aliases = []) => {
  for (const key of aliases) {
    const value = source?.[key];

    if (value !== undefined && value !== null && value !== "") {
      return value;
    }
  }

  return undefined;
};

const normalizePatient = (patient) => {
  const source = patient || {};
  const normalized = {};

  config.sections.forEach((section) => {
    section.fields.forEach((field) => {
      normalized[field.key] = resolveValue(
        source,
        field.aliases
      );
    });
  });

  normalized.patientName =
    normalized.patientName || config.patient.defaultName;

  normalized.uhid = resolveValue(source, [
    "uhid",
    "patientId",
  ]);

  normalized.ipdNo = resolveValue(source, [
    "ipdNo",
    "ipdNumber",
  ]);

  normalized.mobile = resolveValue(source, [
    "mobile",
    "phone",
    "mobileNumber",
  ]);

  normalized.admissionDate = resolveValue(source, [
    "admissionDate",
    "admittedOn",
  ]);

  normalized.ward = resolveValue(source, [
    "ward",
    "wardName",
  ]);

  normalized.room = resolveValue(source, [
    "room",
    "roomNo",
  ]);

  normalized.bed = resolveValue(source, [
    "bed",
    "bedNo",
  ]);

  normalized.doctor = resolveValue(source, [
    "doctor",
    "doctorName",
  ]);

  normalized.department = resolveValue(source, [
    "department",
    "departmentName",
  ]);

  normalized.diagnosis = resolveValue(source, [
    "diagnosis",
    "provisionalDiagnosis",
  ]);

  normalized.status =
    resolveValue(source, ["status"]) ||
    config.patient.defaultStatus;

  return {
    ...source,
    ...normalized,
  };
};

const DetailField = ({
  label,
  icon: Icon,
  children,
}) => (
  <div className="ipd-detail-field">
    <span>{label}</span>

    <strong>
      {Icon && <Icon fontSize="inherit" />}
      {children}
    </strong>
  </div>
);

const DetailCard = ({
  icon: Icon,
  title,
  subtitle,
  children,
  className = "",
}) => (
  <section
    className={`ipd-details-card ${className}`.trim()}
  >
    <div className="ipd-details-card__heading">
      <span className="ipd-details-card__icon">
        {Icon && <Icon />}
      </span>

      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>

    <div className="ipd-details-card__body">
      {children}
    </div>
  </section>
);

export default function IPDPatientDetails({
  patient,
  onBack,
  onCancel,
  onContinue,
}) {
  const [editingPayer, setEditingPayer] = useState(false);

  const [payerType, setPayerType] = useState(
    patient?.payerType || patient?.payer || "Cash"
  );

  const [payerReference, setPayerReference] = useState(
    patient?.payerReference ||
      patient?.insuranceNumber ||
      ""
  );

  const p = useMemo(
    () => normalizePatient(patient),
    [patient]
  );

  useEffect(() => {
    setPayerType(
      patient?.payerType ||
        patient?.payer ||
        "Cash"
    );

    setPayerReference(
      patient?.payerReference ||
        patient?.insuranceNumber ||
        ""
    );

    setEditingPayer(false);
  }, [patient]);

  const continueToCharges = () => {
    if (!patient) return;

    onContinue?.({
      ...p,
      payerType,
      payerReference: payerReference.trim(),
    });
  };

  const renderField = (field, index) => {
    const Icon = field.icon;
    const fieldValue = p[field.key];

    return (
      <DetailField
        key={`${field.key}-${index}`}
        label={field.label}
        icon={Icon}
      >
        {valueOrFallback(
          fieldValue,
          field.fallback
        )}
      </DetailField>
    );
  };

  const mainSections = config.sections.filter(
    (section) => section.layout === "main"
  );

  const payerConfig = config.payer;
  const PayerIcon = payerConfig.icon;
  const NextIcon = config.nextCard.icon;

  return (
    <main className="ipd-patient-details">
      <header className="ipd-patient-details__header">
        <div className="ipd-patient-details__heading">
          <button
            className="ipd-icon-button"
            type="button"
            onClick={onBack}
            aria-label={config.header.backLabel}
          >
            <ArrowBackOutlined />
          </button>

          <div>
            <span className="ipd-eyebrow">
              {config.header.eyebrow}
            </span>

            <h1>{config.header.title}</h1>

            <p>{config.header.description}</p>
          </div>
        </div>

        <button
          className="ipd-cancel-button"
          type="button"
          onClick={onCancel}
        >
          <CloseOutlined fontSize="small" />
          {config.header.cancelLabel}
        </button>
      </header>

      {/* Shared stepper: Step 1 */}
      <IPDBillingStepper currentStep={1} />

      {!patient ? (
        <section className="ipd-empty-state">
          <PersonOutlineOutlined />

          <h2>{config.emptyState.title}</h2>

          <p>{config.emptyState.description}</p>

          <button
            type="button"
            className="ipd-btn ipd-btn--primary"
            onClick={onBack}
          >
            <ArrowBackOutlined fontSize="small" />
            {config.emptyState.buttonLabel}
          </button>
        </section>
      ) : (
        <>
          <section className="ipd-patient-banner">
            <div className="ipd-patient-avatar">
              <PersonOutlineOutlined />
            </div>

            <div className="ipd-patient-identity">
              <div className="ipd-patient-name-row">
                <h2>{p.patientName}</h2>

                <span className="ipd-status-chip">
                  {p.status}
                </span>
              </div>

              <div className="ipd-patient-meta">
                <span>
                  <b>
                    {config.patient.banner.uhidLabel}
                  </b>{" "}
                  {valueOrFallback(p.uhid)}
                </span>

                <span>
                  <b>
                    {config.patient.banner.ipdNoLabel}
                  </b>{" "}
                  {valueOrFallback(p.ipdNo)}
                </span>

                <span>
                  <PhoneOutlined fontSize="inherit" />{" "}
                  {valueOrFallback(p.mobile)}
                </span>
              </div>
            </div>

            <div className="ipd-admission-date">
              <CalendarMonthOutlined />

              <span>
                <small>
                  {config.patient.banner.admissionDateLabel}
                </small>

                <b>
                  {valueOrFallback(p.admissionDate)}
                </b>
              </span>
            </div>
          </section>

          <div className="ipd-details-grid">
            <div className="ipd-main-column">
              {mainSections.map((section) => (
                <DetailCard
                  key={section.id}
                  icon={section.icon}
                  title={section.title}
                  subtitle={section.subtitle}
                >
                  {section.fields.map(renderField)}
                </DetailCard>
              ))}
            </div>

            <aside className="ipd-side-column">
              <section className="ipd-details-card">
                <div className="ipd-details-card__heading">
                  <span className="ipd-details-card__icon">
                    <PayerIcon />
                  </span>

                  <div>
                    <h3>{payerConfig.title}</h3>
                    <p>{payerConfig.subtitle}</p>
                  </div>

                  <button
                    type="button"
                    className="ipd-edit-button"
                    onClick={() =>
                      setEditingPayer((current) => !current)
                    }
                    aria-label={payerConfig.editLabel}
                  >
                    <EditOutlined fontSize="small" />
                  </button>
                </div>

                {editingPayer ? (
                  <div className="ipd-payer-form">
                    <label htmlFor="ipd-payer-type">
                      {payerConfig.typeLabel}
                    </label>

                    <select
                      id="ipd-payer-type"
                      value={payerType}
                      onChange={(event) =>
                        setPayerType(event.target.value)
                      }
                    >
                      {payerConfig.options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <label htmlFor="ipd-payer-reference">
                      {payerConfig.referenceLabel}
                    </label>

                    <input
                      id="ipd-payer-reference"
                      value={payerReference}
                      onChange={(event) =>
                        setPayerReference(event.target.value)
                      }
                      placeholder={
                        payerConfig.referencePlaceholder
                      }
                    />

                    <button
                      type="button"
                      className="ipd-btn ipd-btn--primary ipd-btn--full"
                      onClick={() => setEditingPayer(false)}
                    >
                      {payerConfig.saveLabel}
                    </button>
                  </div>
                ) : (
                  <div className="ipd-payer-summary">
                    <span className="ipd-payer-type">
                      {payerType}
                    </span>

                    <DetailField
                      label={payerConfig.referenceSummaryLabel}
                    >
                      {valueOrFallback(
                        payerReference,
                        payerConfig.referenceFallback
                      )}
                    </DetailField>

                    <p className="ipd-payer-note">
                      {payerConfig.note}
                    </p>
                  </div>
                )}
              </section>

              <section className="ipd-details-card ipd-next-card">
                <span className="ipd-next-icon">
                  <NextIcon />
                </span>

                <h3>{config.nextCard.title}</h3>

                <p>{config.nextCard.description}</p>

                {config.nextCard.checklist.map((item) => (
                  <div
                    className="ipd-check-row"
                    key={item}
                  >
                    <span>✓</span>
                    {item}
                  </div>
                ))}
              </section>
            </aside>
          </div>

          <footer className="ipd-details-footer">
            <button
              type="button"
              className="ipd-btn ipd-btn--secondary"
              onClick={onBack}
            >
              <ArrowBackOutlined fontSize="small" />
              {config.footer.backLabel}
            </button>

            <div className="ipd-footer-actions">
              <span>{config.footer.stepLabel}</span>

              <button
                type="button"
                className="ipd-btn ipd-btn--primary"
                onClick={continueToCharges}
              >
                {config.footer.continueLabel}
                <ArrowForwardOutlined fontSize="small" />
              </button>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}
