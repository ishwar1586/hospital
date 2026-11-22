// src/features/IPDManagement/hooks/useIPDDischarges.js

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getIPDDischargedPatients,
  getIPDDischargedPatientById,
} from "../services/ipdService";


/**
 * ============================================================
 * useIPDDischarges
 * ============================================================
 *
 * Responsible for the Discharged Patients section.
 *
 * Responsibilities:
 *
 * - Fetch discharged patients
 * - Store discharged patient records
 * - Search discharged patients
 * - Filter by ward
 * - Filter by doctor
 * - Filter by discharge status
 * - Filter by discharge type
 * - Filter by discharge date range
 * - Select discharge record
 * - Find discharge record by ID
 * - Find records by patient ID
 * - Find records by IPD number
 * - Maintain loading/error states
 * - Refetch discharged patient data
 *
 * Data source:
 *
 *     ipdService.js
 *
 * Current:
 *
 *     ipdService -> mock
 *
 * Future:
 *
 *     ipdService -> backend API
 *
 * ============================================================
 */


/* ============================================================
 * INITIAL FILTERS
 * ============================================================
 */

const INITIAL_DISCHARGE_FILTERS = {
  search: "",
  ward: "",
  doctor: "",
  dischargeStatus: "",
  dischargeType: "",
  dateFrom: "",
  dateTo: "",
};


/* ============================================================
 * NORMALIZE VALUE
 * ============================================================
 */

const normalizeValue = (value) => {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  return String(value)
    .trim()
    .toLowerCase();
};


/* ============================================================
 * NORMALIZE DATE
 * ============================================================
 */

