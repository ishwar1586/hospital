import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "@/master_modules/IPD/doctorsRound/styles/investigationmodal.css";

const InvestigationModal = ({
  open,
  onClose,
  round,
}) => {

  const [investigation,
    setInvestigation] =
    useState({
      category: "",
      testName: "",
      priority: "",
      notes: "",
    });

  const [investigations,
    setInvestigations] =
    useState([]);

  const handleChange = (e) => {

    setInvestigation({
      ...investigation,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleAdd =
    () => {

      if (
        !investigation.testName
      )
        return;

      setInvestigations([
        ...investigations,
        {
          id: Date.now(),
          ...investigation,
          status:
            "Ordered",
        },
      ]);

      setInvestigation({
        category: "",
        testName: "",
        priority: "",
        notes: "",
      });

    };

  const handleDelete =
    (id) => {

      setInvestigations(
        investigations.filter(
          (item) =>
            item.id !== id
        )
      );

    };

  const handleSave =
    () => {

      console.log(
        investigations
      );

      onClose();

    };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "18px",
        },
      }}
    >

      <DialogTitle className="investigation-header">

        <div className="investigation-title">

          <ScienceOutlinedIcon />

          <span>
            Investigation Order
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        {round && (

          <div className="investigation-patient-card">

            <h3>
              {round.patientName}
            </h3>

            <p>
              {round.ipdNo}
              {" | "}
              {round.uhid}
            </p>

          </div>

        )}

        <div className="investigation-grid">

          <TextField
            select
            label="Category"
            name="category"
            value={
              investigation.category
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Pathology">
              Pathology
            </MenuItem>

            <MenuItem value="Radiology">
              Radiology
            </MenuItem>

            <MenuItem value="Cardiology">
              Cardiology
            </MenuItem>

          </TextField>

          <TextField
            label="Test Name"
            name="testName"
            value={
              investigation.testName
            }
            onChange={
              handleChange
            }
          />

          <TextField
            select
            label="Priority"
            name="priority"
            value={
              investigation.priority
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Routine">
              Routine
            </MenuItem>

            <MenuItem value="Urgent">
              Urgent
            </MenuItem>

            <MenuItem value="Stat">
              Stat
            </MenuItem>

          </TextField>

        </div>

        <div className="investigation-notes">

          <TextField
            label="Clinical Notes"
            name="notes"
            value={
              investigation.notes
            }
            onChange={
              handleChange
            }
            multiline
            rows={3}
            fullWidth
          />

        </div>

        <div className="add-investigation-btn">

          <Button
            variant="contained"
            onClick={handleAdd}
          >
            Add Investigation
          </Button>

        </div>

        <div className="investigation-table-wrapper">

          <table className="investigation-table">

            <thead>

              <tr>

                <th>
                  Category
                </th>

                <th>
                  Test
                </th>

                <th>
                  Priority
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

              {investigations.map(
                (item) => (

                  <tr
                    key={item.id}
                  >

                    <td>
                      {
                        item.category
                      }
                    </td>

                    <td>
                      {
                        item.testName
                      }
                    </td>

                    <td>
                      {
                        item.priority
                      }
                    </td>

                    <td>
                      {
                        item.status
                      }
                    </td>

                    <td>

                      <IconButton
                        color="error"
                        onClick={() =>
                          handleDelete(
                            item.id
                          )
                        }
                      >

                        <DeleteOutlineOutlinedIcon />

                      </IconButton>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </DialogContent>

      <DialogActions>

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save Investigation
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default InvestigationModal;