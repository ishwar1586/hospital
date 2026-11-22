import tabs
    from "../../config/tabs";

import "./TestQueueTabs.css";


const TestQueueTabs = ({
    activeTab = "all",
    onTabChange,
    counts = {},
}) => {


    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        if (onTabChange) {

            onTabChange(
                tabId
            );

        }

    };


    // =========================================
    // GET COUNT
    // =========================================

    const getCount = (
        countKey
    ) => {

        return (
            counts[countKey] ?? 0
        );

    };


    return (

        <div className="test-queue-tabs">


            {/* =================================
                TAB LIST
            ================================= */}

            <div
                className="test-queue-tabs__list"
                role="tablist"
            >

                {tabs.map(
                    (tab) => {

                        const isActive =
                            activeTab ===
                            tab.id;


                        const count =
                            getCount(
                                tab.countKey
                            );


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
                                    test-queue-tabs__tab
                                    ${
                                        isActive
                                            ? "test-queue-tabs__tab--active"
                                            : ""
                                    }
                                    ${
                                        tab.variant
                                            ? `test-queue-tabs__tab--${tab.variant}`
                                            : ""
                                    }
                                `}
                                onClick={() =>
                                    handleTabChange(
                                        tab.id
                                    )
                                }
                            >

                                <span className="test-queue-tabs__label">

                                    {
                                        tab.label
                                    }

                                </span>


                                <span
                                    className="
                                        test-queue-tabs__count
                                    "
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

        </div>

    );

};


export default TestQueueTabs;