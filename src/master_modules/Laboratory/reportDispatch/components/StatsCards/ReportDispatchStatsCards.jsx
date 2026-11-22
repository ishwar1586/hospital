import ReportDispatchStatCard
    from "./ReportDispatchStatCard";

import statsCards
    from "../../config/statsCards";

import "./ReportDispatchStatsCards.css";


const ReportDispatchStatsCards = ({
    stats = {},
}) => {

    return (

        <section
            className="
                report-dispatch-stats
            "
        >

            <div
                className="
                    report-dispatch-stats__grid
                "
            >

                {statsCards.map(
                    (card) => (

                        <ReportDispatchStatCard

                            key={
                                card.id
                            }

                            id={
                                card.id
                            }

                            title={
                                card.title
                            }

                            value={
                                stats[
                                    card.key
                                ] ?? 0
                            }

                            subtitle={
                                card.subtitle
                            }

                            type={
                                card.type
                            }

                            icon={
                                card.icon
                            }

                        />

                    )
                )}

            </div>

        </section>

    );

};


export default ReportDispatchStatsCards;