import React from "react";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import "./AppointmentDetailsActions.css";

const AppointmentDetailsActions = ({
    appointment,
    onEdit,
    onReschedule,
    onCheckIn,
    onCancel,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return null;
    }


    // =========================================
    // Appointment Status
    // =========================================

    const status =
        appointment?.status || "";


    // =========================================
    // Action Availability
    // =========================================

    const isCancelled =
        status === "Cancelled";

    const isCompleted =
        status === "Completed";

    const isCheckedIn =
        status === "Checked In";


    // =========================================
    // Handlers
    // =========================================

    const handleEdit = () => {

        if (typeof onEdit === "function") {
            onEdit(appointment);
        }

    };


    const handleReschedule = () => {

        if (typeof onReschedule === "function") {
            onReschedule(appointment);
        }

    };


    const handleCheckIn = () => {

        if (typeof onCheckIn === "function") {
            onCheckIn(appointment);
        }

    };


    const handleCancel = () => {

        if (typeof onCancel === "function") {
            onCancel(appointment);
        }

    };


    // =========================================
    // Render
    // =========================================

    return (
        <div className="appointment-details-actions">

            <div className="appointment-details-actions__left">

                {/* =================================
                    Edit
                ================================= */}

                {!isCancelled &&
                    !isCompleted && (

                        <button
                            type="button"
                            className="appointment-details-actions__button appointment-details-actions__button--secondary"
                            onClick={handleEdit}
                        >
                            <EditOutlinedIcon />

                            <span>
                                Edit
                            </span>
                        </button>
                    )}


                {/* =================================
                    Reschedule
                ================================= */}

                {!isCancelled &&
                    !isCompleted &&
                    !isCheckedIn && (

                        <button
                            type="button"
                            className="appointment-details-actions__button appointment-details-actions__button--secondary"
                            onClick={handleReschedule}
                        >
                            <EventRepeatOutlinedIcon />

                            <span>
                                Reschedule
                            </span>
                        </button>
                    )}

            </div>


            <div className="appointment-details-actions__right">

                {/* =================================
                    Check In
                ================================= */}

                {!isCancelled &&
                    !isCompleted &&
                    !isCheckedIn && (

                        <button
                            type="button"
                            className="appointment-details-actions__button appointment-details-actions__button--primary"
                            onClick={handleCheckIn}
                        >
                            <LoginOutlinedIcon />

                            <span>
                                Check In
                            </span>
                        </button>
                    )}


                {/* =================================
                    Cancel
                ================================= */}

                {!isCancelled &&
                    !isCompleted &&
                    !isCheckedIn && (

                        <button
                            type="button"
                            className="appointment-details-actions__button appointment-details-actions__button--danger"
                            onClick={handleCancel}
                        >
                            <CancelOutlinedIcon />

                            <span>
                                Cancel Appointment
                            </span>
                        </button>
                    )}

            </div>

        </div>
    );
};

export default AppointmentDetailsActions;