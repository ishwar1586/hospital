import "./PurchaseStatsCards.css";

const PurchaseStatsCards = ({
    statsData = [],
}) => {

    return (

        <div className="purchase-stats-grid">

            {statsData.map(
                (item, index) => {

                    const Icon =
                        item.icon;

                    return (

                        <div
                            key={index}
                            className="purchase-stat-card"
                        >

                            <div className="purchase-stat-icon">

                                <Icon />

                            </div>

                            <div className="purchase-stat-content">

                                <span>
                                    {item.title}
                                </span>

                                <h3>
                                    {item.value}
                                </h3>

                                <small>
                                    {item.subtitle}
                                </small>

                            </div>

                        </div>
                    );
                }
            )}

        </div>
    );
};

export default PurchaseStatsCards;