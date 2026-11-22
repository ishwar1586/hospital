import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import "./SupplierPurchaseHistory.css";

const PurchaseHistoryDrawer = ({
    open,
    onClose,
    supplier,
}) => {

    if (!supplier) return null;

    const purchaseHistory = [
        {
            poNo: "PO-2026-001",
            invoiceNo: "INV-1001",
            date: "01-Jun-2026",
            amount: 25000,
            status: "Completed",
        },
        {
            poNo: "PO-2026-002",
            invoiceNo: "INV-1002",
            date: "08-Jun-2026",
            amount: 18000,
            status: "Completed",
        },
        {
            poNo: "PO-2026-003",
            invoiceNo: "INV-1003",
            date: "15-Jun-2026",
            amount: 32000,
            status: "Pending",
        },
    ];

    const totalPurchase =
        purchaseHistory.reduce(
            (sum, item) =>
                sum + item.amount,
            0
        );

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >

            <div className="purchase-history-drawer">

                <div className="drawer-header">

                    <div>

                        <h2>
                            Purchase History
                        </h2>

                        <p>
                            {supplier.supplierName}
                        </p>

                    </div>

                    <IconButton
                        onClick={onClose}
                    >
                        <CloseOutlinedIcon />
                    </IconButton>

                </div>

                <div className="summary-cards">

                    <div className="summary-card">

                        <ReceiptLongOutlinedIcon />

                        <div>
                            <span>
                                Total Orders
                            </span>

                            <strong>
                                {purchaseHistory.length}
                            </strong>
                        </div>

                    </div>

                    <div className="summary-card">

                        <ReceiptLongOutlinedIcon />

                        <div>
                            <span>
                                Total Purchase
                            </span>

                            <strong>
                                ₹ {totalPurchase.toLocaleString()}
                            </strong>
                        </div>

                    </div>

                </div>

                <div className="history-card">

                    <h3>
                        Purchase Transactions
                    </h3>

                    <div className="history-table">

                        <table>

                            <thead>

                                <tr>
                                    <th>PO No</th>
                                    <th>Invoice No</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>

                            </thead>

                            <tbody>

                                {purchaseHistory.map(
                                    (
                                        item,
                                        index
                                    ) => (

                                        <tr
                                            key={index}
                                        >

                                            <td>
                                                {item.poNo}
                                            </td>

                                            <td>
                                                {item.invoiceNo}
                                            </td>

                                            <td>
                                                {item.date}
                                            </td>

                                            <td>
                                                ₹ {item.amount.toLocaleString()}
                                            </td>

                                            <td>

                                                <span
                                                    className={`status-badge ${item.status.toLowerCase()}`}
                                                >
                                                    {item.status}
                                                </span>

                                            </td>

                                        </tr>
                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </Drawer>
    );
};

export default PurchaseHistoryDrawer;