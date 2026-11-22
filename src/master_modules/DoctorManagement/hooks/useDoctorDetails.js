import {
  useCallback,
  useEffect,
  useState,
} from "react";

import doctorService from "../services/doctorService";

/**
 * useDoctorDetails
 *
 * Centralized data/state management for a single doctor.
 *
 * Responsibilities:
 * - Fetch doctor details
 * - Manage loading state
 * - Manage error state
 * - Fetch schedule
 * - Fetch documents
 * - Fetch activity
 * - Refresh doctor details
 * - Handle selected doctor ID changes
 */

const useDoctorDetails = (doctorId = null, options = {}) => {
  // ==========================================================
  // OPTIONS
  // ==========================================================

  const {
    autoFetch = true,
    includeSchedule = true,
    includeDocuments = true,
    includeActivity = true,
  } = options;

  // ==========================================================
  // STATE
  // ==========================================================

  const [doctor, setDoctor] = useState(null);

  const [schedule, setSchedule] = useState([]);

  const [documents, setDocuments] = useState([]);

  const [activity, setActivity] = useState([]);

  const [loading, setLoading] = useState(false);

  const [scheduleLoading, setScheduleLoading] =
    useState(false);

  const [documentsLoading, setDocumentsLoading] =
    useState(false);

  const [activityLoading, setActivityLoading] =
    useState(false);

  const [error, setError] = useState(null);

  const [scheduleError, setScheduleError] =
    useState(null);

  const [documentsError, setDocumentsError] =
    useState(null);

  const [activityError, setActivityError] =
    useState(null);

  // ==========================================================
  // FETCH DOCTOR
  // ==========================================================

  const fetchDoctor = useCallback(async () => {
    if (!doctorId) {
      setDoctor(null);
      setError(null);
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response =
        await doctorService.getDoctorById(
          doctorId
        );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to fetch doctor details."
        );
      }

      setDoctor(response.data);

      return response.data;
    } catch (err) {
      const message =
        err?.message ||
        "Something went wrong while fetching doctor details.";

      setDoctor(null);
      setError(message);

      return null;
    } finally {
      setLoading(false);
    }
  }, [doctorId]);

  // ==========================================================
  // FETCH SCHEDULE
  // ==========================================================

  const fetchSchedule = useCallback(async () => {
    if (!doctorId) {
      setSchedule([]);
      return [];
    }

    setScheduleLoading(true);
    setScheduleError(null);

    try {
      const response =
        await doctorService.getDoctorSchedule(
          doctorId
        );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to fetch doctor schedule."
        );
      }

      setSchedule(response.data || []);

      return response.data || [];
    } catch (err) {
      const message =
        err?.message ||
        "Something went wrong while fetching doctor schedule.";

      setSchedule([]);
      setScheduleError(message);

      return [];
    } finally {
      setScheduleLoading(false);
    }
  }, [doctorId]);

  // ==========================================================
  // FETCH DOCUMENTS
  // ==========================================================

  const fetchDocuments = useCallback(async () => {
    if (!doctorId) {
      setDocuments([]);
      return [];
    }

    setDocumentsLoading(true);
    setDocumentsError(null);

    try {
      const response =
        await doctorService.getDoctorDocuments(
          doctorId
        );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to fetch doctor documents."
        );
      }

      setDocuments(response.data || []);

      return response.data || [];
    } catch (err) {
      const message =
        err?.message ||
        "Something went wrong while fetching doctor documents.";

      setDocuments([]);
      setDocumentsError(message);

      return [];
    } finally {
      setDocumentsLoading(false);
    }
  }, [doctorId]);

  // ==========================================================
  // FETCH ACTIVITY
  // ==========================================================

  const fetchActivity = useCallback(async () => {
    if (!doctorId) {
      setActivity([]);
      return [];
    }

    setActivityLoading(true);
    setActivityError(null);

    try {
      const response =
        await doctorService.getDoctorActivity(
          doctorId
        );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to fetch doctor activity."
        );
      }

      setActivity(response.data || []);

      return response.data || [];
    } catch (err) {
      const message =
        err?.message ||
        "Something went wrong while fetching doctor activity.";

      setActivity([]);
      setActivityError(message);

      return [];
    } finally {
      setActivityLoading(false);
    }
  }, [doctorId]);

  // ==========================================================
  // FETCH ALL DETAILS
  // ==========================================================

  const fetchAllDetails = useCallback(async () => {
    if (!doctorId) {
      setDoctor(null);
      setSchedule([]);
      setDocuments([]);
      setActivity([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const doctorResponse =
        await doctorService.getDoctorById(
          doctorId
        );

      if (!doctorResponse?.success) {
        throw new Error(
          doctorResponse?.message ||
            "Unable to fetch doctor details."
        );
      }

      setDoctor(doctorResponse.data);

      // ------------------------------------------------------
      // Related data
      // ------------------------------------------------------

      const requests = [];

      if (includeSchedule) {
        requests.push(
          fetchSchedule()
        );
      }

      if (includeDocuments) {
        requests.push(
          fetchDocuments()
        );
      }

      if (includeActivity) {
        requests.push(
          fetchActivity()
        );
      }

      await Promise.all(requests);
    } catch (err) {
      const message =
        err?.message ||
        "Something went wrong while fetching doctor details.";

      setError(message);
    } finally {
      setLoading(false);
    }
  }, [
    doctorId,
    includeSchedule,
    includeDocuments,
    includeActivity,
    fetchSchedule,
    fetchDocuments,
    fetchActivity,
  ]);

  // ==========================================================
  // REFRESH
  // ==========================================================

  const refreshDoctor = useCallback(async () => {
    await fetchAllDetails();
  }, [fetchAllDetails]);

  // ==========================================================
  // CLEAR DETAILS
  // ==========================================================

  const clearDoctorDetails = useCallback(() => {
    setDoctor(null);
    setSchedule([]);
    setDocuments([]);
    setActivity([]);

    setError(null);
    setScheduleError(null);
    setDocumentsError(null);
    setActivityError(null);
  }, []);

  // ==========================================================
  // AUTO FETCH
  // ==========================================================

  useEffect(() => {
    if (!autoFetch) {
      return;
    }

    fetchAllDetails();
  }, [
    autoFetch,
    fetchAllDetails,
  ]);

  // ==========================================================
  // DERIVED STATES
  // ==========================================================

  const hasDoctor = Boolean(doctor);

  const hasSchedule =
    schedule.length > 0;

  const hasDocuments =
    documents.length > 0;

  const hasActivity =
    activity.length > 0;

  const isLoading =
    loading ||
    scheduleLoading ||
    documentsLoading ||
    activityLoading;

  const hasError =
    Boolean(error) ||
    Boolean(scheduleError) ||
    Boolean(documentsError) ||
    Boolean(activityError);

  // ==========================================================
  // RETURN
  // ==========================================================

  return {
    // --------------------------------------------------------
    // Doctor
    // --------------------------------------------------------

    doctor,
    setDoctor,

    hasDoctor,

    // --------------------------------------------------------
    // Schedule
    // --------------------------------------------------------

    schedule,
    setSchedule,

    hasSchedule,

    // --------------------------------------------------------
    // Documents
    // --------------------------------------------------------

    documents,
    setDocuments,

    hasDocuments,

    // --------------------------------------------------------
    // Activity
    // --------------------------------------------------------

    activity,
    setActivity,

    hasActivity,

    // --------------------------------------------------------
    // Loading
    // --------------------------------------------------------

    loading,
    scheduleLoading,
    documentsLoading,
    activityLoading,

    isLoading,

    // --------------------------------------------------------
    // Errors
    // --------------------------------------------------------

    error,
    scheduleError,
    documentsError,
    activityError,

    hasError,

    // --------------------------------------------------------
    // Actions
    // --------------------------------------------------------

    fetchDoctor,
    fetchSchedule,
    fetchDocuments,
    fetchActivity,
    fetchAllDetails,

    refreshDoctor,
    clearDoctorDetails,
  };
};

export default useDoctorDetails;