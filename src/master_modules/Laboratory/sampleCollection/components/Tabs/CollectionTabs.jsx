import collectionTabs
    from "../../config/tabs";

import "./CollectionTabs.css";


const CollectionTabs = ({
    activeTab,
    onTabChange,
    counts = {},
}) => {

    return (

        <section className="collection-tabs">

            <div className="collection-tabs__list">

                {collectionTabs.map(
                    (tab) => {

                        const isActive =
                            activeTab === tab.id;


                        return (
                            <button
                                key={tab.id}
                                type="button"
                                className={`collection-tab ${
                                    isActive
                                        ? "collection-tab--active"
                                        : ""
                                }`}
                                onClick={() =>
                                    onTabChange(
                                        tab.id
                                    )
                                }
                            >

                                <span className="collection-tab__label">

                                    {tab.label}

                                </span>


                                <span className="collection-tab__count">

                                    {counts[tab.id] ?? 0}

                                </span>

                            </button>
                        );

                    }
                )}

            </div>

        </section>

    );
};


export default CollectionTabs;