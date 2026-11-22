import FactCheckOutlinedIcon
    from "@mui/icons-material/FactCheckOutlined";

import WarningAmberOutlinedIcon
    from "@mui/icons-material/WarningAmberOutlined";

import ErrorOutlinedIcon
    from "@mui/icons-material/ErrorOutlined";


// =========================================
// COMPONENT
// =========================================

const VerificationResultRow = ({

    row = {},

    onAction,

}) => {


    // =========================================
    // SAFE ROW
    // =========================================

    const safeRow =
        row || {};


    // =========================================
    // FLAG
    // =========================================

    const flag =
        safeRow.flag ||
        safeRow.status ||
        "normal";


    const normalizedFlag =
        String(
            flag
        )
            .trim()
            .toLowerCase();


    // =========================================
    // FLAG CLASS
    // =========================================

    const getFlagClass = () => {

        if (
            normalizedFlag ===
                "critical" ||
            normalizedFlag ===
                "hh" ||
            normalizedFlag ===
                "ll"
        ) {

            return "critical";

        }


        if (
            normalizedFlag ===
            "high"
        ) {

            return "high";

        }


        if (
            normalizedFlag ===
            "low"
        ) {

            return "low";

        }


        if (
            normalizedFlag ===
            "abnormal"
        ) {

            return "abnormal";

        }


        return "normal";

    };


    // =========================================
    // FLAG LABEL
    // =========================================

    const getFlagLabel = () => {

        switch (
            normalizedFlag
        ) {

            case "high":

                return "High";


            case "low":

                return "Low";


            case "critical":

                return "Critical";


            case "abnormal":

                return "Abnormal";


            case "hh":

                return "Critical High";


            case "ll":

                return "Critical Low";


            default:

                return "Normal";

        }

    };


    // =========================================
    // FLAG ICON
    // =========================================

    const getFlagIcon = () => {

        const flagClass =
            getFlagClass();


        if (
            flagClass ===
            "critical"
        ) {

            return (
                <ErrorOutlinedIcon />
            );

        }


        if (
            flagClass ===
                "high" ||
            flagClass ===
                "low" ||
            flagClass ===
                "abnormal"
        ) {

            return (
                <WarningAmberOutlinedIcon />
            );

        }


        return (
            <FactCheckOutlinedIcon />
        );

    };


    // =========================================
    // HANDLE PREVIOUS RESULT
    // =========================================

    const handlePreviousResult = () => {

        if (
            typeof onAction !==
            "function"
        ) {

            return;

        }


        onAction(
            "viewPrevious",
            safeRow
        );

    };


    // =========================================
    // VALUES
    // =========================================

    const parameterName =
        safeRow.parameterName ||
        safeRow.name ||
        "—";


    const parameterCode =
        safeRow.code ||
        safeRow.parameterCode ||
        "";


    const resultValue =
        safeRow.result ??
        safeRow.value ??
        "—";


    const unit =
        safeRow.unit ||
        "—";


    const referenceRange =
        safeRow.referenceRange ||
        safeRow.normalRange ||
        "—";


    const previousResult =
        safeRow.previousResult ??
        "—";


    const flagClass =
        getFlagClass();


    // =========================================
    // RENDER
    // =========================================

    return (

        <tr
            className={`
                verification-result-table__result-row
                ${
                    flagClass ===
                    "critical"
                        ? "verification-result-table__result-row--critical"
                        : ""
                }
            `}
        >

            {/* =================================
                PARAMETER
            ================================= */}

            <td>

                <div
                    className="
                        verification-result-table__parameter
                    "
                >

                    <strong>
                        {parameterName}
                    </strong>


                    {parameterCode && (

                        <span>
                            {parameterCode}
                        </span>

                    )}

                </div>

            </td>


            {/* =================================
                RESULT
            ================================= */}

            <td>

                <strong
                    className={`
                        verification-result-table__value
                        verification-result-table__value--${flagClass}
                    `}
                >

                    {resultValue}

                </strong>

            </td>


            {/* =================================
                UNIT
            ================================= */}

            <td>

                <span
                    className="
                        verification-result-table__unit
                    "
                >
                    {unit}
                </span>

            </td>


            {/* =================================
                REFERENCE RANGE
            ================================= */}

            <td>

                <span
                    className="
                        verification-result-table__reference
                    "
                >

                    {referenceRange}

                </span>

            </td>


            {/* =================================
                FLAG
            ================================= */}

            <td>

                <span
                    className={`
                        verification-result-table__flag
                        verification-result-table__flag--${flagClass}
                    `}
                >

                    {getFlagIcon()}

                    <span>
                        {getFlagLabel()}
                    </span>

                </span>

            </td>


            {/* =================================
                PREVIOUS RESULT
            ================================= */}

            <td>

                <button
                    type="button"

                    className="
                        verification-result-table__previous
                    "

                    onClick={
                        handlePreviousResult
                    }

                >

                    {previousResult}

                </button>

            </td>

        </tr>

    );

};


export default VerificationResultRow;