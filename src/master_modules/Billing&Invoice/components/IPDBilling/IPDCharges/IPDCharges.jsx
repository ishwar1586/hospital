import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  CloseOutlined,
  AddOutlined,
  SearchOutlined,
  DeleteOutlineOutlined,
  ReceiptLongOutlined,
  CurrencyRupeeOutlined,
  DiscountOutlined,
  AccountBalanceWalletOutlined,
} from "@mui/icons-material";

import "./IPDCharges.css";
import { ipdChargesConfig as config } from "./config/ipdCharges.config";
import { ipdChargesSummaryMock } from "./mock/ipdCharges.mock";
import { ipdChargesService } from "./services/ipdCharges.service";
import IPDBillingStepper from
  "@/master_modules/Billing&Invoice/components/IPDBillingStepper/IPDBillingStepper";

const today = () => new Date().toISOString().slice(0, 10);

const createEmptyForm = () => ({
  serviceDate: today(),
  category: "Room",
  code: "",
  serviceName: "",
  quantity: 1,
  rate: 0,
  discount: 0,
  notes: "",
});

const formatCurrency = (value) =>
  new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);

const calculateSubtotal = (charge) =>
  (Number(charge.quantity) || 0) * (Number(charge.rate) || 0);

const getChargeAmount = (charge) =>
  Math.max(
    0,
    calculateSubtotal(charge) - (Number(charge.discount) || 0)
  );

const getPatientName = (patient) =>
  patient?.patientName || patient?.name || "Selected Patient";

const getPatientNumber = (patient) =>
  patient?.ipdNo || patient?.ipdNumber || "—";

const getPatientUHID = (patient) =>
  patient?.uhid || patient?.patientId || "—";


function SummaryCard({ card, value }) {
  const icons = {
    totalCharges: ReceiptLongOutlined,
    discount: DiscountOutlined,
    advancePaid: AccountBalanceWalletOutlined,
    netPayable: CurrencyRupeeOutlined,
  };

  const Icon = icons[card.key] || ReceiptLongOutlined;

  return (
    <article className={`ipdc-summary-card ipdc-summary-card--${card.tone}`}>
      <span className="ipdc-summary-card__icon">
        <Icon />
      </span>
      <div>
        <span className="ipdc-summary-card__label">{card.label}</span>
        <strong>{formatCurrency(value)}</strong>
      </div>
    </article>
  );
}

function AddChargeModal({ onClose, onSave }) {
  const [form, setForm] = useState(createEmptyForm);
  const [error, setError] = useState("");

  const updateField = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  };

  const subtotal = calculateSubtotal(form);
  const discount = Number(form.discount) || 0;
  const netAmount = Math.max(0, subtotal - discount);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.serviceDate ||
      !form.category ||
      !form.code.trim() ||
      !form.serviceName.trim() ||
      Number(form.quantity) <= 0 ||
      Number(form.rate) < 0 ||
      !Number.isFinite(Number(form.quantity)) ||
      !Number.isFinite(Number(form.rate)) ||
      !Number.isFinite(Number(form.discount)) ||
      Number(form.discount) < 0
    ) {
      setError(config.messages.invalidCharge);
      return;
    }

    if (discount > subtotal) {
      setError(config.messages.invalidDiscount);
      return;
    }

    onSave({
      ...form,
      code: form.code.trim(),
      serviceName: form.serviceName.trim(),
      quantity: Number(form.quantity),
      rate: Number(form.rate),
      discount,
      notes: form.notes.trim(),
    });
  };

  return (
    <div
      className="ipdc-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="ipdc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ipdc-modal-title"
      >
        <header className="ipdc-modal__header">
          <div>
            <h2 id="ipdc-modal-title">{config.form.title}</h2>
            <p>{config.form.description}</p>
          </div>

          <button
            type="button"
            className="ipdc-icon-button"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseOutlined />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="ipdc-form-grid">
            {config.form.fields.map((field) => (
              <div
                key={field.name}
                className={`ipdc-form-field ${
                  field.name === "notes" ? "ipdc-form-field--full" : ""
                }`}
              >
                <label htmlFor={`ipdc-${field.name}`}>
                  {field.label}
                  {field.required && <span> *</span>}
                </label>

                {field.type === "select" ? (
                  <select
                    id={`ipdc-${field.name}`}
                    value={form[field.name]}
                    required={field.required}
                    onChange={(event) =>
                      updateField(field.name, event.target.value)
                    }
                  >
                    {config.categories
                      .filter((category) => category.value !== "All")
                      .map((category) => (
                        <option
                          key={category.value}
                          value={category.value}
                        >
                          {category.label}
                        </option>
                      ))}
                  </select>
                ) : (
                  <input
                    id={`ipdc-${field.name}`}
                    type={field.type}
                    value={form[field.name]}
                    required={field.required}
                    min={field.min}
                    step={field.type === "number" ? "any" : undefined}
                    placeholder={field.placeholder || ""}
                    onChange={(event) =>
                      updateField(
                        field.name,
                        field.type === "number"
                          ? event.target.value
                          : event.target.value
                      )
                    }
                  />
                )}
              </div>
            ))}
          </div>

          <div className="ipdc-modal-total">
            <span>Charge subtotal</span>
            <strong>{formatCurrency(subtotal)}</strong>
            <span>Discount</span>
            <strong>{formatCurrency(discount)}</strong>
            <span>Net charge</span>
            <strong>{formatCurrency(netAmount)}</strong>
          </div>

          {error && (
            <p className="ipdc-form-error" role="alert">
              {error}
            </p>
          )}

          <footer className="ipdc-modal__footer">
            <button
              type="button"
              className="ipdc-btn ipdc-btn--secondary"
              onClick={onClose}
            >
              {config.form.cancelLabel}
            </button>

            <button
              type="submit"
              className="ipdc-btn ipdc-btn--primary"
            >
              <AddOutlined fontSize="small" />
              {config.form.saveLabel}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}

