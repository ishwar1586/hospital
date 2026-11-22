import "./LedgerSummaryCards.css";

const LedgerSummaryCards = ({
    cards = [],
}) => {

    return (

        <div className="ledger-summary-grid">

            {cards.map((card) => {

                const Icon =
                    card.icon;

                return (

                    <div
                        key={card.key}
                        className="ledger-summary-card"
                    >

                        <div
                            className={`ledger-icon ${card.key}`}
                        >

                            <Icon />

                        </div>

                        <div className="ledger-content">

                            <span>
                                {card.title}
                            </span>

                            <h3>
                                {card.value}
                            </h3>

                        </div>

                    </div>
                );
            })}

        </div>
    );
};

export default LedgerSummaryCards;  