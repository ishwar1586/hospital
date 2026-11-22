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
  LocalHospitalOutlined,
} from "@mui/icons-material";

import selfStaffPurchaseConfig from "../../../../config/selfStaffPurchase.config";

import "./StaffInformation.css";

const StaffInformation = ({
  staff = null,
  config = selfStaffPurchaseConfig,
  onBack,
  onContinue,
  onClose,
}) => {
  const staffInformationConfig =
    config?.staffInformation || {};

  const fields =
    staffInformationConfig?.fields || [];

  /*
   * ---------------------------------------------------------
   * FIELD ICON
   * ---------------------------------------------------------
   */

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

  /*
   * ---------------------------------------------------------
   * FIELD VALUE
   * ---------------------------------------------------------
   */

  const getFieldValue = (field) => {
    if (!staff) {
      return "-";
    }

    return staff?.[field] ?? "-";
  };

  /*
   * ---------------------------------------------------------
   * CONTINUE
   * ---------------------------------------------------------
   */

  const handleContinue = () => {
    if (!staff) {
      return;
    }

    /*
     * Keep the complete staff object intact.
     * Parent can use this object for Medicines,
     * Payment, Review and Invoice.
     */

    onContinue?.(staff);
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <section className="staff-information">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="staff-information__header">
        <div className="staff-information__header-left">
          <div className="staff-information__icon">
            <PersonOutlineOutlined />
          </div>

          <div>
            <h2 className="staff-information__title">
              {staffInformationConfig?.title ||
                "Staff Information"}
            </h2>

            <p className="staff-information__subtitle">
              Confirm staff information before
              proceeding to medicine selection
            </p>
          </div>
        </div>

        {staff && (
          <div className="staff-information__confirmed">
            <CheckCircleOutlined />

            <span>Information Verified</span>
          </div>
        )}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      {staff ? (
        <div className="staff-information__content">
          {/* =================================================
              STAFF SUMMARY
          ================================================= */}

          <div className="staff-information__summary">
            <div className="staff-information__summary-icon">
              <PersonOutlineOutlined />
            </div>

            <div className="staff-information__summary-content">
              <span className="staff-information__summary-label">
                Selected Staff
              </span>

              <h3>
                {staff?.staffName || "-"}
              </h3>

              <div className="staff-information__summary-meta">
                <span>
                  {staff?.employeeId || "-"}
                </span>

                <span className="staff-information__separator">
                  •
                </span>

                <span>
                  {staff?.designation || "-"}
                </span>
              </div>
            </div>

            <div className="staff-information__summary-department">
              <LocalHospitalOutlined />

              <div>
                <span>Department</span>

                <strong>
                  {staff?.department || "-"}
                </strong>
              </div>
            </div>
          </div>

          {/* =================================================
              INFORMATION CARD
          ================================================= */}

          <div className="staff-information__card">
            <div className="staff-information__card-header">
              <div>
                <h3>Employee Information</h3>

                <p>
                  Verify the details before continuing
                  with the pharmacy purchase.
                </p>
              </div>
            </div>

            <div className="staff-information__grid">
              {fields.map((fieldConfig) => {
                const fieldName =
                  fieldConfig?.field;

                return (
                  <div
                    className="staff-information__field"
                    key={
                      fieldConfig?.id ||
                      fieldName
                    }
                  >
                    <div className="staff-information__field-icon">
                      {getFieldIcon(fieldName)}
                    </div>

                    <div className="staff-information__field-content">
                      <span className="staff-information__field-label">
                        {fieldConfig?.label ||
                          fieldName}
                      </span>

                      <span className="staff-information__field-value">
                        {getFieldValue(fieldName)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PURCHASE INFORMATION
          ================================================= */}

          <div className="staff-information__purchase-note">
            <div className="staff-information__purchase-note-icon">
              <CheckCircleOutlined />
            </div>

            <div>
              <h4>
                Ready for Pharmacy Purchase
              </h4>

              <p>
                The selected staff member has been
                verified. Continue to select medicines
                for this purchase.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* =================================================
           EMPTY STATE
        ================================================= */

        <div className="staff-information__empty">
          <div className="staff-information__empty-icon">
            <PersonOutlineOutlined />
          </div>

          <h3>No Staff Information</h3>

          <p>
            Please go back and select a staff member
            before continuing.
          </p>
        </div>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="staff-information__footer">
        <button
          type="button"
          className="staff-information__back-btn"
          onClick={onBack}
        >
          <ArrowBackOutlined />

          <span>
            {config?.footer?.backLabel ||
              "Back"}
          </span>
        </button>

        <div className="staff-information__footer-right">
          <button
            type="button"
            className="staff-information__cancel-btn"
            onClick={onClose}
          >
            {config?.footer?.cancelLabel ||
              "Cancel"}
          </button>

          <button
            type="button"
            className="staff-information__continue-btn"
            disabled={!staff}
            onClick={handleContinue}
          >
            <span>
              {config?.footer?.continueLabel ||
                "Continue"}
            </span>

            <ArrowForwardOutlined />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StaffInformation;