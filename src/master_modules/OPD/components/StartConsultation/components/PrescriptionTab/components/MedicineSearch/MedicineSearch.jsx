
import React, { useState } from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import HistoryOutlined from "@mui/icons-material/HistoryOutlined";
import "./MedicineSearch.css";

const MedicineSearch = ({
  onSearch,
  onLoadPreviousPrescription,
  loading = false,
  disabled = false,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    const trimmedValue = searchTerm.trim();

    if (!trimmedValue || disabled || loading) return;

    onSearch?.(trimmedValue);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadPrevious = () => {
    if (disabled || loading) return;

    onLoadPreviousPrescription?.();
  };

  return (
    <div className="prescription-medicine-search">
      <form
        className="prescription-medicine-search__form"
        onSubmit={handleSearch}
      >
        <div className="prescription-medicine-search__input-wrapper">
          <SearchOutlined className="prescription-medicine-search__search-icon" />

          <input
            type="search"
            className="prescription-medicine-search__input"
            placeholder="Search by medicine name, code or manufacturer"
            value={searchTerm}
            onChange={handleInputChange}
            disabled={disabled || loading}
            aria-label="Search medicines"
          />
        </div>

        <button
          type="submit"
          className="prescription-medicine-search__button"
          disabled={
            disabled || loading || !searchTerm.trim()
          }
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <button
        type="button"
        className="prescription-medicine-search__previous-button"
        onClick={handleLoadPrevious}
        disabled={disabled || loading}
      >
        <HistoryOutlined />
        <span>Load Previous Prescription</span>
      </button>
    </div>
  );
};

export default MedicineSearch;
