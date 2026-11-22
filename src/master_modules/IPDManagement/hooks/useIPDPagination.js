import {
  useCallback,
  useMemo,
  useState,
} from "react";

import {
  IPD_PAGINATION_CONFIG,
} from "../config/ipdConfig";

/* ============================================================
   useIPDPagination
   ============================================================

   Responsible for:

   - Current page
   - Rows per page
   - Total records
   - Paginated data
   - Page change
   - Rows-per-page change
   - Pagination navigation
   - Pagination reset

   IMPORTANT:

   This hook intentionally uses a 1-based page index.

   Reason:
   The existing reusable Pagination component used by the
   application exposes a 1-based API.

   Example:

   page = 1  -> first page
   page = 2  -> second page
   page = 3  -> third page

   The shared Pagination component internally converts the
   page to MUI's 0-based index.

   ============================================================ */

const useIPDPagination = (
  data = [],
  options = {}
) => {
  /* ==========================================================
     CONFIG
     ========================================================== */

  const {
    defaultPage = IPD_PAGINATION_CONFIG.defaultPage,
    defaultRowsPerPage =
      IPD_PAGINATION_CONFIG.defaultRowsPerPage,
    rowsPerPageOptions =
      IPD_PAGINATION_CONFIG.rowsPerPageOptions,
  } = options;

  /*
   * Existing IPD config currently has defaultPage = 0.
   *
   * The shared Pagination component expects page = 1,
   * so normalize the configured value here.
   */

  const initialPage = Math.max(
    1,
    Number(defaultPage) || 1
  );

  /* ==========================================================
     STATE
     ========================================================== */

  const [page, setPage] =
    useState(initialPage);

  const [rowsPerPage, setRowsPerPage] =
    useState(
      Number(defaultRowsPerPage) > 0
        ? Number(defaultRowsPerPage)
        : 10
    );

  /* ==========================================================
     SAFE DATA
     ========================================================== */

  const safeData = useMemo(() => {
    return Array.isArray(data)
      ? data
      : [];
  }, [data]);

  /* ==========================================================
     TOTAL RECORDS
     ========================================================== */

  const totalRecords =
    safeData.length;

  /* ==========================================================
     TOTAL PAGES
     ========================================================== */

  const totalPages = useMemo(() => {
    if (
      !rowsPerPage ||
      rowsPerPage <= 0
    ) {
      return 0;
    }

    return Math.ceil(
      totalRecords / rowsPerPage
    );
  }, [
    totalRecords,
    rowsPerPage,
  ]);

  /* ==========================================================
     CURRENT PAGE SAFETY
     ========================================================== */

  const safePage = useMemo(() => {
    /*
     * When there are no records, keep the public page
     * value at 1 because the reusable Pagination component
     * expects a 1-based page.
     */

    if (totalPages === 0) {
      return 1;
    }

    return Math.min(
      Math.max(page, 1),
      totalPages
    );
  }, [
    page,
    totalPages,
  ]);

  /* ==========================================================
     PAGINATED DATA
     ========================================================== */

  const paginatedData = useMemo(() => {
    if (
      rowsPerPage <= 0 ||
      safeData.length === 0
    ) {
      return [];
    }

    /*
     * Convert 1-based page to zero-based
     * array index only inside the hook.
     *
     * Page 1 -> startIndex 0
     * Page 2 -> startIndex 10
     * Page 3 -> startIndex 20
     */

    const startIndex =
      (safePage - 1) *
      rowsPerPage;

    const endIndex =
      startIndex + rowsPerPage;

    return safeData.slice(
      startIndex,
      endIndex
    );
  }, [
    safeData,
    safePage,
    rowsPerPage,
  ]);

  /* ==========================================================
     CHANGE PAGE
     ========================================================== */

  const handleChangePage =
    useCallback(
      (_event, newPage) => {
        const requestedPage =
          Number(newPage);

        if (
          !Number.isInteger(
            requestedPage
          )
        ) {
          return;
        }

        if (totalPages <= 0) {
          setPage(1);
          return;
        }

        setPage(
          Math.min(
            Math.max(
              requestedPage,
              1
            ),
            totalPages
          )
        );
      },
      [totalPages]
    );

  /* ==========================================================
     CHANGE ROWS PER PAGE
     ========================================================== */

  const handleChangeRowsPerPage =
    useCallback(
      (event) => {
        const newRowsPerPage =
          Number(
            event?.target?.value
          );

        if (
          !Number.isFinite(
            newRowsPerPage
          ) ||
          newRowsPerPage <= 0
        ) {
          return;
        }

        setRowsPerPage(
          newRowsPerPage
        );

        /*
         * Whenever page size changes,
         * always start from page 1.
         */

        setPage(1);
      },
      []
    );

  /* ==========================================================
     DIRECT PAGE SETTER
     ========================================================== */

  const goToPage = useCallback(
    (newPage) => {
      if (
        !Number.isInteger(newPage)
      ) {
        return;
      }

      if (totalPages <= 0) {
        setPage(1);
        return;
      }

      if (newPage <= 1) {
        setPage(1);
        return;
      }

      if (
        newPage >= totalPages
      ) {
        setPage(totalPages);
        return;
      }

      setPage(newPage);
    },
    [totalPages]
  );

  /* ==========================================================
     FIRST PAGE
     ========================================================== */

  const goToFirstPage =
    useCallback(() => {
      setPage(1);
    }, []);

  /* ==========================================================
     LAST PAGE
     ========================================================== */

  const goToLastPage =
    useCallback(() => {
      if (totalPages <= 0) {
        setPage(1);
        return;
      }

      setPage(totalPages);
    }, [totalPages]);

  /* ==========================================================
     NEXT PAGE
     ========================================================== */

  const goToNextPage =
    useCallback(() => {
      setPage(
        (currentPage) => {
          if (totalPages <= 0) {
            return 1;
          }

          return Math.min(
            currentPage + 1,
            totalPages
          );
        }
      );
    }, [totalPages]);

  /* ==========================================================
     PREVIOUS PAGE
     ========================================================== */

  const goToPreviousPage =
    useCallback(() => {
      setPage(
        (currentPage) =>
          Math.max(
            currentPage - 1,
            1
          )
      );
    }, []);

  /* ==========================================================
     RESET PAGINATION
     ========================================================== */

  const resetPagination =
    useCallback(() => {
      setPage(initialPage);

      setRowsPerPage(
        Number(defaultRowsPerPage) > 0
          ? Number(defaultRowsPerPage)
          : 10
      );
    }, [
      initialPage,
      defaultRowsPerPage,
    ]);

  /* ==========================================================
     RESET PAGE ONLY
     ========================================================== */

  const resetPage =
    useCallback(() => {
      setPage(1);
    }, []);

  /* ==========================================================
     RANGE INFORMATION
     ========================================================== */

  const range = useMemo(() => {
    if (totalRecords === 0) {
      return {
        start: 0,
        end: 0,
        total: 0,
      };
    }

    const start =
      (safePage - 1) *
        rowsPerPage +
      1;

    const end = Math.min(
      safePage * rowsPerPage,
      totalRecords
    );

    return {
      start,
      end,
      total: totalRecords,
    };
  }, [
    safePage,
    rowsPerPage,
    totalRecords,
  ]);

  /* ==========================================================
     HAS NEXT PAGE
     ========================================================== */

  const hasNextPage = useMemo(() => {
    if (totalPages <= 0) {
      return false;
    }

    return (
      safePage < totalPages
    );
  }, [
    safePage,
    totalPages,
  ]);

  /* ==========================================================
     HAS PREVIOUS PAGE
     ========================================================== */

  const hasPreviousPage =
    useMemo(() => {
      return safePage > 1;
    }, [safePage]);

  /* ==========================================================
     RETURN
     ========================================================== */

  return {
    /* --------------------------------------------------------
       Pagination state
       -------------------------------------------------------- */

    page: safePage,

    rowsPerPage,

    rowsPerPageOptions,

    /* --------------------------------------------------------
       Record information
       -------------------------------------------------------- */

    totalRecords,

    totalPages,

    range,

    /* --------------------------------------------------------
       Data
       -------------------------------------------------------- */

    paginatedData,

    /* --------------------------------------------------------
       Navigation state
       -------------------------------------------------------- */

    hasNextPage,

    hasPreviousPage,

    /* --------------------------------------------------------
       MUI / shared Pagination handlers
       -------------------------------------------------------- */

    handleChangePage,

    handleChangeRowsPerPage,

    /* --------------------------------------------------------
       Navigation helpers
       -------------------------------------------------------- */

    goToPage,

    goToFirstPage,

    goToLastPage,

    goToNextPage,

    goToPreviousPage,

    /* --------------------------------------------------------
       Reset helpers
       -------------------------------------------------------- */

    resetPagination,

    resetPage,
  };
};

export default useIPDPagination;