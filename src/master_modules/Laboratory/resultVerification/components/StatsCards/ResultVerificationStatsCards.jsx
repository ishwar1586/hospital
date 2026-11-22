import ResultVerificationStatCard
    from "./ResultVerificationStatCard";

import "./ResultVerificationStatsCards.css";


// =========================================
// COMPONENT
// =========================================

const ResultVerificationStatsCards = ({
    stats = [],

    onCardClick,
}) => {


    // =========================================
    // SAFE DATA
    // =========================================

    const safeStats =
        Array.isArray(
            stats
        )
            ? stats
            : [];


    // =========================================
    // EMPTY STATE
    // =========================================

    if (
        safeStats.length === 0
    ) {

        return null;

    }


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-verification-stats
            "
        >

            <div
                className="
                    result-verification-stats__grid
                "
            >

                {safeStats.map(
                    (
                        stat,
                        index
                    ) => (

                        <ResultVerificationStatCard

                            key={
                                stat.id ||
                                stat.title ||
                                index
                            }

                            title={
                                stat.title
                            }

                            value={
                                stat.value ??
                                0
                            }

                            subtitle={
                                stat.subtitle ||
                                ""
                            }

                            icon={
                                stat.icon
                            }

                            variant={
                                stat.variant ||
                                "default"
                            }

                            onClick={
                                stat.filterId
                                    ? () =>
                                        onCardClick?.(
                                            stat.filterId
                                        )
                                    : undefined
                            }

                        />

                    )
                )}

            </div>

        </section>

    );

};


export default ResultVerificationStatsCards;