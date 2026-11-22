import auditColumns from "../../config/auditColumns";

import AuditRow from "./AuditRow";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import "./AuditTable.css";

const AuditTable = ({

    data,

    page,

    rowsPerPage,

    totalRows,

    onPageChange,

    onRowsPerPageChange,

    onView,

    onContinue,

    onPrint,

    onExport,

    onCancel,

}) => {

    return (

        <div className="audit-table-card">

            <div className="audit-table-wrapper">

                <table className="audit-table">

                    <thead>

                        <tr>

                            {

                                auditColumns.map((column)=>(

                                    <th

                                        key={column.key}

                                    >

                                        {column.label}

                                    </th>

                                ))

                            }

                        </tr>

                    </thead>

                    <tbody>

                        {

                            data.length > 0

                            ?

                            data.map((row)=>(

                                <AuditRow

                                    key={row.id}

                                    row={row}

                                    onView={onView}

                                    onContinue={onContinue}

                                    onPrint={onPrint}

                                    onExport={onExport}

                                    onCancel={onCancel}

                                />

                            ))

                            :

                            <tr>

                                <td

                                    colSpan={9}

                                    className="audit-empty"

                                >

                                    No audit records found.

                                </td>

                            </tr>

                        }

                    </tbody>

                </table>

            </div>


                        {/* ======================================================
                Pagination
            ====================================================== */}

            <Pagination

                currentPage={page}

                totalItems={totalRows}

                rowsPerPage={rowsPerPage}

                onPageChange={onPageChange}

                onRowsPerPageChange={onRowsPerPageChange}

            />

        </div>

    );

};

export default AuditTable;