import "./ReportGenerationStatsCards.css";


// =========================================
// REPORT GENERATION STAT CARD
// =========================================

const ReportGenerationStatCard = ({
    card,
    value,
    onClick,
}) => {

    // =========================================
    // SAFE CARD CONFIG
    // =========================================

    const Icon =
        card?.icon || null;


    const title =
        card?.title || "";


    const subtitle =
        card?.subtitle || "";


    const variant =
        card?.variant || "default";


    // =========================================
    // DISPLAY VALUE
    // =========================================
    /*
     * Important:
     *
     * Value yahan hardcoded nahi hai.
     *
     * Table / calculated stats se value aayegi.
     *
     * Jab value available nahi hogi,
     * card 0 display karega.
     */

    const displayValue =
        value === null ||
        value === undefined ||
        value === ""
            ? 0
            : value;


    // =========================================
    // CLICK HANDLER
    // =========================================

    const handleClick = () => {

        if (
            typeof onClick !==
            "function"
        ) {
            return;
        }


        onClick(card);

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <button
            type="button"

            className={`
                report-generation-stat-card
                report-generation-stat-card--${variant}
            `}

            onClick={
                handleClick
            }

            aria-label={`
                ${title}
                ${displayValue}
            `}
        >

            {/* =================================
                ICON
            ================================= */}

            <div
                className="
                    report-generation-stat-card__icon
                "
                aria-hidden="true"
            >

                {Icon && (

                    <Icon />

                )}

            </div>


            {/* =================================
                CONTENT
            ================================= */}

            <div
                className="
                    report-generation-stat-card__content
                "
            >

                {/* =============================
                    TITLE
                ============================= */}

                <span
                    className="
                        report-generation-stat-card__title
                    "
                >
                    {title}
                </span>


                {/* =============================
                    VALUE
                ============================= */}

                <strong
                    className="
                        report-generation-stat-card__value
                    "
                >
                    {displayValue}
                </strong>


                {/* =============================
                    SUBTITLE
                ============================= */}

                {subtitle && (

                    <span
                        className="
                            report-generation-stat-card__subtitle
                        "
                    >
                        {subtitle}
                    </span>

                )}

            </div>

        </button>

    );

};


export default ReportGenerationStatCard;