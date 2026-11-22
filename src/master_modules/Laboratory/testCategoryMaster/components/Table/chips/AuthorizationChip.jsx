const AuthorizationChip = ({
    value,
}) => {

    const isAuthorized =
        value === true ||
        value === "Yes" ||
        value === "yes";

    return (
        <span
            className={`authorization-chip ${
                isAuthorized
                    ? "authorization-chip--yes"
                    : "authorization-chip--no"
            }`}
        >
            {isAuthorized ? "Yes" : "No"}
        </span>
    );
};

export default AuthorizationChip;