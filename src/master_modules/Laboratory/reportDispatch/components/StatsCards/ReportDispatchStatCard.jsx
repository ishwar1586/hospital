const ReportDispatchStatCard = ({
    id,
    title,
    value = 0,
    subtitle = "",
    type = "default",
    icon: Icon,
}) => {

    return (

        <article
            className={`
                report-dispatch-stat-card
                report-dispatch-stat-card--${type}
            `}
            data-stat-id={id}
        >

            <div
                className="
                    report-dispatch-stat-card__icon
                "
            >
                {Icon && <Icon />}
            </div>


            <div
                className="
                    report-dispatch-stat-card__content
                "
            >

                <span
                    className="
                        report-dispatch-stat-card__title
                    "
                >
                    {title}
                </span>


                <strong
                    className="
                        report-dispatch-stat-card__value
                    "
                >
                    {value}
                </strong>


                {subtitle && (

                    <span
                        className="
                            report-dispatch-stat-card__subtitle
                        "
                    >
                        {subtitle}
                    </span>

                )}

            </div>

        </article>

    );

};


export default ReportDispatchStatCard;