import collectionStatsCards
    from "../../config/statsCards";

import CollectionStatCard
    from "./CollectionStatCard";

import "./CollectionStatsCards.css";


const CollectionStatsCards = ({
    stats = {},
}) => {

    return (

        <section className="collection-stats">

            <div className="collection-stats__grid">

                {collectionStatsCards.map(
                    (card) => (

                        <CollectionStatCard
                            key={
                                card.id
                            }

                            title={
                                card.title
                            }

                            value={
                                stats[
                                    card.valueKey
                                ] ?? 0
                            }

                            suffix={
                                card.suffix
                            }

                            subtitle={
                                card.subtitle
                            }

                            icon={
                                card.icon
                            }

                            variant={
                                card.variant
                            }
                        />

                    )
                )}

            </div>

        </section>

    );
};


export default CollectionStatsCards;