import "./ResultEntryTabs.css";


const ResultEntryTabs = ({
    tabs = [],
    activeTab = "pending",
    onTabChange,
}) => {


    // =========================================
    // SAFETY CHECK
    // =========================================

    const hasTabs =
        Array.isArray(tabs) &&
        tabs.length > 0;


    // =========================================
    // EMPTY
    // =========================================

    if (!hasTabs) {

        return null;

    }


    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        if (
            typeof onTabChange ===
            "function"
        ) {

            onTabChange(
                tabId
            );

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-entry-tabs
            "
        >

            <div
                className="
                    result-entry-tabs__list
                "
                role="tablist"
                aria-label="
                    Result entry status
                "
            >

                {tabs.map(
                    (tab) => {

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

                                className={`
                                    result-entry-tab
                                    result-entry-tab--${
                                        tab.variant ||
                                        "default"
                                    }
                                    ${
                                        isActive
                                            ? "is-active"
                                            : ""
                                    }
                                `}

                                onClick={() =>
                                    handleTabChange(
                                        tab.id
                                    )
                                }

                            >

                                {/* =========================
                                    TAB ICON
                                ========================= */}

                                {tab.icon && (

                                    <tab.icon />

                                )}


                                {/* =========================
                                    LABEL
                                ========================= */}

                                <span
                                    className="
                                        result-entry-tab__label
                                    "
                                >

                                    {
                                        tab.label
                                    }

                                </span>


                                {/* =========================
                                    COUNT
                                ========================= */}

                                {typeof tab.count ===
                                    "number" && (

                                    <span
                                        className="
                                            result-entry-tab__count
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

        </section>

    );

};


export default ResultEntryTabs;