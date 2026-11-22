import { useCallback, useState } from "react";

import doctorService from "../services/doctorService";
import {
  DOCTOR_ACTIONS,
  DOCTOR_AVAILABILITY,
  DOCTOR_STATUSES,
} from "../config/doctorConfig";

/**
 * useDoctorActions
 *
 * Centralized action/state management for Doctor Management.
 *
 * Responsibilities:
 * - View doctor
 * - Edit doctor
 * - Delete doctor
 * - Change doctor status
 * - Change doctor availability
 * - View schedule
 * - Book appointment
 * - Action loading/error/success states
 * - Selected doctor/action state
 */

const useDoctorActions = (options = {}) => {
  // ==========================================================
  // OPTIONS
  // ==========================================================

  const {
    onView,
    onEdit,
    onSchedule,
    onBookAppointment,
    onDelete,
    onStatusChange,
    onAvailabilityChange,
  } = options;

  // ==========================================================
  // STATE
  // ==========================================================

  const [selectedDoctor, setSelectedDoctor] =
    useState(null);

  const [selectedAction, setSelectedAction] =
    useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [successMessage, setSuccessMessage] =
    useState(null);

  // ==========================================================
  // ACTION STATE
  // ==========================================================

  const [actionLoading, setActionLoading] =
    useState({});

  // ==========================================================
  // INTERNAL HELPERS
  // ==========================================================

  const getDoctorId = useCallback((doctor) => {
    if (!doctor) {
      return null;
    }

    return doctor.id || doctor.doctorId || null;
  }, []);

  const setActionState = useCallback(
    (action, value) => {
      setActionLoading((previous) => ({
        ...previous,
        [action]: value,
      }));
    },
    []
  );

  const clearMessages = useCallback(() => {
    setError(null);
    setSuccessMessage(null);
  }, []);

  // ==========================================================
  // SELECT DOCTOR
  // ==========================================================

  const selectDoctor = useCallback(
    (doctor, action = null) => {
      setSelectedDoctor(doctor || null);
      setSelectedAction(action || null);

      clearMessages();
    },
    [clearMessages]
  );

  // ==========================================================
  // CLEAR SELECTION
  // ==========================================================

  const clearSelection = useCallback(() => {
    setSelectedDoctor(null);
    setSelectedAction(null);
  }, []);

  // ==========================================================
  // VIEW DOCTOR
  // ==========================================================

  const viewDoctor = useCallback(
    (doctor) => {
      if (!doctor) {
        return;
      }

      selectDoctor(
        doctor,
        DOCTOR_ACTIONS.VIEW
      );

      if (typeof onView === "function") {
        onView(doctor);
      }

      return {
        action: DOCTOR_ACTIONS.VIEW,
        doctor,
      };
    },
    [onView, selectDoctor]
  );

  // ==========================================================
  // EDIT DOCTOR
  // ==========================================================

  const editDoctor = useCallback(
    (doctor) => {
      if (!doctor) {
        return;
      }

      selectDoctor(
        doctor,
        DOCTOR_ACTIONS.EDIT
      );

      if (typeof onEdit === "function") {
        onEdit(doctor);
      }

      return {
        action: DOCTOR_ACTIONS.EDIT,
        doctor,
      };
    },
    [onEdit, selectDoctor]
  );

  // ==========================================================
  // VIEW SCHEDULE
  // ==========================================================

  const viewSchedule = useCallback(
    async (doctor) => {
      if (!doctor) {
        return {
          success: false,
          data: [],
          message: "Doctor is required.",
        };
      }

      const doctorId = getDoctorId(doctor);

      if (!doctorId) {
        return {
          success: false,
          data: [],
          message: "Doctor ID is missing.",
        };
      }

      selectDoctor(
        doctor,
        DOCTOR_ACTIONS.SCHEDULE
      );

      setActionState(
        DOCTOR_ACTIONS.SCHEDULE,
        true
      );

      clearMessages();

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

        if (
          typeof onSchedule === "function"
        ) {
          onSchedule(
            doctor,
            response.data || []
          );
        }

        return response;
      } catch (err) {
        const message =
          err?.message ||
          "Unable to fetch doctor schedule.";

        setError(message);

        return {
          success: false,
          data: [],
          message,
        };
      } finally {
        setActionState(
          DOCTOR_ACTIONS.SCHEDULE,
          false
        );
      }
    },
    [
      clearMessages,
      getDoctorId,
      onSchedule,
      selectDoctor,
      setActionState,
    ]
  );

  // ==========================================================
  // BOOK APPOINTMENT
  // ==========================================================

  const bookAppointment = useCallback(
    async (doctor) => {
      if (!doctor) {
        return {
          success: false,
          data: null,
          message: "Doctor is required.",
        };
      }

      const doctorId = getDoctorId(doctor);

      if (!doctorId) {
        return {
          success: false,
          data: null,
          message: "Doctor ID is missing.",
        };
      }

      selectDoctor(
        doctor,
        DOCTOR_ACTIONS.BOOK_APPOINTMENT
      );

      setActionState(
        DOCTOR_ACTIONS.BOOK_APPOINTMENT,
        true
      );

      clearMessages();

      try {
        const response =
          await doctorService.bookDoctorAppointment(
            doctorId
          );

        if (!response?.success) {
          throw new Error(
            response?.message ||
              "Unable to initiate appointment booking."
          );
        }

        if (
          typeof onBookAppointment ===
          "function"
        ) {
          onBookAppointment(
            doctor,
            response.data
          );
        }

        setSuccessMessage(
          response.message ||
            "Appointment booking initiated."
        );

        return response;
      } catch (err) {
        const message =
          err?.message ||
          "Unable to initiate appointment booking.";

        setError(message);

        return {
          success: false,
          data: null,
          message,
        };
      } finally {
        setActionState(
          DOCTOR_ACTIONS.BOOK_APPOINTMENT,
          false
        );
      }
    },
    [
      clearMessages,
      getDoctorId,
      onBookAppointment,
      selectDoctor,
      setActionState,
    ]
  );

  // ==========================================================
  // DELETE DOCTOR
  // ==========================================================

  const deleteDoctor = useCallback(
    async (doctor) => {
      if (!doctor) {
        return {
          success: false,
          data: null,
          message: "Doctor is required.",
        };
      }

      const doctorId = getDoctorId(doctor);

      if (!doctorId) {
        return {
          success: false,
          data: null,
          message: "Doctor ID is missing.",
        };
      }

      selectDoctor(
        doctor,
        DOCTOR_ACTIONS.DELETE
      );

      setLoading(true);
      setActionState(
        DOCTOR_ACTIONS.DELETE,
        true
      );

      clearMessages();

      try {
        const response =
          await doctorService.deleteDoctor(
            doctorId
          );

        if (!response?.success) {
          throw new Error(
            response?.message ||
              "Unable to delete doctor."
          );
        }

        setSuccessMessage(
          response.message ||
            "Doctor deleted successfully."
        );

        if (
          typeof onDelete === "function"
        ) {
          onDelete(
            doctor,
            response.data
          );
        }

        clearSelection();

        return response;
      } catch (err) {
        const message =
          err?.message ||
          "Unable to delete doctor.";

        setError(message);

        return {
          success: false,
          data: null,
          message,
        };
      } finally {
        setLoading(false);

        setActionState(
          DOCTOR_ACTIONS.DELETE,
          false
        );
      }
    },
    [
      clearMessages,
      clearSelection,
      getDoctorId,
      onDelete,
      selectDoctor,
      setActionState,
    ]
  );

  // ==========================================================
  // CHANGE STATUS
  // ==========================================================

  const changeDoctorStatus = useCallback(
    async (doctor, status) => {
      if (!doctor) {
        return {
          success: false,
          data: null,
          message: "Doctor is required.",
        };
      }

      if (!status) {
        return {
          success: false,
          data: null,
          message: "Doctor status is required.",
        };
      }

      const validStatuses = Object.values(
        DOCTOR_STATUSES
      );

      if (!validStatuses.includes(status)) {
        return {
          success: false,
          data: null,
          message: "Invalid doctor status.",
        };
      }

      const doctorId = getDoctorId(doctor);

      if (!doctorId) {
        return {
          success: false,
          data: null,
          message: "Doctor ID is missing.",
        };
      }

      selectDoctor(
        doctor,
        DOCTOR_ACTIONS.CHANGE_STATUS
      );

      setActionState(
        DOCTOR_ACTIONS.CHANGE_STATUS,
        true
      );

      clearMessages();

      try {
        const response =
          await doctorService.updateDoctorStatus(
            doctorId,
            status
          );

        if (!response?.success) {
          throw new Error(
            response?.message ||
              "Unable to update doctor status."
          );
        }

        setSuccessMessage(
          response.message ||
            "Doctor status updated successfully."
        );

        if (
          typeof onStatusChange ===
          "function"
        ) {
          onStatusChange(
            doctor,
            status,
            response.data
          );
        }

        return response;
      } catch (err) {
        const message =
          err?.message ||
          "Unable to update doctor status.";

        setError(message);

        return {
          success: false,
          data: null,
          message,
        };
      } finally {
        setActionState(
          DOCTOR_ACTIONS.CHANGE_STATUS,
          false
        );
      }
    },
    [
      clearMessages,
      getDoctorId,
      onStatusChange,
      selectDoctor,
      setActionState,
    ]
  );

  // ==========================================================
  // CHANGE AVAILABILITY
  // ==========================================================

  const changeDoctorAvailability =
    useCallback(
      async (doctor, availability) => {
        if (!doctor) {
          return {
            success: false,
            data: null,
            message: "Doctor is required.",
          };
        }

        if (!availability) {
          return {
            success: false,
            data: null,
            message:
              "Doctor availability is required.",
          };
        }

        const validAvailability =
          Object.values(
            DOCTOR_AVAILABILITY
          );

        if (
          !validAvailability.includes(
            availability
          )
        ) {
          return {
            success: false,
            data: null,
            message:
              "Invalid doctor availability.",
          };
        }

        const doctorId =
          getDoctorId(doctor);

        if (!doctorId) {
          return {
            success: false,
            data: null,
            message:
              "Doctor ID is missing.",
          };
        }

        selectDoctor(
          doctor,
          DOCTOR_ACTIONS.CHANGE_STATUS
        );

        setActionState(
          "availability",
          true
        );

        clearMessages();

        try {
          const response =
            await doctorService.updateDoctorAvailability(
              doctorId,
              availability
            );

          if (!response?.success) {
            throw new Error(
              response?.message ||
                "Unable to update doctor availability."
            );
          }

          setSuccessMessage(
            response.message ||
              "Doctor availability updated successfully."
          );

          if (
            typeof onAvailabilityChange ===
            "function"
          ) {
            onAvailabilityChange(
              doctor,
              availability,
              response.data
            );
          }

          return response;
        } catch (err) {
          const message =
            err?.message ||
            "Unable to update doctor availability.";

          setError(message);

          return {
            success: false,
            data: null,
            message,
          };
        } finally {
          setActionState(
            "availability",
            false
          );
        }
      },
      [
        clearMessages,
        getDoctorId,
        onAvailabilityChange,
        selectDoctor,
        setActionState,
      ]
    );

  // ==========================================================
  // CHECK ACTION LOADING
  // ==========================================================

  const isActionLoading = useCallback(
    (action) => {
      return Boolean(
        actionLoading[action]
      );
    },
    [actionLoading]
  );

  // ==========================================================
  // RESET ACTION STATE
  // ==========================================================

  const resetActionState = useCallback(() => {
    setSelectedDoctor(null);
    setSelectedAction(null);

    setLoading(false);
    setError(null);
    setSuccessMessage(null);
    setActionLoading({});
  }, []);

  // ==========================================================
  // RETURN
  // ==========================================================

  return {
    // --------------------------------------------------------
    // Selected Doctor
    // --------------------------------------------------------

    selectedDoctor,
    selectedAction,

    // --------------------------------------------------------
    // Global State
    // --------------------------------------------------------

    loading,
    error,
    successMessage,

    // --------------------------------------------------------
    // Action Loading
    // --------------------------------------------------------

    actionLoading,
    isActionLoading,

    // --------------------------------------------------------
    // Selection
    // --------------------------------------------------------

    selectDoctor,
    clearSelection,

    // --------------------------------------------------------
    // Doctor Actions
    // --------------------------------------------------------

    viewDoctor,
    editDoctor,
    viewSchedule,
    bookAppointment,
    deleteDoctor,

    // --------------------------------------------------------
    // Status / Availability
    // --------------------------------------------------------

    changeDoctorStatus,
    changeDoctorAvailability,

    // --------------------------------------------------------
    // Messages
    // --------------------------------------------------------

    clearMessages,

    // --------------------------------------------------------
    // Reset
    // --------------------------------------------------------

    resetActionState,
  };
};

export default useDoctorActions;