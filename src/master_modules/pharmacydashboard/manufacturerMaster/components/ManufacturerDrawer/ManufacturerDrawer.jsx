import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./ManufacturerDrawer.css";

const ManufacturerDrawer = ({
  open,
  onClose,
  manufacturer,
}) => {

  if (!manufacturer) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >

      <div className="manufacturer-drawer">

        <div className="drawer-header">

          <div>

            <h2>
              Manufacturer Details
            </h2>

            <p>
              {manufacturer.manufacturerCode}
            </p>

          </div>

          <IconButton
            onClick={onClose}
          >
            <CloseOutlinedIcon />
          </IconButton>

        </div>

        <div className="manufacturer-status-chip">
          {manufacturer.status}
        </div>

        <div className="drawer-card">

          <h3>
            Basic Information
          </h3>

          <div className="info-row">
            <span>Name</span>

            <strong>
              {manufacturer.manufacturerName}
            </strong>
          </div>

          <div className="info-row">
            <span>Contact Person</span>

            <strong>
              {manufacturer.contactPerson}
            </strong>
          </div>

        </div>

        <div className="drawer-card">

          <h3>
            Contact Information
          </h3>

          <div className="info-row">
            <span>Mobile</span>

            <strong>
              {manufacturer.mobile}
            </strong>
          </div>

          <div className="info-row">
            <span>Email</span>

            <strong>
              {manufacturer.email}
            </strong>
          </div>

        </div>

        <div className="drawer-card">

          <h3>
            Legal Information
          </h3>

          <div className="info-row">
            <span>GST Number</span>

            <strong>
              {manufacturer.gstNumber}
            </strong>
          </div>

          <div className="info-row">
            <span>Drug License</span>

            <strong>
              {manufacturer.drugLicenseNo}
            </strong>
          </div>

        </div>

        <div className="drawer-card">

          <h3>
            Location
          </h3>

          <div className="info-row">
            <span>City</span>

            <strong>
              {manufacturer.city}
            </strong>
          </div>

        </div>

      </div>

    </Drawer>
  );
};

export default ManufacturerDrawer;