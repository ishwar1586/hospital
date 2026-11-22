import React, { useMemo } from "react";
import "./DoctorScheduleTab.css";

const DoctorScheduleTab = ({
    doctor,
    schedule,
    loading = false,
}) => {

    const scheduleData = useMemo(() => {
        if (schedule) {
            return schedule;
        }

        return doctor?.opdTiming || {};
    }, [
        doctor,
        schedule,
    ]);


    const days = useMemo(() => {
        return [
            {
                key: "monday",
                label: "Monday",
            },
            {
                key: "tuesday",
                label: "Tuesday",
            },
            {
                key: "wednesday",
                label: "Wednesday",
            },
            {
                key: "thursday",
                label: "Thursday",
            },
            {
                key: "friday",
                label: "Friday",
            },
            {
                key: "saturday",
                label: "Saturday",
            },
            {
                key: "sunday",
                label: "Sunday",
            },
        ];
    }, []);


    const getDaySchedule = (dayKey) => {
        const day =
            scheduleData?.[dayKey];

        if (!day) {
            return {
                available: false,
                startTime: null,
                endTime: null,
            };
        }

        return {
            available:
                day.available === true,

            startTime:
                day.startTime ?? null,

            endTime:
                day.endTime ?? null,
        };
    };


    if (loading) {
        return (
            <section className="doctor-schedule-tab">

                <div className="doctor-schedule-tab__state">
                    Loading schedule...
                </div>

            </section>
        );
    }


    return (
        <section className="doctor-schedule-tab">

            <div className="doctor-schedule-tab__header">

                <div>
                    <h3 className="doctor-schedule-tab__title">
                        OPD Schedule
                    </h3>

                    <p className="doctor-schedule-tab__subtitle">
                        Doctor's consultation timings
                    </p>
                </div>

            </div>


            <div className="doctor-schedule-tab__list">

                {days.map((day) => {

                    const daySchedule =
                        getDaySchedule(
                            day.key
                        );


                    return (
                        <div
                            key={day.key}
                            className={`
                                doctor-schedule-tab__row

                                ${
                                    !daySchedule.available
                                        ? "doctor-schedule-tab__row--unavailable"
                                        : ""
                                }
                            `}
                        >

                            <div className="doctor-schedule-tab__day">
                                {day.label}
                            </div>


                            <div className="doctor-schedule-tab__timing">

                                {daySchedule.available ? (
                                    <>
                                        <span className="doctor-schedule-tab__time">
                                            {daySchedule.startTime}
                                        </span>

                                        <span className="doctor-schedule-tab__separator">
                                            -
                                        </span>

                                        <span className="doctor-schedule-tab__time">
                                            {daySchedule.endTime}
                                        </span>
                                    </>
                                ) : (
                                    <span className="doctor-schedule-tab__closed">
                                        Closed
                                    </span>
                                )}

                            </div>


                            <div className="doctor-schedule-tab__status">

                                <span
                                    className={`
                                        doctor-schedule-tab__badge

                                        ${
                                            daySchedule.available
                                                ? "doctor-schedule-tab__badge--available"
                                                : "doctor-schedule-tab__badge--closed"
                                        }
                                    `}
                                >
                                    {
                                        daySchedule.available
                                            ? "Available"
                                            : "Closed"
                                    }
                                </span>

                            </div>

                        </div>
                    );

                })}

            </div>

        </section>
    );
};


export default DoctorScheduleTab;