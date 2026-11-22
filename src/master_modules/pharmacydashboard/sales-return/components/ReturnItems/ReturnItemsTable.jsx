import {
    SearchOutlined,
    QrCodeScannerOutlined,
    DeleteOutlineOutlined,
} from "@mui/icons-material";

import QtyStepper from "../ReturnItems/QtyStepper";
import ReturnReasonSelect from "../ReturnItems/ReturnReasonSelect";

import "./ReturnItems.css";

const ReturnItemsTable = ({

    items = [],

    onQtyChange,

    onReasonChange,

    onDelete,

}) => {

    return (

        <div className="return-items-card">

            {/* ============================================
                    Header
            ============================================ */}

            <div className="return-items-header">

                <div>

                    <h2>

                        Return Medicines

                    </h2>

                    <p>

                        Select medicines to return from the original invoice.

                    </p>

                </div>

            </div>

            {/* ============================================
                    Toolbar
            ============================================ */}

            <div className="return-items-toolbar">

                <div className="medicine-search">

                    <SearchOutlined />

                    <input

                        type="text"

                        placeholder="Search medicine..."

                    />

                </div>

                <button

                    className="barcode-btn"

                    type="button"

                >

                    <QrCodeScannerOutlined />

                    Scan Barcode

                </button>

            </div>

            {/* ============================================
                    Table
            ============================================ */}

            <div className="return-table-wrapper">

                <table className="return-items-table">

                    <thead>

                        <tr>

                            <th>Medicine</th>

                            <th>Batch</th>

                            <th>Expiry</th>

                            <th>Sold Qty</th>

                            <th>Return Qty</th>

                            <th>Reason</th>

                            <th>MRP</th>

                            <th>Refund</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            items.length > 0 ? (

                                items.map((item) => (

                                    <tr key={item.id}>

                                        <td>

                                            <div className="medicine-name">

                                                <strong>

                                                    {item.medicineName}

                                                </strong>

                                                <small>

                                                    {item.strength}

                                                </small>

                                            </div>

                                        </td>

                                        <td>

                                            {item.batch}

                                        </td>

                                        <td>

                                            {item.expiry}

                                        </td>

                                        <td>

                                            {item.soldQty}

                                        </td>

                                        <td>

                                            <QtyStepper

                                                value={item.returnQty}

                                                max={item.soldQty}

                                                onChange={(qty)=>

                                                    onQtyChange(item.id,qty)

                                                }

                                            />

                                        </td>

                                        <td>

                                            <ReturnReasonSelect

                                                value={item.reason}

                                                onChange={(reason)=>

                                                    onReasonChange(item.id,reason)

                                                }

                                            />

                                        </td>

                                        <td>

                                            ₹{item.mrp}

                                        </td>

                                        <td>

                                            ₹{item.refundAmount}

                                        </td>

                                        <td>

                                            <button

                                                className="delete-row-btn"

                                                onClick={()=>

                                                    onDelete(item.id)

                                                }

                                            >

                                                <DeleteOutlineOutlined />

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td

                                        colSpan="9"

                                        className="no-return-items"

                                    >

                                        Select an invoice to load medicines.

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ReturnItemsTable;