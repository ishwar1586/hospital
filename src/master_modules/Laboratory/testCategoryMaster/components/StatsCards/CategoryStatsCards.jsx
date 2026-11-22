import "./CategoryStatsCards.css";

import statsCards from "../../config/statsCards";

import CategoryStatCard
    from "./CategoryStatCard";


const CategoryStatsCards = ({
    stats,
}) => {

    const statsValues = {
        totalCategories:
            stats?.totalCategories || 0,

        activeCategories:
            stats?.activeCategories || 0,

        inactiveCategories:
            stats?.inactiveCategories || 0,

        totalTests:
            stats?.totalTests || 0,

        totalProfiles:
            stats?.totalProfiles || 0,
    };


    return (
        <section className="category-stats">

            <div className="category-stats__grid">

                {statsCards.map((card) => (

                    <CategoryStatCard
                        key={card.id}

                        title={card.title}

                        value={
                            statsValues[card.id]
                        }

                        description={
                            card.description
                        }

                        icon={card.icon}

                        variant={card.variant}
                    />

                ))}

            </div>

        </section>
    );
};


export default CategoryStatsCards;