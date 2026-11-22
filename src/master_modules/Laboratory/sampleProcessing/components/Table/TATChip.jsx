const TATChip = ({
    value = "-",
    status = "normal",
}) => {

    const normalizedStatus =
        String(status)
            .toLowerCase()
            .replace(/\s+/g, "-");


    return (

        <span
            className={`
                processing-tat-chip
                processing-tat-chip--${normalizedStatus}
            `}
        >

            {value}

        </span>

    );

};


export default TATChip;