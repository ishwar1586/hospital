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
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "@/master_modules/IPD/doctorsRound/styles/prescriptionmodal.css";

const PrescriptionModal = ({
  open,
  onClose,
  round,
}) => {

  const [medicine, setMedicine] =
    useState({
      medicineName: "",
      dosage: "",
      frequency: "",
      duration: "",
      route: "",
      instructions: "",
    });

  const [medicines,
    setMedicines] =
    useState([]);

  const handleChange = (e) => {

    setMedicine({
      ...medicine,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleAddMedicine =
    () => {

      if (
        !medicine.medicineName
      )
        return;

      setMedicines([
        ...medicines,
        {
          id: Date.now(),
          ...medicine,
        },
      ]);

      setMedicine({
        medicineName: "",
        dosage: "",
        frequency: "",
        duration: "",
        route: "",
        instructions: "",
      });

    };

  const handleDelete =
    (id) => {

      setMedicines(
        medicines.filter(
          (item) =>
            item.id !== id
        )
      );

    };

  const handleSave =
    () => {

      console.log(
        "Prescription Saved",
        medicines
      );

      onClose();

    };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "18px",
        },
      }}
    >

      <DialogTitle className="prescription-header">

        <div className="prescription-title">

          <MedicationOutlinedIcon />

          <span>
            Prescription
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

          <div className="prescription-patient-card">

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

        <div className="prescription-grid">

          <TextField
            label="Medicine Name"
            name="medicineName"
            value={
              medicine.medicineName
            }
            onChange={
              handleChange
            }
          />

          <TextField
            label="Dosage"
            name="dosage"
            value={
              medicine.dosage
            }
            onChange={
              handleChange
            }
          />

          <TextField
            select
            label="Frequency"
            name="frequency"
            value={
              medicine.frequency
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="OD">
              OD
            </MenuItem>

            <MenuItem value="BD">
              BD
            </MenuItem>

            <MenuItem value="TDS">
              TDS
            </MenuItem>

            <MenuItem value="QID">
              QID
            </MenuItem>

            <MenuItem value="SOS">
              SOS
            </MenuItem>

          </TextField>

          <TextField
            label="Duration"
            name="duration"
            value={
              medicine.duration
            }
            onChange={
              handleChange
            }
          />

          <TextField
            select
            label="Route"
            name="route"
            value={
              medicine.route
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Oral">
              Oral
            </MenuItem>

            <MenuItem value="IV">
              IV
            </MenuItem>

            <MenuItem value="IM">
              IM
            </MenuItem>

            <MenuItem value="Topical">
              Topical
            </MenuItem>

          </TextField>

        </div>

        <div className="instruction-box">

          <TextField
            label="Instructions"
            name="instructions"
            value={
              medicine.instructions
            }
            onChange={
              handleChange
            }
            multiline
            rows={3}
            fullWidth
          />

        </div>

        <div className="add-btn-wrapper">

          <Button
            variant="contained"
            onClick={
              handleAddMedicine
            }
          >
            Add Medicine
          </Button>

        </div>

        <div className="medicine-table-wrapper">

          <table className="medicine-table">

            <thead>

              <tr>

                <th>
                  Medicine
                </th>

                <th>
                  Dosage
                </th>

                <th>
                  Frequency
                </th>

                <th>
                  Duration
                </th>

                <th>
                  Route
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {medicines.map(
                (item) => (

                  <tr
                    key={item.id}
                  >

                    <td>
                      {
                        item.medicineName
                      }
                    </td>

                    <td>
                      {
                        item.dosage
                      }
                    </td>

                    <td>
                      {
                        item.frequency
                      }
                    </td>

                    <td>
                      {
                        item.duration
                      }
                    </td>

                    <td>
                      {
                        item.route
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
          Save Prescription
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default PrescriptionModal;