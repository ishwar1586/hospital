import TestQueueStatCard
    from "./TestQueueStatCard";

import "./TestQueueStatsCards.css";


const TestQueueStatsCards = ({
    stats = [],
}) => {

    return (

        <section className="test-queue-stats">

            {stats.map(
                (stat) => (

                    <TestQueueStatCard
                        key={
                            stat.id
                        }

                        title={
                            stat.title
                        }

                        value={
                            stat.value
                        }

                        subtitle={
                            stat.subtitle
                        }

                        icon={
                            stat.icon
                        }

                        variant={
                            stat.variant
                        }
                    />

                )
            )}

        </section>

    );

};


export default TestQueueStatsCards;