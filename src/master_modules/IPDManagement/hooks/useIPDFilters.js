// src/features/IPDManagement/hooks/useIPDFilters.js

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getIPDFilterOptions,
} from "../services/ipdService";

import {
  IPD_FILTER_DEFAULTS,
} from "../config/ipdConfig";


/**
 * ============================================================
 * useIPDFilters
 * ============================================================
 *
 * Responsible for:
 *
 * - Search filter
 * - Ward filter
 * - Room filter
 * - Status filter
 * - Doctor filter
 * - Admission date filter
 * - Loading filter options
 * - Applying filters
 * - Clearing filters
 *
 * Data source:
 *
 *     service -> mock
 *
 * Future:
 *
 *     service -> API
 *
 * IMPORTANT:
 *
 * This hook does NOT own pagination.
 * Pagination is handled separately by:
 *
 *     useIPDPagination.js
 * ============================================================
 */


/* ============================================================
 * NORMALIZE VALUE
 * ============================================================
 */

const normalizeValue = (value) => {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim().toLowerCase();
};


/* ============================================================
 * DATE NORMALIZER
 * ============================================================
 *
 * Handles:
 *
 * - Date object
 * - YYYY-MM-DD string
 * - empty/null
 * ============================================================
 */

const normalizeDate = (value) => {
  if (!value) {
    return "";
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const year = value.getFullYear();

    const month = String(
      value.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      value.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return String(value);
};


/* ============================================================
 * INITIAL FILTER STATE
 * ============================================================
 */

const createInitialFilters = () => ({
  ...IPD_FILTER_DEFAULTS,
});


/* ============================================================
 * HOOK
 * ============================================================
 */

const useIPDFilters = (patients = []) => {
  /* ==========================================================
   * FILTER STATE
   * ==========================================================
   */

  const [filters, setFilters] = useState(
    createInitialFilters
  );


  /* ==========================================================
   * APPLIED FILTER STATE
   * ==========================================================
   *
   * We keep draft filters separate from applied filters.
   *
   * This matches the screenshot flow:
   *
   * User selects filters
   *        ↓
   * Clicks Search
   *        ↓
   * Results update
   * ==========================================================
   */

  const [appliedFilters, setAppliedFilters] = useState(
    createInitialFilters
  );


  /* ==========================================================
   * FILTER OPTIONS
   * ==========================================================
   */

  const [filterOptions, setFilterOptions] = useState({
    wards: [],
    rooms: [],
    doctors: [],
    statuses: [],
  });


  /* ==========================================================
   * FILTER OPTIONS LOADING
   * ==========================================================
   */

  const [optionsLoading, setOptionsLoading] = useState(false);

  const [optionsError, setOptionsError] = useState(null);


  /* ==========================================================
   * LOAD FILTER OPTIONS
   * ==========================================================
   */

  const fetchFilterOptions = useCallback(async () => {
    setOptionsLoading(true);
    setOptionsError(null);

    try {
      const response = await getIPDFilterOptions();

      setFilterOptions({
        wards: Array.isArray(response?.wards)
          ? response.wards
          : [],

        rooms: Array.isArray(response?.rooms)
          ? response.rooms
          : [],

        doctors: Array.isArray(response?.doctors)
          ? response.doctors
          : [],

        statuses: Array.isArray(response?.statuses)
          ? response.statuses
          : [],
      });
    } catch (fetchError) {
      setFilterOptions({
        wards: [],
        rooms: [],
        doctors: [],
        statuses: [],
      });

      setOptionsError(fetchError);
    } finally {
      setOptionsLoading(false);
    }
  }, []);


  /* ==========================================================
   * INITIAL FILTER OPTIONS LOAD
   * ==========================================================
   */

  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions]);


  /* ==========================================================
   * UPDATE SINGLE FILTER
   * ==========================================================
   */

  const updateFilter = useCallback(
    (name, value) => {
      if (!name) {
        return;
      }

      setFilters((previousFilters) => ({
        ...previousFilters,
        [name]: value,
      }));
    },
    []
  );


  /* ==========================================================
   * UPDATE MULTIPLE FILTERS
   * ==========================================================
   */

  const updateFilters = useCallback(
    (newFilters = {}) => {
      setFilters((previousFilters) => ({
        ...previousFilters,
        ...newFilters,
      }));
    },
    []
  );


  /* ==========================================================
   * SEARCH VALUE
   * ==========================================================
   */

  const updateSearch = useCallback((value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      search: value,
    }));
  }, []);


  /* ==========================================================
   * APPLY FILTERS
   * ==========================================================
   */

  const applyFilters = useCallback(() => {
    setAppliedFilters({
      ...filters,
    });
  }, [filters]);


  /* ==========================================================
   * CLEAR FILTERS
   * ==========================================================
   */

  const clearFilters = useCallback(() => {
    const defaultFilters = createInitialFilters();

    setFilters(defaultFilters);

    setAppliedFilters(defaultFilters);
  }, []);


  /* ==========================================================
   * FILTERED PATIENTS
   * ==========================================================
   */

  const filteredPatients = useMemo(() => {
    if (!Array.isArray(patients)) {
      return [];
    }

    return patients.filter((patient) => {
      /* ======================================================
       * SEARCH
       * ======================================================
       */

      const searchValue = normalizeValue(
        appliedFilters.search
      );

      if (searchValue) {
        const searchableValues = [
          patient?.ipdNumber,

          patient?.patient?.name,

          patient?.patient?.uhid,

          patient?.patient?.gender,

          patient?.doctor?.name,

          patient?.doctor?.department,

          patient?.bedAllocation?.wardName,

          patient?.bedAllocation?.roomNumber,

          patient?.bedAllocation?.bedNumber,
        ];

        const matchesSearch = searchableValues.some(
          (value) =>
            normalizeValue(value).includes(searchValue)
        );

        if (!matchesSearch) {
          return false;
        }
      }


      /* ======================================================
       * WARD
       * ======================================================
       */

      if (appliedFilters.ward) {
        const selectedWard = normalizeValue(
          appliedFilters.ward
        );

        const patientWardId = normalizeValue(
          patient?.bedAllocation?.wardId
        );

        const patientWardName = normalizeValue(
          patient?.bedAllocation?.wardName
        );

        if (
          selectedWard !== patientWardId &&
          selectedWard !== patientWardName
        ) {
          return false;
        }
      }


      /* ======================================================
       * ROOM
       * ======================================================
       */

      if (appliedFilters.room) {
        const selectedRoom = normalizeValue(
          appliedFilters.room
        );

        const patientRoomId = normalizeValue(
          patient?.bedAllocation?.roomId
        );

        const patientRoomNumber = normalizeValue(
          patient?.bedAllocation?.roomNumber
        );

        if (
          selectedRoom !== patientRoomId &&
          selectedRoom !== patientRoomNumber
        ) {
          return false;
        }
      }


      /* ======================================================
       * STATUS
       * ======================================================
       */

      if (appliedFilters.status) {
        const selectedStatus = normalizeValue(
          appliedFilters.status
        );

        const patientStatus = normalizeValue(
          patient?.status
        );

        if (selectedStatus !== patientStatus) {
          return false;
        }
      }


      /* ======================================================
       * DOCTOR
       * ======================================================
       */

      if (appliedFilters.doctor) {
        const selectedDoctor = normalizeValue(
          appliedFilters.doctor
        );

        const patientDoctorId = normalizeValue(
          patient?.doctor?.id
        );

        const patientDoctorName = normalizeValue(
          patient?.doctor?.name
        );

        if (
          selectedDoctor !== patientDoctorId &&
          selectedDoctor !== patientDoctorName
        ) {
          return false;
        }
      }


      /* ======================================================
       * ADMISSION DATE
       * ======================================================
       */

      if (appliedFilters.admissionDate) {
        const selectedDate = normalizeDate(
          appliedFilters.admissionDate
        );

        const patientAdmissionDate = normalizeDate(
          patient?.admissionDate
        );

        if (
          selectedDate &&
          selectedDate !== patientAdmissionDate
        ) {
          return false;
        }
      }


      /* ======================================================
       * PATIENT PASSED ALL FILTERS
       * ======================================================
       */

      return true;
    });
  }, [patients, appliedFilters]);


  /* ==========================================================
   * FILTER COUNT
   * ==========================================================
   *
   * Useful for future UI indicators such as:
   *
   * "3 filters applied"
   * ==========================================================
   */

  const activeFilterCount = useMemo(() => {
    return Object.entries(appliedFilters).filter(
      ([, value]) => {
        if (
          value === null ||
          value === undefined ||
          value === ""
        ) {
          return false;
        }

        return true;
      }
    ).length;
  }, [appliedFilters]);


  /* ==========================================================
   * CHECK WHETHER FILTERS ARE DIRTY
   * ==========================================================
   *
   * Useful when the user changes a filter but has not clicked
   * Search yet.
   * ==========================================================
   */

  const hasPendingChanges = useMemo(() => {
    return (
      JSON.stringify(filters) !==
      JSON.stringify(appliedFilters)
    );
  }, [filters, appliedFilters]);


  /* ==========================================================
   * RETURN
   * ==========================================================
   */

  return {
    /* --------------------------------------------------------
     * Current filter values
     * --------------------------------------------------------
     */

    filters,

    appliedFilters,


    /* --------------------------------------------------------
     * Filter options
     * --------------------------------------------------------
     */

    filterOptions,

    wards: filterOptions.wards,

    rooms: filterOptions.rooms,

    doctors: filterOptions.doctors,

    statuses: filterOptions.statuses,


    /* --------------------------------------------------------
     * Loading / error
     * --------------------------------------------------------
     */

    optionsLoading,

    optionsError,


    /* --------------------------------------------------------
     * Filtered result
     * --------------------------------------------------------
     */

    filteredPatients,

    activeFilterCount,

    hasPendingChanges,


    /* --------------------------------------------------------
     * Actions
     * --------------------------------------------------------
     */

    updateFilter,

    updateFilters,

    updateSearch,

    applyFilters,

    clearFilters,

    fetchFilterOptions,
  };
};


export default useIPDFilters;