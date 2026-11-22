import "./MedicineStatusChip.css";

import {
    CheckCircleRounded,
    WarningAmberRounded,
    CancelRounded,
    AccessTimeFilledRounded,
} from "@mui/icons-material";

const STATUS_CONFIG = {

    Available: {

        label: "Available",

        className: "available",

        icon: CheckCircleRounded,

    },

    "Low Stock": {

        label: "Low Stock",

        className: "low-stock",

        icon: WarningAmberRounded,

    },

    "Out Of Stock": {

        label: "Out Of Stock",

        className: "out-of-stock",

        icon: CancelRounded,

    },

    "Near Expiry": {

        label: "Near Expiry",

        className: "near-expiry",

        icon: AccessTimeFilledRounded,

    },

};

const MedicineStatusChip = ({

    status = "Available",

}) => {

    const config =

        STATUS_CONFIG[status] ||

        STATUS_CONFIG["Available"];

    const Icon = config.icon;

    return (

        <span

            className={`medicine-status-chip ${config.className}`}

        >

            <Icon />

            {config.label}

        </span>

    );

};

export default MedicineStatusChip;