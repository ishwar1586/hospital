import "./TestTabs.css";

import testTabs from "../../config/tabs";

const TestTabs = ({
    activeTab,
    counts = {},
    onTabChange,
}) => {

    const handleTabChange = (tabId) => {

        onTabChange(tabId);

    };

    return (
        <div className="test-tabs">

            <div className="test-tabs__list">

                {testTabs.map((tab) => {

                    const isActive =
                        activeTab === tab.id;

                    const count =
                        counts[tab.id] ?? 0;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            className={`test-tabs__item ${
                                isActive
                                    ? "test-tabs__item--active"
                                    : ""
                            }`}
                            onClick={() =>
                                handleTabChange(tab.id)
                            }
                        >

                            <span className="test-tabs__label">
                                {tab.label}
                            </span>

                            <span className="test-tabs__count">
                                {count.toLocaleString()}
                            </span>

                        </button>
                    );

                })}

            </div>

        </div>
    );
};

export default TestTabs;