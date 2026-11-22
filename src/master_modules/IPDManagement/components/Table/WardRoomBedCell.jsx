import React from "react";

import {
  getWardName,
  getRoomNumber,
  getBedNumber,
} from "../../utils/ipdHelpers";
import "./IPDTableRow.css";

const WardRoomBedCell = ({
  bedAllocation,
}) => {
  if (!bedAllocation) {
    return (
      <span className="ipd-ward-cell__empty">
        —
      </span>
    );
  }

  const ward = getWardName(bedAllocation);
  const room = getRoomNumber(bedAllocation);
  const bed = getBedNumber(bedAllocation);

  return (
    <div className="ipd-ward-cell">
      <span className="ipd-ward-cell__ward">
        {ward || "—"}
      </span>

      <span className="ipd-ward-cell__location">
        {room || "—"}
        {" | "}
        {bed || "—"}
      </span>
    </div>
  );
};

export default WardRoomBedCell;