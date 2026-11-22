import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./BatchDetailsModal.css";

const BatchDetailsModal = ({
    open,
    onClose,
    medicine,
}) => {

    if (!medicine) return null;

    const batchData = [
        {
            batchNo: "PCM24001",
            expiryDate: "12/2027",
            stock: 250,
            purchaseRate: 10,
            supplier: "ABC Pharma",
        },

        {
            batchNo: "PCM24002",
            expiryDate: "03/2028",
            stock: 120,
            purchaseRate: 11,
            supplier: "XYZ Healthcare",
        },
    ];

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >

            <div className="batch-modal">

                <div className="batch-modal-header">

                    <div>

                        <h2>Batch Details</h2>

                        <p>
                            {medicine.medicineName}
                        </p>

                    </div>

                    <IconButton
                        onClick={onClose}
                    >
                        <CloseOutlinedIcon />
                    </IconButton>

                </div>

                <div className="batch-summary">

                    <div className="summary-card">
                        <span>Total Batches</span>
                        <strong>
                            {batchData.length}
                        </strong>
                    </div>

                    <div className="summary-card">
                        <span>Total Stock</span>
                        <strong>
                            {batchData.reduce(
                                (sum, batch) =>
                                    sum + batch.stock,
                                0
                            )}
                        </strong>
                    </div>

                </div>

                <div className="batch-table-wrapper">

                    <table className="batch-table">

                        <thead>
                            <tr>
                                <th>Batch No</th>
                                <th>Expiry Date</th>
                                <th>Stock</th>
                                <th>Purchase Rate</th>
                                <th>Supplier</th>
                            </tr>
                        </thead>

                        <tbody>

                            {batchData.map(
                                (batch, index) => (
                                    <tr key={index}>

                                        <td>
                                            <span className="batch-number">
                                                {batch.batchNo}
                                            </span>
                                        </td>

                                        <td>
                                            {batch.expiryDate}
                                        </td>

                                        <td>
                                            <span className="stock-badge">
                                                {batch.stock}
                                            </span>
                                        </td>

                                        <td>
                                            ₹ {batch.purchaseRate}
                                        </td>

                                        <td>
                                            <span className="supplier-name">
                                                {batch.supplier}
                                            </span>
                                        </td>

                                    </tr>
                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </Dialog>
    );
};

export default BatchDetailsModal;