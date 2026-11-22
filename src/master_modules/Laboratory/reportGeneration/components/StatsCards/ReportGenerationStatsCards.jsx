import statsCards
    from "../../config/statsCards";

import ReportGenerationStatCard
    from "./ReportGenerationStatCard";

import "./ReportGenerationStatsCards.css";


// =========================================
// REPORT GENERATION STATS CARDS
// =========================================

const ReportGenerationStatsCards = ({
    stats,
    onStatClick,
}) => {


    // =========================================
    // STAT CLICK
    // =========================================

    const handleStatClick = (
        card
    ) => {

        if (
            typeof onStatClick !==
            "function"
        ) {
            return;
        }


        onStatClick(card);

    };


    // =========================================
    // SAFE STATS
    // =========================================

    const reportStats =
        stats &&
        typeof stats === "object"
            ? stats
            : {};


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                report-generation-stats
            "
            aria-label="
                Report generation statistics
            "
        >

            {statsCards.map(
                (card) => {

                    const value =
                        reportStats[
                            card.valueKey
                        ];


                    return (

                        <ReportGenerationStatCard

                            key={
                                card.id
                            }

                            card={
                                card
                            }

                            value={
                                value
                            }

                            onClick={
                                handleStatClick
                            }

                        />

                    );

                }
            )}

        </section>

    );

};


export default ReportGenerationStatsCards;