import ResultEntryStatCard
    from "./ResultEntryStatCard";

import "./ResultEntryStatsCards.css";


const ResultEntryStatsCards = ({
    stats = [],
}) => {


    // =========================================
    // SAFETY CHECK
    // =========================================

    const hasStats =
        Array.isArray(stats) &&
        stats.length > 0;


    // =========================================
    // RENDER
    // =========================================

    if (!hasStats) {

        return null;

    }


    return (

        <section
            className="
                result-entry-stats
            "
            aria-label="
                Result entry statistics
            "
        >

            <div
                className="
                    result-entry-stats__grid
                "
            >

                {stats.map(
                    (stat) => (

                        <ResultEntryStatCard

                            key={
                                stat.id
                            }

                            stat={
                                stat
                            }

                        />

                    )
                )}

            </div>

        </section>

    );

};


export default ResultEntryStatsCards;