import sampleCollectionHeaderActions
    from "../../config/headerActions";

import "./SampleCollectionHeader.css";


const SampleCollectionHeader = ({
    onAction,
    isRefreshing = false,
}) => {


    // =========================================
    // HANDLE ACTION
    // =========================================

    const handleAction = (actionId) => {

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

        <header className="sample-collection-header">


            {/* =================================
                LEFT CONTENT
            ================================= */}

            <div className="sample-collection-header__content">

                <h1>
                    Sample Collection
                </h1>

                <p>
                    Collect and register patient samples for testing
                </p>

            </div>


            {/* =================================
                ACTIONS
            ================================= */}

            <div className="sample-collection-header__actions">

                {sampleCollectionHeaderActions.map(
                    (action) => {

                        const Icon =
                            action.icon;


                        const isRefreshAction =
                            action.id === "refresh";


                        return (

                            <button
                                key={
                                    action.id
                                }

                                type="button"

                                className={`
                                    sample-collection-header__button
                                    sample-collection-header__button--${action.variant}
                                    ${
                                        isRefreshAction &&
                                        isRefreshing
                                            ? "sample-collection-header__button--loading"
                                            : ""
                                    }
                                `}

                                onClick={() =>
                                    handleAction(
                                        action.id
                                    )
                                }

                                disabled={
                                    isRefreshAction &&
                                    isRefreshing
                                }
                            >

                                <Icon
                                    className={
                                        isRefreshAction &&
                                        isRefreshing
                                            ? "sample-collection-header__refresh-icon"
                                            : ""
                                    }
                                />


                                <span>

                                    {
                                        isRefreshAction &&
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


export default SampleCollectionHeader;