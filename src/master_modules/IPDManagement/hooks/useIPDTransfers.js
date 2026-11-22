// src/features/IPDManagement/hooks/useIPDTransfers.js

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getIPDTransferHistory,
  getIPDTransferById,
} from "../services/ipdService";

import {
  DEFAULT_TRANSFER_PATIENT_FORM,
  TRANSFER_PATIENT_STEPS,
  TRANSFER_PATIENT_VALIDATION_CONFIG,
} from "../config/transferPatientConfig";


/**
 * ============================================================
 * useIPDTransfers
 * ============================================================
 *
 * Handles:
 *
 * 1. Transfer History
 * 2. Patient Transfer Workflow
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
 * INITIAL TRANSFER HISTORY FILTER STATE
 * ============================================================
 */

const INITIAL_TRANSFER_FILTERS = {
  search: "",
  fromWard: "",
  toWard: "",
  status: "",
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
    const year =
      value.getFullYear();

    const month =
      String(
        value.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        value.getDate()
      ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return String(value);
};


/* ============================================================
 * CREATE TRANSFER ERROR OBJECT
 * ============================================================
 */

const createTransferErrors = () => ({
  transferType: "",

  targetWardId: "",
  targetRoomId: "",
  targetBedId: "",

  receivingHospitalId: "",
  receivingDepartmentId: "",
  receivingDoctorId: "",

  transferMode: "",
  expectedDate: "",
  expectedTime: "",
  reason: "",

  transferDate: "",
  transferTime: "",
  requestedBy: "",
  remarks: "",
});


/* ============================================================
 * HOOK
 * ============================================================
 */

const useIPDTransfers = () => {

  /* ==========================================================
   * ==========================================================
   * TRANSFER HISTORY
   * ==========================================================
   * ==========================================================
   */

  /* ----------------------------------------------------------
   * DATA
   * ----------------------------------------------------------
   */

  const [transfers, setTransfers] =
    useState([]);


  /* ----------------------------------------------------------
   * SELECTED TRANSFER
   * ----------------------------------------------------------
   */

  const [selectedTransfer, setSelectedTransfer] =
    useState(null);


  /* ----------------------------------------------------------
   * FILTERS
   * ----------------------------------------------------------
   */

  const [filters, setFilters] =
    useState({
      ...INITIAL_TRANSFER_FILTERS,
    });


  /* ----------------------------------------------------------
   * APPLIED FILTERS
   * ----------------------------------------------------------
   */

  const [appliedFilters, setAppliedFilters] =
    useState({
      ...INITIAL_TRANSFER_FILTERS,
    });


  /* ----------------------------------------------------------
   * LOADING
   * ----------------------------------------------------------
   */

  const [loading, setLoading] =
    useState(false);


  /* ----------------------------------------------------------
   * ERROR
   * ----------------------------------------------------------
   */

  const [error, setError] =
    useState(null);


  /* ----------------------------------------------------------
   * SELECTED TRANSFER LOADING
   * ----------------------------------------------------------
   */

  const [detailsLoading, setDetailsLoading] =
    useState(false);


  /* ==========================================================
   * FETCH TRANSFER HISTORY
   * ==========================================================
   */

  const fetchTransfers = useCallback(
    async () => {
      setLoading(true);
      setError(null);

      try {
        const response =
          await getIPDTransferHistory();

        setTransfers(
          Array.isArray(response)
            ? response
            : []
        );
      } catch (fetchError) {
        setTransfers([]);

        setError(fetchError);
      } finally {
        setLoading(false);
      }
    },
    []
  );


  /* ==========================================================
   * INITIAL LOAD
   * ==========================================================
   */

  useEffect(() => {
    fetchTransfers();
  }, [fetchTransfers]);


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
   * APPLY FILTERS
   * ==========================================================
   */

  const applyFilters = useCallback(
    () => {
      setAppliedFilters({
        ...filters,
      });
    },
    [filters]
  );


  /* ==========================================================
   * CLEAR FILTERS
   * ==========================================================
   */

  const clearFilters = useCallback(
    () => {
      const defaultFilters = {
        ...INITIAL_TRANSFER_FILTERS,
      };

      setFilters(defaultFilters);

      setAppliedFilters(defaultFilters);
    },
    []
  );


  /* ==========================================================
   * FILTERED TRANSFERS
   * ==========================================================
   */

  const filteredTransfers = useMemo(() => {

    if (!Array.isArray(transfers)) {
      return [];
    }

    return transfers.filter(
      (transfer) => {

        /* ----------------------------------------------------
         * SEARCH
         * ----------------------------------------------------
         */

        const searchValue =
          normalizeValue(
            appliedFilters.search
          );

        if (searchValue) {

          const searchableValues = [
            transfer?.ipdNumber,

            transfer?.patient?.name,

            transfer?.patient?.uhid,

            transfer?.from?.wardName,

            transfer?.from?.roomNumber,

            transfer?.from?.bedNumber,

            transfer?.to?.wardName,

            transfer?.to?.roomNumber,

            transfer?.to?.bedNumber,

            transfer?.transferredBy,

            transfer?.reason,
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


        /* ----------------------------------------------------
         * FROM WARD
         * ----------------------------------------------------
         */

        if (appliedFilters.fromWard) {

          const selectedWard =
            normalizeValue(
              appliedFilters.fromWard
            );

          const transferWardId =
            normalizeValue(
              transfer?.from?.wardId
            );

          const transferWardName =
            normalizeValue(
              transfer?.from?.wardName
            );

          if (
            selectedWard !==
              transferWardId &&
            selectedWard !==
              transferWardName
          ) {
            return false;
          }
        }


        /* ----------------------------------------------------
         * TO WARD
         * ----------------------------------------------------
         */

        if (appliedFilters.toWard) {

          const selectedWard =
            normalizeValue(
              appliedFilters.toWard
            );

          const transferWardId =
            normalizeValue(
              transfer?.to?.wardId
            );

          const transferWardName =
            normalizeValue(
              transfer?.to?.wardName
            );

          if (
            selectedWard !==
              transferWardId &&
            selectedWard !==
              transferWardName
          ) {
            return false;
          }
        }


        /* ----------------------------------------------------
         * STATUS
         * ----------------------------------------------------
         */

        if (appliedFilters.status) {

          const selectedStatus =
            normalizeValue(
              appliedFilters.status
            );

          const transferStatus =
            normalizeValue(
              transfer?.status
            );

          if (
            selectedStatus !==
            transferStatus
          ) {
            return false;
          }
        }


        /* ----------------------------------------------------
         * DATE FROM
         * ----------------------------------------------------
         */

        if (appliedFilters.dateFrom) {

          const startDate =
            normalizeDate(
              appliedFilters.dateFrom
            );

          const transferDate =
            normalizeDate(
              transfer?.transferDate
            );

          if (
            transferDate &&
            transferDate < startDate
          ) {
            return false;
          }
        }


        /* ----------------------------------------------------
         * DATE TO
         * ----------------------------------------------------
         */

        if (appliedFilters.dateTo) {

          const endDate =
            normalizeDate(
              appliedFilters.dateTo
            );

          const transferDate =
            normalizeDate(
              transfer?.transferDate
            );

          if (
            transferDate &&
            transferDate > endDate
          ) {
            return false;
          }
        }


        return true;
      }
    );

  }, [
    transfers,
    appliedFilters,
  ]);


  /* ==========================================================
   * SELECT TRANSFER
   * ==========================================================
   */

  const selectTransfer = useCallback(
    (transfer) => {
      setSelectedTransfer(
        transfer || null
      );
    },
    []
  );


  /* ==========================================================
   * CLEAR SELECTED TRANSFER
   * ==========================================================
   */

  const clearSelectedTransfer =
    useCallback(
      () => {
        setSelectedTransfer(null);
      },
      []
    );


  /* ==========================================================
   * GET TRANSFER BY ID
   * ==========================================================
   */

  const findTransferById =
    useCallback(
      async (transferId) => {

        if (!transferId) {
          return null;
        }

        setDetailsLoading(true);
        setError(null);

        try {

          const response =
            await getIPDTransferById(
              transferId
            );

          setSelectedTransfer(
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
   * GET TRANSFERS BY PATIENT ID
   * ==========================================================
   */

  const getTransfersByPatientId =
    useCallback(
      (patientId) => {

        if (!patientId) {
          return [];
        }

        return transfers.filter(
          (transfer) =>
            transfer?.patient?.id ===
            patientId
        );
      },
      [transfers]
    );


  /* ==========================================================
   * GET TRANSFERS BY IPD NUMBER
   * ==========================================================
   */

  const getTransfersByIPDNumber =
    useCallback(
      (ipdNumber) => {

        if (!ipdNumber) {
          return [];
        }

        return transfers.filter(
          (transfer) =>
            transfer?.ipdNumber ===
            ipdNumber
        );
      },
      [transfers]
    );


  /* ==========================================================
   * TRANSFER STATUS COUNTS
   * ==========================================================
   */

  const transferStatusCounts =
    useMemo(() => {

      return transfers.reduce(
        (counts, transfer) => {

          const status =
            transfer?.status;

          if (!status) {
            return counts;
          }

          counts[status] =
            (counts[status] || 0) + 1;

          return counts;

        },
        {}
      );

    }, [transfers]);


  /* ==========================================================
   * FILTERED STATUS COUNTS
   * ==========================================================
   */

  const filteredTransferStatusCounts =
    useMemo(() => {

      return filteredTransfers.reduce(
        (counts, transfer) => {

          const status =
            transfer?.status;

          if (!status) {
            return counts;
          }

          counts[status] =
            (counts[status] || 0) + 1;

          return counts;

        },
        {}
      );

    }, [filteredTransfers]);


  /* ==========================================================
   * TOTAL TRANSFERS
   * ==========================================================
   */

  const totalTransfers =
    transfers.length;


  /* ==========================================================
   * FILTERED TRANSFER COUNT
   * ==========================================================
   */

  const totalFilteredTransfers =
    filteredTransfers.length;


  /* ==========================================================
   * COMPLETED TRANSFERS
   * ==========================================================
   */

  const completedTransfers =
    useMemo(() => {

      return transfers.filter(
        (transfer) =>
          normalizeValue(
            transfer?.status
          ) === "completed"
      ).length;

    }, [transfers]);


  /* ==========================================================
   * PENDING TRANSFERS
   * ==========================================================
   */

  const pendingTransfers =
    useMemo(() => {

      return transfers.filter(
        (transfer) =>
          normalizeValue(
            transfer?.status
          ) === "pending"
      ).length;

    }, [transfers]);


  /* ==========================================================
   * CANCELLED TRANSFERS
   * ==========================================================
   */

  const cancelledTransfers =
    useMemo(() => {

      return transfers.filter(
        (transfer) =>
          normalizeValue(
            transfer?.status
          ) === "cancelled"
      ).length;

    }, [transfers]);


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
   * TRANSFER SUMMARY
   * ==========================================================
   */

  const transferSummary =
    useMemo(() => {

      return {
        total:
          totalTransfers,

        filtered:
          totalFilteredTransfers,

        completed:
          completedTransfers,

        pending:
          pendingTransfers,

        cancelled:
          cancelledTransfers,

        statusCounts:
          transferStatusCounts,
      };

    }, [
      totalTransfers,
      totalFilteredTransfers,
      completedTransfers,
      pendingTransfers,
      cancelledTransfers,
      transferStatusCounts,
    ]);


  /* ==========================================================
   * ==========================================================
   * PATIENT TRANSFER WORKFLOW
   * ==========================================================
   * ==========================================================
   */

  /* ----------------------------------------------------------
   * SELECTED PATIENT
   *
   * This comes directly from the IPD table row.
   * ----------------------------------------------------------
   */

  const [selectedPatient, setSelectedPatient] =
    useState(null);


  /* ----------------------------------------------------------
   * CURRENT TRANSFER STEP
   * ----------------------------------------------------------
   */

  const [transferStep, setTransferStep] =
    useState(1);


  /* ----------------------------------------------------------
   * TRANSFER FORM
   * ----------------------------------------------------------
   */

  const [transferForm, setTransferForm] =
    useState({
      ...DEFAULT_TRANSFER_PATIENT_FORM,
    });


  /* ----------------------------------------------------------
   * TRANSFER ERRORS
   * ----------------------------------------------------------
   */

  const [transferErrors, setTransferErrors] =
    useState(
      createTransferErrors()
    );


  /* ----------------------------------------------------------
   * TRANSFER LOADING
   * ----------------------------------------------------------
   */

  const [transferLoading, setTransferLoading] =
    useState(false);


  /* ----------------------------------------------------------
   * TRANSFER ERROR
   * ----------------------------------------------------------
   */

  const [transferError, setTransferError] =
    useState(null);


  /* ----------------------------------------------------------
   * OPEN TRANSFER PATIENT
   *
   * Called from:
   *
   * IPD Table
   *      ↓
   * Action Menu
   *      ↓
   * Transfer Patient
   *      ↓
   * openTransferPatient(patient)
   * ----------------------------------------------------------
   */

  const openTransferPatient =
    useCallback(
      (patient) => {

        if (!patient) {
          return;
        }

        setSelectedPatient(
          patient
        );

        setTransferStep(1);

        setTransferForm({
          ...DEFAULT_TRANSFER_PATIENT_FORM,
        });

        setTransferErrors(
          createTransferErrors()
        );

        setTransferError(null);

        setTransferLoading(false);
      },
      []
    );


  /* ----------------------------------------------------------
   * UPDATE COMPLETE TRANSFER FORM
   * ----------------------------------------------------------
   */

  const updateTransferForm =
    useCallback(
      (updates = {}) => {

        setTransferForm(
          (previousForm) => ({
            ...previousForm,
            ...updates,
          })
        );

        setTransferErrors(
          (previousErrors) => {

            const nextErrors = {
              ...previousErrors,
            };

            Object.keys(updates)
              .forEach((field) => {
                if (
                  nextErrors[field]
                ) {
                  nextErrors[field] = "";
                }
              });

            return nextErrors;
          }
        );
      },
      []
    );


  /* ----------------------------------------------------------
   * UPDATE SINGLE TRANSFER FIELD
   * ----------------------------------------------------------
   */

  const updateTransferField =
    useCallback(
      (field, value) => {

        if (!field) {
          return;
        }

        setTransferForm(
          (previousForm) => ({
            ...previousForm,
            [field]: value,
          })
        );

        setTransferErrors(
          (previousErrors) => ({
            ...previousErrors,
            [field]: "",
          })
        );

        setTransferError(null);
      },
      []
    );


  /* ----------------------------------------------------------
   * VALIDATE TRANSFER STEP
   * ----------------------------------------------------------
   */

  const validateTransferStep =
    useCallback(
      (step = transferStep) => {

        const errors =
          createTransferErrors();

        /* ----------------------------------------------------
         * STEP 1
         * Patient Details
         *
         * Patient itself comes from table.
         * No additional form validation required.
         * ----------------------------------------------------
         */

        if (step === 1) {
          setTransferErrors(errors);

          return true;
        }


        /* ----------------------------------------------------
         * STEP 2
         * Transfer Destination
         * ----------------------------------------------------
         */

        if (step === 2) {

          if (
            transferForm.transferType ===
            "withinHospital"
          ) {

            if (
              !transferForm.targetWardId
            ) {
              errors.targetWardId =
                "Ward is required.";
            }

            if (
              !transferForm.targetRoomId
            ) {
              errors.targetRoomId =
                "Room is required.";
            }

            if (
              !transferForm.targetBedId
            ) {
              errors.targetBedId =
                "Bed is required.";
            }

          }


          if (
            transferForm.transferType ===
            "anotherHospital"
          ) {

            if (
              !transferForm.receivingHospitalId
            ) {
              errors.receivingHospitalId =
                "Hospital is required.";
            }

            if (
              !transferForm.receivingDepartmentId
            ) {
              errors.receivingDepartmentId =
                "Department is required.";
            }

            if (
              !transferForm.transferMode
            ) {
              errors.transferMode =
                "Transfer mode is required.";
            }

            if (
              !transferForm.expectedDate
            ) {
              errors.expectedDate =
                "Expected date is required.";
            }

            if (
              !transferForm.expectedTime
            ) {
              errors.expectedTime =
                "Expected time is required.";
            }

            if (
              !transferForm.reason?.trim()
            ) {
              errors.reason =
                "Reason is required.";
            }
          }
        }


        /* ----------------------------------------------------
         * STEP 3
         * Transfer Information
         * ----------------------------------------------------
         */

        if (step === 3) {

          if (
            !transferForm.reason?.trim()
          ) {
            errors.reason =
              "Reason is required.";
          }

          if (
            !transferForm.transferDate
          ) {
            errors.transferDate =
              "Transfer date is required.";
          }

          if (
            !transferForm.transferTime
          ) {
            errors.transferTime =
              "Transfer time is required.";
          }

          if (
            !transferForm.requestedBy
          ) {
            errors.requestedBy =
              "Requesting doctor is required.";
          }
        }


        setTransferErrors(errors);

        return !Object.values(
          errors
        ).some(Boolean);

      },
      [
        transferForm,
        transferStep,
      ]
    );


  /* ----------------------------------------------------------
   * NEXT TRANSFER STEP
   * ----------------------------------------------------------
   */

  const nextTransferStep =
    useCallback(() => {

      const isValid =
        validateTransferStep(
          transferStep
        );

      if (!isValid) {
        return false;
      }

      const maxStep =
        TRANSFER_PATIENT_STEPS.length;

      setTransferStep(
        (currentStep) =>
          Math.min(
            currentStep + 1,
            maxStep
          )
      );

      return true;

    }, [
      transferStep,
      validateTransferStep,
    ]);


  /* ----------------------------------------------------------
   * PREVIOUS TRANSFER STEP
   * ----------------------------------------------------------
   */

  const previousTransferStep =
    useCallback(() => {

      setTransferStep(
        (currentStep) =>
          Math.max(
            currentStep - 1,
            1
          )
      );

      setTransferErrors(
        createTransferErrors()
      );

    }, []);


  /* ----------------------------------------------------------
   * SUBMIT PATIENT TRANSFER
   *
   * Backend integration will be added here later.
   * For now the complete payload is prepared.
   * ----------------------------------------------------------
   */

  const submitPatientTransfer =
    useCallback(
      async () => {

        if (!selectedPatient) {
          return {
            success: false,
            error: "No patient selected.",
          };
        }

        const isValid =
          validateTransferStep(
            transferStep
          );

        if (!isValid) {
          return {
            success: false,
            error: "Please complete the required fields.",
          };
        }

        setTransferLoading(true);
        setTransferError(null);

        try {

          const payload = {
            patient: selectedPatient,

            transfer: {
              ...transferForm,
            },
          };


          /*
           * --------------------------------------------------
           * BACKEND/API CALL WILL BE ADDED HERE
           * --------------------------------------------------
           *
           * Example future:
           *
           * await createIPDTransfer(payload);
           *
           * --------------------------------------------------
           */

          return {
            success: true,
            payload,
          };

        } catch (submitError) {

          setTransferError(
            submitError
          );

          return {
            success: false,
            error: submitError,
          };

        } finally {

          setTransferLoading(false);

        }

      },
      [
        selectedPatient,
        transferForm,
        transferStep,
        validateTransferStep,
      ]
    );


  /* ----------------------------------------------------------
   * RESET PATIENT TRANSFER
   * ----------------------------------------------------------
   */

  const resetTransferPatient =
    useCallback(
      () => {

        setSelectedPatient(null);

        setTransferStep(1);

        setTransferForm({
          ...DEFAULT_TRANSFER_PATIENT_FORM,
        });

        setTransferErrors(
          createTransferErrors()
        );

        setTransferLoading(false);

        setTransferError(null);

      },
      []
    );


  /* ==========================================================
   * RETURN
   * ==========================================================
   */

  return {

    /* --------------------------------------------------------
     * TRANSFER HISTORY DATA
     * --------------------------------------------------------
     */

    transfers,

    filteredTransfers,

    selectedTransfer,


    /* --------------------------------------------------------
     * TRANSFER HISTORY FILTERS
     * --------------------------------------------------------
     */

    filters,

    appliedFilters,

    activeFilterCount,

    hasPendingChanges,


    /* --------------------------------------------------------
     * TRANSFER HISTORY COUNTS
     * --------------------------------------------------------
     */

    totalTransfers,

    totalFilteredTransfers,

    completedTransfers,

    pendingTransfers,

    cancelledTransfers,

    transferStatusCounts,

    filteredTransferStatusCounts,

    transferSummary,


    /* --------------------------------------------------------
     * TRANSFER HISTORY STATE
     * --------------------------------------------------------
     */

    loading,

    error,

    detailsLoading,


    /* --------------------------------------------------------
     * TRANSFER HISTORY ACTIONS
     * --------------------------------------------------------
     */

    fetchTransfers,

    findTransferById,


    /* --------------------------------------------------------
     * TRANSFER HISTORY FILTER ACTIONS
     * --------------------------------------------------------
     */

    updateFilter,

    updateFilters,

    applyFilters,

    clearFilters,


    /* --------------------------------------------------------
     * TRANSFER HISTORY SELECTION
     * --------------------------------------------------------
     */

    selectTransfer,

    clearSelectedTransfer,


    /* --------------------------------------------------------
     * TRANSFER HISTORY LOOKUPS
     * --------------------------------------------------------
     */

    getTransfersByPatientId,

    getTransfersByIPDNumber,


    /* ========================================================
     * PATIENT TRANSFER WORKFLOW
     * ========================================================
     */

    /* --------------------------------------------------------
     * Selected Patient
     * --------------------------------------------------------
     */

    selectedPatient,


    /* --------------------------------------------------------
     * Current Step
     * --------------------------------------------------------
     */

    transferStep,


    /* --------------------------------------------------------
     * Form
     * --------------------------------------------------------
     */

    transferForm,


    /* --------------------------------------------------------
     * Validation Errors
     * --------------------------------------------------------
     */

    transferErrors,


    /* --------------------------------------------------------
     * Transfer Loading
     * --------------------------------------------------------
     */

    transferLoading,


    /* --------------------------------------------------------
     * Transfer Error
     * --------------------------------------------------------
     */

    transferError,


    /* --------------------------------------------------------
     * Patient Transfer Actions
     * --------------------------------------------------------
     */

    openTransferPatient,

    updateTransferForm,

    updateTransferField,

    validateTransferStep,

    nextTransferStep,

    previousTransferStep,

    submitPatientTransfer,

    resetTransferPatient,
  };
};


export default useIPDTransfers;