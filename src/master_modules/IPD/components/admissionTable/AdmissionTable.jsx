import { useState } from "react";

import {
  MoreVert,
  VisibilityOutlined,
  EditOutlined,
  BedOutlined,
  ReceiptLongOutlined,
  PrintOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";

import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TablePagination,
} from "@mui/material";

import "@/master_modules/IPD/styles/admissiontable.css";

const AdmissionTable = ({ admissions = [], onViewPatient, onTransferBed, onDischargePatient, onBilling, onEditAdmission, onPrintSlip, }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] =
    useState(10);

  const open = Boolean(anchorEl);

  const handleMenuClick = (
    event,
    patient
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedPatient(patient);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (
    event,
    newPage
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event
  ) => {
    setRowsPerPage(
      parseInt(event.target.value, 10)
    );
    setPage(0);
  };

  const paginatedAdmissions =
    admissions.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

  return (
    <div className="admission-table-card">
      <div className="admission-table-header">
        <h3>Admission List</h3>

        <div className="record-count">
          Total Records : {admissions.length}
        </div>
      </div>

      <div className="table-wrapper">
        <table className="admission-table">
          <thead>
            <tr>
              <th>IPD No</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Ward / Bed</th>
              <th>Admission Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedAdmissions.length > 0 ? (
              paginatedAdmissions.map(
                (patient) => (
                  <tr key={patient.id}>
                    <td>
                      <span className="ipd-number">
                        {patient.ipdNo}
                      </span>
                    </td>

                    <td>
                      <div className="patient-info">
                        <div className="patient-name">
                          {
                            patient.patientName
                          }
                        </div>

                        <div className="patient-meta">
                          {patient.uhid}
                        </div>

                        <div className="patient-meta">
                          {patient.age}Y /{" "}
                          {patient.gender}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="doctor-info">
                        <div className="doctor-name">
                          {patient.doctor}
                        </div>

                        <span className="doctor-department">
                          {
                            patient.department
                          }
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="ward-info">
                        <div>
                          {patient.ward}
                        </div>

                        <span>
                          Bed :{" "}
                          {patient.bed}
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="admission-date">
                        {
                          patient.admissionDate
                        }
                      </div>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${patient.status
                          .toLowerCase()
                          .replace(
                            /\s/g,
                            "-"
                          )}`}
                      >
                        {patient.status}
                      </span>
                    </td>

                    <td className="action-cell">
                      <IconButton
                        className="action-icon-btn"
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
              )
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="empty-state"
                >
                  No Admission Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <TablePagination
        component="div"
        count={admissions.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={
          handleChangeRowsPerPage
        }
        rowsPerPageOptions={[
          5,
          10,
          25,
          50,
        ]}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 250,
            borderRadius: 3,
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.12)",
          },
        }}
      >


        <MenuItem
          onClick={() => {
            onViewPatient(selectedPatient);
            handleClose();
          }}
        >
          <ListItemIcon>
            <VisibilityOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            View Admission
          </ListItemText>
        </MenuItem>



        <MenuItem
          onClick={() => {
            onEditAdmission(
              selectedPatient
            );
            handleClose();
          }}
        >
          <ListItemIcon>
            <EditOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            Edit Admission
          </ListItemText>
        </MenuItem>


        <MenuItem
          onClick={() => {
            onTransferBed(selectedPatient);
            handleClose();
          }}
        >
          <ListItemIcon>
            <BedOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            Transfer Bed
          </ListItemText>
        </MenuItem>


        <MenuItem
          onClick={() => {
            onBilling(selectedPatient);
            handleClose();
          }}
        >
          <ListItemIcon>
            <ReceiptLongOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            Billing
          </ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            onPrintSlip(
              selectedPatient
            );
            handleClose();
          }}
        >
          <ListItemIcon>
            <PrintOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            Print Slip
          </ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            onDischargePatient(selectedPatient);
            handleClose();
          }}
          sx={{
            color: "#dc2626",
          }}
        >
          <ListItemIcon>
            <ExitToAppOutlined
              fontSize="small"
              sx={{
                color: "#dc2626",
              }}
            />
          </ListItemIcon>

          <ListItemText>
            Discharge Patient
          </ListItemText>
        </MenuItem>

      </Menu>
    </div>
  );
};

export default AdmissionTable;