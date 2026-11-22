import React, { useEffect, useState } from "react";

import SearchOutlined from "@mui/icons-material/SearchOutlined";

const PatientSearch = ({
  config = {},
  value = "",
  onChange,
  onSearch,
}) => {
  const searchConfig = config?.search || {};

  const {
    enabled = true,
    placeholder = "Search by UHID, name or mobile",
    defaultValue = "",
    searchOnEnter = true,
    button = {},
  } = searchConfig;

  const {
    enabled: buttonEnabled = true,
    label: buttonLabel = "Search",
    icon: ButtonIcon = SearchOutlined,
    showIcon = true,
  } = button;

  const [searchValue, setSearchValue] = useState(
    value || defaultValue
  );


  /* =========================================================
     SYNC VALUE FROM PARENT
     ========================================================= */

  useEffect(() => {
    setSearchValue(value ?? "");
  }, [value]);


  /* =========================================================
     INPUT CHANGE
     ========================================================= */

  const handleChange = (event) => {
    const nextValue = event.target.value;

    setSearchValue(nextValue);

    if (typeof onChange === "function") {
      onChange(nextValue);
    }
  };


  /* =========================================================
     SEARCH
     ========================================================= */

  const handleSearch = () => {
    if (typeof onSearch !== "function") {
      return;
    }

    onSearch(searchValue.trim());
  };


  /* =========================================================
     ENTER KEY
     ========================================================= */

  const handleKeyDown = (event) => {
    if (
      event.key !== "Enter" ||
      searchOnEnter === false
    ) {
      return;
    }

    event.preventDefault();

    handleSearch();
  };


  /* =========================================================
     DISABLED STATE
     ========================================================= */

  if (enabled === false) {
    return null;
  }


  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <div className="patient-search">

      {/* =================================================
          SEARCH INPUT
          ================================================= */}

      <div className="patient-search__input-wrapper">

        <SearchOutlined
          className="patient-search__input-icon"
          aria-hidden="true"
        />

        <input
          type="search"
          className="patient-search__input"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label={placeholder}
          autoComplete="off"
        />

      </div>


      {/* =================================================
          SEARCH BUTTON
          ================================================= */}

      {buttonEnabled && (
        <button
          type="button"
          className="patient-search__button"
          onClick={handleSearch}
        >
          {showIcon && ButtonIcon && (
            <ButtonIcon
              className="patient-search__button-icon"
              aria-hidden="true"
            />
          )}

          <span className="patient-search__button-label">
            {buttonLabel}
          </span>
        </button>
      )}

    </div>
  );
};

export default PatientSearch;