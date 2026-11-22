import { useState } from "react";

import {
    IconButton,
    Menu,
    MenuItem,
    TablePagination,
} from "@mui/material";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

// import dischargePatients from "@/master_modules/IPD/dischargePatientManagement/mock/dischargePatients.mock"

import "@/master_modules/IPD/dischargePatientManagement/styles/dischargetable.css";

const DischargeTable = ({
    patients,
    onViewDetails,
    onDischargeSummary,
    onDoctorClearance,
    onBillingClearance,
    onPrintDischarge,
    onFinalizeDischarge,
}) => {

    const [anchorEl,
        setAnchorEl] =
        useState(null);

    const [selectedPatient,
        setSelectedPatient] =
        useState(null);

    const [page,
        setPage] =
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

            setSelectedPatient(null);

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

        <div className="discharge-table-card">

            <div className="table-header">

                <h3>
                    Discharge Patients
                </h3>

            </div>

            <div className="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Patient Name
                            </th>

                            <th>
                                IPD No
                            </th>

                            <th>
                                Doctor
                            </th>

                            <th>
                                Department
                            </th>

                            <th>
                                Admission Date
                            </th>

                            <th>
                                Discharge Date
                            </th>

                            <th>
                                Status
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {patients
                            .slice(
                                page *
                                rowsPerPage,
                                page *
                                rowsPerPage +
                                rowsPerPage
                            )
                            .map(
                                (patient) => (

                                    <tr
                                        key={
                                            patient.id
                                        }
                                    >

                                        <td>
                                            {
                                                patient.patientName
                                            }
                                        </td>

                                        <td>
                                            {
                                                patient.ipdNo
                                            }
                                        </td>

                                        <td>
                                            {
                                                patient.doctor
                                            }
                                        </td>

                                        <td>
                                            {
                                                patient.department
                                            }
                                        </td>

                                        <td>
                                            {
                                                patient.admissionDate
                                            }
                                        </td>

                                        <td>
                                            {
                                                patient.dischargeDate
                                            }
                                        </td>

                                        <td>

                                            <span
                                                className={`status-badge ${patient.status.toLowerCase()}`}
                                            >

                                                {
                                                    patient.status
                                                }

                                            </span>

                                        </td>

                                        <td>

                                            <IconButton
                                                onClick={(
                                                    e
                                                ) =>
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

                        onViewDetails(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <VisibilityOutlinedIcon
                        fontSize="small"
                    />

                    View Details

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onDischargeSummary(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <DescriptionOutlinedIcon
                        fontSize="small"
                    />

                    Discharge Summary

                </MenuItem>
                <MenuItem
                    onClick={() => {

                        onDoctorClearance(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <VerifiedOutlinedIcon
                        fontSize="small"
                    />

                    Doctor Clearance

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onBillingClearance(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <ReceiptLongOutlinedIcon
                        fontSize="small"
                    />

                    Billing Clearance

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onPrintDischarge(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <PrintOutlinedIcon
                        fontSize="small"
                    />

                    Print Slip

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onFinalizeDischarge(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <LogoutOutlinedIcon
                        fontSize="small"
                    />

                    Finalize Discharge

                </MenuItem>

            </Menu>

        </div>

    );

};

export default DischargeTable;