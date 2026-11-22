import AuditStatusChip from "../AuditStatusChip/AuditStatusChip";
import AuditActionMenu from "../AuditActionMenu/AuditActionMenu";

const AuditRow = ({

    row,

    onView,

    onContinue,

    onPrint,

    onExport,

    onCancel,

}) => {

    return (

        <tr>

            <td>{row.auditNo}</td>

            <td>{row.auditType}</td>

            <td>{row.store}</td>

            <td>{row.auditor}</td>

            <td>{row.auditDate}</td>

            <td>{row.accuracy}%</td>

            <td>{row.varianceItems}</td>

            <td>

                <AuditStatusChip

                    status={row.status}

                />

            </td>

            <td>

                <AuditActionMenu

                    row={row}

                    onView={onView}

                    onContinue={onContinue}

                    onPrint={onPrint}

                    onExport={onExport}

                    onCancel={onCancel}

                />

            </td>

        </tr>

    );

};

export default AuditRow;