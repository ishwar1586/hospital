import React from "react";

import BillingTableRow from "./BillingTableRow";
import Pagination from "@/master_shared/components/Pagination/Pagination";

import "./BillingTable.css";

const BillingTable = ({
  data = [],
  columns = [],
  onAction,

  // Pagination
  page = 1,
  rowsPerPage = 10,
  totalRows = 0,
  onPageChange,
  onRowsPerPageChange,
}) => {
  if (!Array.isArray(columns) || columns.length === 0) {
    return null;
  }

  return (
    <section className="billing-table">

      {/* ================= TABLE ================= */}

      <div className="billing-table__scroll">

        <table className="billing-table__table">

          <thead className="billing-table__head">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  style={{
                    width: column.width,
                    minWidth: column.width,
                    textAlign:
                      column.align || "left",
                  }}
                  className="billing-table__th"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="billing-table__body">

            {data.length > 0 ? (
              data.map((row) => (
                <BillingTableRow
                  key={row.id}
                  row={row}
                  columns={columns}
                  onAction={onAction}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="billing-table__empty"
                >
                  No billing records found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>


      {/* ================= PAGINATION ================= */}

      {totalRows > 0 && (
        <div className="billing-table__pagination">

          <Pagination
            page={page}
            rowsPerPage={rowsPerPage}
            totalRows={totalRows}
            onPageChange={onPageChange}
            onRowsPerPageChange={
              onRowsPerPageChange
            }
          />

        </div>
      )}

    </section>
  );
};

export default BillingTable;