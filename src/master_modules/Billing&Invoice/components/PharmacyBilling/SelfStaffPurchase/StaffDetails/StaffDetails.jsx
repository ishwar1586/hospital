import React from "react";
import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  PersonOutlineOutlined,
  BadgeOutlined,
  BusinessOutlined,
  WorkOutlineOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";

import selfStaffPurchaseConfig from "../../../../config/selfStaffPurchase.config";

import "./StaffDetails.css";

const StaffDetails = ({
  staff = null,
  config = selfStaffPurchaseConfig,
  onBack,
  onContinue,
  onClose,
}) => {
  const staffDetailsConfig = config?.staffDetails || {};

  const fields = Array.isArray(staffDetailsConfig?.fields)
    ? staffDetailsConfig.fields
    : [];

  // =========================================================
  // FIELD ICON
  // =========================================================

  const getFieldIcon = (field) => {
    switch (field) {
      case "employeeId":
        return <BadgeOutlined />;

      case "staffName":
        return <PersonOutlineOutlined />;

      case "department":
        return <BusinessOutlined />;

      case "designation":
        return <WorkOutlineOutlined />;

      case "mobile":
        return <PhoneOutlined />;

      default:
        return <PersonOutlineOutlined />;
    }
  };

  // =========================================================
  // FIELD VALUE
  // =========================================================

  const getFieldValue = (field) => {
    if (!staff) {
      return "-";
    }

    const value = staff?.[field];

    return value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
      ? value
      : "-";
  };

  // =========================================================
  // CONTINUE TO MEDICINES
  // =========================================================

  const handleContinue = () => {
    if (!staff) {
      return;
    }

    onContinue?.(staff);
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section className="staff-details">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="staff-details__header">
        <div className="staff-details__header-left">
          <div className="staff-details__icon">
            <PersonOutlineOutlined />
          </div>

          <div>
            <h2 className="staff-details__title">
              {staffDetailsConfig?.title || "Staff Details"}
            </h2>

            <p className="staff-details__subtitle">
              Review selected staff member details
            </p>
          </div>
        </div>

        {staff && (
          <div className="staff-details__verified">
            <CheckCircleOutlined />

            <span>Staff Selected</span>
          </div>
        )}
      </div>

      {/* =====================================================
          STAFF PROFILE
      ===================================================== */}

      {staff ? (
        <>
          <div className="staff-details__profile">
            <div className="staff-details__avatar">
              {staff?.staffName?.charAt(0)?.toUpperCase() || "S"}
            </div>

            <div className="staff-details__profile-content">
              <h3>{staff?.staffName || "-"}</h3>

              <div className="staff-details__profile-meta">
                <span>{staff?.employeeId || "-"}</span>

                <span className="staff-details__dot">•</span>

                <span>{staff?.designation || "-"}</span>
              </div>
            </div>

            <div
              className={`staff-details__profile-status staff-details__profile-status--${String(
                staff?.status || ""
              ).toLowerCase()}`}
            >
              {staff?.status || "-"}
            </div>
          </div>

          {/* =================================================
              EMPLOYEE INFORMATION
          ================================================= */}

          <div className="staff-details__section">
            <div className="staff-details__section-header">
              <h3>Employee Information</h3>

              <span>Staff Information</span>
            </div>

            <div className="staff-details__grid">
              {fields.map((fieldConfig) => {
                const fieldName = fieldConfig?.field;

                if (!fieldName) {
                  return null;
                }

                return (
                  <div
                    className="staff-details__field"
                    key={fieldConfig?.id || fieldName}
                  >
                    <div className="staff-details__field-icon">
                      {getFieldIcon(fieldName)}
                    </div>

                    <div className="staff-details__field-content">
                      <span className="staff-details__field-label">
                        {fieldConfig?.label || fieldName}
                      </span>

                      <span className="staff-details__field-value">
                        {getFieldValue(fieldName)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        /* ===================================================
           EMPTY STATE
        =================================================== */

        <div className="staff-details__empty">
          <div className="staff-details__empty-icon">
            <PersonOutlineOutlined />
          </div>

          <h3>No Staff Selected</h3>

          <p>
            Please go back and select a staff member before continuing.
          </p>
        </div>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="staff-details__footer">
        <button
          type="button"
          className="staff-details__back-btn"
          onClick={onBack}
        >
          <ArrowBackOutlined />

          <span>
            {config?.footer?.backLabel || "Back"}
          </span>
        </button>

        <div className="staff-details__footer-right">
          <button
            type="button"
            className="staff-details__cancel-btn"
            onClick={onClose}
          >
            {config?.footer?.cancelLabel || "Cancel"}
          </button>

          <button
            type="button"
            className="staff-details__continue-btn"
            disabled={!staff}
            onClick={handleContinue}
          >
            <span>
              {config?.footer?.continueLabel ||
                "Continue to Medicines"}
            </span>

            <ArrowForwardOutlined />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StaffDetails;