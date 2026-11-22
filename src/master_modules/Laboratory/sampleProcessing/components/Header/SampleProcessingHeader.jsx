import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import QrCodeScannerOutlinedIcon
    from "@mui/icons-material/QrCodeScannerOutlined";

import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";

import AddOutlinedIcon
    from "@mui/icons-material/AddOutlined";

import headerActions
    from "../../config/headerActions";

import "./SampleProcessingHeader.css";


const SampleProcessingHeader = ({
    onAction,
    isRefreshing = false,
}) => {


    /* =========================================
       ICON MAP
    ========================================= */

    const iconMap = {

        print:
            <PrintOutlinedIcon />,

        qrCodeScanner:
            <QrCodeScannerOutlinedIcon />,

        refresh:
            <RefreshOutlinedIcon />,

        add:
            <AddOutlinedIcon />,

    };


    /* =========================================
       HANDLE ACTION
    ========================================= */

    const handleAction = (
        actionId
    ) => {

        if (
            actionId === "refresh" &&
            isRefreshing
        ) {
            return;
        }


        if (onAction) {

            onAction(
                actionId
            );

        }

    };


    return (

        <header className="sample-processing-header">


            {/* =================================
                LEFT CONTENT
            ================================= */}

            <div className="sample-processing-header__content">

                <h1>
                    Sample Processing
                </h1>

                <p>
                    Process collected samples and prepare for testing
                </p>

            </div>


            {/* =================================
                RIGHT ACTIONS
            ================================= */}

            <div className="sample-processing-header__actions">

                {headerActions.map(
                    (action) => {

                        const isRefresh =
                            action.id ===
                            "refresh";


                        const isPrimary =
                            action.primary ===
                            true;


                        return (

                            <button
                                key={action.id}
                                type="button"
                                className={`
                                    sample-processing-header__button
                                    ${isPrimary
                                        ? "sample-processing-header__button--primary"
                                        : ""
                                    }
                                    ${isRefresh
                                        ? "sample-processing-header__button--refresh"
                                        : ""
                                    }
                                `}
                                onClick={() =>
                                    handleAction(
                                        action.id
                                    )
                                }
                                disabled={
                                    isRefresh &&
                                    isRefreshing
                                }
                            >

                                <span
                                    className={`
                                        sample-processing-header__button-icon
                                        ${isRefresh &&
                                        isRefreshing
                                            ? "sample-processing-header__button-icon--loading"
                                            : ""
                                        }
                                    `}
                                >

                                    {iconMap[
                                        action.icon
                                    ]}

                                </span>


                                <span>
                                    {isRefresh &&
                                    isRefreshing
                                        ? "Refreshing..."
                                        : action.label
                                    }
                                </span>

                            </button>

                        );

                    }
                )}

            </div>

        </header>

    );

};


export default SampleProcessingHeader;