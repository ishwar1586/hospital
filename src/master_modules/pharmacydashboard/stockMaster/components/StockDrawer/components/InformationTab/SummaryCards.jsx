import "./SummaryCards.css";

import {
    Inventory2Outlined,
    CheckCircleOutlined,
    CurrencyRupeeOutlined,
    WarningAmberOutlined,
} from "@mui/icons-material";

const SummaryCards = ({ stock }) => {

    const cards = [

        {
            id: 1,
            title: "Current Stock",
            value: stock.currentStock,
            icon: <Inventory2Outlined />,
            className: "primary",
        },

        {
            id: 2,
            title: "Available",
            value: stock.availableQty,
            icon: <CheckCircleOutlined />,
            className: "success",
        },

        {
            id: 3,
            title: "Stock Value",
            value: `₹ ${Number(
                stock.stockValue || 0
            ).toLocaleString("en-IN")}`,
            icon: <CurrencyRupeeOutlined />,
            className: "warning",
        },

        {
            id: 4,
            title: "Reorder Level",
            value: stock.reorderLevel,
            icon: <WarningAmberOutlined />,
            className: "danger",
        },

    ];

    return (

        <div className="summary-cards">

            {

                cards.map((card) => (

                    <div

                        key={card.id}

                        className={`summary-card ${card.className}`}

                    >

                        <div className="summary-card-icon">

                            {card.icon}

                        </div>

                        <div className="summary-card-content">

                            <span>

                                {card.title}

                            </span>

                            <h3>

                                {card.value}

                            </h3>

                        </div>

                    </div>

                ))

            }

        </div>

    );

};

export default SummaryCards;