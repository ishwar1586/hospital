import React from "react";

import "./PaymentTab.css";

const PaymentTab = ({
    appointment,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return (
            <div className="appointment-payment-tab appointment-payment-tab--empty">
                <p>
                    Payment information is not available.
                </p>
            </div>
        );
    }


    // =========================================
    // Payment Data
    // =========================================

    const paymentId =
        appointment?.paymentId || "—";

    const paymentStatus =
        appointment?.paymentStatus || "—";

    const paymentMethod =
        appointment?.paymentMethod || "—";

    const amount =
        appointment?.amount !== undefined &&
        appointment?.amount !== null
            ? appointment.amount
            : "—";

    const paidAmount =
        appointment?.paidAmount !== undefined &&
        appointment?.paidAmount !== null
            ? appointment.paidAmount
            : "—";

    const dueAmount =
        appointment?.dueAmount !== undefined &&
        appointment?.dueAmount !== null
            ? appointment.dueAmount
            : "—";


    // =========================================
    // Payment Status Class
    // =========================================

    const normalizedStatus =
        String(paymentStatus)
            .toLowerCase()
            .replace(/\s+/g, "-");


    // =========================================
    // Render
    // =========================================

    return (
        <div className="appointment-payment-tab">

            {/* =====================================
                Payment Overview
            ===================================== */}

            <section className="appointment-payment-tab__section">

                <div className="appointment-payment-tab__section-header">

                    <div>
                        <h3>
                            Payment Information
                        </h3>

                        <p>
                            Payment details associated
                            with this appointment.
                        </p>
                    </div>

                </div>


                {/* =================================
                    Payment Summary
                ================================= */}

                <div className="appointment-payment-tab__summary">

                    <div className="appointment-payment-tab__summary-card">

                        <span className="appointment-payment-tab__summary-label">
                            Total Amount
                        </span>

                        <span className="appointment-payment-tab__summary-value">
                            {amount === "—"
                                ? "—"
                                : `₹${amount}`}
                        </span>

                    </div>


                    <div className="appointment-payment-tab__summary-card">

                        <span className="appointment-payment-tab__summary-label">
                            Paid Amount
                        </span>

                        <span className="appointment-payment-tab__summary-value">
                            {paidAmount === "—"
                                ? "—"
                                : `₹${paidAmount}`}
                        </span>

                    </div>


                    <div className="appointment-payment-tab__summary-card">

                        <span className="appointment-payment-tab__summary-label">
                            Due Amount
                        </span>

                        <span className="appointment-payment-tab__summary-value">
                            {dueAmount === "—"
                                ? "—"
                                : `₹${dueAmount}`}
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================
                Payment Details
            ===================================== */}

            <section className="appointment-payment-tab__section">

                <div className="appointment-payment-tab__details">

                    <div className="appointment-payment-tab__detail-item">

                        <span className="appointment-payment-tab__detail-label">
                            Payment ID
                        </span>

                        <span className="appointment-payment-tab__detail-value">
                            {paymentId}
                        </span>

                    </div>


                    <div className="appointment-payment-tab__detail-item">

                        <span className="appointment-payment-tab__detail-label">
                            Payment Status
                        </span>

                        <span
                            className={`appointment-payment-tab__status appointment-payment-tab__status--${normalizedStatus}`}
                        >
                            {paymentStatus}
                        </span>

                    </div>


                    <div className="appointment-payment-tab__detail-item">

                        <span className="appointment-payment-tab__detail-label">
                            Payment Method
                        </span>

                        <span className="appointment-payment-tab__detail-value">
                            {paymentMethod}
                        </span>

                    </div>


                    <div className="appointment-payment-tab__detail-item">

                        <span className="appointment-payment-tab__detail-label">
                            Appointment ID
                        </span>

                        <span className="appointment-payment-tab__detail-value">
                            {
                                appointment?.appointmentId ||
                                appointment?.id ||
                                "—"
                            }
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================
                No Payment Data Notice
            ===================================== */}

            {!appointment?.paymentId &&
                !appointment?.paymentStatus &&
                !appointment?.paymentMethod &&
                appointment?.amount === undefined &&
                appointment?.paidAmount === undefined &&
                appointment?.dueAmount === undefined && (

                    <div className="appointment-payment-tab__notice">

                        <span className="appointment-payment-tab__notice-title">
                            Payment details not available
                        </span>

                        <span className="appointment-payment-tab__notice-message">
                            No payment transaction has been
                            recorded for this appointment yet.
                        </span>

                    </div>
                )}

        </div>
    );
};

export default PaymentTab;