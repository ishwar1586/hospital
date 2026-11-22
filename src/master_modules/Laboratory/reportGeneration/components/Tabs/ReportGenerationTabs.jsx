// =========================================
// REPORT GENERATION TABS
// =========================================

import tabs
    from "../../config/tabs";

import "./ReportGenerationTabs.css";


// =========================================
// REPORT GENERATION TABS
// =========================================

const ReportGenerationTabs = ({
    activeTab,
    onTabChange,
    counts = {},
}) => {

    // =========================================
    // SAFE COUNTS
    // =========================================

    const safeCounts =
        counts &&
        typeof counts === "object"
            ? counts
            : {};


    // =========================================
    // TAB CLICK
    // =========================================

    const handleTabClick = (
        tabId
    ) => {

        if (
            typeof onTabChange !==
            "function"
        ) {
            return;
        }


        onTabChange(
            tabId
        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <div
            className="
                report-generation-tabs
            "
            role="tablist"
        >

            {tabs.map(
                (tab) => {

                    // =================================
                    // DYNAMIC COUNT
                    // =================================

                    const count =
                        Number(
                            safeCounts[
                                tab.id
                            ] ?? 0
                        );


                    // =================================
                    // ACTIVE
                    // =================================

                    const isActive =
                        activeTab ===
                        tab.id;


                    return (

                        <button
                            key={
                                tab.id
                            }

                            type="button"

                            role="tab"

                            aria-selected={
                                isActive
                            }

                            aria-controls={
                                tab.panelId
                            }

                            className={`
                                report-generation-tabs__tab
                                ${
                                    isActive
                                        ? "report-generation-tabs__tab--active"
                                        : ""
                                }
                            `}

                            onClick={() =>
                                handleTabClick(
                                    tab.id
                                )
                            }
                        >

                            <span
                                className="
                                    report-generation-tabs__label
                                "
                            >
                                {
                                    tab.label
                                }
                            </span>


                            {/* =============================
                                DYNAMIC COUNT
                            ============================= */}

                            <span
                                className={`
                                    report-generation-tabs__count
                                    ${
                                        isActive
                                            ? "report-generation-tabs__count--active"
                                            : ""
                                    }
                                `}
                            >
                                {
                                    count
                                }
                            </span>

                        </button>

                    );

                }
            )}

        </div>

    );

};


export default ReportGenerationTabs;