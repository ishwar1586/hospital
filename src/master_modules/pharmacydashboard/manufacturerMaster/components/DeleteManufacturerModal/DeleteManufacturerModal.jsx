import Dialog from "@mui/material/Dialog";

import WarningAmberOutlinedIcon
from "@mui/icons-material/WarningAmberOutlined";

import "./DeleteManufacturerModal.css";

const DeleteManufacturerModal = ({
  open,
  onClose,
  onConfirm,
  manufacturer,
}) => {

  if (!manufacturer) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >

      <div className="delete-modal">

        <div className="delete-icon">

          <WarningAmberOutlinedIcon />

        </div>

        <h2>
          Delete Manufacturer
        </h2>

        <p>

          Are you sure you want to delete

          <strong>
            {" "}
            {manufacturer.manufacturerName}
          </strong>

          ?

        </p>

        <div className="delete-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </Dialog>
  );
};

export default DeleteManufacturerModal;