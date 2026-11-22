import "./StatusChip.css";

const StatusChip = ({ status }) => {

    const getClassName = () => {

        switch ((status || "").toLowerCase()) {

            case "active":
            case "in stock":

                return "success";

            case "low stock":

                return "warning";

            case "out of stock":

                return "danger";

            case "expired":

                return "expired";

            default:

                return "default";

        }

    };

    return (

        <span className={`status-chip ${getClassName()}`}>

            {status}

        </span>

    );

};

export default StatusChip;