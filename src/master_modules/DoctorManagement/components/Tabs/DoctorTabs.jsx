import React, {
    useMemo,
} from "react";

import {
    DOCTOR_TABS,
} from "../../config/doctorConfig";

import "./DoctorTabs.css";


// =========================================
// TAB LABELS
// =========================================

const DEFAULT_TAB_LABELS = {
    all: "All Doctors",
    active: "Active",
    onLeave: "On Leave",
    inactive: "Inactive",
};


// =========================================
// TAB LABEL FORMATTER
// =========================================

const formatTabLabel = (value) => {

    if (!value) {
        return "";
    }

    return value
        .replace(/[-_]/g, " ")
        .replace(
            /\b\w/g,
            (letter) =>
                letter.toUpperCase()
        );
};


// =========================================
// COMPONENT
// =========================================

const DoctorTabs = ({
    activeTab = "all",
    onTabChange,
    counts = {},
    disabled = false,
}) => {

    // =========================================
    // NORMALIZE TABS
    // =========================================

    const tabs = useMemo(() => {

        if (!Array.isArray(DOCTOR_TABS)) {
            return [];
        }

        return DOCTOR_TABS.map(
            (tab) => {

                if (
                    typeof tab === "string"
                ) {
                    return {
                        value: tab,
                        label:
                            DEFAULT_TAB_LABELS[
                                tab
                            ] ||
                            formatTabLabel(
                                tab
                            ),
                    };
                }

                const value =
                    tab?.value ??
                    tab?.id ??
                    tab?.key ??
                    "";

                return {
                    ...tab,

                    value,

                    label:
                        tab?.label ??
                        DEFAULT_TAB_LABELS[
                            value
                        ] ??
                        formatTabLabel(
                            value
                        ),
                };
            }
        ).filter(
            (tab) =>
                tab.value
        );

    }, []);


    // =========================================
    // TAB CLICK
    // =========================================

    const handleTabClick = (
        tabValue
    ) => {

        if (disabled) {
            return;
        }

        if (
            tabValue === activeTab
        ) {
            return;
        }

        if (
            typeof onTabChange ===
            "function"
        ) {
            onTabChange(
                tabValue
            );
        }

    };


    // =========================================
    // KEYBOARD NAVIGATION
    // =========================================

    const handleKeyDown = (
        event,
        tabValue
    ) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            handleTabClick(
                tabValue
            );

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="doctor-tabs"
            aria-label="Doctor status tabs"
        >

            <div
                className="
                    doctor-tabs__container
                "
                role="tablist"
                aria-label="Doctor filters"
            >

                {tabs.map(
                    (tab) => {

                        const isActive =
                            tab.value ===
                            activeTab;

                        const count =
                            counts?.[
                                tab.value
                            ];


                        return (

                            <button
                                key={
                                    tab.value
                                }

                                type="button"

                                role="tab"

                                aria-selected={
                                    isActive
                                }

                                tabIndex={
                                    isActive
                                        ? 0
                                        : -1
                                }

                                disabled={
                                    disabled
                                }

                                className={`
                                    doctor-tab
                                    ${
                                        isActive
                                            ? "doctor-tab--active"
                                            : ""
                                    }
                                `}

                                onClick={() =>
                                    handleTabClick(
                                        tab.value
                                    )
                                }

                                onKeyDown={(event) =>
                                    handleKeyDown(
                                        event,
                                        tab.value
                                    )
                                }
                            >

                                <span
                                    className="
                                        doctor-tab__label
                                    "
                                >
                                    {
                                        tab.label
                                    }
                                </span>


                                {count !==
                                    undefined &&
                                    count !==
                                        null && (
                                        <span
                                            className="
                                                doctor-tab__count
                                            "
                                        >
                                            {count}
                                        </span>
                                    )}

                            </button>

                        );

                    }
                )}

            </div>

        </section>

    );

};


export default DoctorTabs;