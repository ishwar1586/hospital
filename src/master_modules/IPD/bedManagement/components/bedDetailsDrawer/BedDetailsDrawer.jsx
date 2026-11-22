import {
  Drawer,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

import "@/master_modules/IPD/bedManagement/styles/beddetailsdrawer.css";

const BedDetailsDrawer = ({
  open,
  onClose,
  bed,
}) => {

  if (!bed) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <div className="bed-drawer">

        <div className="bed-drawer-header">

          <div className="bed-drawer-title">

            <KingBedOutlinedIcon />

            <h2>
              Bed Details
            </h2>

          </div>

          <IconButton
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>

        </div>

        <div className="bed-status-card">

          <h3>
            {bed.bedNo}
          </h3>

          <span
            className={`status-badge ${bed.status
              .toLowerCase()
              .replace(/\s/g, "-")}`}
          >
            {bed.status}
          </span>

        </div>

        <div className="drawer-section">

          <h4>
            Bed Information
          </h4>

          <div className="info-grid">

            <div>
              <label>
                Ward
              </label>

              <span>
                {bed.ward}
              </span>
            </div>

            <div>
              <label>
                Room
              </label>

              <span>
                {bed.room}
              </span>
            </div>

            <div>
              <label>
                Floor
              </label>

              <span>
                {bed.floor}
              </span>
            </div>

          </div>

        </div>

        {bed.patientName && (

          <div className="drawer-section">

            <h4>
              Patient Information
            </h4>

            <div className="info-grid">

              <div>
                <label>
                  Patient Name
                </label>

                <span>
                  {bed.patientName}
                </span>
              </div>

              <div>
                <label>
                  UHID
                </label>

                <span>
                  {bed.uhid}
                </span>
              </div>

              <div>
                <label>
                  Age
                </label>

                <span>
                  {bed.age}
                </span>
              </div>

              <div>
                <label>
                  Gender
                </label>

                <span>
                  {bed.gender}
                </span>
              </div>

            </div>

          </div>

        )}

        {bed.patientName && (

          <div className="drawer-section">

            <h4>
              Admission Details
            </h4>

            <div className="info-grid">

              <div>
                <label>
                  Doctor
                </label>

                <span>
                  {bed.doctor}
                </span>
              </div>

              <div>
                <label>
                  Admission Date
                </label>

                <span>
                  {bed.admissionDate}
                </span>
              </div>

            </div>

          </div>

        )}

        {!bed.patientName && (

          <div className="empty-bed-card">

            <PersonOutlinedIcon />

            <h3>
              Bed Available
            </h3>

            <p>
              No patient is assigned
              to this bed.
            </p>

          </div>

        )}

      </div>
    </Drawer>
  );
};

export default BedDetailsDrawer;