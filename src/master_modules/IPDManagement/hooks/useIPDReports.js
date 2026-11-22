// src/features/IPDManagement/hooks/useIPDReports.js

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getIPDReports,
} from "../services/ipdService";


/* ============================================================
 * INITIAL FILTERS
 * ============================================================
 */

const INITIAL_REPORT_FILTERS = {
  search: "",
  reportType: "",
  ward: "",
  doctor: "",
  dateFrom: "",
  dateTo: "",
};


/* ============================================================
 * HELPERS
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

const useIPDReports = () => {
  /* ==========================================================
   * REPORT DATA
   * ==========================================================
   */

  const [reports, setReports] = useState([]);


  /* ==========================================================
   * SELECTED REPORT
   * ==========================================================
   */

  const [selectedReport, setSelectedReport] =
    useState(null);


  /* ==========================================================
   * FILTERS
   * ==========================================================
   */

  const [filters, setFilters] = useState({
    ...INITIAL_REPORT_FILTERS,
  });


  /* ==========================================================
   * APPLIED FILTERS
   * ==========================================================
   */

  const [appliedFilters, setAppliedFilters] =
    useState({
      ...INITIAL_REPORT_FILTERS,
    });


  /* ==========================================================
   * LOADING
   * ==========================================================
   */

  const [loading, setLoading] = useState(false);


  /* ==========================================================
   * ERROR
   * ==========================================================
   */

  const [error, setError] = useState(null);


  /* ==========================================================
   * FETCH REPORTS
   * ==========================================================
   */

  const fetchReports = useCallback(
    async () => {
      setLoading(true);
      setError(null);

      try {
        const response =
          await getIPDReports();

        setReports(
          Array.isArray(response)
            ? response
            : []
        );
      } catch (fetchError) {
        setReports([]);
        setError(fetchError);
      } finally {
        setLoading(false);
      }
    },
    []
  );


  /* ==========================================================
   * INITIAL FETCH
   * ==========================================================
   */

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);


  /* ==========================================================
   * UPDATE SINGLE FILTER
   * ==========================================================
   */

  const updateFilter = useCallback(
    (name, value) => {
      if (!name) {
        return;
      }

      setFilters(
        (previousFilters) => ({
          ...previousFilters,
          [name]: value,
        })
      );
    },
    []
  );


  /* ==========================================================
   * UPDATE MULTIPLE FILTERS
   * ==========================================================
   */

  const updateFilters = useCallback(
    (newFilters = {}) => {
      setFilters(
        (previousFilters) => ({
          ...previousFilters,
          ...newFilters,
        })
      );
    },
    []
  );


  /* ==========================================================
   * SEARCH
   * ==========================================================
   */

  const updateSearch = useCallback(
    (value) => {
      setFilters(
        (previousFilters) => ({
          ...previousFilters,
          search: value,
        })
      );
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
      ...INITIAL_REPORT_FILTERS,
    };

    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
  }, []);


  /* ==========================================================
   * FILTER REPORTS
   * ==========================================================
   */

  const filteredReports = useMemo(() => {
    if (!Array.isArray(reports)) {
      return [];
    }

    return reports.filter((report) => {
      /* ------------------------------------------------------
       * SEARCH
       * ------------------------------------------------------
       */

      const searchValue = normalizeValue(
        appliedFilters.search
      );

      if (searchValue) {
        const searchableValues = [
          report?.id,
          report?.reportId,
          report?.reportName,
          report?.reportType,
          report?.description,
          report?.ward,
          report?.wardName,
          report?.doctor,
          report?.doctorName,
          report?.department,
          report?.status,
        ];

        const matchesSearch =
          searchableValues.some(
            (value) =>
              normalizeValue(value).includes(
                searchValue
              )
          );

        if (!matchesSearch) {
          return false;
        }
      }


      /* ------------------------------------------------------
       * REPORT TYPE
       * ------------------------------------------------------
       */

      if (appliedFilters.reportType) {
        const selectedType =
          normalizeValue(
            appliedFilters.reportType
          );

        const recordType =
          normalizeValue(
            report?.reportType
          );

        if (selectedType !== recordType) {
          return false;
        }
      }


      /* ------------------------------------------------------
       * WARD
       * ------------------------------------------------------
       */

      if (appliedFilters.ward) {
        const selectedWard =
          normalizeValue(
            appliedFilters.ward
          );

        const recordWard =
          normalizeValue(
            report?.ward ??
              report?.wardName
          );

        const recordWardId =
          normalizeValue(
            report?.wardId
          );

        if (
          selectedWard !== recordWard &&
          selectedWard !== recordWardId
        ) {
          return false;
        }
      }


      /* ------------------------------------------------------
       * DOCTOR
       * ------------------------------------------------------
       */

      if (appliedFilters.doctor) {
        const selectedDoctor =
          normalizeValue(
            appliedFilters.doctor
          );

        const recordDoctor =
          normalizeValue(
            report?.doctor ??
              report?.doctorName
          );

        const recordDoctorId =
          normalizeValue(
            report?.doctorId
          );

        if (
          selectedDoctor !== recordDoctor &&
          selectedDoctor !== recordDoctorId
        ) {
          return false;
        }
      }


      /* ------------------------------------------------------
       * DATE FROM
       * ------------------------------------------------------
       */

      if (appliedFilters.dateFrom) {
        const startDate =
          normalizeDate(
            appliedFilters.dateFrom
          );

        const reportDate =
          normalizeDate(
            report?.date ??
              report?.reportDate ??
              report?.createdAt
          );

        if (
          reportDate &&
          reportDate < startDate
        ) {
          return false;
        }
      }


      /* ------------------------------------------------------
       * DATE TO
       * ------------------------------------------------------
       */

      if (appliedFilters.dateTo) {
        const endDate =
          normalizeDate(
            appliedFilters.dateTo
          );

        const reportDate =
          normalizeDate(
            report?.date ??
              report?.reportDate ??
              report?.createdAt
          );

        if (
          reportDate &&
          reportDate > endDate
        ) {
          return false;
        }
      }


      return true;
    });
  }, [
    reports,
    appliedFilters,
  ]);


  /* ==========================================================
   * SELECT REPORT
   * ==========================================================
   */

  const selectReport = useCallback(
    (report) => {
      setSelectedReport(
        report || null
      );
    },
    []
  );


  /* ==========================================================
   * CLEAR SELECTED REPORT
   * ==========================================================
   */

  const clearSelectedReport =
    useCallback(() => {
      setSelectedReport(null);
    }, []);


  /* ==========================================================
   * REPORT TYPE COUNTS
   * ==========================================================
   */

  const reportTypeCounts = useMemo(() => {
    return reports.reduce(
      (counts, report) => {
        const type =
          report?.reportType;

        if (!type) {
          return counts;
        }

        counts[type] =
          (counts[type] || 0) + 1;

        return counts;
      },
      {}
    );
  }, [reports]);


  /* ==========================================================
   * FILTERED REPORT TYPE COUNTS
   * ==========================================================
   */

  const filteredReportTypeCounts =
    useMemo(() => {
      return filteredReports.reduce(
        (counts, report) => {
          const type =
            report?.reportType;

          if (!type) {
            return counts;
          }

          counts[type] =
            (counts[type] || 0) + 1;

          return counts;
        },
        {}
      );
    }, [filteredReports]);


  /* ==========================================================
   * STATUS COUNTS
   * ==========================================================
   */

  const reportStatusCounts = useMemo(() => {
    return reports.reduce(
      (counts, report) => {
        const status =
          report?.status;

        if (!status) {
          return counts;
        }

        counts[status] =
          (counts[status] || 0) + 1;

        return counts;
      },
      {}
    );
  }, [reports]);


  /* ==========================================================
   * TOTAL REPORTS
   * ==========================================================
   */

  const totalReports = reports.length;


  /* ==========================================================
   * FILTERED REPORTS COUNT
   * ==========================================================
   */

  const totalFilteredReports =
    filteredReports.length;


  /* ==========================================================
   * ACTIVE FILTER COUNT
   * ==========================================================
   */

  const activeFilterCount = useMemo(() => {
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

  const hasPendingChanges = useMemo(() => {
    return (
      JSON.stringify(filters) !==
      JSON.stringify(appliedFilters)
    );
  }, [
    filters,
    appliedFilters,
  ]);


  /* ==========================================================
   * REPORT SUMMARY
   * ==========================================================
   */

  const reportSummary = useMemo(() => {
    return {
      total: totalReports,

      filtered:
        totalFilteredReports,

      typeCounts:
        reportTypeCounts,

      filteredTypeCounts:
        filteredReportTypeCounts,

      statusCounts:
        reportStatusCounts,
    };
  }, [
    totalReports,
    totalFilteredReports,
    reportTypeCounts,
    filteredReportTypeCounts,
    reportStatusCounts,
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

    reports,

    filteredReports,

    selectedReport,


    /* --------------------------------------------------------
     * Filters
     * --------------------------------------------------------
     */

    filters,

    appliedFilters,

    activeFilterCount,

    hasPendingChanges,


    /* --------------------------------------------------------
     * Counts
     * --------------------------------------------------------
     */

    totalReports,

    totalFilteredReports,

    reportTypeCounts,

    filteredReportTypeCounts,

    reportStatusCounts,

    reportSummary,


    /* --------------------------------------------------------
     * State
     * --------------------------------------------------------
     */

    loading,

    error,


    /* --------------------------------------------------------
     * Data actions
     * --------------------------------------------------------
     */

    fetchReports,


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

    selectReport,

    clearSelectedReport,
  };
};


export default useIPDReports;