// src/features/IPDManagement/hooks/useIPDPatients.js

import { useCallback, useEffect, useState } from "react";

import {
  getIPDPatients,
  getIPDPatientById,
  getIPDPatientByIPDNumber,
} from "../services/ipdService";


/**
 * ============================================================
 * useIPDPatients
 * ============================================================
 *
 * Responsible for:
 *
 * - Loading admitted IPD patients
 * - Maintaining patient loading state
 * - Maintaining patient error state
 * - Refetching patient data
 * - Finding a patient by ID
 * - Finding a patient by IPD number
 *
 * Filtering:
 *     useIPDFilters.js
 *
 * Pagination:
 *     useIPDPagination.js
 *
 * Data source:
 *     ipdService.js
 *
 * Current:
 *     ipdService -> mock
 *
 * Future:
 *     ipdService -> API
 * ============================================================
 */

const useIPDPatients = () => {
  /* ==========================================================
   * STATE
   * ==========================================================
   */

  const [patients, setPatients] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);


  /* ==========================================================
   * FETCH PATIENTS
   * ==========================================================
   */

  const fetchPatients = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getIPDPatients();

      /**
       * Service should return an array.
       *
       * The fallback prevents the table from breaking if an
       * unexpected empty/null response is received.
       */
      setPatients(Array.isArray(response) ? response : []);
    } catch (fetchError) {
      setPatients([]);
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
    fetchPatients();
  }, [fetchPatients]);


  /* ==========================================================
   * FIND PATIENT BY ID
   * ==========================================================
   */

  const findPatientById = useCallback(async (patientId) => {
    if (!patientId) {
      return null;
    }

    try {
      return await getIPDPatientById(patientId);
    } catch (fetchError) {
      setError(fetchError);
      return null;
    }
  }, []);


  /* ==========================================================
   * FIND PATIENT BY IPD NUMBER
   * ==========================================================
   */

  const findPatientByIPDNumber = useCallback(
    async (ipdNumber) => {
      if (!ipdNumber) {
        return null;
      }

      try {
        return await getIPDPatientByIPDNumber(ipdNumber);
      } catch (fetchError) {
        setError(fetchError);
        return null;
      }
    },
    []
  );


  /* ==========================================================
   * LOCAL PATIENT LOOKUP
   * ==========================================================
   *
   * These helpers use already-loaded patient data.
   * No additional service request is required.
   * ==========================================================
   */

  const getPatientFromList = useCallback(
    (patientId) => {
      if (!patientId) {
        return null;
      }

      return (
        patients.find(
          (patient) => patient.id === patientId
        ) || null
      );
    },
    [patients]
  );


  const getPatientFromListByIPDNumber = useCallback(
    (ipdNumber) => {
      if (!ipdNumber) {
        return null;
      }

      return (
        patients.find(
          (patient) => patient.ipdNumber === ipdNumber
        ) || null
      );
    },
    [patients]
  );


  /* ==========================================================
   * RETURN API
   * ==========================================================
   */

  return {
    /* Data */
    patients,

    /* State */
    loading,
    error,

    /* Actions */
    fetchPatients,
    findPatientById,
    findPatientByIPDNumber,

    /* Local lookup */
    getPatientFromList,
    getPatientFromListByIPDNumber,
  };
};


export default useIPDPatients;