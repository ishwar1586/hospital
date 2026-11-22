import "./QuickActions.css";

import quickActions from "../../config/quickActions";

const QuickActions = ({ onAction }) => {

    const handleAction = (action) => {

        if (onAction) {
            onAction(action);
        }

    };

    return (
        <section className="quick-actions">

            <div className="quick-actions__header">

                <div>
                    <h2 className="quick-actions__title">
                        Quick Actions
                    </h2>

                    <p className="quick-actions__subtitle">
                        Frequently used laboratory test management actions
                    </p>
                </div>

            </div>


            <div className="quick-actions__grid">

                {quickActions.map((item) => {

                    const ActionIcon = item.icon;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            className={`quick-action quick-action--${item.variant}`}
                            onClick={() =>
                                handleAction(item.action)
                            }
                        >

                            <div className="quick-action__icon">
                                <ActionIcon />
                            </div>


                            <div className="quick-action__content">

                                <span className="quick-action__label">
                                    {item.label}
                                </span>

                                <span className="quick-action__description">
                                    {item.description}
                                </span>

                            </div>


                            <span className="quick-action__arrow">
                                →
                            </span>

                        </button>
                    );

                })}

            </div>

        </section>
    );
};

export default QuickActions;