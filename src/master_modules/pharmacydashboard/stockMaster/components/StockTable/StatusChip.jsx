import "./StatusChip.css";

import {
    CheckCircleRounded,
    WarningAmberRounded,
    CancelRounded,
    ErrorOutlineRounded,
    AccessTimeRounded,
} from "@mui/icons-material";

const StatusChip = ({ status }) => {

    const value = String(status || "").trim();

    const getStatus = () => {

        switch (value.toLowerCase()) {

            case "in stock":

                return {

                    label: "In Stock",

                    className: "status-in-stock",

                    icon: <CheckCircleRounded fontSize="small" />,

                };

            case "low stock":

                return {

                    label: "Low Stock",

                    className: "status-low-stock",

                    icon: <WarningAmberRounded fontSize="small" />,

                };

            case "out of stock":

                return {

                    label: "Out of Stock",

                    className: "status-out-stock",

                    icon: <CancelRounded fontSize="small" />,

                };

            case "near expiry":

                return {

                    label: "Near Expiry",

                    className: "status-near-expiry",

                    icon: <AccessTimeRounded fontSize="small" />,

                };

            case "expired":

                return {

                    label: "Expired",

                    className: "status-expired",

                    icon: <ErrorOutlineRounded fontSize="small" />,

                };

            default:

                return {

                    label: value || "Unknown",

                    className: "status-default",

                    icon: null,

                };

        }

    };

    const current = getStatus();

    return (

        <span
            className={`status-chip ${current.className}`}
        >

            {current.icon}

            {current.label}

        </span>

    );

};

export default StatusChip;