import "./StockBadge.css";

import {

    CheckCircleRounded,

    WarningAmberRounded,

    CancelRounded,

    AccessTimeRounded,

} from "@mui/icons-material";

const StockBadge = ({

    status = "Available",

}) => {

    const getBadge = () => {

        switch (status) {

            case "Available":

                return {

                    className: "available",

                    icon: <CheckCircleRounded />,

                    label: "Available",

                };

            case "Low Stock":

                return {

                    className: "low-stock",

                    icon: <WarningAmberRounded />,

                    label: "Low Stock",

                };

            case "Near Expiry":

                return {

                    className: "near-expiry",

                    icon: <AccessTimeRounded />,

                    label: "Near Expiry",

                };

            case "Out Of Stock":

                return {

                    className: "out-of-stock",

                    icon: <CancelRounded />,

                    label: "Out Of Stock",

                };

            default:

                return {

                    className: "available",

                    icon: <CheckCircleRounded />,

                    label: status,

                };

        }

    };

    const badge = getBadge();

    return (

        <div

            className={`stock-badge ${badge.className}`}

        >

            {badge.icon}

            <span>

                {badge.label}

            </span>

        </div>

    );

};

export default StockBadge;