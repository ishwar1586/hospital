import "./TransactionChip.css";

import {
    ShoppingCartOutlined,
    PointOfSaleOutlined,
    KeyboardReturnOutlined,
    SyncAltOutlined,
    PublishedWithChangesOutlined,
    Inventory2Outlined,
    ReportProblemOutlined,
    CancelOutlined,
} from "@mui/icons-material";

const TransactionChip = ({ type }) => {

    const transactionMap = {

        Purchase: {
            className: "purchase",
            icon: <ShoppingCartOutlined fontSize="small" />,
        },

        Sale: {
            className: "sale",
            icon: <PointOfSaleOutlined fontSize="small" />,
        },

        "Sale Return": {
            className: "sale-return",
            icon: <KeyboardReturnOutlined fontSize="small" />,
        },

        "Purchase Return": {
            className: "purchase-return",
            icon: <KeyboardReturnOutlined fontSize="small" />,
        },

        "Transfer In": {
            className: "transfer-in",
            icon: <SyncAltOutlined fontSize="small" />,
        },

        "Transfer Out": {
            className: "transfer-out",
            icon: <SyncAltOutlined fontSize="small" />,
        },

        Adjustment: {
            className: "adjustment",
            icon: <PublishedWithChangesOutlined fontSize="small" />,
        },

        Expired: {
            className: "expired",
            icon: <CancelOutlined fontSize="small" />,
        },

        Damage: {
            className: "damage",
            icon: <ReportProblemOutlined fontSize="small" />,
        },

    };

    const transaction =

        transactionMap[type] || {

            className: "default",

            icon: <Inventory2Outlined fontSize="small" />,

        };

    return (

        <span

            className={`transaction-chip ${transaction.className}`}

        >

            {transaction.icon}

            {type}

        </span>

    );

};

export default TransactionChip;