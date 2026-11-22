const StatusChip = ({
    status = "Unknown",
}) => {

    const normalizedStatus =
        String(status)
            .toLowerCase()
            .replace(/\s+/g, "-");


    return (

        <span
            className={`
               processing-status-chip
               processing-status-chip--${normalizedStatus}
            `}
        >

            <span className="processing-status-chip__dot" />

            <span className="processing-status-chip__text">

                {status}

            </span>

        </span>

    );

};


export default StatusChip;