import React from "react";

import "./DoctorDetailsTabs.css";

const DoctorDetailsTabs = ({
    tabs = [],
    activeTab,
    onTabChange,
}) => {
    // =========================================================
    // TAB CLICK
    // =========================================================

    const handleTabChange = (
        tabId
    ) => {
        if (
            typeof onTabChange ===
            "function"
        ) {
            onTabChange(tabId);
        }
    };

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <nav
            className="doctor-details-tabs"
            aria-label="Doctor details navigation"
        >
            <div className="doctor-details-tabs__list">
                {tabs.map(
                    (tab) => {
                        const tabId =
                            tab?.id ??
                            tab?.key;

                        const label =
                            tab?.label ??
                            tab?.name ??
                            tabId;

                        if (!tabId) {
                            return null;
                        }

                        const isActive =
                            activeTab ===
                            tabId;

                        return (
                            <button
                                key={tabId}
                                type="button"
                                className={`
                                    doctor-details-tabs__tab
                                    ${
                                        isActive
                                            ? "doctor-details-tabs__tab--active"
                                            : ""
                                    }
                                `}
                                aria-selected={
                                    isActive
                                }
                                role="tab"
                                onClick={() =>
                                    handleTabChange(
                                        tabId
                                    )
                                }
                            >
                                <span>
                                    {label}
                                </span>
                            </button>
                        );
                    }
                )}
            </div>
        </nav>
    );
};

export default DoctorDetailsTabs;