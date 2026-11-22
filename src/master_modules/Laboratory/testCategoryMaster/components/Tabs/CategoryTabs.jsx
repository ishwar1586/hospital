import "./CategoryTabs.css";

import categoryTabs
    from "../../config/tabs";


const CategoryTabs = ({
    activeTab,
    onTabChange,
    counts,
}) => {

    const tabCounts = {
        all:
            counts?.all || 0,

        active:
            counts?.active || 0,

        inactive:
            counts?.inactive || 0,
    };


    return (
        <section className="category-tabs">

            <div className="category-tabs__list">

                {categoryTabs.map((tab) => {

                    const isActive =
                        activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            className={`category-tab ${
                                isActive
                                    ? "category-tab--active"
                                    : ""
                            }`}
                            onClick={() =>
                                onTabChange(tab.id)
                            }
                        >

                            <span className="category-tab__label">
                                {tab.label}
                            </span>

                            <span className="category-tab__count">
                                (
                                {
                                    tabCounts[
                                        tab.id
                                    ]
                                }
                                )
                            </span>

                        </button>
                    );

                })}

            </div>

        </section>
    );
};

export default CategoryTabs;