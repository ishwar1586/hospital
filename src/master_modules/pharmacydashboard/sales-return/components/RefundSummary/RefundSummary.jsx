import {
    AccountBalanceWalletOutlined,
    NotesOutlined,
    CurrencyRupeeOutlined,
} from "@mui/icons-material";

import "./RefundSummary.css";

const formatAmount = (amount = 0) => {

    return `₹${Number(amount).toFixed(2)}`;

};

const RefundSummary = ({

    summary = {},

    refundMethod,

    refundNote,

    onMethodChange,

    onNoteChange,

    onSave,

    onProcess,

    onPrint,

}) => {

    return (

        <div className="refund-summary-card">

            {/* ==========================================
                    Header
            ========================================== */}

            <div className="refund-summary-header">

                <h2>

                    Refund Summary

                </h2>

                <p>

                    Review refund calculation before processing.

                </p>

            </div>

            {/* ==========================================
                    Summary
            ========================================== */}

            <div className="refund-summary-body">

                <div className="summary-item">

                    <span>

                        Sub Total

                    </span>

                    <strong>

                        {formatAmount(summary.subTotal)}

                    </strong>

                </div>

                <div className="summary-item">

                    <span>

                        Discount

                    </span>

                    <strong>

                        {formatAmount(summary.discount)}

                    </strong>

                </div>

                <div className="summary-item">

                    <span>

                        GST

                    </span>

                    <strong>

                        {formatAmount(summary.gst)}

                    </strong>

                </div>

                <div className="summary-item refund-total">

                    <span>

                        Refund Amount

                    </span>

                    <strong>

                        {formatAmount(summary.refund)}

                    </strong>

                </div>

            </div>

            {/* ==========================================
                    Refund Method
            ========================================== */}

            <div className="refund-form">

                <label>

                    <AccountBalanceWalletOutlined />

                    Refund Method

                </label>

                <select

                    value={refundMethod}

                    onChange={onMethodChange}

                >

                    <option value="Cash">

                        Cash

                    </option>

                    <option value="UPI">

                        UPI

                    </option>

                    <option value="Card">

                        Card

                    </option>

                    <option value="Bank Transfer">

                        Bank Transfer

                    </option>

                    <option value="Wallet">

                        Wallet

                    </option>

                </select>

            </div>

            {/* ==========================================
                    Refund Note
            ========================================== */}

            <div className="refund-form">

                <label>

                    <NotesOutlined />

                    Refund Note

                </label>

                <textarea

                    rows="3"

                    placeholder="Enter refund remarks..."

                    value={refundNote}

                    onChange={onNoteChange}

                />

            </div>



                        {/* ==========================================
                    Action Buttons
            ========================================== */}

            <div className="refund-actions">

                <button

                    type="button"

                    className="save-return-btn"

                    onClick={onSave}

                >

                    <CurrencyRupeeOutlined />

                    Save Return

                </button>

                <button

                    type="button"

                    className="process-refund-btn"

                    onClick={onProcess}

                >

                    <AccountBalanceWalletOutlined />

                    Process Refund

                </button>

                <button

                    type="button"

                    className="print-receipt-btn"

                    onClick={onPrint}

                >

                    Print Receipt

                </button>

            </div>

        </div>

    );

};

export default RefundSummary;