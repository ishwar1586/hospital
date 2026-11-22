import headerActions
    from "../../config/headerActions";

import "./TestQueueHeader.css";


const TestQueueHeader = ({
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

        <header className="test-queue-header">


            {/* =================================
                TITLE SECTION
            ================================= */}

            <div className="test-queue-header__content">

                <h1>
                    Test Queue
                </h1>


                <p>
                    Track and manage samples in queue for testing
                </p>

            </div>


            {/* =================================
                ACTIONS
            ================================= */}

            <div className="test-queue-header__actions">

                {headerActions.map(
                    (action) => {

                        const Icon =
                            action.icon;


                        const isRefresh =
                            action.id === "refresh";


                        return (

                            <button
                                key={
                                    action.id
                                }
                                type="button"
                                className={`
                                    test-queue-header__button
                                    test-queue-header__button--${action.variant}
                                    ${
                                        isRefresh &&
                                        isRefreshing
                                            ? "test-queue-header__button--loading"
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

                                <Icon
                                    className={
                                        isRefresh &&
                                        isRefreshing
                                            ? "test-queue-header__refresh-icon"
                                            : ""
                                    }
                                />


                                <span>
                                    {
                                        isRefresh &&
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


export default TestQueueHeader;