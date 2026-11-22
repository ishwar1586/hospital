const StatusChip = ({ status }) => {

    const normalizedStatus = status
        ?.toLowerCase()
        .replace(/\s+/g, "-");

    return (
        <span
            className={`test-status-chip test-status-chip--${normalizedStatus}`}
        >
            <span className="test-status-chip__dot" />

            {status}
        </span>
    );
};

export default StatusChip;