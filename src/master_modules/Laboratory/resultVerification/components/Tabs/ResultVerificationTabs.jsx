import "./ResultVerificationTabs.css";


// =========================================
// COMPONENT
// =========================================

const ResultVerificationTabs = ({

    tabs = [],

    activeTab = "",

    onTabChange,

}) => {


    // =========================================
    // SAFE TABS
    // =========================================

    const safeTabs =
        Array.isArray(
            tabs
        )
            ? tabs
            : [];


    // =========================================
    // TAB CLICK
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        if (
            typeof onTabChange !==
            "function"
        ) {

            return;

        }


        if (
            !tabId
        ) {

            return;

        }


        onTabChange(
            tabId
        );

    };


    // =========================================
    // EMPTY
    // =========================================

    if (
        safeTabs.length === 0
    ) {

        return null;

    }


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-verification-tabs
            "
        >

            <div
                className="
                    result-verification-tabs__list
                "

                role="tablist"

            >

                {safeTabs.map(
                    (
                        tab,
                        index
                    ) => {

                        const isActive =
                            activeTab ===
                            tab.id;


                        return (

                            <button

                                key={
                                    tab.id ||
                                    index
                                }

                                type="button"

                                role="tab"

                                aria-selected={
                                    isActive
                                }

                                aria-controls={
                                    tab.panelId ||
                                    undefined
                                }

                                className={`
                                    result-verification-tabs__tab
                                    ${
                                        isActive
                                            ? "result-verification-tabs__tab--active"
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
                                        result-verification-tabs__label
                                    "
                                >
                                    {
                                        tab.label
                                    }
                                </span>


                                {(
                                    tab.count !==
                                    undefined &&
                                    tab.count !==
                                    null
                                ) && (

                                    <span
                                        className="
                                            result-verification-tabs__count
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


export default ResultVerificationTabs;