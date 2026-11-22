
import React, { useEffect } from "react";
import { Avatar, Chip, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

import staffDetailsConfig from "@/master_modules/StaffManagement/config/staffDetails.config.js";
import "./StaffDetailsDrawer.css";

const readPath = (object, path) =>
  path.split(".").reduce((value, key) => value?.[key], object);

const getValue = (staff, field) => {
  const candidates = [
    field.source,
    field.name,
    ...(field.alternatives || []),
  ].filter(Boolean);

  let value;

  for (const path of candidates) {
    value = readPath(staff, path);

    if (value !== undefined && value !== null && value !== "") {
      break;
    }
  }

  if (value === undefined || value === null || value === "") {
    return "Not provided";
  }

  if (field.format === "date") {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  if (field.format === "invitation") {
    return value === true
      ? "Invitation requested"
      : value === false
        ? "Not requested"
        : "Not provided";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return field.suffix ? `${value} ${field.suffix}` : String(value);
};

const getInitials = (staff) => {
  const first = staff.firstName?.charAt(0) || "";
  const last = staff.lastName?.charAt(0) || "";

  return `${first}${last}`.toUpperCase() || "ST";
};

const getStaffName = (staff) =>
  staff.name ||
  `${staff.firstName || ""} ${staff.lastName || ""}`.trim() ||
  "Staff Member";

const DetailItem = ({ label, value }) => (
  <div className="staff-details-item">
    <div className="staff-details-item__content">
      <span className="staff-details-item__label">{label}</span>
      <span className="staff-details-item__value">{value}</span>
    </div>
  </div>
);

const StaffDetailsDrawer = ({
  open = false,
  staff = null,
  staffMember = null,
  onClose,
}) => {
  const selectedStaff = staffMember || staff;

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open || !selectedStaff) return null;

  const name = getStaffName(selectedStaff);
  const status =
    selectedStaff.employmentStatus || selectedStaff.status;

  return (
    <div
      className="staff-details-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <aside
        className="staff-details-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={`${staffDetailsConfig.title}: ${name}`}
      >
        <header className="staff-details-header">
          <div>
            <span className="staff-details-header__eyebrow">
              STAFF MANAGEMENT
            </span>
            <h2>{staffDetailsConfig.title}</h2>
            <p>{staffDetailsConfig.subtitle}</p>
          </div>

          <IconButton aria-label="Close drawer" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </header>

        <div className="staff-details-body">
          <section className="staff-details-profile">
            <Avatar
              src={
                typeof selectedStaff.profilePhoto === "string"
                  ? selectedStaff.profilePhoto
                  : selectedStaff.photo || ""
              }
              className="staff-details-profile__avatar"
              alt={name}
            >
              {getInitials(selectedStaff)}
            </Avatar>

            <div className="staff-details-profile__info">
              <h3>{name}</h3>
              <p>
                {selectedStaff.designation ||
                  selectedStaff.designationName ||
                  "Not provided"}
              </p>

              <div className="staff-details-profile__meta">
                <BadgeOutlinedIcon fontSize="small" />
                <span>
                  {selectedStaff.employeeId || selectedStaff.id || "—"}
                </span>
              </div>

              <div className="staff-details-profile__chips">
                {status && <Chip size="small" label={status} />}
                {selectedStaff.staffCategory && (
                  <Chip
                    size="small"
                    variant="outlined"
                    label={selectedStaff.staffCategory}
                  />
                )}
              </div>
            </div>
          </section>

          <Divider />

          {staffDetailsConfig.sections.map((section) => {
            const SectionIcon = section.icon;

            return (
              <React.Fragment key={section.id}>
                <section className="staff-details-section">
                  <div className="staff-details-section__heading">
                    <span className="staff-details-section__heading-icon">
                      <SectionIcon fontSize="small" />
                    </span>
                    <h3>{section.title}</h3>
                  </div>

                  <div className="staff-details-section__grid">
                    {section.fields.map((field) => (
                      <DetailItem
                        key={field.name}
                        label={field.label}
                        value={getValue(selectedStaff, field)}
                      />
                    ))}
                  </div>
                </section>

                <Divider />
              </React.Fragment>
            );
          })}
        </div>

        <footer className="staff-details-footer">
          <span>
            Employee ID: {selectedStaff.employeeId || selectedStaff.id || "—"}
          </span>

          <button
            type="button"
            className="staff-details-footer__close"
            onClick={onClose}
          >
            Close
          </button>
        </footer>
      </aside>
    </div>
  );
};

export default StaffDetailsDrawer;
