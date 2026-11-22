import "./TestCategoryMasterHeader.css";

import headerActions from "../../config/headerActions";

const TestCategoryMasterHeader = ({
    onAction,
}) => {

    const handleAction = (actionId) => {

        if (onAction) {
            onAction(actionId);
        }

    };

    return (
        <header className="category-master-header">

            {/* =========================
                HEADER CONTENT
            ========================= */}

            <div className="category-master-header__content">

                <h1 className="category-master-header__title">
                    Test Category Master
                </h1>

                <p className="category-master-header__subtitle">
                    Manage all laboratory test categories and their configurations
                </p>

            </div>


            {/* =========================
                HEADER ACTIONS
            ========================= */}

            <div className="category-master-header__actions">

                {headerActions.map((action) => {

                    const ActionIcon = action.icon;

                    return (
                        <button
                            key={action.id}
                            type="button"
                            className={`category-master-header__button category-master-header__button--${action.variant}`}
                            onClick={() =>
                                handleAction(action.id)
                            }
                        >

                            <ActionIcon
                                className="category-master-header__button-icon"
                            />

                            <span>
                                {action.label}
                            </span>

                        </button>
                    );

                })}

            </div>

        </header>
    );
};

export default TestCategoryMasterHeader;