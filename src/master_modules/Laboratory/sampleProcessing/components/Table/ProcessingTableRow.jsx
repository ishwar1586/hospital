import StatusChip
    from "./StatusChip";

import PriorityChip
    from "./PriorityChip";

import TATChip
    from "./TATChip";

import ActionMenu
    from "./ActionMenu";


const ProcessingTableRow = ({
    processing,
    columns,
    onAction,
}) => {


    // =========================================
    // GET VALUE
    // =========================================

    const getValue = (
        key
    ) => {

        return processing?.[
            key
        ] ?? "-";

    };


    // =========================================
    // CELL RENDER
    // =========================================

    const renderCell = (
        column
    ) => {

        const value =
            getValue(
                column.key
            );


        switch (
            column.type
        ) {


            // =================================
            // STATUS
            // =================================

            case "status":

                return (

                    <StatusChip
                        status={
                            value
                        }
                    />

                );


            // =================================
            // PRIORITY
            // =================================

            case "priority":

                return (

                    <PriorityChip
                        priority={
                            value
                        }
                    />

                );


            // =================================
            // TAT
            // =================================

            case "tat":

                return (

                    <TATChip
                        value={
                            value
                        }
                    />

                );


            // =================================
            // ACTIONS
            // =================================

            case "actions":

                return (

                    <ActionMenu
                        processing={
                            processing
                        }

                        onAction={
                            onAction
                        }

                    />

                );


            // =================================
            // DEFAULT
            // =================================

            default:

                return value;

        }

    };


    return (

        <tr className="processing-table__row">

            {columns.map(
                (column) => (

                    <td
                        key={
                            column.id
                        }

                        style={{
                            minWidth:
                                column.minWidth,
                            textAlign:
                                column.align ||
                                "left",
                        }}
                    >

                        {renderCell(
                            column
                        )}

                    </td>

                )
            )}

        </tr>

    );

};


export default ProcessingTableRow;