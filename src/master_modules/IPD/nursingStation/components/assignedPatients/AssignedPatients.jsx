import { useState } from "react";

import {
    CopyAllOutlined,
    HandshakeOutlined,
    MedicalInformation,
    MedicationLiquidOutlined,
    MoreVert,
    Notes,
    ReceiptLongRounded,
    SecurityOutlined,
    VisibilityOutlined,
} from "@mui/icons-material";

import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import assignedPatients from "@/master_modules/IPD/nursingStation/mock/assignedPatients.mock";

import "@/master_modules/IPD/nursingStation/styles/assignedpatient.css";

// const AssignedPatients = () => {

const AssignedPatients = ({
    onViewPatient,
    onRecordVitals,
    onAddNursingNote,
    onMedicationAdministration,
    onPatientCare,
    onIncidentReport,
    onPatientHandover,
}) => {

    const [anchorEl, setAnchorEl] =
        useState(null);

    const [selectedPatient,
        setSelectedPatient] =
        useState(null);

    const open = Boolean(anchorEl);

    const handleMenuClick = (
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

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <div className="assigned-patients-card">

            <div className="assigned-header">

                <h3>
                    My Assigned Patients
                </h3>

                <button>
                    View All
                </button>

            </div>

            <div className="assigned-table-wrapper">

                <table className="assigned-table">

                    <thead>

                        <tr>

                            <th>
                                Patient Details
                            </th>

                            <th>
                                Room / Bed
                            </th>

                            <th>
                                Condition
                            </th>

                            <th>
                                Last Activity
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {assignedPatients.map(
                            (patient) => (

                                <tr
                                    key={patient.id}
                                >

                                    <td>

                                        <div className="patient-info">

                                            <div className="patient-avatar">

                                                {patient.patientName
                                                    .charAt(0)}

                                            </div>

                                            <div>

                                                <div className="patient-name">

                                                    {
                                                        patient.patientName
                                                    }

                                                </div>

                                                <div className="patient-ipd">

                                                    {
                                                        patient.ipdNo
                                                    }

                                                </div>

                                            </div>

                                        </div>

                                    </td>

                                    <td>
                                        <div className="room-no">
                                            {patient.room}
                                        </div>
                                        <br />

                                        <span className="bed-text">

                                            {patient.bed}

                                        </span>

                                    </td>

                                    <td>

                                        <span
                                            className={`condition-badge ${patient.condition
                                                .toLowerCase()}`}
                                        >

                                            {patient.condition}

                                        </span>

                                    </td>

                                    <td>

                                        {
                                            patient.lastActivity
                                        }

                                    </td>

                                    <td>

                                        <IconButton
                                            size="small"
                                            onClick={(event) =>
                                                handleMenuClick(
                                                    event,
                                                    patient
                                                )
                                            }
                                        >

                                            <MoreVert />

                                        </IconButton>

                                    </td>

                                </tr>

                            )
                        )}

                    </tbody>

                </table>

            </div>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <MenuItem
                    onClick={() => {

                        onViewPatient(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >
                    <ListItemIcon>

                        <VisibilityOutlined
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        View Patient
                    </ListItemText>

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onRecordVitals(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >

                    <ListItemIcon>

                        <ReceiptLongRounded
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        Record Vitals
                    </ListItemText>

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onAddNursingNote(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >
                    {/* Add Nursing Note */}
                    <ListItemIcon>

                        <Notes
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        Add Nursing Note
                    </ListItemText>

                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onMedicationAdministration(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >
                    {/* Medication Administration */}

                    <ListItemIcon>

                        <MedicationLiquidOutlined
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        Medication Administration
                    </ListItemText>

                </MenuItem>


                <MenuItem
                    onClick={() => {

                        onPatientCare(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >
                    <ListItemIcon>

                        <SecurityOutlined
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        PatientCare
                    </ListItemText>
                </MenuItem>


                <MenuItem
                    onClick={() => {

                        onIncidentReport(
                            selectedPatient
                        );

                        handleClose();

                    }}
                >
                    <ListItemIcon>

                        <CopyAllOutlined
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        IncidentReport
                    </ListItemText>
                </MenuItem>

                <MenuItem
                    onClick={() => {

                        onPatientHandover(
                            selectedPatient
                        );

                        handleClose();

                    }}

                >
                    {/* Patient Handover */}

                    <ListItemIcon>

                        <HandshakeOutlined
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        Patient Handover
                    </ListItemText>

                </MenuItem>

            </Menu>

        </div >

    );

};

export default AssignedPatients;