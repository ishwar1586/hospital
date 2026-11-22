import PriorityChip
    from "./PriorityChip";

import ResultStatusChip
    from "./ResultStatusChip";

import ActionMenu
    from "./ActionMenu";


const ResultEntryTableRow = ({
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
            typeof onAction ===
            "function"
        ) {

            onAction(
                action,
                data
            );

        }

    };


    // =========================================
    // PATIENT CELL
    // =========================================

    const renderPatientCell = () => {

        return (

            <div
                className="
                    result-entry-table-row__patient
                "
            >

                <div
                    className="
                        result-entry-table-row__patient-name
                    "
                >

                    {
                        data.patientName ||
                        "—"
                    }

                </div>


                <div
                    className="
                        result-entry-table-row__patient-meta
                    "
                >

                    <span>

                        {
                            data.patientId ||
                            "—"
                        }

                    </span>

                    <span>
                        •
                    </span>

                    <span>

                        {
                            data.age ??
                            "—"
                        }Y

                    </span>

                    <span>

                        {
                            data.gender ||
                            "—"
                        }

                    </span>

                </div>

            </div>

        );

    };


    // =========================================
    // TEST CELL
    // =========================================

    const renderTestCell = () => {

        return (

            <div
                className="
                    result-entry-table-row__test
                "
            >

                <div
                    className="
                        result-entry-table-row__test-name
                    "
                >

                    {
                        data.testName ||
                        "—"
                    }

                </div>


                {data.testCode && (

                    <div
                        className="
                            result-entry-table-row__test-code
                        "
                    >

                        {
                            data.testCode
                        }

                    </div>

                )}

            </div>

        );

    };


    // =========================================
    // DATE / TIME CELL
    // =========================================

    const renderDateTimeCell = (
        value
    ) => {

        if (!value) {

            return "—";

        }


        return (

            <span
                className="
                    result-entry-table-row__datetime
                "
            >

                {
                    value
                }

            </span>

        );

    };


    // =========================================
    // TAT CELL
    // =========================================

    const renderTatCell = () => {

        const minutes =
            Number(
                data.tatMinutes
            );


        let tatClass =
            "normal";


        if (
            Number.isFinite(
                minutes
            )
        ) {

            if (
                minutes >= 120
            ) {

                tatClass =
                    "critical";

            } else if (
                minutes >= 60
            ) {

                tatClass =
                    "warning";

            }

        }


        return (

            <span
                className={`
                    result-entry-table-row__tat
                    result-entry-table-row__tat--${tatClass}
                `}
            >

                {
                    data.tat ||
                    "—"
                }

            </span>

        );

    };


    // =========================================
    // CELL RENDERER
    // =========================================

    const renderCell = (
        column
    ) => {

        const value =
            column.accessor
                ? data[
                    column.accessor
                ]
                : null;


        // =====================================
        // PATIENT
        // =====================================

        if (
            column.type ===
            "patient"
        ) {

            return (
                renderPatientCell()
            );

        }


        // =====================================
        // TEST
        // =====================================

        if (
            column.type ===
            "test"
        ) {

            return (
                renderTestCell()
            );

        }


        // =====================================
        // DATE / TIME
        // =====================================

        if (
            column.type ===
            "dateTime"
        ) {

            return (
                renderDateTimeCell(
                    value
                )
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
                renderTatCell()
            );

        }


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
        // RESULT STATUS
        // =====================================

        if (
            column.type ===
            "status"
        ) {

            return (

                <ResultStatusChip
                    status={
                        value
                    }

                    critical={
                        data.critical
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
                    result-entry-table-row__text
                    result-entry-table-row__text--${column.id}
                `}
            >

                {
                    value ??
                    "—"
                }

            </span>

        );

    };


    // =========================================
    // RENDER ROW
    // =========================================

    return (

        <tr
            className="
                result-entry-table-row
            "
        >

            {columns.map(
                (column) => (

                    <td

                        key={
                            column.id
                        }

                        style={{
                            width:
                                column.width,
                        }}

                        className={`
                            result-entry-table-row__cell
                            result-entry-table-row__cell--${
                                column.align ||
                                "left"
                            }
                        `}

                    >

                        {
                            renderCell(
                                column
                            )
                        }

                    </td>

                )
            )}

        </tr>

    );

};


export default ResultEntryTableRow;