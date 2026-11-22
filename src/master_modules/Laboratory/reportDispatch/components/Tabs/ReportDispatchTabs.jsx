// =========================================
// REPORT DISPATCH TABS
// =========================================

import "./ReportDispatchTabs.css";


// =========================================
// REPORT DISPATCH TABS
// =========================================

const ReportDispatchTabs = ({
    tabs = [],

    activeTab = "",

    onTabChange,
}) => {

    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tab
    ) => {

        if (
            !tab ||
            typeof onTabChange !==
            "function"
        ) {
            return;
        }


        onTabChange(
            tab.key
        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <nav
            className="
                report-dispatch-tabs
            "

            aria-label="
                Report dispatch tabs
            "
        >

            <div
                className="
                    report-dispatch-tabs__list
                "
            >

                {tabs.map(
                    (
                        tab
                    ) => {

                        if (
                            !tab ||
                            !tab.key
                        ) {
                            return null;
                        }


                        const isActive =
                            activeTab ===
                            tab.key;


                        return (

                            <button
                                key={
                                    tab.key
                                }

                                type="button"

                                className={`
                                    report-dispatch-tabs__tab
                                    ${
                                        isActive
                                            ? "report-dispatch-tabs__tab--active"
                                            : ""
                                    }
                                `}

                                onClick={() =>
                                    handleTabChange(
                                        tab
                                    )
                                }

                                aria-selected={
                                    isActive
                                }

                                role="tab"
                            >

                                <span
                                    className="
                                        report-dispatch-tabs__label
                                    "
                                >
                                    {
                                        tab.label
                                    }
                                </span>


                                {typeof tab.count ===
                                    "number" && (

                                    <span
                                        className="
                                            report-dispatch-tabs__count
                                        "
                                    >
                                        {
                                            tab.count
                                        }
                                    </span>

                                )}

                            </button>

                        );

                    }
                )}

            </div>

        </nav>

    );

};


export default ReportDispatchTabs;