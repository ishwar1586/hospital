const StatusChip = ({
    status,
}) => {

    const normalizedStatus =
        status
            ?.toLowerCase()
            .replace(/\s+/g, "-") || "";


    return (
        <span
            className={`collection-status-chip collection-status-chip--${normalizedStatus}`}
        >
            {status}
        </span>
    );
};


export default StatusChip;