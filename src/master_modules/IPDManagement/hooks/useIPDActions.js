// src/features/IPDManagement/hooks/useIPDActions.js

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  IPD_ACTIONS,
} from "../config/ipdConfig";

import {
  getIPDPatientById,
} from "../services/ipdService";


/**
 * ============================================================
 * useIPDActions
 * ============================================================
 *
 * Central action controller for IPD Management.
 *
 * Responsibilities:
 *
 * - View patient profile
 * - Edit admission
 * - Transfer patient
 * - Discharge patient
 * - Cancel admission
 * - Header actions
 * - Track selected patient
 * - Track currently active action
 *
 * ============================================================
 */

const INITIAL_ACTION_STATE = {
  type: null,
  patient: null,
};


const useIPDActions = () => {

  /* ==========================================================
   * NAVIGATION
   * ==========================================================
   */

  const navigate = useNavigate();


  /* ==========================================================
   * SELECTED PATIENT
   * ==========================================================
   */

  const [selectedPatient, setSelectedPatient] =
    useState(null);


  /* ==========================================================
   * ACTIVE ACTION
   * ==========================================================
   */

  const [activeAction, setActiveAction] =
    useState(INITIAL_ACTION_STATE);


  /* ==========================================================
   * ACTION LOADING
   * ==========================================================
   */

  const [actionLoading, setActionLoading] =
    useState(false);


  /* ==========================================================
   * ACTION ERROR
   * ==========================================================
   */

  const [actionError, setActionError] =
    useState(null);


  /* ==========================================================
   * RESET ACTION STATE
   * ==========================================================
   */

  const resetActionState = useCallback(() => {
    setSelectedPatient(null);

    setActiveAction(
      INITIAL_ACTION_STATE
    );

    setActionError(null);

    setActionLoading(false);
  }, []);


  /* ==========================================================
   * SET ACTION
   * ==========================================================
   */

  const setAction = useCallback(
    (actionType, patient = null) => {
      setSelectedPatient(patient);

      setActiveAction({
        type: actionType,
        patient,
      });

      setActionError(null);
    },
    []
  );


  /* ==========================================================
   * VIEW PROFILE
   * ==========================================================
   */

  const handleViewProfile = useCallback(
    async (patient) => {
      if (!patient?.id) {
        return null;
      }

      setActionLoading(true);
      setActionError(null);

      try {
        const profile =
          await getIPDPatientById(
            patient.id
          );

        setSelectedPatient(profile);

        setActiveAction({
          type: IPD_ACTIONS.VIEW_PROFILE,
          patient: profile,
        });

        return profile;
      } catch (error) {
        setActionError(error);

        return null;
      } finally {
        setActionLoading(false);
      }
    },
    []
  );


  /* ==========================================================
   * EDIT ADMISSION
   * ==========================================================
   */

  const handleEditAdmission = useCallback(
    (patient) => {
      if (!patient) {
        return;
      }

      setAction({
        type: IPD_ACTIONS.EDIT_ADMISSION,
        patient,
      });
    },
    [setAction]
  );


  /* ==========================================================
   * TRANSFER PATIENT
   * ==========================================================
   */

  const handleTransferPatient = useCallback(
    (patient) => {
      if (!patient) {
        return;
      }

      setAction({
        type: IPD_ACTIONS.TRANSFER_PATIENT,
        patient,
      });
    },
    [setAction]
  );


  /* ==========================================================
   * DISCHARGE PATIENT
   * ==========================================================
   */

  const handleDischargePatient = useCallback(
    (patient) => {
      if (!patient) {
        return;
      }

      setAction({
        type: IPD_ACTIONS.DISCHARGE_PATIENT,
        patient,
      });
    },
    [setAction]
  );


  /* ==========================================================
   * CANCEL ADMISSION
   * ==========================================================
   */

  const handleCancelAdmission = useCallback(
    (patient) => {
      if (!patient) {
        return;
      }

      setAction({
        type: IPD_ACTIONS.CANCEL_ADMISSION,
        patient,
      });
    },
    [setAction]
  );


  /* ==========================================================
   * BED VIEW
   * ==========================================================
   */

  const handleBedView = useCallback(() => {

    navigate("/ipd-management/bed-view");

  }, [navigate]);


  /* ==========================================================
   * ADMIT PATIENT
   * ==========================================================
   */

  const handleAdmitPatient = useCallback(() => {
    setAction(
      IPD_ACTIONS.ADMIT_PATIENT,
      null
    );
  }, [setAction]);


  /* ==========================================================
   * HEADER TRANSFER
   * ==========================================================
   */

  const handleHeaderTransferPatient =
    useCallback(() => {
      setAction(
        IPD_ACTIONS.TRANSFER_PATIENT,
        null
      );
    }, [setAction]);


  /* ==========================================================
   * HEADER DISCHARGE
   * ==========================================================
   */

  const handleHeaderDischargePatient =
    useCallback(() => {
      setAction(
        IPD_ACTIONS.DISCHARGE_PATIENT,
        null
      );
    }, [setAction]);


  /* ==========================================================
   * ACTION COMPLETION
   * ==========================================================
   */

  const handleActionComplete = useCallback(() => {
    resetActionState();
  }, [resetActionState]);


  /* ==========================================================
   * ACTION CANCEL
   * ==========================================================
   */

  const handleActionCancel = useCallback(() => {
    resetActionState();
  }, [resetActionState]);


  /* ==========================================================
   * CHECK ACTIVE ACTION
   * ==========================================================
   */

  const isActionActive = useCallback(
    (actionType) => {
      return (
        activeAction.type === actionType
      );
    },
    [activeAction.type]
  );


  /* ==========================================================
   * CHECK PATIENT ACTION
   * ==========================================================
   */

  const isPatientActionActive =
    useCallback(
      (actionType, patientId) => {
        return (
          activeAction.type === actionType &&
          activeAction.patient?.id === patientId
        );
      },
      [activeAction]
    );


  /* ==========================================================
   * ACTION HANDLER MAP
   * ==========================================================
   */

  const actionHandlers = {
    [IPD_ACTIONS.VIEW_PROFILE]:
      handleViewProfile,

    [IPD_ACTIONS.EDIT_ADMISSION]:
      handleEditAdmission,

    [IPD_ACTIONS.TRANSFER_PATIENT]:
      handleTransferPatient,

    [IPD_ACTIONS.DISCHARGE_PATIENT]:
      handleDischargePatient,

    [IPD_ACTIONS.CANCEL_ADMISSION]:
      handleCancelAdmission,

    [IPD_ACTIONS.BED_VIEW]:
      handleBedView,

    [IPD_ACTIONS.ADMIT_PATIENT]:
      handleAdmitPatient,
  };


  /* ==========================================================
   * DISPATCH ACTION
   * ==========================================================
   */

  const dispatchAction = useCallback(
    (actionType, patient = null) => {
      const handler =
        actionHandlers[actionType];

      if (!handler) {
        return null;
      }

      return handler(patient);
    },
    [
      handleViewProfile,
      handleEditAdmission,
      handleTransferPatient,
      handleDischargePatient,
      handleCancelAdmission,
      handleBedView,
      handleAdmitPatient,
      actionHandlers,
    ]
  );


  /* ==========================================================
   * RETURN
   * ==========================================================
   */

  return {

    selectedPatient,

    activeAction,

    actionLoading,

    actionError,

    handleViewProfile,

    handleEditAdmission,

    handleTransferPatient,

    handleDischargePatient,

    handleCancelAdmission,

    handleBedView,

    handleAdmitPatient,

    handleHeaderTransferPatient,

    handleHeaderDischargePatient,

    handleActionComplete,

    handleActionCancel,

    resetActionState,

    setAction,

    isActionActive,

    isPatientActionActive,

    dispatchAction,
  };
};


export default useIPDActions;