import {
    CheckCircleOutlineOutlined,
    VisibilityOutlined,
} from "@mui/icons-material";

import Pagination from "@/master_shared/components/Pagination/Pagination";

// import StatusChip from "../StatusChip/StatusChip";

import "./InvoiceSearch.css";

const InvoiceSearchTable = ({

    invoices,

    page,

    rowsPerPage,

    totalRows,

    onPageChange,

    onRowsPerPageChange,

    onView,

    onSelect,


}) => {

    return (

        <div className="invoice-search-table-card">

            <div className="invoice-search-table-wrapper">

                <table className="invoice-search-table">

                    <thead>

                        <tr>

                            <th>Invoice No</th>

                            <th>Bill Date</th>

                            <th>Patient</th>

                            <th>Doctor</th>

                            <th>Payment</th>

                            <th>Amount</th>

                            <th>Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            invoices.length > 0 ? (

                                invoices.map((invoice) => (

                                    <tr
                                        key={invoice.id}
                                        onDoubleClick={() => onSelect(invoice)}
                                    >

                                        <td>

                                            {invoice.invoiceNo}

                                        </td>

                                        <td>

                                            {invoice.billDate}

                                        </td>

                                        <td>

                                            {invoice.patient}

                                        </td>

                                        <td>

                                            {invoice.doctor}

                                        </td>

                                        <td>

                                            {invoice.paymentMode}

                                        </td>

                                        <td>

                                            ₹{invoice.amount}

                                        </td>

                                        <td>

                                            {/* <StatusChip

                                                status={invoice.status}

                                            /> */}

                                        </td>

                                        <td>

                                            <div className="invoice-table-actions">

                                                <button

                                                    className="table-icon-btn"

                                                    onClick={() => onView(invoice)}

                                                >

                                                    <VisibilityOutlined />

                                                </button>

                                                <button

                                                    className="table-icon-btn select-btn"

                                                    onClick={() => onSelect(invoice)}

                                                >

                                                    <CheckCircleOutlineOutlined />

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="8"
                                        className="no-data"
                                    >

                                        No Invoice Found

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>



            <Pagination

                page={page}

                rowsPerPage={rowsPerPage}

                totalRows={totalRows}

                onPageChange={onPageChange}

                onRowsPerPageChange={onRowsPerPageChange}

            />

        </div>

    );

};

export default InvoiceSearchTable;