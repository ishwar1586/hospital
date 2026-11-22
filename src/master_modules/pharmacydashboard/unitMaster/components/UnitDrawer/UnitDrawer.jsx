import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./UnitDrawer.css";

const UnitDrawer = ({
  open,
  onClose,
  unit,
}) => {

  if (!unit) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >

      <div className="unit-drawer">

        <div className="drawer-header">

          <div>

            <h2>
              Unit Details
            </h2>

            <p>
              {unit.unitCode}
            </p>

          </div>

          <IconButton
            onClick={onClose}
          >
            <CloseOutlinedIcon />
          </IconButton>

        </div>

        <div className="unit-status-chip">
          {unit.status}
        </div>

        <div className="drawer-card">

          <h3>
            Basic Information
          </h3>

          <div className="info-row">
            <span>Unit Code</span>

            <strong>
              {unit.unitCode}
            </strong>
          </div>

          <div className="info-row">
            <span>Unit Name</span>

            <strong>
              {unit.unitName}
            </strong>
          </div>

          <div className="info-row">
            <span>Short Name</span>

            <strong>
              {unit.shortName}
            </strong>
          </div>

        </div>

        <div className="drawer-card">

          <h3>
            Description
          </h3>

          <p className="description-text">
            {unit.description}
          </p>

        </div>

        <div className="drawer-card">

          <h3>
            Audit Information
          </h3>

          <div className="info-row">
            <span>Created Date</span>

            <strong>
              {unit.createdDate}
            </strong>
          </div>

        </div>

      </div>

    </Drawer>
  );
};

export default UnitDrawer;