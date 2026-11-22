import { useState } from "react";

import {
    IconButton,
    Menu,
    MenuItem,
    TablePagination,
    Tooltip,
} from "@mui/material";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

// import billingPatients from "@/master_modules/IPD/billingManagement/mock/billingPatients.mock";

import "@/master_modules/IPD/billingManagement/styles/billingTable.css";

const BillingTable = ({
     patients,
    onViewBill,
    onGenerateBill,
    onPayment,
    onPrintInvoice,
    onSettlement,
}) => {

    const [anchorEl, setAnchorEl] =
        useState(null);

    const [selectedPatient,
        setSelectedPatient] =
        useState(null);

    const [page, setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(5);

    const open =
        Boolean(anchorEl);

    const handleMenuOpen = (
        event,
        patient
    ) => {

        setAnchorEl(
            event.currentTarget
        );

        setSelectedPatient(
            patient
        );

    };

    const handleClose =
        () => {

            setAnchorEl(null);

            setSelectedPatient(
                null
            );

        };

    const handleChangePage =
        (event, newPage) => {

            setPage(newPage);

        };

    const handleChangeRowsPerPage =
        (event) => {

            setRowsPerPage(
                parseInt(
                    event.target.value,
                    10
                )
            );

            setPage(0);

        };

    return (

        <div className="billing-table-card">

            <div className="table-header">

                <h3>
                    Billing Records
                </h3>

            </div>

            <div className="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>Bill No</th>
                            <th>Patient Name</th>
                            <th>IPD No</th>
                            <th>Doctor</th>
                            <th>Department</th>
                            <th>Bill Amount</th>
                            <th>Paid Amount</th>
                            <th>Due Amount</th>
                            <th>Payment Status</th>
                            <th>Bill Status</th>
                            <th>Bill Date</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {patients
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage +
                                rowsPerPage
                            )
                            .map(
                                (patient) => (

                                    <tr
                                        key={patient.id}
                                    >

                                        <td>
                                            {patient.billNo}
                                        </td>

                                        <td>

                                            <Tooltip
                                                title={
                                                    patient.patientName
                                                }
                                            >

                                                <div className="truncate-text">

                                                    {
                                                        patient.patientName
                                                    }

                                                </div>

                                            </Tooltip>

                                        </td>

                                        <td>
                                            {patient.ipdNo}
                                        </td>

                                        <td>

                                            <Tooltip
                                                title={
                                                    patient.doctor
                                                }
                                            >

                                                <div className="truncate-text">

                                                    {
                                                        patient.doctor
                                                    }

                                                </div>

                                            </Tooltip>

                                        </td>

                                        <td>

                                            <Tooltip
                                                title={
                                                    patient.department
                                                }
                                            >

                                                <div className="truncate-text">

                                                    {
                                                        patient.department
                                                    }

                                                </div>

                                            </Tooltip>

                                        </td>

                                        <td>
                                            ₹
                                            {patient.billAmount?.toLocaleString()}
                                        </td>

                                        <td>
                                            ₹
                                            {patient.paidAmount?.toLocaleString()}
                                        </td>

                                        <td>
                                            ₹
                                            {patient.dueAmount?.toLocaleString()}
                                        </td>

                                        <td>

                                            <span
                                                className={`payment-chip ${patient.paymentStatus.toLowerCase()}`}
                                            >

                                                {
                                                    patient.paymentStatus
                                                }

                                            </span>

                                        </td>

                                        <td>

                                            <span
                                                className={`status-chip ${patient.billStatus.toLowerCase()}`}
                                            >

                                                {
                                                    patient.billStatus
                                                }

                                            </span>

                                        </td>

                                        <td>
                                            {patient.billDate}
                                        </td>

                                        <td>

                                            <IconButton
                                                onClick={(e) =>
                                                    handleMenuOpen(
                                                        e,
                                                        patient
                                                    )
                                                }
                                            >

                                                <MoreVertOutlinedIcon />

                                            </IconButton>

                                        </td>

                                    </tr>

                                )
                            )}

                    </tbody>

                </table>

            </div>

            <TablePagination
                component="div"
                count={
                    patients.length
                }
                page={page}
                onPageChange={
                    handleChangePage
                }
                rowsPerPage={
                    rowsPerPage
                }
                onRowsPerPageChange={
                    handleChangeRowsPerPage
                }
                rowsPerPageOptions={[
                    5,
                    10,
                    25,
                ]}
            />

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <MenuItem
                    onClick={() => {

                        onViewBill?.(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <VisibilityOutlinedIcon
                        fontSize="small"
                    />

                    View Bill

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onGenerateBill?.(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <ReceiptLongOutlinedIcon
                        fontSize="small"
                    />

                    Generate Bill

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onPayment?.(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <PaymentsOutlinedIcon
                        fontSize="small"
                    />

                    Payment

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onPrintInvoice?.(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <PrintOutlinedIcon
                        fontSize="small"
                    />

                    Print Invoice

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onSettlement?.(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <AssignmentTurnedInOutlinedIcon
                        fontSize="small"
                    />

                    Settlement

                </MenuItem>

            </Menu>

        </div>

    );

};

export default BillingTable;