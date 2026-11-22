import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  BED_VIEW_FILTER_CONFIG,
} from "../../config/bedViewConfig";

import "./BedViewFilters.css";


const BedViewFilters = ({
  filters = {},

  wards = [],
  rooms = [],
  statusOptions = [],

  onSearchChange,
  onWardChange,
  onRoomChange,
  onStatusChange,

  onClearFilters,
}) => {


  /* ==========================================================
   * FILTER CONFIG
   * ========================================================== */

  const searchConfig =
    BED_VIEW_FILTER_CONFIG?.search;

  const wardConfig =
    BED_VIEW_FILTER_CONFIG?.ward;

  const roomConfig =
    BED_VIEW_FILTER_CONFIG?.room;

  const statusConfig =
    BED_VIEW_FILTER_CONFIG?.status;


  /* ==========================================================
   * OPTION NORMALIZER
   * ==========================================================
   *
   * Keeps the component compatible with:
   *
   * - mock data
   * - API response
   * - { id, name }
   * - { value, label }
   *
   * ========================================================== */

  const normalizeOptions = (options = []) => {
    if (!Array.isArray(options)) {
      return [];
    }

    return options
      .map((option) => {

        if (
          option === null ||
          option === undefined
        ) {
          return null;
        }

        if (
          typeof option === "string" ||
          typeof option === "number"
        ) {
          return {
            value: String(option),
            label: String(option),
          };
        }

        return {
          value:
            option.value ??
            option.id ??
            option.key ??
            "",

          label:
            option.label ??
            option.name ??
            option.title ??
            option.roomNumber ??
            "",
        };
      })
      .filter(
        (option) =>
          option &&
          option.value !== "" &&
          option.label !== ""
      );
  };


  const wardOptions =
    normalizeOptions(wards);

  const roomOptions =
    normalizeOptions(rooms);

  const statusSelectOptions =
    normalizeOptions(statusOptions);


  /* ==========================================================
   * CLEAR FILTER CHECK
   * ========================================================== */

  const hasActiveFilters =
    Boolean(filters?.search) ||
    Boolean(filters?.wardId) ||
    Boolean(filters?.roomId) ||
    Boolean(filters?.status);


  /* ==========================================================
   * RENDER
   * ========================================================== */

  return (
    <section className="bed-view-filters">

      <div className="bed-view-filters__container">


        {/* ====================================================
            SEARCH
            ==================================================== */}

        <div className="bed-view-filters__search">

          <SearchIcon
            className="bed-view-filters__search-icon"
          />

          <input
            type="search"
            value={filters?.search || ""}
            placeholder={
              searchConfig?.placeholder ||
              "Search bed, patient, UHID..."
            }
            aria-label={
              searchConfig?.label ||
              "Search"
            }
            onChange={(event) =>
              onSearchChange?.(
                event.target.value
              )
            }
          />

          {filters?.search && (
            <button
              type="button"
              className="bed-view-filters__clear-search"
              onClick={() =>
                onSearchChange?.("")
              }
              aria-label="Clear search"
            >
              <ClearIcon />
            </button>
          )}

        </div>


        {/* ====================================================
            WARD
            ==================================================== */}

        <div className="bed-view-filters__field">

          <label
            htmlFor="bed-view-ward"
            className="bed-view-filters__label"
          >
            {wardConfig?.label || "Ward"}
          </label>

          <div className="bed-view-filters__select-wrapper">

            <select
              id="bed-view-ward"
              value={filters?.wardId || ""}
              onChange={(event) =>
                onWardChange?.(
                  event.target.value
                )
              }
            >

              <option value="">
                {wardConfig?.placeholder ||
                  "All Wards"}
              </option>

              {wardOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}

            </select>

            <KeyboardArrowDownIcon
              className="bed-view-filters__select-icon"
            />

          </div>

        </div>


        {/* ====================================================
            ROOM
            ==================================================== */}

        <div className="bed-view-filters__field">

          <label
            htmlFor="bed-view-room"
            className="bed-view-filters__label"
          >
            {roomConfig?.label || "Room"}
          </label>

          <div className="bed-view-filters__select-wrapper">

            <select
              id="bed-view-room"
              value={filters?.roomId || ""}
              onChange={(event) =>
                onRoomChange?.(
                  event.target.value
                )
              }
            >

              <option value="">
                {roomConfig?.placeholder ||
                  "All Rooms"}
              </option>

              {roomOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}

            </select>

            <KeyboardArrowDownIcon
              className="bed-view-filters__select-icon"
            />

          </div>

        </div>


        {/* ====================================================
            BED STATUS
            ==================================================== */}

        <div className="bed-view-filters__field">

          <label
            htmlFor="bed-view-status"
            className="bed-view-filters__label"
          >
            {statusConfig?.label ||
              "Bed Status"}
          </label>

          <div className="bed-view-filters__select-wrapper">

            <select
              id="bed-view-status"
              value={filters?.status || ""}
              onChange={(event) =>
                onStatusChange?.(
                  event.target.value
                )
              }
            >

              <option value="">
                {statusConfig?.placeholder ||
                  "All Status"}
              </option>

              {statusSelectOptions.map(
                (option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                )
              )}

            </select>

            <KeyboardArrowDownIcon
              className="bed-view-filters__select-icon"
            />

          </div>

        </div>


        {/* ====================================================
            CLEAR FILTERS
            ==================================================== */}

        {hasActiveFilters && (
          <button
            type="button"
            className="bed-view-filters__clear-button"
            onClick={onClearFilters}
          >
            Clear
          </button>
        )}

      </div>

    </section>
  );
};


export default BedViewFilters;