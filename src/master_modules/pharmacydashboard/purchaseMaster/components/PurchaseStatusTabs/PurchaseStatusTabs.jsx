import "./PurchaseStatusTabs.css";

const PurchaseStatusTabs = ({
    tabs = [],
    activeTab,
    onTabChange,
}) => {

    return (

        <div className="purchase-status-tabs">

            {tabs.map((tab) => (

                <button
                    key={tab.key}
                    className={`purchase-tab ${
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

                    <span className="tab-label">
                        {tab.label}
                    </span>

                    <span className="tab-count">
                        {tab.count}
                    </span>

                </button>

            ))}

        </div>

    );
};

export default PurchaseStatusTabs;