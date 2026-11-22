import React from "react";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

import "./DoctorDetailsActions.css";

const DoctorDetailsActions = ({
    doctor,
    onViewSchedule,
    onBookAppointment,
}) => {
    // =========================================================
    // VIEW SCHEDULE
    // =========================================================

    const handleViewSchedule = () => {
        if (
            typeof onViewSchedule ===
            "function"
        ) {
            onViewSchedule(doctor);
        }
    };

    // =========================================================
    // BOOK APPOINTMENT
    // =========================================================

    const handleBookAppointment = () => {
        if (
            typeof onBookAppointment ===
            "function"
        ) {
            onBookAppointment(doctor);
        }
    };

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <footer className="doctor-details-actions">
            <button
                type="button"
                className="doctor-details-actions__button doctor-details-actions__button--secondary"
                onClick={
                    handleViewSchedule
                }
            >
                <CalendarMonthOutlinedIcon className="doctor-details-actions__icon" />

                <span>
                    View Schedule
                </span>
            </button>

            <button
                type="button"
                className="doctor-details-actions__button doctor-details-actions__button--primary"
                onClick={
                    handleBookAppointment
                }
            >
                <EventAvailableOutlinedIcon className="doctor-details-actions__icon" />

                <span>
                    Book Appointment
                </span>
            </button>
        </footer>
    );
};

export default DoctorDetailsActions;