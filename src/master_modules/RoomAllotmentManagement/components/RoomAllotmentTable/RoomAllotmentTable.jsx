
import React from "react";
import "./RoomAllotmentTable.css";

import RoomAllotmentTableHeader from "./RoomAllotmentTableHeader";
import RoomAllotmentTableRow from "./RoomAllotmentTableRow";

const RoomAllotmentTable = ({
  data,
  columns,
  sortConfig,
  onSort,
  onAction,
}) => {
  return (
    <div className="room-allotment-table">
      <div className="room-allotment-table__scroll">
        <table className="room-allotment-table__element">
          <RoomAllotmentTableHeader
            columns={columns}
            sortConfig={sortConfig}
            onSort={onSort}
          />

          <tbody>
            {data.length > 0 ? (
              data.map((row) => (
                <RoomAllotmentTableRow
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
                  className="room-allotment-table__empty"
                >
                  No room allotment records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomAllotmentTable;
