import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

import "./BarcodeModal.css";

const BarcodeModal = ({
  open,
  onClose,
  medicine,
}) => {

  if (!medicine) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >

      <div className="barcode-modal">

        <div className="barcode-header">

          <h2>
            Barcode Preview
          </h2>

          <IconButton
            onClick={onClose}
          >
            <CloseOutlinedIcon />
          </IconButton>

        </div>

        <div className="barcode-preview">

          <h3>
            {medicine.medicineName}
          </h3>

          <p>
            {medicine.medicineCode}
          </p>

          <div className="barcode-box">

            ||||| |||| ||||| |||||

          </div>

          <div className="barcode-meta">

            <span>
              MRP:
              ₹ {medicine.mrp}
            </span>

            <span>
              Stock:
              {medicine.stock}
            </span>

          </div>

        </div>

        <div className="barcode-footer">

          <button
            className="print-btn"
            onClick={handlePrint}
          >
            <PrintOutlinedIcon />

            Print Barcode

          </button>

        </div>

      </div>

    </Dialog>
  );
};

export default BarcodeModal;