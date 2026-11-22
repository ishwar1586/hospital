import ProcessingStatCard
    from "./ProcessingStatCard";

import "./ProcessingStatsCards.css";


const ProcessingStatsCards = ({
    stats = [],
}) => {

    return (

        <section
            className="processing-stats-cards"
            aria-label="Sample processing statistics"
        >

            {stats.map(
                (stat) => (

                    <ProcessingStatCard
                        key={
                            stat.id
                        }

                        title={
                            stat.title
                        }

                        value={
                            stat.value
                        }

                        icon={
                            stat.icon
                        }

                        trend={
                            stat.trend
                        }

                        trendLabel={
                            stat.trendLabel
                        }

                        trendType={
                            stat.trendType
                        }

                        description={
                            stat.description
                        }
                    />

                )
            )}

        </section>

    );

};


export default ProcessingStatsCards;