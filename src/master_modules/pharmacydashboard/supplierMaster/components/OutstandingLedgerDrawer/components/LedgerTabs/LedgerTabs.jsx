import "./LedgerTabs.css";

const LedgerTabs = ({
    tabs = [],
    activeTab,
    onTabChange,
}) => {

    return (

        <div className="ledger-tabs">

            {tabs.map((tab) => (

                <button
                    key={tab.key}
                    type="button"
                    className={`ledger-tab-btn ${
                        activeTab === tab.key
                            ? "active"
                            : ""
                    }`}
                    onClick={() =>
                        onTabChange(
                            tab.key
                        )
                    }
                >

                    {tab.label}

                </button>

            ))}

        </div>
    );
};

export default LedgerTabs;