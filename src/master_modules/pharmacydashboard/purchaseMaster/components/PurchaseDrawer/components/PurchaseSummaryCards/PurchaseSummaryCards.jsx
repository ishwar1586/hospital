import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import "./PurchaseSummaryCards.css";

const PurchaseSummaryCards = ({
    purchase,
}) => {

    const cards = [

        {
            title:
                "Total Amount",
            value:
                purchase.totalAmount,
            icon:
                CurrencyRupeeOutlinedIcon,
        },

        {
            title:
                "Received Amount",
            value:
                purchase.receivedAmount,
            icon:
                CheckCircleOutlineOutlinedIcon,
        },

        {
            title:
                "Pending Amount",
            value:
                purchase.pendingAmount,
            icon:
                PendingActionsOutlinedIcon,
        },

        {
            title:
                "Total Items",
            value:
                purchase.totalItems,
            icon:
                Inventory2OutlinedIcon,
            isCount: true,
        },
    ];

    return (

        <div className="purchase-summary-grid">

            {cards.map(
                (
                    item,
                    index
                ) => {

                    const Icon =
                        item.icon;

                    return (

                        <div
                            key={index}
                            className="purchase-summary-card"
                        >

                            <div className="purchase-summary-icon">

                                <Icon />

                            </div>

                            <div>

                                <span>
                                    {item.title}
                                </span>

                                <h3>

                                    {item.isCount
                                        ? item.value
                                        : `₹ ${item.value.toLocaleString()}`}

                                </h3>

                            </div>

                        </div>

                    );
                }
            )}

        </div>

    );
};

export default PurchaseSummaryCards;