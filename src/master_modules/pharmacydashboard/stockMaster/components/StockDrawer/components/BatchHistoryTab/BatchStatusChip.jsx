import "./BatchStatusChip.css";

import {
    CheckCircleOutlined,
    WarningAmberOutlined,
    CancelOutlined,
    Inventory2Outlined,
    BlockOutlined,
} from "@mui/icons-material";

const BatchStatusChip = ({

    status,

}) => {

    const statusMap = {

        Active: {

            className: "active",

            icon: <CheckCircleOutlined fontSize="small" />,

        },

        "Near Expiry": {

            className: "near-expiry",

            icon: <WarningAmberOutlined fontSize="small" />,

        },

        Expired: {

            className: "expired",

            icon: <CancelOutlined fontSize="small" />,

        },

        Consumed: {

            className: "consumed",

            icon: <Inventory2Outlined fontSize="small" />,

        },

        Blocked: {

            className: "blocked",

            icon: <BlockOutlined fontSize="small" />,

        },

    };

    const currentStatus =

        statusMap[status] ||

        {

            className: "default",

            icon: <Inventory2Outlined fontSize="small" />,

        };

    return (

        <span

            className={`batch-status-chip ${currentStatus.className}`}

        >

            {currentStatus.icon}

            {status}

        </span>

    );

};

export default BatchStatusChip;