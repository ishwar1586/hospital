import "./StockStatusChip.css";

import {
    CheckCircleOutlined,
    WarningAmberOutlined,
    CancelOutlined,
} from "@mui/icons-material";

const STOCK_STATUS = {

    "Available": {

        className: "available",

        icon: <CheckCircleOutlined />,

    },

    "Low Stock": {

        className: "low-stock",

        icon: <WarningAmberOutlined />,

    },

    "Out Of Stock": {

        className: "out-of-stock",

        icon: <CancelOutlined />,

    },

};

const StockStatusChip = ({

    status = "Available",

}) => {

    const currentStatus =

        STOCK_STATUS[status] ||

        STOCK_STATUS["Available"];

    return (

        <span

            className={`stock-status-chip ${currentStatus.className}`}

        >

            {currentStatus.icon}

            {status}

        </span>

    );

};

export default StockStatusChip;