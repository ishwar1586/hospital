import { useCallback, useMemo, useState } from "react";

import {
  DEFAULT_DOCTOR_FILTERS,
  DOCTOR_FILTERS,
  DOCTOR_TABS,
} from "../config/doctorConfig";

/**
 * useDoctorFilters
 *
 * Centralized filter state for the Doctor Management module.
 *
 * Responsibilities:
 * - Search
 * - Department filter
 * - Status filter
 * - Availability filter
 * - Doctor tab filter
 * - Clear filters
 * - Filter state helpers
 */

const useDoctorFilters = (initialFilters = {}) => {
  // ==========================================================
  // INITIAL STATE
  // ==========================================================

  const initialState = useMemo(
    () => ({
      ...DEFAULT_DOCTOR_FILTERS,
      ...initialFilters,
    }),
    [initialFilters]
  );

  const [filters, setFilters] = useState(initialState);

  // ==========================================================
  // UPDATE SINGLE FILTER
  // ==========================================================

  const updateFilter = useCallback((filterKey, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [filterKey]: value,
    }));
  }, []);

  // ==========================================================
  // SEARCH
  // ==========================================================

  const setSearch = useCallback((value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      search: value,
    }));
  }, []);

  // ==========================================================
  // DEPARTMENT
  // ==========================================================

  const setDepartment = useCallback((value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      department: value,
    }));
  }, []);

  // ==========================================================
  // STATUS
  // ==========================================================

  const setStatus = useCallback((value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      status: value,
    }));
  }, []);

  // ==========================================================
  // AVAILABILITY
  // ==========================================================

  const setAvailability = useCallback((value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      availability: value,
    }));
  }, []);

  // ==========================================================
  // TAB
  // ==========================================================

  const setTab = useCallback((value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      tab: value,
    }));
  }, []);

  // ==========================================================
  // CLEAR FILTERS
  // ==========================================================

  const clearFilters = useCallback(() => {
    setFilters({
      ...DEFAULT_DOCTOR_FILTERS,
    });
  }, []);

  // ==========================================================
  // RESET FILTERS
  // ==========================================================

  const resetFilters = useCallback(() => {
    setFilters({
      ...DEFAULT_DOCTOR_FILTERS,
    });
  }, []);

  // ==========================================================
  // SET ALL FILTERS
  // ==========================================================

  const setAllFilters = useCallback((newFilters = {}) => {
    setFilters({
      ...DEFAULT_DOCTOR_FILTERS,
      ...newFilters,
    });
  }, []);

  // ==========================================================
  // ACTIVE FILTER COUNT
  // ==========================================================

  const activeFilterCount = useMemo(() => {
    let count = 0;

    if (
      filters.search &&
      filters.search.trim() !== ""
    ) {
      count += 1;
    }

    if (
      filters.department &&
      filters.department !== "all"
    ) {
      count += 1;
    }

    if (
      filters.status &&
      filters.status !== "all"
    ) {
      count += 1;
    }

    if (
      filters.availability &&
      filters.availability !== "all"
    ) {
      count += 1;
    }

    return count;
  }, [filters]);

  // ==========================================================
  // CHECK IF ANY FILTER IS ACTIVE
  // ==========================================================

  const hasActiveFilters = useMemo(
    () => activeFilterCount > 0,
    [activeFilterCount]
  );

  // ==========================================================
  // GET FILTER VALUE
  // ==========================================================

  const getFilterValue = useCallback(
    (filterKey) => filters[filterKey],
    [filters]
  );

  // ==========================================================
  // CHECK FILTER
  // ==========================================================

  const isFilterActive = useCallback(
    (filterKey) => {
      const value = filters[filterKey];

      if (
        value === undefined ||
        value === null ||
        value === ""
      ) {
        return false;
      }

      if (value === "all") {
        return false;
      }

      return true;
    },
    [filters]
  );

  // ==========================================================
  // FILTER SUMMARY
  // ==========================================================

  const filterSummary = useMemo(
    () => ({
      search: filters.search,
      department: filters.department,
      status: filters.status,
      availability: filters.availability,
      tab: filters.tab,
      activeFilterCount,
      hasActiveFilters,
    }),
    [
      filters,
      activeFilterCount,
      hasActiveFilters,
    ]
  );

  // ==========================================================
  // VALIDATE TAB
  // ==========================================================

  const isValidTab = useCallback((tabId) => {
    return DOCTOR_TABS.some(
      (tab) => tab.id === tabId
    );
  }, []);

  // ==========================================================
  // VALIDATE FILTER
  // ==========================================================

  const isValidFilter = useCallback(
    (filterId) => {
      return DOCTOR_FILTERS.some(
        (filter) => filter.id === filterId
      );
    },
    []
  );

  // ==========================================================
  // RETURN API
  // ==========================================================

  return {
    // --------------------------------------------------------
    // State
    // --------------------------------------------------------

    filters,

    // --------------------------------------------------------
    // Individual Values
    // --------------------------------------------------------

    search: filters.search,
    department: filters.department,
    status: filters.status,
    availability: filters.availability,
    tab: filters.tab,

    // --------------------------------------------------------
    // Setters
    // --------------------------------------------------------

    setSearch,
    setDepartment,
    setStatus,
    setAvailability,
    setTab,

    // --------------------------------------------------------
    // Generic Operations
    // --------------------------------------------------------

    updateFilter,
    setAllFilters,

    // --------------------------------------------------------
    // Reset / Clear
    // --------------------------------------------------------

    clearFilters,
    resetFilters,

    // --------------------------------------------------------
    // Helpers
    // --------------------------------------------------------

    getFilterValue,
    isFilterActive,

    // --------------------------------------------------------
    // Filter State
    // --------------------------------------------------------

    activeFilterCount,
    hasActiveFilters,
    filterSummary,

    // --------------------------------------------------------
    // Validation
    // --------------------------------------------------------

    isValidTab,
    isValidFilter,
  };
};

export default useDoctorFilters;