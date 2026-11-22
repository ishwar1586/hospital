
import React from "react";

import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import "./MedicineRow.css";

import {
  prescriptionRouteOptions,
  prescriptionFrequencyOptions,
  prescriptionDurationOptions,
} from "../../../../config/prescription.config";


const DEFAULT_ROUTE_OPTIONS = [
  { label: "Oral", value: "oral" },
  { label: "Intravenous (IV)", value: "iv" },
  { label: "Intramuscular (IM)", value: "im" },
  { label: "Subcutaneous (SC)", value: "sc" },
  { label: "Topical", value: "topical" },
  { label: "Inhalation", value: "inhalation" },
  { label: "Sublingual", value: "sublingual" },
  { label: "Rectal", value: "rectal" },
];

const DEFAULT_FREQUENCY_OPTIONS = [
  { label: "Once Daily (OD)", value: "od" },
  { label: "Twice Daily (BD)", value: "bd" },
  { label: "Three Times Daily (TDS)", value: "tds" },
  { label: "Four Times Daily (QID)", value: "qid" },
  { label: "As Required (SOS)", value: "sos" },
];

const DEFAULT_DURATION_OPTIONS = [
  { label: "1 Day", value: "1-day" },
  { label: "3 Days", value: "3-days" },
  { label: "5 Days", value: "5-days" },
  { label: "7 Days", value: "7-days" },
  { label: "10 Days", value: "10-days" },
  { label: "14 Days", value: "14-days" },
  { label: "21 Days", value: "21-days" },
  { label: "30 Days", value: "30-days" },
];


const normalizeOptions = (options, fallback) => {
  const source = Array.isArray(options) && options.length
    ? options
    : fallback;

  return source
    .map((option) => {
      if (typeof option === "string") {
        return {
          label: option,
          value: option.toLowerCase(),
        };
      }

      if (
        option &&
        typeof option === "object" &&
        option.value !== undefined
      ) {
        return {
          label: String(option.label ?? option.value),
          value: String(option.value),
        };
      }

      return null;
    })
    .filter(Boolean);
};


const MedicineRow = ({
  medicine,
  index,
  onChange,
  onEdit,
  onRemove,

  routeOptions = prescriptionRouteOptions,
  frequencyOptions = prescriptionFrequencyOptions,
  durationOptions = prescriptionDurationOptions,

  disabled = false,
}) => {

  if (!medicine) return null;

  const routes = normalizeOptions(
    routeOptions,
    DEFAULT_ROUTE_OPTIONS
  );

  const frequencies = normalizeOptions(
    frequencyOptions,
    DEFAULT_FREQUENCY_OPTIONS
  );

  const durations = normalizeOptions(
    durationOptions,
    DEFAULT_DURATION_OPTIONS
  );


  const handleFieldChange = (field, value) => {
    onChange?.(medicine.id, field, value);
  };


  const handleEdit = () => {
    if (!disabled) {
      onEdit?.(medicine);
    }
  };


  const handleRemove = () => {
    if (!disabled) {
      onRemove?.(medicine.id);
    }
  };


  const medicineName = [
    medicine.name,
    medicine.strength,
  ]
    .filter(Boolean)
    .join(" ");


  return (
    <tr className="prescription-medicine-row">

      <td className="prescription-medicine-row__serial">
        {index + 1}
      </td>


      <td className="prescription-medicine-row__medicine">

        <div className="prescription-medicine-row__medicine-name">
          {medicineName || "Unnamed Medicine"}
        </div>

        {medicine.form && (
          <div className="prescription-medicine-row__medicine-form">
            {medicine.form}
          </div>
        )}

      </td>


      {/* Dose */}
      <td>

        <input
          type="text"
          className="prescription-medicine-row__field prescription-medicine-row__dose"
          value={medicine.dose || ""}
          placeholder="e.g. 500 mg"
          onChange={(event) =>
            handleFieldChange("dose", event.target.value)
          }
          disabled={disabled}
          aria-label={`Dose for ${medicineName}`}
        />

      </td>


      {/* Route */}
      <td>

        <select
          className="prescription-medicine-row__field"
          value={medicine.route || "oral"}
          onChange={(event) =>
            handleFieldChange("route", event.target.value)
          }
          disabled={disabled}
          aria-label={`Route for ${medicineName}`}
        >

          <option value="">
            Select route
          </option>

          {routes.map((option) => (

            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>

          ))}

        </select>

      </td>


      {/* Frequency */}
      <td>

        <select
          className="prescription-medicine-row__field"
          value={medicine.frequency || ""}
          onChange={(event) =>
            handleFieldChange("frequency", event.target.value)
          }
          disabled={disabled}
          aria-label={`Frequency for ${medicineName}`}
        >

          <option value="">
            Select
          </option>

          {frequencies.map((option) => (

            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>

          ))}

        </select>

      </td>


      {/* Duration */}
      <td>

        <select
          className="prescription-medicine-row__field"
          value={medicine.duration || ""}
          onChange={(event) =>
            handleFieldChange("duration", event.target.value)
          }
          disabled={disabled}
          aria-label={`Duration for ${medicineName}`}
        >

          <option value="">
            Select
          </option>

          {durations.map((option) => (

            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>

          ))}

        </select>

      </td>


      {/* Instructions */}
      <td>

        <input
          type="text"
          className="prescription-medicine-row__field prescription-medicine-row__instruction"
          value={medicine.instruction || ""}
          placeholder="e.g. After food"
          onChange={(event) =>
            handleFieldChange("instruction", event.target.value)
          }
          disabled={disabled}
          aria-label={`Instruction for ${medicineName}`}
        />

      </td>


      {/* Actions */}
      <td className="prescription-medicine-row__actions">

        <button
          type="button"
          className="prescription-medicine-row__action-button prescription-medicine-row__edit-button"
          onClick={handleEdit}
          disabled={disabled}
          title="Edit medicine"
          aria-label={`Edit ${medicineName}`}
        >
          <EditOutlined />
        </button>


        <button
          type="button"
          className="prescription-medicine-row__action-button prescription-medicine-row__delete-button"
          onClick={handleRemove}
          disabled={disabled}
          title="Remove medicine"
          aria-label={`Remove ${medicineName}`}
        >
          <DeleteOutlineOutlined />
        </button>

      </td>

    </tr>
  );
};


export default MedicineRow;
