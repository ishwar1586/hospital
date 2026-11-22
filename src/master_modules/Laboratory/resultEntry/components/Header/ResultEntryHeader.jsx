import FileDownloadOutlinedIcon
    from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownOutlinedIcon
    from "@mui/icons-material/KeyboardArrowDownOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";


import "./ResultEntryHeader.css";


const ResultEntryHeader = ({
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
            typeof onAction ===
            "function"
        ) {

            onAction(
                actionId
            );

        }

    };


    return (

        <header
            className="
                result-entry-header
            "
        >

            {/* =================================
                LEFT SIDE
            ================================= */}

            <div
                className="
                    result-entry-header__content
                "
            >

                <h1>
                    Result Entry
                </h1>

                <p>
                    Enter and manage test results
                    with accuracy and speed
                </p>

            </div>


            {/* =================================
                RIGHT SIDE ACTIONS
            ================================= */}

            <div
                className="
                    result-entry-header__actions
                "
            >


                {/* =============================
                    EXPORT RESULTS
                ============================= */}

                <button

                    type="button"

                    className="
                        result-entry-header__button
                        result-entry-header__button--export
                    "

                    onClick={() =>
                        handleAction(
                            "exportResults"
                        )
                    }

                >

                    <FileDownloadOutlinedIcon />

                    <span>
                        Export Results
                    </span>

                    <KeyboardArrowDownOutlinedIcon
                        className="
                            result-entry-header__dropdown-icon
                        "
                    />

                </button>


                {/* =============================
                    PRINT WORKLIST
                ============================= */}

                <button

                    type="button"

                    className="
                        result-entry-header__button
                        result-entry-header__button--print
                    "

                    onClick={() =>
                        handleAction(
                            "printWorklist"
                        )
                    }

                >

                    <PrintOutlinedIcon />

                    <span>
                        Print Worklist
                    </span>

                </button>


                {/* =============================
                    REFRESH
                ============================= */}

                <button

                    type="button"

                    className={`
                        result-entry-header__button
                        result-entry-header__button--refresh
                        ${
                            isRefreshing
                                ? "is-refreshing"
                                : ""
                        }
                    `}

                    onClick={() =>
                        handleAction(
                            "refresh"
                        )
                    }

                    disabled={
                        isRefreshing
                    }

                    aria-label="
                        Refresh result entry
                    "

                >

                    <RefreshOutlinedIcon />

                    <span>
                        {
                            isRefreshing
                                ? "Refreshing..."
                                : "Refresh"
                        }
                    </span>

                </button>


            </div>

        </header>

    );

};


export default ResultEntryHeader;