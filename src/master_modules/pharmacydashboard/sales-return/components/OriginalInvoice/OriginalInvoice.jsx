import {
    ReceiptLongOutlined,
    CalendarMonthOutlined,
    PersonOutlineOutlined,
    LocalHospitalOutlined,
    PaymentsOutlined,
    VisibilityOutlined,
    CurrencyRupeeOutlined,
} from "@mui/icons-material";

import "./OriginalInvoice.css";

const OriginalInvoice = ({
    invoiceData = {},
    onViewInvoice,
}) => {

    return (

        <div className="original-invoice-card">

            <div className="card-header">

                <div className="card-title">

                    <ReceiptLongOutlined />

                    <h3>

                        Original Invoice

                    </h3>

                </div>

                <button

                    type="button"

                    className="view-invoice-btn"

                    onClick={onViewInvoice}

                    disabled={!invoiceData.invoiceNo}

                >

                    <VisibilityOutlined />

                    View Invoice

                </button>

            </div>

            <div className="invoice-details">

                <div className="invoice-row">

                    <ReceiptLongOutlined />

                    <label>Invoice No</label>

                    <span>{invoiceData.invoiceNo || "--"}</span>

                </div>

                <div className="invoice-row">

                    <CalendarMonthOutlined />

                    <label>Invoice Date</label>

                    <span>{invoiceData.invoiceDate || "--"}</span>

                </div>

                <div className="invoice-row">

                    <PersonOutlineOutlined />

                    <label>Patient</label>

                    <span>{invoiceData.patientName || "--"}</span>

                </div>

                <div className="invoice-row">

                    <LocalHospitalOutlined />

                    <label>Doctor</label>

                    <span>{invoiceData.doctorName || "--"}</span>

                </div>

                <div className="invoice-row">

                    <PaymentsOutlined />

                    <label>Payment</label>

                    <span>{invoiceData.paymentMode || "--"}</span>

                </div>

            </div>

            <div className="amount-summary">

                <div className="amount-card total">

                    <CurrencyRupeeOutlined />

                    <small>Bill Amount</small>

                    <h2>

                        ₹{invoiceData.billAmount || "0.00"}

                    </h2>

                </div>

                <div className="amount-card paid">

                    <CurrencyRupeeOutlined />

                    <small>Paid</small>

                    <h2>

                        ₹{invoiceData.paidAmount || "0.00"}

                    </h2>

                </div>

                <div className="amount-card due">

                    <CurrencyRupeeOutlined />

                    <small>Due</small>

                    <h2>

                        ₹{invoiceData.dueAmount || "0.00"}

                    </h2>

                </div>

            </div>

        </div>

    );

};

export default OriginalInvoice;