import PriorityChip
    from "./PriorityChip";

import TATChip
    from "./TATChip";

import TATStatusChip
    from "./TATStatusChip";

import QueueStatusChip
    from "./QueueStatusChip";

import ActionMenu
    from "./ActionMenu";


// =========================================
// COMPONENT
// =========================================

const TestQueueTableRow = ({
    data = {},
    columns = [],
    onAction,
}) => {


    // =========================================
    // ACTION HANDLER
    // =========================================

    const handleAction = (
        action
    ) => {

        if (
            typeof onAction !==
            "function"
        ) {

            return;

        }


        onAction(
            action,
            data
        );

    };


    // =========================================
    // CELL VALUE
    // =========================================

    const getCellValue = (
        column
    ) => {

        if (
            !column ||
            !column.accessor
        ) {

            return null;

        }


        return data[
            column.accessor
        ];

    };


    // =========================================
    // CELL RENDERER
    // =========================================

    const renderCell = (
        column
    ) => {

        const value =
            getCellValue(
                column
            );


        // =====================================
        // PRIORITY
        // =====================================

        if (
            column.type ===
            "priority"
        ) {

            return (

                <PriorityChip
                    priority={
                        value
                    }
                />

            );

        }


        // =====================================
        // TAT
        // =====================================

        if (
            column.type ===
            "tat"
        ) {

            return (

                <TATChip

                    tat={
                        value
                    }

                    status={
                        data.tatStatus
                    }

                />

            );

        }


        // =====================================
        // TAT STATUS
        // =====================================

        if (
            column.type ===
            "tatStatus"
        ) {

            return (

                <TATStatusChip
                    status={
                        value
                    }
                />

            );

        }


        // =====================================
        // QUEUE STATUS
        // =====================================

        if (
            column.type ===
            "status"
        ) {

            return (

                <QueueStatusChip
                    status={
                        value
                    }
                />

            );

        }


        // =====================================
        // ACTIONS
        // =====================================

        if (
            column.type ===
            "actions"
        ) {

            return (

                <ActionMenu

                    data={
                        data
                    }

                    onAction={
                        handleAction
                    }

                />

            );

        }


        // =====================================
        // DEFAULT TEXT
        // =====================================

        return (

            <span
                className={`
                    test-queue-table-row__text
                    test-queue-table-row__text--${
                        column.id || ""
                    }
                `}
                title={
                    value ??
                    ""
                }
            >

                {
                    value ??
                    "—"
                }

            </span>

        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <tr className="test-queue-table-row">

            {columns.map(
                (column) => {

                    if (
                        !column
                    ) {

                        return null;

                    }


                    return (

                        <td

                            key={
                                column.id
                            }

                            style={{
                                width:
                                    column.width,
                            }}

                            className={`
                                test-queue-table-row__cell
                                test-queue-table-row__cell--${
                                    column.align ||
                                    "left"
                                }
                            `}

                        >

                            {renderCell(
                                column
                            )}

                        </td>

                    );

                }
            )}

        </tr>

    );

};


export default TestQueueTableRow;