import React from "react";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

import "./AppointmentScheduleInfo.css";

const AppointmentScheduleInfo = ({
    appointment,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return null;
    }


    // =========================================
    // Appointment Data
    // =========================================

    const appointmentDate =
        appointment?.date || "—";

    const appointmentTime =
        appointment?.time || "—";

    const appointmentType =
        appointment?.appointmentType || "—";

    const appointmentStatus =
        appointment?.status || "—";


    // =========================================
    // Render
    // =========================================

    return (
        <section className="appointment-schedule-info">

            {/* =====================================
                Header
            ===================================== */}

            <div className="appointment-schedule-info__header">

                <div className="appointment-schedule-info__header-icon">
                    <ScheduleOutlinedIcon />
                </div>

                <div className="appointment-schedule-info__header-content">

                    <h3>
                        Appointment Schedule
                    </h3>

                    <p>
                        Date and time information
                    </p>

                </div>

            </div>


            {/* =====================================
                Schedule Details
            ===================================== */}

            <div className="appointment-schedule-info__grid">

                {/* =================================
                    Date
                ================================= */}

                <div className="appointment-schedule-info__item">

                    <div className="appointment-schedule-info__item-icon">
                        <CalendarMonthOutlinedIcon />
                    </div>

                    <div className="appointment-schedule-info__item-content">

                        <span className="appointment-schedule-info__item-label">
                            Appointment Date
                        </span>

                        <span className="appointment-schedule-info__item-value">
                            {appointmentDate}
                        </span>

                    </div>

                </div>


                {/* =================================
                    Time
                ================================= */}

                <div className="appointment-schedule-info__item">

                    <div className="appointment-schedule-info__item-icon">
                        <AccessTimeOutlinedIcon />
                    </div>

                    <div className="appointment-schedule-info__item-content">

                        <span className="appointment-schedule-info__item-label">
                            Appointment Time
                        </span>

                        <span className="appointment-schedule-info__item-value">
                            {appointmentTime}
                        </span>

                    </div>

                </div>


                {/* =================================
                    Type
                ================================= */}

                <div className="appointment-schedule-info__item">

                    <div className="appointment-schedule-info__item-icon">
                        <EventAvailableOutlinedIcon />
                    </div>

                    <div className="appointment-schedule-info__item-content">

                        <span className="appointment-schedule-info__item-label">
                            Appointment Type
                        </span>

                        <span className="appointment-schedule-info__item-value">
                            {appointmentType}
                        </span>

                    </div>

                </div>


                {/* =================================
                    Status
                ================================= */}

                <div className="appointment-schedule-info__item">

                    <div className="appointment-schedule-info__item-icon">
                        <ScheduleOutlinedIcon />
                    </div>

                    <div className="appointment-schedule-info__item-content">

                        <span className="appointment-schedule-info__item-label">
                            Status
                        </span>

                        <span
                            className={`appointment-schedule-info__status appointment-schedule-info__status--${appointmentStatus
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                        >
                            {appointmentStatus}
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AppointmentScheduleInfo;