import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";

import FileDownloadOutlinedIcon
    from "@mui/icons-material/FileDownloadOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import VerifiedOutlinedIcon
    from "@mui/icons-material/VerifiedOutlined";

import "./ResultVerificationHeader.css";


// =========================================
// COMPONENT
// =========================================

const ResultVerificationHeader = ({
    onAction,

    isRefreshing = false,

}) => {


    // =========================================
    // ACTION HANDLER
    // =========================================

    const handleAction = (
        actionId
    ) => {

        if (
            typeof onAction !==
            "function"
        ) {

            return;

        }


        onAction(
            actionId
        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <header
            className="
                result-verification-header
            "
        >


            {/* =================================
                LEFT SECTION
            ================================= */}

            <div
                className="
                    result-verification-header__left
                "
            >

                {/* =================================
                    ICON
                ================================= */}

                <div
                    className="
                        result-verification-header__icon
                    "
                >

                    <VerifiedOutlinedIcon />

                </div>


                {/* =================================
                    TITLE
                ================================= */}

                <div
                    className="
                        result-verification-header__content
                    "
                >

                    <h1>
                        Result Verification
                    </h1>

                    <p>
                        Review and verify laboratory
                        test results before report release.
                    </p>

                </div>

            </div>


            {/* =================================
                RIGHT SECTION
            ================================= */}

            <div
                className="
                    result-verification-header__right
                "
            >


                {/* =================================
                    EXPORT
                ================================= */}

                <button

                    type="button"

                    className="
                        result-verification-header__button
                        result-verification-header__button--secondary
                    "

                    onClick={() =>
                        handleAction(
                            "exportResults"
                        )
                    }

                >

                    <FileDownloadOutlinedIcon />

                    <span>
                        Export
                    </span>

                </button>


                {/* =================================
                    PRINT
                ================================= */}

                <button

                    type="button"

                    className="
                        result-verification-header__button
                        result-verification-header__button--secondary
                    "

                    onClick={() =>
                        handleAction(
                            "printWorklist"
                        )
                    }

                >

                    <PrintOutlinedIcon />

                    <span>
                        Print
                    </span>

                </button>


                {/* =================================
                    REFRESH
                ================================= */}

                <button

                    type="button"

                    className="
                        result-verification-header__button
                        result-verification-header__button--primary
                    "

                    disabled={
                        isRefreshing
                    }

                    onClick={() =>
                        handleAction(
                            "refresh"
                        )
                    }

                >

                    <RefreshOutlinedIcon
                        className={
                            isRefreshing
                                ? "result-verification-header__refresh-icon--spinning"
                                : ""
                        }
                    />

                    <span>

                        {isRefreshing
                            ? "Refreshing..."
                            : "Refresh"}

                    </span>

                </button>

            </div>

        </header>

    );

};


export default ResultVerificationHeader;