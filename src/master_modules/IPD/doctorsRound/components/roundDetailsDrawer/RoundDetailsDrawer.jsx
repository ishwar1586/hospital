import {
  Drawer,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

import "@/master_modules/IPD/doctorsRound/styles/rounddetailsdrawer.css";

const RoundDetailsDrawer = ({
  open,
  onClose,
  round,
}) => {

  if (!round) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >

      <div className="round-drawer">

        <div className="round-drawer-header">

          <div className="round-drawer-title">

            <MedicalServicesOutlinedIcon />

            <h2>
              Round Details
            </h2>

          </div>

          <IconButton
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>

        </div>

        <div className="round-section">

          <h3>
            Patient Information
          </h3>

          <div className="round-info-grid">

            <div>
              <label>
                Patient Name
              </label>

              <span>
                {round.patientName}
              </span>
            </div>

            <div>
              <label>
                UHID
              </label>

              <span>
                {round.uhid}
              </span>
            </div>

            <div>
              <label>
                IPD No
              </label>

              <span>
                {round.ipdNo}
              </span>
            </div>

            <div>
              <label>
                Age / Gender
              </label>

              <span>
                {round.age}Y / {round.gender}
              </span>
            </div>

          </div>

        </div>

        <div className="round-section">

          <h3>
            Doctor Information
          </h3>

          <div className="round-info-grid">

            <div>
              <label>
                Doctor
              </label>

              <span>
                {round.doctor}
              </span>
            </div>

            <div>
              <label>
                Ward
              </label>

              <span>
                {round.ward}
              </span>
            </div>

            <div>
              <label>
                Room
              </label>

              <span>
                {round.room}
              </span>
            </div>

            <div>
              <label>
                Bed
              </label>

              <span>
                {round.bed}
              </span>
            </div>

            <div>
              <label>
                Round Date
              </label>

              <span>
                {round.roundDate}
              </span>
            </div>

            <div>
              <label>
                Round Time
              </label>

              <span>
                {round.roundTime}
              </span>
            </div>

          </div>

        </div>

        <div className="round-section">

          <h3>
            Vitals
          </h3>

          <div className="round-info-grid">

            <div>
              <label>
                BP
              </label>

              <span>
                {round.bp}
              </span>
            </div>

            <div>
              <label>
                Pulse
              </label>

              <span>
                {round.pulse}
              </span>
            </div>

            <div>
              <label>
                Temperature
              </label>

              <span>
                {round.temperature}
              </span>
            </div>

            <div>
              <label>
                SpO2
              </label>

              <span>
                {round.spo2}
              </span>
            </div>

          </div>

        </div>

        <div className="round-section">

          <h3>
            Clinical Notes
          </h3>

          <p className="round-notes">
            {round.notes}
          </p>

        </div>

        <div className="round-section">

          <h3>
            Advice
          </h3>

          <p className="round-notes">
            {round.advice}
          </p>

        </div>

        <div className="round-section">

          <h3>
            Round Status
          </h3>

          <span
            className={`round-status ${round.status
              .toLowerCase()}`}
          >
            {round.status}
          </span>

        </div>

      </div>

    </Drawer>
  );
};

export default RoundDetailsDrawer;