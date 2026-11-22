import "./ExpiryStatusChip.css";

const ExpiryStatusChip = ({ status }) => {

    const getStatusClass = () => {

        switch (status) {

            case "Expired":

                return "expired";

            case "0-30 Days":

                return "danger";

            case "31-60 Days":

                return "warning";

            case "61-90 Days":

                return "info";

            case "Safe":

                return "safe";

            default:

                return "default";

        }

    };

    return (

        <span className={`expiry-status-chip ${getStatusClass()}`}>

            {status}

        </span>

    );

};

export default ExpiryStatusChip;