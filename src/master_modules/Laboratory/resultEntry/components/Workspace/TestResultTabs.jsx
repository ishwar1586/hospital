import "./TestResultTabs.css";


// =========================================
// COMPONENT
// =========================================

const TestResultTabs = ({
    activeTab = "testResults",

    onTabChange,

    data = {},
}) => {


    // =========================================
    // TAB CONFIGURATION
    // =========================================

    const tabItems = [

        {
            id: "testResults",

            label: "Test Results",

            count:
                Array.isArray(
                    data.results
                )
                    ? data.results.length
                    : 0,
        },

        {
            id: "previousResults",

            label: "Previous Results",

            count:
                Array.isArray(
                    data.previousResults
                )
                    ? data.previousResults.length
                    : 0,
        },

        {
            id: "remarks",

            label: "Remarks",

            count: null,
        },

        {
            id: "verificationHistory",

            label: "Verification History",

            count:
                Array.isArray(
                    data.verificationHistory
                )
                    ? data.verificationHistory.length
                    : 0,
        },

    ];


    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        if (
            tabId ===
            activeTab
        ) {

            return;

        }


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

        <nav
            className="
                test-result-tabs
            "

            role="tablist"

            aria-label="
                Result workspace sections
            "
        >

            <div
                className="
                    test-result-tabs__list
                "
            >

                {tabItems.map(
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
                                    test-result-tab
                                    ${
                                        isActive
                                            ? "test-result-tab--active"
                                            : ""
                                    }
                                `}

                                onClick={() =>
                                    handleTabChange(
                                        tab.id
                                    )
                                }

                            >

                                <span
                                    className="
                                        test-result-tab__label
                                    "
                                >

                                    {
                                        tab.label
                                    }

                                </span>


                                {/* =====================
                                    COUNT
                                ===================== */}

                                {typeof tab.count ===
                                    "number" && (

                                    <span
                                        className="
                                            test-result-tab__count
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


export default TestResultTabs;