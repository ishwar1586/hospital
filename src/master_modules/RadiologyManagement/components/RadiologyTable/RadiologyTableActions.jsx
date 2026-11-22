
import React, { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";

const RadiologyTableActions = ({
  order,
  onViewDetails,
  onEditOrder,
  onReport,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleAction = (callback) => {
    setIsOpen(false);

    if (typeof callback === "function") {
      callback(order);
    }
  };

  return (
    <div className="radiology-table__actions" ref={menuRef}>
      <button
        type="button"
        className="radiology-table__action-menu-trigger"
        aria-label={`Actions for ${order?.orderId ?? "radiology order"}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <MoreVertical size={19} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="radiology-table__action-menu" role="menu">
          <button
            type="button"
            className="radiology-table__action-menu-item"
            role="menuitem"
            // disabled={typeof onViewDetails !== "function"}
            onClick={() => handleAction(onViewDetails)}
          >
            {/* <Eye size={16} aria-hidden="true" /> */}
            <span>View Details</span>
          </button>

          <button
            type="button"

            className="radiology-table__action-menu-item"
            role="menuitem"
            // disabled={typeof onEditOrder !== "function"}
            onClick={() => handleAction(onEditOrder)}
          >
            {/* <Pencil size={10} aria-hidden="true" /> */}
            <span>Edit Order</span>
          </button>

          <button
            type="button"
            className="radiology-table__action-menu-item"
            role="menuitem"
            // disabled={typeof onReport !== "function"}
            onClick={() => handleAction(onReport)}
          >
            {/* <FileText size={16} aria-hidden="true" /> */}
            <span>Generate Report</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default RadiologyTableActions;