const normalizeDate = (value) => {
  if (!value) {
    return "";
  }

  if (
    value instanceof Date &&
    !Number.isNaN(value.getTime())
  ) {
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
 * HOOK
 * ============================================================
 */

const useIPDDischarges = () => {
  /* ==========================================================
   * DATA STATE
   * ==========================================================
   */

  const [dischargedPatients, setDischargedPatients] =
    useState([]);


  /* ==========================================================
   * SELECTED DISCHARGE
   * ==========================================================
   */

  const [selectedDischarge, setSelectedDischarge] =
    useState(null);


  /* ==========================================================
   * FILTER STATE
   * ==========================================================
   */

  const [filters, setFilters] =
    useState({
      ...INITIAL_DISCHARGE_FILTERS,
    });


  /* ==========================================================
   * APPLIED FILTER STATE
   * ==========================================================
   */

  const [appliedFilters, setAppliedFilters] =
    useState({
      ...INITIAL_DISCHARGE_FILTERS,
    });


  /* ==========================================================
   * LOADING STATE
   * ==========================================================
   */

  const [loading, setLoading] =
    useState(false);


  /* ==========================================================
   * ERROR STATE
   * ==========================================================
   */

  const [error, setError] =
    useState(null);


  /* ==========================================================
   * DETAILS LOADING
   * ==========================================================
   */

  const [detailsLoading, setDetailsLoading] =
    useState(false);


  /* ==========================================================
   * FETCH DISCHARGED PATIENTS
   * ==========================================================
   */

  const fetchDischargedPatients =
    useCallback(async () => {
      setLoading(true);
      setError(null);

      try {
        const response =
          await getIPDDischargedPatients();

        setDischargedPatients(
          Array.isArray(response)
            ? response
            : []
        );
      } catch (fetchError) {
        setDischargedPatients([]);

        setError(fetchError);
      } finally {
        setLoading(false);
      }
    }, []);


  /* ==========================================================
   * INITIAL LOAD
   * ==========================================================
   */

  useEffect(() => {
    fetchDischargedPatients();
  }, [fetchDischargedPatients]);


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
   * UPDATE SEARCH
   * ==========================================================
   */

  const updateSearch = useCallback(
    (value) => {
      setFilters((previousFilters) => ({
        ...previousFilters,
        search: value,
      }));
    },
    []
  );


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
    const defaultFilters = {
      ...INITIAL_DISCHARGE_FILTERS,
    };

    setFilters(defaultFilters);

    setAppliedFilters(defaultFilters);
  }, []);


  /* ==========================================================
   * FILTERED DISCHARGED PATIENTS
   * ==========================================================
   */

  const filteredDischargedPatients =
    useMemo(() => {
      if (
        !Array.isArray(
          dischargedPatients
        )
      ) {
        return [];
      }

      return dischargedPatients.filter(
        (record) => {
          /* --------------------------------------------------
           * SEARCH
           * --------------------------------------------------
           */

          const searchValue =
            normalizeValue(
              appliedFilters.search
            );

          if (searchValue) {
            const searchableValues = [
              record?.id,

              record?.ipdNumber,

              record?.patient?.name,

              record?.patient?.uhid,

              record?.patient?.gender,

              record?.doctor?.name,

              record?.doctor?.department,

              record?.wardName,

              record?.dischargeType,

              record?.dischargeStatus,
            ];

            const matchesSearch =
              searchableValues.some(
                (value) =>
                  normalizeValue(
                    value
                  ).includes(
                    searchValue
                  )
              );

            if (!matchesSearch) {
              return false;
            }
          }


          /* --------------------------------------------------
           * WARD
           * --------------------------------------------------
           */

          if (appliedFilters.ward) {
            const selectedWard =
              normalizeValue(
                appliedFilters.ward
              );

            const recordWard =
              normalizeValue(
                record?.wardName
              );

            const recordWardId =
              normalizeValue(
                record?.wardId
              );

            if (
              selectedWard !==
                recordWard &&
              selectedWard !==
                recordWardId
            ) {
              return false;
            }
          }


          /* --------------------------------------------------
           * DOCTOR
           * --------------------------------------------------
           */

          if (appliedFilters.doctor) {
            const selectedDoctor =
              normalizeValue(
                appliedFilters.doctor
              );

            const recordDoctorId =
              normalizeValue(
                record?.doctor?.id
              );

            const recordDoctorName =
              normalizeValue(
                record?.doctor?.name
              );

            if (
              selectedDoctor !==
                recordDoctorId &&
              selectedDoctor !==
                recordDoctorName
            ) {
              return false;
            }
          }


          /* --------------------------------------------------
           * DISCHARGE STATUS
           * --------------------------------------------------
           */

          if (
            appliedFilters.dischargeStatus
          ) {
            const selectedStatus =
              normalizeValue(
                appliedFilters.dischargeStatus
              );

            const recordStatus =
              normalizeValue(
                record?.dischargeStatus
              );

            if (
              selectedStatus !==
              recordStatus
            ) {
              return false;
            }
          }


          /* --------------------------------------------------
           * DISCHARGE TYPE
           * --------------------------------------------------
           */

          if (
            appliedFilters.dischargeType
          ) {
            const selectedType =
              normalizeValue(
                appliedFilters.dischargeType
              );

            const recordType =
              normalizeValue(
                record?.dischargeType
              );

            if (
              selectedType !==
              recordType
            ) {
              return false;
            }
          }


          /* --------------------------------------------------
           * DATE FROM
           * --------------------------------------------------
           */

          if (appliedFilters.dateFrom) {
            const startDate =
              normalizeDate(
                appliedFilters.dateFrom
              );

            const dischargeDate =
              normalizeDate(
                record?.dischargeDate
              );

            if (
              dischargeDate &&
              dischargeDate < startDate
            ) {
              return false;
            }
          }


          /* --------------------------------------------------
           * DATE TO
           * --------------------------------------------------
           */

          if (appliedFilters.dateTo) {
            const endDate =
              normalizeDate(
                appliedFilters.dateTo
              );

            const dischargeDate =
              normalizeDate(
                record?.dischargeDate
              );

            if (
              dischargeDate &&
              dischargeDate > endDate
            ) {
              return false;
            }
          }


          /* --------------------------------------------------
           * RECORD PASSED ALL FILTERS
           * --------------------------------------------------
           */

          return true;
        }
      );
    }, [
      dischargedPatients,
      appliedFilters,
    ]);


  /* ==========================================================
   * SELECT DISCHARGE RECORD
   * ==========================================================
   */

  const selectDischarge = useCallback(
    (record) => {
      setSelectedDischarge(
        record || null
      );
    },
    []
  );


  /* ==========================================================
   * CLEAR SELECTED DISCHARGE
   * ==========================================================
   */

  const clearSelectedDischarge =
    useCallback(() => {
      setSelectedDischarge(null);
    }, []);


  /* ==========================================================
   * FIND DISCHARGE BY ID
   * ==========================================================
   */

  const findDischargeById =
    useCallback(
      async (dischargeId) => {
        if (!dischargeId) {
          return null;
        }

        setDetailsLoading(true);
        setError(null);

        try {
          const response =
            await getIPDDischargedPatientById(
              dischargeId
            );

          setSelectedDischarge(
            response || null
          );

          return response || null;
        } catch (fetchError) {
          setError(fetchError);

          return null;
        } finally {
          setDetailsLoading(false);
        }
      },
      []
    );


  /* ==========================================================
   * FIND BY PATIENT ID
   * ==========================================================
   */

  const getDischargesByPatientId =
    useCallback(
      (patientId) => {
        if (!patientId) {
          return [];
        }

        return dischargedPatients.filter(
          (record) =>
            record?.patient?.id ===
            patientId
        );
      },
      [dischargedPatients]
    );


  /* ==========================================================
   * FIND BY IPD NUMBER
   * ==========================================================
   */

  const getDischargesByIPDNumber =
    useCallback(
      (ipdNumber) => {
        if (!ipdNumber) {
          return [];
        }

        return dischargedPatients.filter(
          (record) =>
            record?.ipdNumber ===
            ipdNumber
        );
      },
      [dischargedPatients]
    );


  /* ==========================================================
   * DISCHARGE STATUS COUNTS
   * ==========================================================
   */

  const dischargeStatusCounts =
    useMemo(() => {
      return dischargedPatients.reduce(
        (counts, record) => {
          const status =
            record?.dischargeStatus;

          if (!status) {
            return counts;
          }

          counts[status] =
            (counts[status] || 0) + 1;

          return counts;
        },
        {}
      );
    }, [dischargedPatients]);


  /* ==========================================================
   * DISCHARGE TYPE COUNTS
   * ==========================================================
   */

  const dischargeTypeCounts =
    useMemo(() => {
      return dischargedPatients.reduce(
        (counts, record) => {
          const type =
            record?.dischargeType;

          if (!type) {
            return counts;
          }

          counts[type] =
            (counts[type] || 0) + 1;

          return counts;
        },
        {}
      );
    }, [dischargedPatients]);


  /* ==========================================================
   * FILTERED STATUS COUNTS
   * ==========================================================
   */

  const filteredDischargeStatusCounts =
    useMemo(() => {
      return filteredDischargedPatients.reduce(
        (counts, record) => {
          const status =
            record?.dischargeStatus;

          if (!status) {
            return counts;
          }

          counts[status] =
            (counts[status] || 0) + 1;

          return counts;
        },
        {}
      );
    }, [
      filteredDischargedPatients,
    ]);


  /* ==========================================================
   * TOTAL RECORDS
   * ==========================================================
   */

  const totalDischargedPatients =
    dischargedPatients.length;


  /* ==========================================================
   * FILTERED RECORDS
   * ==========================================================
   */

  const totalFilteredDischargedPatients =
    filteredDischargedPatients.length;


  /* ==========================================================
   * NORMAL DISCHARGES
   * ==========================================================
   */

  const normalDischarges =
    useMemo(() => {
      return dischargedPatients.filter(
        (record) =>
          normalizeValue(
            record?.dischargeType
          ) ===
          "normal discharge"
      ).length;
    }, [dischargedPatients]);


  /* ==========================================================
   * DISCHARGES AGAINST MEDICAL ADVICE
   * ==========================================================
   */

  const againstMedicalAdviceDischarges =
    useMemo(() => {
      return dischargedPatients.filter(
        (record) =>
          normalizeValue(
            record?.dischargeType
          ) ===
          "against medical advice"
      ).length;
    }, [dischargedPatients]);


  /* ==========================================================
   * ACTIVE FILTER COUNT
   * ==========================================================
   */

  const activeFilterCount =
    useMemo(() => {
      return Object.values(
        appliedFilters
      ).filter(
        (value) =>
          value !== null &&
          value !== undefined &&
          value !== ""
      ).length;
    }, [appliedFilters]);


  /* ==========================================================
   * PENDING FILTER CHANGES
   * ==========================================================
   */

  const hasPendingChanges =
    useMemo(() => {
      return (
        JSON.stringify(filters) !==
        JSON.stringify(appliedFilters)
      );
    }, [
      filters,
      appliedFilters,
    ]);


  /* ==========================================================
   * DISCHARGE SUMMARY
   * ==========================================================
   */

  const dischargeSummary =
    useMemo(() => {
      return {
        total:
          totalDischargedPatients,

        filtered:
          totalFilteredDischargedPatients,

        normal:
          normalDischarges,

        againstMedicalAdvice:
          againstMedicalAdviceDischarges,

        statusCounts:
          dischargeStatusCounts,

        typeCounts:
          dischargeTypeCounts,
      };
    }, [
      totalDischargedPatients,
      totalFilteredDischargedPatients,
      normalDischarges,
      againstMedicalAdviceDischarges,
      dischargeStatusCounts,
      dischargeTypeCounts,
    ]);


  /* ==========================================================
   * RETURN
   * ==========================================================
   */

  return {
    /* --------------------------------------------------------
     * Data
     * --------------------------------------------------------
     */

    dischargedPatients,

    filteredDischargedPatients,

    selectedDischarge,


    /* --------------------------------------------------------
     * Filters
     * --------------------------------------------------------
     */

    filters,

    appliedFilters,

    activeFilterCount,

    hasPendingChanges,


    /* --------------------------------------------------------
     * Counts / Summary
     * --------------------------------------------------------
     */

    totalDischargedPatients,

    totalFilteredDischargedPatients,

    normalDischarges,

    againstMedicalAdviceDischarges,

    dischargeStatusCounts,

    filteredDischargeStatusCounts,

    dischargeTypeCounts,

    dischargeSummary,


    /* --------------------------------------------------------
     * State
     * --------------------------------------------------------
     */

    loading,

    error,

    detailsLoading,


    /* --------------------------------------------------------
     * Data actions
     * --------------------------------------------------------
     */

    fetchDischargedPatients,

    findDischargeById,


    /* --------------------------------------------------------
     * Filter actions
     * --------------------------------------------------------
     */

    updateFilter,

    updateFilters,

    updateSearch,

    applyFilters,

    clearFilters,


    /* --------------------------------------------------------
     * Selection actions
     * --------------------------------------------------------
     */

    selectDischarge,

    clearSelectedDischarge,


    /* --------------------------------------------------------
     * Lookup helpers
     * --------------------------------------------------------
     */

    getDischargesByPatientId,

    getDischargesByIPDNumber,
  };
};


export default useIPDDischarges;