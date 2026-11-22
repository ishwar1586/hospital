// =========================================
// REPORT DISPATCH HEADER
// =========================================

import SettingsOutlinedIcon
    from "@mui/icons-material/SettingsOutlined";

import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";

import "./ReportDispatchHeader.css";


// =========================================
// REPORT DISPATCH HEADER
// =========================================

const ReportDispatchHeader = ({
    onSettings,
    onTemplates,
    onRefresh,

    isRefreshing = false,
}) => {

    // =========================================
    // SETTINGS
    // =========================================

    const handleSettings = () => {

        if (
            isRefreshing
        ) {
            return;
        }


        if (
            typeof onSettings !==
            "function"
        ) {
            return;
        }


        onSettings();

    };


    // =========================================
    // TEMPLATES
    // =========================================

    const handleTemplates = () => {

        if (
            isRefreshing
        ) {
            return;
        }


        if (
            typeof onTemplates !==
            "function"
        ) {
            return;
        }


        onTemplates();

    };


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh = () => {

        if (
            isRefreshing
        ) {
            return;
        }


        if (
            typeof onRefresh !==
            "function"
        ) {
            return;
        }


        onRefresh();

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <header
            className="
                report-dispatch-header
            "
        >

            {/* =================================
                HEADER CONTENT
            ================================= */}

            <div
                className="
                    report-dispatch-header__content
            "
            >

                <div
                    className="
                        report-dispatch-header__title-group
                    "
                >

                    <h1
                        className="
                            report-dispatch-header__title
                        "
                    >
                        Report Dispatch
                    </h1>


                    <p
                        className="
                            report-dispatch-header__subtitle
                        "
                    >
                        Deliver reports to patients via
                        print, email, SMS, WhatsApp or
                        download
                    </p>

                </div>

            </div>


            {/* =================================
                ACTIONS
            ================================= */}

            <div
                className="
                    report-dispatch-header__actions
                "
            >

                {/* =============================
                    DISPATCH SETTINGS
                ============================= */}

                <button
                    type="button"

                    className="
                        report-dispatch-header__action
                    "

                    onClick={
                        handleSettings
                    }

                    disabled={
                        isRefreshing
                    }

                    title="
                        Dispatch settings
                    "
                >

                    <SettingsOutlinedIcon />

                    <span>
                        Dispatch Settings
                    </span>

                </button>


                {/* =============================
                    TEMPLATES
                ============================= */}

                <button
                    type="button"

                    className="
                        report-dispatch-header__action
                    "

                    onClick={
                        handleTemplates
                    }

                    disabled={
                        isRefreshing
                    }

                    title="
                        Report templates
                    "
                >

                    <DescriptionOutlinedIcon />

                    <span>
                        Templates
                    </span>

                </button>


                {/* =============================
                    REFRESH
                ============================= */}

                <button
                    type="button"

                    className="
                        report-dispatch-header__refresh
                    "

                    onClick={
                        handleRefresh
                    }

                    disabled={
                        isRefreshing
                    }

                    title={
                        isRefreshing
                            ? "Refreshing reports"
                            : "Refresh reports"
                    }
                >

                    {isRefreshing ? (

                        <span
                            className="
                                report-dispatch-header__spinner
                            "
                            aria-hidden="true"
                        />

                    ) : (

                        <RefreshOutlinedIcon />

                    )}


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


export default ReportDispatchHeader;