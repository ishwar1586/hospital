import "./SupplierStatsCards.css";

const SupplierStatsCards = ({
    statsData = [],
}) => {

    return (
        <div className="supplier-stats-grid">

            {statsData.map((item) => {

                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="supplier-stat-card"
                    >

                        <div className="supplier-stat-icon">
                            <Icon />
                        </div>

                        <div className="supplier-stat-content">

                            <p>
                                {item.title}
                            </p>

                            <h3>
                                {item.value}
                            </h3>

                        </div>

                    </div>
                );
            })}

        </div>
    );
};

export default SupplierStatsCards;