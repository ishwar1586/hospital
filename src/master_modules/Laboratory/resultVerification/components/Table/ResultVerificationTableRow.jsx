import VerificationStatusChip
    from "./VerificationStatusChip";

import PriorityChip
    from "./PriorityChip";

import ActionMenu
    from "./ActionMenu";


// =========================================
// COMPONENT
// =========================================

const ResultVerificationTableRow = ({

    data = {},

    columns = [],

    rowIndex = 0,

    onAction,

}) => {


    // =========================================
    // SAFE COLUMNS
    // =========================================

    const safeColumns =
        Array.isArray(
            columns
        )
            ? columns
            : [];


    // =========================================
    // ACTION HANDLER
    // =========================================

    const handleAction = (
        actionId
    ) => {

        if (
            typeof onAction !==
            "function"
        ) {

            return;

        }


        onAction(
            actionId,
            data
        );

    };


    // =========================================
    // GET CELL VALUE
    // =========================================

    const getCellValue = (
        column
    ) => {

        if (
            typeof column?.render ===
            "function"
        ) {

            return column.render(
                data,
                rowIndex
            );

        }


        const key =
            column?.key ||
            column?.id;


        if (
            !key
        ) {

            return "";

        }


        return (
            data?.[key] ??
            ""
        );

    };


    // =========================================
    // RENDER CELL
    // =========================================

    const renderCell = (
        column
    ) => {

        const key =
            column?.key ||
            column?.id;


        // =====================================
        // STATUS
        // =====================================

        if (
            key ===
                "verificationStatus" ||
            key ===
                "status"
        ) {

            return (

                <VerificationStatusChip

                    status={
                        data?.verificationStatus ||
                        data?.status ||
                        "pending"
                    }

                />

            );

        }


        // =====================================
        // PRIORITY
        // =====================================

        if (
            key ===
                "priority"
        ) {

            return (

                <PriorityChip

                    priority={
                        data?.priority ||
                        "normal"
                    }

                />

            );

        }


        // =====================================
        // ACTIONS
        // =====================================

        if (
            key ===
                "actions" ||
            key ===
                "action"
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
        // PATIENT
        // =====================================

        if (
            key ===
                "patientName"
        ) {

            return (

                <div
                    className="
                        result-verification-table-row__patient
                    "
                >

                    <strong>
                        {
                            data?.patientName ||
                            data?.name ||
                            "—"
                        }
                    </strong>

                    {data?.uhid && (

                        <span>
                            UHID: {data.uhid}
                        </span>

                    )}

                </div>

            );

        }


        // =====================================
        // AGE / GENDER
        // =====================================

        if (
            key ===
                "ageGender"
        ) {

            if (
                data?.ageGender
            ) {

                return data.ageGender;

            }


            const age =
                data?.age ??
                "";

            const gender =
                data?.gender ??
                "";


            if (
                !age &&
                !gender
            ) {

                return "—";

            }


            return (

                <span>
                    {age}
                    {age && gender
                        ? " / "
                        : ""}
                    {gender}
                </span>

            );

        }


        // =====================================
        // ACCESSION NUMBER
        // =====================================

        if (
            key ===
                "accessionNo"
        ) {

            return (

                <span
                    className="
                        result-verification-table-row__accession
                    "
                >
                    {
                        data?.accessionNo ||
                        "—"
                    }
                </span>

            );

        }


        // =====================================
        // TEST NAME
        // =====================================

        if (
            key ===
                "testName"
        ) {

            return (

                <div
                    className="
                        result-verification-table-row__test
                    "
                >

                    <strong>
                        {
                            data?.testName ||
                            data?.test ||
                            "—"
                        }
                    </strong>

                    {data?.testCode && (

                        <span>
                            {
                                data.testCode
                            }
                        </span>

                    )}

                </div>

            );

        }


        // =====================================
        // DOCTOR
        // =====================================

        if (
            key ===
                "doctorName"
        ) {

            return (
                data?.doctorName ||
                data?.doctor ||
                "—"
            );

        }


        // =====================================
        // DEPARTMENT
        // =====================================

        if (
            key ===
                "department"
        ) {

            return (
                data?.departmentName ||
                data?.department ||
                "—"
            );

        }


        // =====================================
        // DATE
        // =====================================

        if (
            key ===
                "receivedAt" ||
            key ===
                "resultDate" ||
            key ===
                "verificationDate"
        ) {

            return (
                data?.[key] ||
                "—"
            );

        }


        // =====================================
        // DEFAULT
        // =====================================

        const value =
            getCellValue(
                column
            );


        if (
            value ===
            null ||
            value ===
            undefined ||
            value ===
            ""
        ) {

            return "—";

        }


        return value;

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <tr
            className="
                result-verification-table-row
            "
        >

            {safeColumns.map(
                (
                    column,
                    index
                ) => (

                    <td

                        key={
                            column?.id ||
                            column?.key ||
                            index
                        }

                        className={
                            column?.cellClassName ||
                            ""
                        }

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


export default ResultVerificationTableRow;