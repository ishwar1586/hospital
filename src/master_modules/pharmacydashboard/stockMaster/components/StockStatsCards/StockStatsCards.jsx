import "./StockStatsCards.css";

const StockStatsCards = ({
    statsData = [],
}) => {

    return (

        <div className="stock-stats-grid">

            {

                statsData.map((card) => {

                    const Icon = card.icon;

                    return (

                        <div
                            className="stock-stat-card"
                            key={card.id}
                        >

                            <div className="stock-stat-top">

                                <div
                                    className="stock-stat-icon"
                                    style={{
                                        background:
                                            card.bgColor,
                                        color:
                                            card.iconColor,
                                    }}
                                >

                                    <Icon />

                                </div>

                            </div>

                            <div className="stock-stat-body">

                                <span className="stock-stat-title">

                                    {card.title}

                                </span>

                                <h2>

                                    {card.value}

                                </h2>

                                <small>

                                    {card.subTitle}

                                </small>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

};

export default StockStatsCards;