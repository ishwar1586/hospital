import React from "react";

import BillingPatientCell from "./BillingPatientCell";
import BillingDepartmentCell from "./BillingDepartmentCell";
import BillingAmountCell from "./BillingAmountCell";
import BillingRemainingCell from "./BillingRemainingCell";
import BillingPaymentStatus from "./BillingPaymentStatus";
import BillingActionMenu from "./BillingActionMenu";

import billingStatusConfig from "../../config/billingStatus.config";
import billingActionsConfig from "../../config/billingActions.config";

const BillingTableRow = ({
  row,
  columns = [],
  onAction,
}) => {
  if (!row) {
    return null;
  }

  const renderCellValue = (column) => {
    const value = row[column.key];

    switch (column.key) {
      case "patient":
        return (
          <BillingPatientCell
            patient={value}
          />
        );

      case "department":
        return (
          <BillingDepartmentCell
            department={value}
          />
        );

      case "totalAmount":
        return (
          <BillingAmountCell
            amount={value}
            variant="total"
          />
        );

      case "paidAmount":
        return (
          <BillingAmountCell
            amount={value}
            variant="paid"
          />
        );

      case "remainingAmount":
        return (
          <BillingRemainingCell
            amount={value}
          />
        );

      case "paymentStatus":
        return (
          <BillingPaymentStatus
            status={value}
            config={billingStatusConfig}
          />
        );

      case "actions":
        return (
          <BillingActionMenu
            row={row}
            actions={billingActionsConfig}
            onAction={onAction}
          />
        );

      default:
        return value || "-";
    }
  };

  return (
    <tr className="billing-table__row">
      {columns.map((column) => (
        <td
          key={column.id}
          style={{
            width: column.width,
            minWidth: column.width,
            textAlign:
              column.align || "left",
          }}
          className="billing-table__td"
        >
          {renderCellValue(column)}
        </td>
      ))}
    </tr>
  );
};

export default BillingTableRow;