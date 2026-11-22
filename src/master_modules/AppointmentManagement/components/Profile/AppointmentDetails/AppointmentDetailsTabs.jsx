import React from "react";

import {
    appointmentDetailsTabs,
} from "../../../config/appointmentConfig";

import "./AppointmentDetailsTabs.css";

const AppointmentDetailsTabs = ({
    activeTab,
    onTabChange,
}) => {

    // =========================================
    // Tab Click Handler
    // =========================================

    const handleTabClick = (tabValue) => {
        if (
            typeof onTabChange === "function"
        ) {
            onTabChange(tabValue);
        }
    };

    // =========================================
    // Render
    // =========================================

    return (
        <nav
            className="appointment-details-tabs"
            aria-label="Appointment details navigation"
        >

            <div
                className="appointment-details-tabs__list"
                role="tablist"
            >

                {appointmentDetailsTabs.map(
                    (tab) => {

                        const isActive =
                            activeTab === tab.value;

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                className={`
                                    appointment-details-tabs__item
                                    ${
                                        isActive
                                            ? "appointment-details-tabs__item--active"
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
                    }
                )}

            </div>

        </nav>
    );
};

export default AppointmentDetailsTabs;