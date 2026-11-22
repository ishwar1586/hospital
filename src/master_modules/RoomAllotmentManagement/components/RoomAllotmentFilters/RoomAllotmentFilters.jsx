
import React from "react";
import "./RoomAllotmentFilters.css";

import {
  roomAllotmentFiltersConfig,
  roomAllotmentSearchConfig,
  roomAllotmentFilterActions,
} from "../../config/roomAllotmentFilters.config";

const RoomAllotmentFilters = ({
  filters,
  options,
  onFilterChange,
  onRefresh,
  onDownload,
}) => {
  const handleAction = (actionId) => {
    if (actionId === "refresh") {
      onRefresh?.();
    }

    if (actionId === "download") {
      onDownload?.();
    }
  };

  const SearchIcon = roomAllotmentSearchConfig.icon;

  return (
    <div className="room-allotment-filters">
      <div className="room-allotment-filters__fields">
        {roomAllotmentFiltersConfig.map((field) => (
          <div
            className="room-allotment-filters__field"
            key={field.id}
          >
            <select
              className="room-allotment-filters__select"
              value={filters[field.id] || ""}
              onChange={(event) =>
                onFilterChange?.(field.id, event.target.value)
              }
              aria-label={field.label}
            >
              <option value="">{field.placeholder}</option>

              {(options[field.optionKey] || []).map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="room-allotment-filters__toolbar">
        <div className="room-allotment-filters__search">
          <SearchIcon className="room-allotment-filters__search-icon" />

          <input
            type="search"
            value={filters.search || ""}
            placeholder={roomAllotmentSearchConfig.placeholder}
            onChange={(event) =>
              onFilterChange?.("search", event.target.value)
            }
            aria-label={roomAllotmentSearchConfig.placeholder}
          />
        </div>

        <div className="room-allotment-filters__actions">
          {roomAllotmentFilterActions.map((action) => {
            const ActionIcon = action.icon;

            return (
              <button
                key={action.id}
                type="button"
                className={`room-allotment-filters__action room-allotment-filters__action--${action.id}`}
                onClick={() => handleAction(action.id)}
                aria-label={action.label}
                title={action.label}
              >
                <ActionIcon />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomAllotmentFilters;
