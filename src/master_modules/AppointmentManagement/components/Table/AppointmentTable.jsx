import React from "react";

import AppointmentTableHeader from "./AppointmentTableHeader";

import AppointmentTableRow from "./AppointmentTableRow";

import "./AppointmentTable.css";


const AppointmentTable = ({
    appointments = [],

    onView,

    onEdit,

    onCheckIn,

    onReschedule,

    onCancel,

    onAction,
}) => {

    return (

        <div className="appointment-table">

            {/* =====================================
                Table Header
            ===================================== */}

            <AppointmentTableHeader />


            {/* =====================================
                Table Body
            ===================================== */}

            <div className="appointment-table__body">

                {appointments.length > 0 ? (

                    appointments.map(
                        (appointment) => (

                            <AppointmentTableRow
                                key={
                                    appointment.id
                                }

                                appointment={
                                    appointment
                                }

                                onView={
                                    onView
                                }

                                onEdit={
                                    onEdit
                                }

                                onCheckIn={
                                    onCheckIn
                                }

                                onReschedule={
                                    onReschedule
                                }

                                onCancel={
                                    onCancel
                                }

                                onAction={
                                    onAction
                                }
                            />

                        )
                    )

                ) : (

                    <div className="appointment-table__empty">

                        <div className="appointment-table__empty-title">
                            No appointments found
                        </div>

                        <div className="appointment-table__empty-message">
                            There are no appointments matching the current filters.
                        </div>

                    </div>

                )}

            </div>

        </div>

    );

};


export default AppointmentTable;