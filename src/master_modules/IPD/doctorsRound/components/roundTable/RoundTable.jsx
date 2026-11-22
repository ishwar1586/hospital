import { useState } from "react";

import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TablePagination,
} from "@mui/material";

import MedicationOutlined
from "@mui/icons-material/MedicationOutlined";

import ScienceOutlined
from "@mui/icons-material/ScienceOutlined";

import PrintOutlined
from "@mui/icons-material/PrintOutlined";

import {
  MoreVert,
  VisibilityOutlined,
  EditOutlined,
  NoteAddOutlined,
} from "@mui/icons-material";

import "@/master_modules/IPD/doctorsRound/styles/roundtable.css";

const RoundTable = ({
  rounds = [],
  onViewRound,
  onAddNotes,
  onEditRound,
  onPrescription,
  onInvestigation,
  onPrintRound,
}) => {

  const [anchorEl, setAnchorEl] =
    useState(null);

  const [selectedRound,
    setSelectedRound] =
    useState(null);

  const [page, setPage] =
    useState(0);

  const [rowsPerPage,
    setRowsPerPage] =
    useState(10);

  const open =
    Boolean(anchorEl);

  const handleMenuClick = (
    event,
    round
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedRound(round);

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

  const paginatedRounds =
    rounds.slice(
      page * rowsPerPage,
      page * rowsPerPage +
      rowsPerPage
    );

  return (
    <div className="round-table-card">

      <div className="round-table-header">

        <h3>
          Doctor Round List
        </h3>

        <div className="record-count">
          Total Records :
          {" "}
          {rounds.length}
        </div>

      </div>

      <div className="table-wrapper">

        <table className="round-table">

          <thead>

            <tr>

              <th>
                IPD No
              </th>

              <th>
                Patient
              </th>

              <th>
                Doctor
              </th>

              <th>
                Ward
              </th>

              <th>
                Round Date
              </th>

              <th>
                Round Time
              </th>

              <th>
                Status
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {paginatedRounds.length >
            0 ? (

              paginatedRounds.map(
                (round) => (

                  <tr
                    key={round.id}
                  >

                    <td>
                      {
                        round.ipdNo
                      }
                    </td>

                    <td>

                      <div className="patient-info">

                        <div className="patient-name">
                          {
                            round.patientName
                          }
                        </div>

                        <div className="patient-meta">
                          {
                            round.uhid
                          }
                        </div>

                      </div>

                    </td>

                    <td>
                      {
                        round.doctor
                      }
                    </td>

                    <td>
                      {
                        round.ward
                      }
                    </td>

                    <td>
                      {
                        round.roundDate
                      }
                    </td>

                    <td>
                      {
                        round.roundTime
                      }
                    </td>

                    <td>

                      <span
                        className={`status-badge ${round.status
                          .toLowerCase()}`}
                      >
                        {
                          round.status
                        }
                      </span>

                    </td>

                    <td>

                      <IconButton
                        size="small"
                        onClick={(
                          event
                        ) =>
                          handleMenuClick(
                            event,
                            round
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
                  colSpan={8}
                  className="empty-state"
                >
                  No Doctor
                  Round Records
                  Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <TablePagination
        component="div"
        count={rounds.length}
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
          50,
        ]}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

        <MenuItem
          onClick={() => {

            onViewRound(
              selectedRound
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
            View Details
          </ListItemText>

        </MenuItem>

           <MenuItem
  onClick={() => {

   onEditRound(selectedRound);

    handleClose();

  }}
>

          <ListItemIcon>

            <EditOutlined
              fontSize="small"
            />

          </ListItemIcon>

          <ListItemText>
            Edit Round
          </ListItemText>

        </MenuItem>

        {/* <MenuItem
          onClick={
            handleClose
          }
        > */}

        <MenuItem
  onClick={() => {

    onAddNotes(
      selectedRound
    );

    handleClose();

  }}
>

          <ListItemIcon>

            <NoteAddOutlined
              fontSize="small"
            />

          </ListItemIcon>

          <ListItemText>
            Add Notes
          </ListItemText>

        </MenuItem>


        <MenuItem
  onClick={() => {

    onPrescription(
      selectedRound
    );

    handleClose();

  }}
>

  <ListItemIcon>

    <MedicationOutlined
      fontSize="small"
    />

  </ListItemIcon>

  <ListItemText>
    Prescription
  </ListItemText>

</MenuItem>


<MenuItem
  onClick={() => {

    onInvestigation(
      selectedRound
    );

    handleClose();

  }}
>

  <ListItemIcon>

    <ScienceOutlined
      fontSize="small"
    />

  </ListItemIcon>

  <ListItemText>
    Investigation
  </ListItemText>

</MenuItem>


<MenuItem
  onClick={() => {

    onPrintRound(
      selectedRound
    );

    handleClose();

  }}
>

  <ListItemIcon>

    <PrintOutlined
      fontSize="small"
    />

  </ListItemIcon>

  <ListItemText>
    Print Round Report
  </ListItemText>

</MenuItem>

      </Menu>

    </div>
  );
};

export default RoundTable;