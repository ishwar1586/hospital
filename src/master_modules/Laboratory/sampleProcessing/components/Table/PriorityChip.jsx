const PriorityChip = ({
    priority = "Normal",
}) => {

    const normalizedPriority =
        String(priority)
            .toLowerCase()
            .replace(/\s+/g, "-");


    return (

        <span
            className={`
                processing-priority-chip
                processing-priority-chip--${normalizedPriority}
            `}
        >

            {priority}

        </span>

    );

};


export default PriorityChip;