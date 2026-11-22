import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./MedicineDrawer.css";

const MedicineDrawer = ({
  open,
  onClose,
  medicine,
}) => {

  if (!medicine) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      
    >
      <div className="medicine-drawer">

        <div className="drawer-header">

          <div>
            <h2>Medicine Details</h2>
            <p>{medicine.medicineCode}</p>
          </div>

          <IconButton onClick={onClose}>
            <CloseOutlinedIcon />
          </IconButton>

        </div>

        <div className="medicine-status-chip">
          {medicine.status}
        </div>

        <div className="drawer-card">

          <h3>Basic Information</h3>

          <div className="info-row">
            <span>Medicine Name</span>
            <strong>{medicine.medicineName}</strong>
          </div>

          <div className="info-row">
            <span>Category</span>
            <strong>{medicine.category}</strong>
          </div>

          <div className="info-row">
            <span>Company</span>
            <strong>{medicine.company}</strong>
          </div>

          <div className="info-row">
            <span>Unit</span>
            <strong>{medicine.unit}</strong>
          </div>

        </div>

        <div className="drawer-card">

          <h3>Pricing</h3>

          <div className="info-row">
            <span>MRP</span>
            <strong>₹ {medicine.mrp}</strong>
          </div>

          <div className="info-row">
            <span>Sale Price</span>
            <strong>₹ {medicine.salePrice}</strong>
          </div>

        </div>

        <div className="drawer-card">

          <h3>Inventory</h3>

          <div className="info-row">
            <span>Current Stock</span>
            <strong>{medicine.stock}</strong>
          </div>

        </div>

      </div>
    </Drawer>
  );
};

export default MedicineDrawer;