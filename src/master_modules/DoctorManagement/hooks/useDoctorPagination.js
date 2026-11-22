import { useCallback, useEffect, useMemo, useState } from "react";

import {
  DOCTOR_MODULE_CONFIG,
} from "../config/doctorConfig";

/**
 * useDoctorPagination
 *
 * Centralized pagination state for Doctor Management.
 *
 * Responsibilities:
 * - Current page
 * - Page size
 * - Total records
 * - Total pages
 * - Page navigation
 * - Page size changes
 * - Pagination metadata
 */

const useDoctorPagination = (options = {}) => {
  // ==========================================================
  // CONFIGURATION
  // ==========================================================

  const defaultPage =
    options.defaultPage ??
    DOCTOR_MODULE_CONFIG.pagination.defaultPage;

  const defaultPageSize =
    options.defaultPageSize ??
    DOCTOR_MODULE_CONFIG.pagination.defaultPageSize;

  const pageSizeOptions =
    options.pageSizeOptions ??
    DOCTOR_MODULE_CONFIG.pagination.pageSizeOptions;

  // ==========================================================
  // STATE
  // ==========================================================

  const [currentPage, setCurrentPageState] =
    useState(defaultPage);

  const [pageSize, setPageSizeState] =
    useState(defaultPageSize);

  const [totalItems, setTotalItems] = useState(
    options.totalItems ?? 0
  );

  // ==========================================================
  // TOTAL PAGES
  // ==========================================================

  const totalPages = useMemo(() => {
    if (totalItems <= 0 || pageSize <= 0) {
      return 0;
    }

    return Math.ceil(totalItems / pageSize);
  }, [totalItems, pageSize]);

  // ==========================================================
  // START / END INDEX
  // ==========================================================

  const startIndex = useMemo(() => {
    if (totalItems === 0) {
      return 0;
    }

    return (currentPage - 1) * pageSize;
  }, [currentPage, pageSize, totalItems]);

  const endIndex = useMemo(() => {
    if (totalItems === 0) {
      return 0;
    }

    return Math.min(
      startIndex + pageSize,
      totalItems
    );
  }, [startIndex, pageSize, totalItems]);

  // ==========================================================
  // DISPLAY RANGE
  // ==========================================================

  const displayRange = useMemo(
    () => ({
      from: totalItems === 0 ? 0 : startIndex + 1,
      to: endIndex,
      total: totalItems,
    }),
    [startIndex, endIndex, totalItems]
  );

  // ==========================================================
  // SET CURRENT PAGE
  // ==========================================================

  const setCurrentPage = useCallback(
    (page) => {
      const numericPage = Number(page);

      if (!Number.isFinite(numericPage)) {
        return;
      }

      const normalizedPage = Math.floor(numericPage);

      if (normalizedPage < 1) {
        setCurrentPageState(1);
        return;
      }

      if (
        totalPages > 0 &&
        normalizedPage > totalPages
      ) {
        setCurrentPageState(totalPages);
        return;
      }

      setCurrentPageState(normalizedPage);
    },
    [totalPages]
  );

  // ==========================================================
  // NEXT PAGE
  // ==========================================================

  const goToNextPage = useCallback(() => {
    setCurrentPageState((previousPage) => {
      if (
        totalPages === 0 ||
        previousPage >= totalPages
      ) {
        return previousPage;
      }

      return previousPage + 1;
    });
  }, [totalPages]);

  // ==========================================================
  // PREVIOUS PAGE
  // ==========================================================

  const goToPreviousPage = useCallback(() => {
    setCurrentPageState((previousPage) => {
      if (previousPage <= 1) {
        return previousPage;
      }

      return previousPage - 1;
    });
  }, []);

  // ==========================================================
  // FIRST PAGE
  // ==========================================================

  const goToFirstPage = useCallback(() => {
    setCurrentPageState(1);
  }, []);

  // ==========================================================
  // LAST PAGE
  // ==========================================================

  const goToLastPage = useCallback(() => {
    if (totalPages > 0) {
      setCurrentPageState(totalPages);
    }
  }, [totalPages]);

  // ==========================================================
  // SET PAGE SIZE
  // ==========================================================

  const setPageSize = useCallback((newPageSize) => {
    const numericPageSize = Number(newPageSize);

    if (
      !Number.isFinite(numericPageSize) ||
      numericPageSize <= 0
    ) {
      return;
    }

    setPageSizeState(numericPageSize);

    // When page size changes, start from page 1.
    setCurrentPageState(1);
  }, []);

  // ==========================================================
  // UPDATE TOTAL ITEMS
  // ==========================================================

  const updateTotalItems = useCallback(
    (total) => {
      const numericTotal = Number(total);

      if (
        !Number.isFinite(numericTotal) ||
        numericTotal < 0
      ) {
        setTotalItems(0);
        return;
      }

      setTotalItems(numericTotal);
    },
    []
  );

  // ==========================================================
  // RESET PAGINATION
  // ==========================================================

  const resetPagination = useCallback(() => {
    setCurrentPageState(defaultPage);
    setPageSizeState(defaultPageSize);
  }, [defaultPage, defaultPageSize]);

  // ==========================================================
  // PAGE VALIDATION
  // ==========================================================

  const isFirstPage = useMemo(
    () => currentPage <= 1,
    [currentPage]
  );

  const isLastPage = useMemo(
    () =>
      totalPages === 0 ||
      currentPage >= totalPages,
    [currentPage, totalPages]
  );

  // ==========================================================
  // NAVIGATION STATE
  // ==========================================================

  const canGoPrevious = !isFirstPage;

  const canGoNext = !isLastPage;

  // ==========================================================
  // PAGE NUMBERS
  // ==========================================================

  const pageNumbers = useMemo(() => {
    if (totalPages <= 0) {
      return [];
    }

    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  }, [totalPages]);

  // ==========================================================
  // PAGINATION META
  // ==========================================================

  const paginationMeta = useMemo(
    () => ({
      currentPage,
      pageSize,
      totalItems,
      totalPages,

      startIndex,
      endIndex,

      from: displayRange.from,
      to: displayRange.to,

      isFirstPage,
      isLastPage,

      canGoPrevious,
      canGoNext,

      pageNumbers,
    }),
    [
      currentPage,
      pageSize,
      totalItems,
      totalPages,
      startIndex,
      endIndex,
      displayRange,
      isFirstPage,
      isLastPage,
      canGoPrevious,
      canGoNext,
      pageNumbers,
    ]
  );

  // ==========================================================
  // KEEP CURRENT PAGE VALID
  // ==========================================================

  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage > totalPages
    ) {
      setCurrentPageState(totalPages);
    }

    if (
      totalItems === 0 &&
      currentPage !== 1
    ) {
      setCurrentPageState(1);
    }
  }, [totalPages, currentPage, totalItems]);

  // ==========================================================
  // RETURN
  // ==========================================================

  return {
    // --------------------------------------------------------
    // State
    // --------------------------------------------------------

    currentPage,
    pageSize,
    totalItems,
    totalPages,

    // --------------------------------------------------------
    // Range
    // --------------------------------------------------------

    startIndex,
    endIndex,
    displayRange,

    // --------------------------------------------------------
    // Page Size
    // --------------------------------------------------------

    pageSizeOptions,
    setPageSize,

    // --------------------------------------------------------
    // Page Navigation
    // --------------------------------------------------------

    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,

    // --------------------------------------------------------
    // Total Items
    // --------------------------------------------------------

    updateTotalItems,
    setTotalItems: updateTotalItems,

    // --------------------------------------------------------
    // Reset
    // --------------------------------------------------------

    resetPagination,

    // --------------------------------------------------------
    // Navigation State
    // --------------------------------------------------------

    isFirstPage,
    isLastPage,
    canGoPrevious,
    canGoNext,

    // --------------------------------------------------------
    // Page Numbers
    // --------------------------------------------------------

    pageNumbers,

    // --------------------------------------------------------
    // Metadata
    // --------------------------------------------------------

    paginationMeta,
  };
};

export default useDoctorPagination;