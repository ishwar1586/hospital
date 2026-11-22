import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import ReturnSummary from "../ReturnSummary/ReturnSummary";

import "./ReturnDrawer.css";

const ReturnDrawer = ({
    open,
    onClose,
    data,
    onPrint,
    onSave,
    onCancel,
}) => {

    if (!data) return null;

    return (

        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                className: "return-drawer-paper",
            }}
        >

            <div className="return-drawer">

                {/* Header */}

                <div className="return-drawer-header">

                    <div>

                        <h2>Sales Return</h2>

                        <p>{data.returnNumber}</p>

                    </div>

                    <IconButton onClick={onClose}>
                        <CloseRoundedIcon />
                    </IconButton>

                </div>

                {/* Body */}

                <div className="return-drawer-body">

                    {/* Invoice */}

                    <div className="invoice-card">

                        <div className="card-title">

                            Invoice Information

                        </div>

                        <div className="invoice-grid">

                            <div>

                                <label>Invoice No</label>

                                <span>{data.invoiceNumber}</span>

                            </div>

                            <div>

                                <label>Bill Date</label>

                                <span>{data.billDate}</span>

                            </div>

                            <div>

                                <label>Patient</label>

                                <span>{data.patientName}</span>

                            </div>

                            <div>

                                <label>UHID</label>

                                <span>{data.uhid}</span>

                            </div>

                            <div>

                                <label>Payment Mode</label>

                                <span>{data.paymentMode}</span>

                            </div>

                            <div>

                                <label>Created By</label>

                                <span>{data.createdBy}</span>

                            </div>

                        </div>

                    </div>

                    {/* Medicine */}

                    <div className="medicine-card">

                        <div className="card-title">

                            Returned Medicines

                        </div>

                        <div className="medicine-table-wrapper">

                            <table>

                                <thead>

                                    <tr>

                                        <th>Medicine</th>

                                        <th>Batch</th>

                                        <th>Sold Qty</th>

                                        <th>Return Qty</th>

                                        <th>Amount</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        data.medicines?.map((medicine) => (

                                            <tr key={medicine.id || medicine.batch}>

                                                <td>{medicine.medicineName}</td>

                                                <td>{medicine.batch}</td>

                                                <td>{medicine.soldQty}</td>

                                                <td>{medicine.returnQty}</td>

                                                <td>₹{medicine.amount}</td>

                                            </tr>

                                        ))

                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* Summary */}

                    <ReturnSummary
                        summary={data.summary}
                        onCancel={onCancel}
                        onSave={onSave}
                        onPrint={onPrint}
                    />

                </div>

            </div>

        </Drawer>

    );

};

export default ReturnDrawer;