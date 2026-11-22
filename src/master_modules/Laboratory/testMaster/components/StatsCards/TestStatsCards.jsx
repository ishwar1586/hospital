import "./TestStatsCards.css";

import TestStatCard from "./TestStatCards";

import statsCards from "../../config/statsCards";

const TestStatsCards = () => {
    return (
        <section className="test-stats-cards">

            {statsCards.map((card) => (
                <TestStatCard
                    key={card.id}
                    title={card.title}
                    value={card.value}
                    description={card.description}
                    icon={card.icon}
                    variant={card.variant}
                />
            ))}

        </section>
    );
};

export default TestStatsCards;