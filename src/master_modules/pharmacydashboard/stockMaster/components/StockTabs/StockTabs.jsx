import "./StockTabs.css";

const StockTabs = ({

    tabs = [],

    activeTab,

    onTabChange,

}) => {

    return (

        <div className="stock-tabs">

            {

                tabs.map((tab) => (

                    <button

                        key={tab.id}

                        className={`stock-tab ${
                            activeTab === tab.value
                                ? "active"
                                : ""
                        }`}

                        onClick={() =>
                            onTabChange(
                                tab.value
                            )
                        }

                    >

                        <span>

                            {tab.label}

                        </span>

                        <span className="tab-count">

                            {tab.count}

                        </span>

                    </button>

                ))

            }

        </div>

    );

};

export default StockTabs;