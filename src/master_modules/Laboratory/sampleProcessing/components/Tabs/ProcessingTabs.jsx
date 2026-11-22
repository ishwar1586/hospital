import processingTabs
    from "../../config/tabs";

import "./ProcessingTabs.css";


const ProcessingTabs = ({
    activeTab,
    onTabChange,
    counts = {},
}) => {


    // =========================================
    // HANDLE TAB CHANGE
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


    return (

        <section
            className="processing-tabs"
            aria-label="Sample processing status tabs"
        >

            <div className="processing-tabs__list">

                {processingTabs.map(
                    (tab) => {

                        const isActive =
                            activeTab ===
                            tab.id;


                        const count =
                            counts[
                                tab.id
                            ] ?? 0;


                        return (

                            <button
                                key={
                                    tab.id
                                }

                                type="button"

                                className={`
                                    processing-tab
                                    ${
                                        isActive
                                            ? "processing-tab--active"
                                            : ""
                                    }
                                `}

                                onClick={() =>
                                    handleTabChange(
                                        tab.id
                                    )
                                }

                                aria-selected={
                                    isActive
                                }

                                role="tab"
                            >

                                <span className="processing-tab__label">

                                    {
                                        tab.label
                                    }

                                </span>


                                <span className="processing-tab__count">

                                    {
                                        count
                                    }

                                </span>

                            </button>

                        );

                    }
                )}

            </div>

        </section>

    );

};


export default ProcessingTabs;