export default function IPDCharges({
  patient,
  initialCharges,
  advancePaid = ipdChargesSummaryMock.advancePaid,
  onBack,
  onCancel,
  onContinue,
}) {
  const [charges, setCharges] = useState(initialCharges || []);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(!initialCharges);

  useEffect(() => {
    let active = true;

    if (initialCharges) {
      setCharges(initialCharges);
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    setIsLoading(true);

    ipdChargesService.getCharges().then((result) => {
      if (active) {
        setCharges(result);
        setIsLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [initialCharges]);

  const totals = useMemo(() => {
    const totalCharges = charges.reduce(
      (sum, charge) => sum + calculateSubtotal(charge),
      0
    );

    const discount = charges.reduce(
      (sum, charge) => sum + (Number(charge.discount) || 0),
      0
    );

    const netPayable = Math.max(
      0,
      totalCharges - discount - (Number(advancePaid) || 0)
    );

    return {
      totalCharges,
      discount,
      advancePaid: Number(advancePaid) || 0,
      netPayable,
    };
  }, [charges, advancePaid]);

  const filteredCharges = useMemo(() => {
    const query = search.trim().toLowerCase();

    return charges.filter((charge) => {
      const matchesCategory =
        activeCategory === "All" || charge.category === activeCategory;

      const matchesSearch =
        !query ||
        [
          charge.code,
          charge.serviceName,
          charge.category,
          charge.serviceDate,
        ].some((value) =>
          String(value || "").toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [charges, activeCategory, search]);

  const pageSize = config.pageSize;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCharges.length / pageSize)
  );

  const safePage = Math.min(currentPage, totalPages);

  const visibleCharges = filteredCharges.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleAddCharge = async (newCharge) => {
    const updated = await ipdChargesService.addCharge(charges, newCharge);
    setCharges(updated);
    setIsModalOpen(false);
    setCurrentPage(Math.max(1, Math.ceil(updated.length / pageSize)));
  };

  const handleDeleteCharge = async (chargeId) => {
    const updated = await ipdChargesService.deleteCharge(charges, chargeId);
    setCharges(updated);
    setCurrentPage((page) =>
      Math.min(
        page,
        Math.max(1, Math.ceil(updated.length / pageSize))
      )
    );
  };

  const handleContinue = () => {
    onContinue?.({
      patient,
      charges,
      summary: totals,
    });
  };

  return (
    <main className="ipdc-page">
      <header className="ipdc-header">
        <div className="ipdc-header__left">
          <button
            type="button"
            className="ipdc-icon-button"
            onClick={onBack}
            aria-label={config.header.backLabel}
          >
            <ArrowBackOutlined />
          </button>

          <div>
            <span className="ipdc-eyebrow">{config.header.eyebrow}</span>
            <h1>{config.header.title}</h1>
            <p>{config.header.description}</p>
          </div>
        </div>

        <button
          type="button"
          className="ipdc-btn ipdc-btn--secondary"
          onClick={onCancel}
        >
          <CloseOutlined fontSize="small" />
          {config.header.cancelLabel}
        </button>
      </header>

    <IPDBillingStepper currentStep={2} />

      <section className="ipdc-patient-banner">
        <div className="ipdc-patient-avatar">
          {(getPatientName(patient).trim()[0] || "P").toUpperCase()}
        </div>

        <div className="ipdc-patient-banner__identity">
          <h2>{getPatientName(patient)}</h2>
          <div>
            <span>UHID: {getPatientUHID(patient)}</span>
            <span>IPD No: {getPatientNumber(patient)}</span>
            {patient?.ward && <span>Ward: {patient.ward}</span>}
            {patient?.room && <span>Room: {patient.room}</span>}
            {patient?.bed && <span>Bed: {patient.bed}</span>}
          </div>
        </div>

        <span className="ipdc-step-badge">Step 2 of 3</span>
      </section>

      <section className="ipdc-summary-grid">
        {config.summaryCards.map((card) => (
          <SummaryCard
            key={card.key}
            card={card}
            value={totals[card.key]}
          />
        ))}
      </section>

      <section className="ipdc-charge-panel">
        <header className="ipdc-charge-panel__header">
          <div>
            <h2>{config.table.title}</h2>
            <p>{config.table.description}</p>
          </div>

          <button
            type="button"
            className="ipdc-btn ipdc-btn--primary"
            onClick={() => setIsModalOpen(true)}
          >
            <AddOutlined fontSize="small" />
            {config.table.addButton}
          </button>
        </header>

        <div className="ipdc-category-tabs">
          {config.categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                className={active ? "is-active" : ""}
                onClick={() => handleCategoryChange(category.value)}
              >
                <Icon fontSize="small" />
                {category.label}
                {category.value === "All" && (
                  <span className="ipdc-tab-count">{charges.length}</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="ipdc-table-toolbar">
          <div className="ipdc-search">
            <SearchOutlined fontSize="small" />
            <input
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
              placeholder={config.table.searchPlaceholder}
              aria-label={config.table.searchPlaceholder}
            />
          </div>

          <span className="ipdc-result-count">
            {filteredCharges.length} charge
            {filteredCharges.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="ipdc-table-scroll">
          <table className="ipdc-table">
            <thead>
              <tr>
                {config.table.columns.map((column) => (
                  <th
                    key={column.key}
                    className={column.align === "right" ? "text-right" : ""}
                  >
                    {column.label}
                  </th>
                ))}
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={config.table.columns.length + 1}
                    className="ipdc-table-message"
                  >
                    Loading charges...
                  </td>
                </tr>
              ) : visibleCharges.length ? (
                visibleCharges.map((charge) => (
                  <tr key={charge.id}>
                    {config.table.columns.map((column) => {
                      const value =
                        column.key === "amount"
                          ? getChargeAmount(charge)
                          : charge[column.key];

                      return (
                        <td
                          key={column.key}
                          className={
                            column.align === "right" ? "text-right" : ""
                          }
                        >
                          {column.format === "currency"
                            ? formatCurrency(value)
                            : column.key === "category"
                              ? (
                                <span className="ipdc-category-chip">
                                  {value}
                                </span>
                              )
                              : value ?? "—"}
                        </td>
                      );
                    })}

                    <td className="text-right">
                      <button
                        type="button"
                        className="ipdc-delete-button"
                        onClick={() => handleDeleteCharge(charge.id)}
                        aria-label={`Delete ${charge.serviceName}`}
                        title="Remove charge"
                      >
                        <DeleteOutlineOutlined fontSize="small" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={config.table.columns.length + 1}
                    className="ipdc-table-message"
                  >
                    <strong>{config.table.emptyTitle}</strong>
                    <span>{config.table.emptyDescription}</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <footer className="ipdc-pagination">
          <span>
            Showing{" "}
            {filteredCharges.length === 0
              ? 0
              : (safePage - 1) * pageSize + 1}
            {"–"}
            {Math.min(safePage * pageSize, filteredCharges.length)} of{" "}
            {filteredCharges.length}
          </span>

          <div>
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => setCurrentPage((page) => page - 1)}
            >
              Previous
            </button>

            <span>
              {safePage} / {totalPages}
            </span>

            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              Next
            </button>
          </div>
        </footer>
      </section>

      <section className="ipdc-billing-total">
        <div>
          <span>Gross Charges</span>
          <strong>{formatCurrency(totals.totalCharges)}</strong>
        </div>
        <div>
          <span>Total Discount</span>
          <strong>− {formatCurrency(totals.discount)}</strong>
        </div>
        <div>
          <span>Advance Received</span>
          <strong>− {formatCurrency(totals.advancePaid)}</strong>
        </div>
        <div className="ipdc-billing-total__net">
          <span>Balance Payable</span>
          <strong>{formatCurrency(totals.netPayable)}</strong>
        </div>
      </section>

      <footer className="ipdc-page-footer">
        <button
          type="button"
          className="ipdc-btn ipdc-btn--secondary"
          onClick={onBack}
        >
          <ArrowBackOutlined fontSize="small" />
          {config.footer.backLabel}
        </button>

        <div className="ipdc-page-footer__right">
          <span>{config.footer.stepLabel}</span>
          <button
            type="button"
            className="ipdc-btn ipdc-btn--primary"
            onClick={handleContinue}
          >
            {config.footer.continueLabel}
            <ArrowForwardOutlined fontSize="small" />
          </button>
        </div>
      </footer>

      {isModalOpen && (
        <AddChargeModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddCharge}
        />
      )}
    </main>
  );
}