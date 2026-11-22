const SampleTypeChip = ({
    type,
}) => {

    const normalizedType =
        type?.toLowerCase() || "";


    return (
        <span
            className={`sample-type-chip sample-type-chip--${normalizedType}`}
        >
            {type}
        </span>
    );
};


export default SampleTypeChip;