// src/master_modules/AppointmentManagement/components/Tabs/AppointmentTabs.jsx

import React from "react";

import {
    appointmentTabs,
} from "../../config/appointmentConfig";

import "./AppointmentTabs.css";


const AppointmentTabs = ({
    activeTab,
    onTabChange,
}) => {


    /* =====================================================
       TAB CLICK
    ===================================================== */

    const handleTabClick = (tabValue) => {

        if (
            typeof onTabChange ===
            "function"
        ) {
            onTabChange(tabValue);
        }

    };


    return (
        <nav
            className="appointment-tabs"
            aria-label="Appointment navigation"
        >

            {/* =================================================
                TAB LIST
            ================================================= */}

            <div className="appointment-tabs__list">

                {appointmentTabs.map((tab) => {

                    const isActive =
                        activeTab ===
                        tab.value;


                    return (
                        <button
                            key={tab.id}
                            type="button"
                            className={`
                                appointment-tabs__tab
                                ${
                                    isActive
                                        ? "appointment-tabs__tab--active"
                                        : ""
                                }
                            `}
                            onClick={() =>
                                handleTabClick(
                                    tab.value
                                )
                            }
                            aria-selected={
                                isActive
                            }
                            role="tab"
                        >

                            {tab.label}

                        </button>
                    );

                })}

            </div>

        </nav>
    );
};


export default AppointmentTabs;