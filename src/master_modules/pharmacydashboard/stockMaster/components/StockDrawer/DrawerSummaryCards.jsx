import "./DrawerSummaryCards.css";

import {
    Inventory2Outlined,
    ShoppingCartOutlined,
    CurrencyRupeeOutlined,
    WarningAmberOutlined,
} from "@mui/icons-material";

const DrawerSummaryCards = ({ stock }) => {

    const cards = [

        {
            title: "Current Stock",
            value: stock.currentStock,
            icon: <Inventory2Outlined />,
            color: "primary",
        },

        {
            title: "Available",
            value: stock.availableQty,
            icon: <ShoppingCartOutlined />,
            color: "success",
        },

        {
            title: "Stock Value",
            value: `₹ ${Number(stock.stockValue || 0).toLocaleString("en-IN")}`,
            icon: <CurrencyRupeeOutlined />,
            color: "warning",
        },

        {
            title: "Reorder Level",
            value: stock.reorderLevel,
            icon: <WarningAmberOutlined />,
            color: "danger",
        },

    ];

    return (

        <div className="drawer-summary-grid">

            {

                cards.map((card) => (

                    <div

                        key={card.title}

                        className={`drawer-summary-card ${card.color}`}

                    >

                        <div className="summary-icon">

                            {card.icon}

                        </div>

                        <div className="summary-content">

                            <span className="summary-title">

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

export default DrawerSummaryCards;