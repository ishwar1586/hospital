const StatusChip = ({
    status,
}) => {

    const normalizedStatus =
        status?.toLowerCase();

    const statusClass =
        normalizedStatus === "active"
            ? "status-chip--active"
            : "status-chip--inactive";

    return (
        <span
            className={`status-chip ${statusClass}`}
        >
            {status}
        </span>
    );
};

export default StatusChip;